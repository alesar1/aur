# Maintainer: Alexander F. Rødseth <xyproto@archlinux.org>

pkgname=k3s-git
pkgver=r1.7d1baa9
pkgrel=2
pkgdesc='Lightweight Kubernetes'
arch=(x86_64)
url='https://github.com/rancher/k3s'
license=(APACHE)
makedepends=(docker git go)

pkgver() {
  cd $pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  git clone --depth=1 "git://github.com/rancher/k3s" $pkgname 2>/dev/null || (cd $pkgname; git fetch origin; git reset --hard origin/master)
}

build() {
  make -C $pkgname
}

package() {
  DESTDIR="$pkgdir" make -C $pkgname install
  install -Dm644 $pkgname/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim: ts=2 sw=2 et:
