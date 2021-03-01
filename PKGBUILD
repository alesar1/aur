# Maintainer: Anatol Pomozov

pkgname=booster-git
pkgver=0.3.r2.g1350d7a
pkgrel=1
pkgdesc='Fast and secure initramfs generator'
arch=(x86_64)
url='https://github.com/anatol/booster'
license=(MIT)
depends=(bash)
makedepends=(git go ruby-ronn-ng)
#checkdepends=(qemu-headless linux tang)
optdepends=('busybox: to enable emergency shell at the boot time')
backup=(etc/booster.yaml)
provides=(booster initramfs)
conflicts=(booster)
replaces=(booster)
source=(git+https://github.com/anatol/booster)
sha512sums=('SKIP')

pkgver() {
  cd booster
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd booster

  cd generator
  CGO_CPPFLAGS="${CPPFLAGS}" CGO_CFLAGS="${CFLAGS}" CGO_CXXFLAGS="${CXXFLAGS}" CGO_LDFLAGS="${LDFLAGS}" \
    go build -trimpath \
      -buildmode=pie \
      -mod=readonly \
      -modcacherw \
      -ldflags "-linkmode external -extldflags \"${LDFLAGS}\""

  cd ../init
  CGO_ENABLED=0 go build -trimpath -mod=readonly -modcacherw

  cd ..
  ronn docs/manpage.md
}

check() {
  cd booster/tests
  # arch chroot does not allow access to KVM
  # TEST_DISABLE_KVM=1 go test -v # integration tests require a lot of time and space to build 10G images
}

package() {
  cd booster
  install -Dp -m755 generator/booster "$pkgdir/usr/bin/booster"
  install -Dp -m644 docs/manpage.1 "$pkgdir/usr/share/man/man1/booster.1"
  install -Dp -m755 init/init "$pkgdir/usr/lib/booster/init"
  install -Dp -m644 packaging/arch/90-booster.hook "$pkgdir/usr/share/libalpm/hooks/90-booster.hook"
  install -Dp -m755 packaging/arch/booster-install "$pkgdir/usr/share/libalpm/scripts/booster-install"
}
