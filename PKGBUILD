# Maintainer: VHSgunzo <vhsgunzo.github.io>
pkgname='udev-notify-git'
pkgver=0.1.r4.gc248507
pkgrel=1
pkgdesc='Show notifications when any USB device is plugged/unplugged'
arch=('any')
url='https://github.com/VHSgunzo/udev-notify'
license=('MIT')
depends=('libnotify' 'sox')
makedepends=('git')
optdepends=('espeak-ng')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/VHSgunzo/udev-notify.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
    cd $srcdir/${pkgname%-git}
    make DESTDIR="${pkgdir}" install
}
