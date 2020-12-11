# Maintainer: Anatol Pomozov

pkgname=booster-git
pkgver=r1.58ee91b
pkgrel=1
pkgdesc='Fast and secure initramfs generator'
arch=(x86_64)
url='http://github.com/anatol/booster'
license=(MIT)
depends=(bash)
makedepends=(git go)
#checkdepends=(qemu-headless linux)
source=(git+https://github.com/anatol/booster#branch=develop)
sha512sums=('SKIP')

pkgver() {
  cd booster
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd $srcdir/booster/generator
  CGO_CPPFLAGS="${CPPFLAGS}" CGO_CFLAGS="${CFLAGS}" CGO_CXXFLAGS="${CXXFLAGS}" CGO_LDFLAGS="${LDFLAGS}" \
    go build -trimpath \
      -buildmode=pie \
      -mod=readonly \
      -modcacherw \
      -ldflags "-linkmode external -extldflags \"${LDFLAGS}\""

  cd $srcdir/booster/init
  CGO_ENABLED=0 go build -trimpath -mod=readonly -modcacherw
}

check() {
  cd $srcdir/booster/tests
  # go test -v this requires access to KVM that is not available in Arch chroot env
}

package() {
  cd booster
  install -Dp -m755 generator/booster "$pkgdir/usr/bin/booster"
  install -Dp -m755 init/init "$pkgdir/usr/lib/booster/init"
  install -Dp -m644 packaging/arch/90-booster.hook "$pkgdir/usr/share/libalpm/hooks/90-booster.hook"
  install -Dp -m755 packaging/arch/booster-install "$pkgdir/usr/share/libalpm/scripts/booster-install"
}
