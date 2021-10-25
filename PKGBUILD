# Maintainer: Jan Alexander Steffens (heftig) <heftig@archlinux.org>

pkgname=watchman-bin
pkgver=2021.10.18.00
pkgrel=1
pkgdesc="An inotify-based file watching and job triggering command line utility"
url="https://facebook.github.io/watchman/"
arch=(x86_64)
license=(MIT)
depends=(openssl gcc-libs)
makedepends=(patchelf python)
provides=("watchman=$pkgver")
conflicts=(watchman)
options=(!strip)
install=watchman.install

# https://github.com/facebook/watchman/releases
source=("https://github.com/facebook/watchman/releases/download/v$pkgver/watchman-v$pkgver-linux.zip")
sha256sums=('7d9ada98cbaf16f1ba6d46af8ea72e6fae24186efd35a5d9c0dcdcd910d83c5c')

prepare() {
  cd watchman-v$pkgver-linux

  python <<END
from pathlib import Path

data = Path("bin/watchman").read_bytes()

badpath  = b"/usr/local/var/run/watchman\\x00"
goodpath = b"/run/./././././././watchman\\x00"

goodpath = goodpath.ljust(len(badpath), b"\\x00")
data = data.replace(badpath, goodpath)

Path("bin/watchman").write_bytes(data)
END

  patchelf \
    --replace-needed /usr/local/lib/libgflags.so.2.2 libgflags.so.2.2 \
    --replace-needed /usr/local/lib/libglog.so.0 libglog.so.0 \
    --replace-needed /usr/local/lib/libsnappy.so.1 libsnappy.so.1 \
    --replace-needed /usr/local/lib/libzstd.so.1 libzstd.so.1 \
    bin/* lib/*

  patchelf --set-rpath /usr/lib/watchman bin/* lib/*
}

package() {
  cd watchman-v$pkgver-linux

  install -Dt "$pkgdir/usr/bin" bin/*
  install -Dt "$pkgdir/usr/lib/watchman" lib/*

  install -Dm644 /dev/stdin "$pkgdir/usr/lib/tmpfiles.d/watchman.conf" <<END
d /run/watchman 1777 root root
END

  echo '{}' | install -Dm644 /dev/stdin "$pkgdir/etc/watchman.json.default"

  install -Dm644 /dev/stdin "$pkgdir/usr/lib/systemd/user/watchman.socket" <<END
[Unit]
Description=File watching service socket
Documentation=$url

[Socket]
ListenStream=/run/watchman/%u-state/sock
SocketMode=0600
DirectoryMode=0700

[Install]
WantedBy=sockets.target
END

  install -Dm644 /dev/stdin "$pkgdir/usr/lib/systemd/user/watchman.service" <<END
[Unit]
Description=File watching service
Documentation=$url
Requires=watchman.socket

[Service]
ExecStart=/usr/bin/watchman --foreground --inetd --logfile=/
StandardInput=socket
StandardOutput=journal
StandardError=inherit

[Install]
WantedBy=default.target
END
}

# vim:set sw=2 et:
