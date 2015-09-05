# Maintainer: Mahmud Ridwan <m[at]hjr265[dot]me>
pkgname=loadcat
pkgver=0.1_alpha.1
pkgrel=1
pkgdesc='Nginx configurator for easy load balancer setup'
url='https://github.com/hjr265/loadcat'
arch=(
  'x86_64'
)
license=(
  'BSD-3-Clause'
)
makedepends=(
  'nginx'
)
makedepends=(
  'go'
)
backup=(
  'etc/loadcat.conf'
)
source=(
  'loadcat.conf'
  'loadcat.service'
)
md5sums=(
  '645e9911f3b091de995ef6139982597d'
  'a155844c315229ac22b125d31af82f23'
)

build() {
  mkdir -p "$srcdir"/src/github.com/hjr265
  git clone https://github.com/hjr265/loadcat.git "$srcdir"/src/github.com/hjr265/loadcat
  GOPATH="$srcdir" go get -v github.com/hjr265/loadcat/...
}

package() {
  install -m755 -d "$pkgdir/etc"
  install -m755 -d "$pkgdir/etc/nginx/loadcat"
  install -m755 -d "$pkgdir/usr/bin"
  install -m755 -d "$pkgdir/usr/lib/systemd/system"
  install -m755 -d "$pkgdir/usr/share/loadcat/ui/templates"
  install -m755 -d "$pkgdir/var/lib/loadcat"

  install -m644 "$srcdir/src/github.com/hjr265/loadcat/ui/templates/"* "$pkgdir/usr/share/loadcat/ui/templates/"
  install -m644 loadcat.conf "$pkgdir/etc/loadcat.conf"
  install -m644 loadcat.service "$pkgdir/usr/lib/systemd/system"
  install -m755 "$srcdir/bin/loadcatd" "$pkgdir/usr/bin/loadcatd"

  ln -s "/usr/share/loadcat/ui" "$pkgdir/var/lib/loadcat/ui"
}
