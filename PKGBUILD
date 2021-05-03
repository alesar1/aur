# Maintainer: Morgan <morganamilo@archlinux.org>
pkgname=paru
pkgver=1.6.0
pkgrel=1
pkgdesc='Feature packed AUR helper'
url='https://github.com/morganamilo/paru'
source=("$pkgname-$pkgver.tar.gz::https://github.com/Morganamilo/paru/archive/v$pkgver.tar.gz")
backup=("etc/paru.conf")
arch=('i686' 'pentium4' 'x86_64' 'arm' 'armv7h' 'armv6h' 'aarch64')
license=('GPL3')
makedepends=('cargo')
depends=('git' 'pacman')
optdepends=('asp: downloading repo pkgbuilds' 'bat: colored pkgbuild printing' 'devtools: build in chroot')
sha256sums=('0a3e0096fb06c7f88539849d66d7e7076d8ac08c7befbec0d57489981ac05241')

build () {
  cd "$srcdir/$pkgname-$pkgver"

  if pacman -T pacman-git > /dev/null || pacman -T 'pacman>6.0.0alpha' > /dev/null; then
    _features+="git,"
  fi

  if [[ $(rustc -V) == *"nightly"* ]]; then
    _features+="backtrace,"
  fi

  if [[ $CARCH != x86_64 ]]; then
    export CARGO_PROFILE_RELEASE_LTO=off
  fi

  cargo build --locked --features "${_features:-}" --release --target-dir target
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -Dm755 target/release/paru "${pkgdir}/usr/bin/paru"
  install -Dm644 paru.conf "${pkgdir}/etc/paru.conf"

  install -Dm644 man/paru.8 "$pkgdir/usr/share/man/man8/paru.8"
  install -Dm644 man/paru.conf.5 "$pkgdir/usr/share/man/man5/paru.conf.5"

  install -Dm644 completions/bash "${pkgdir}/usr/share/bash-completion/completions/paru.bash"
  install -Dm644 completions/fish "${pkgdir}/usr/share/fish/vendor_completions.d/paru.fish"
  install -Dm644 completions/zsh "${pkgdir}/usr/share/zsh/site-functions/_paru"
}
