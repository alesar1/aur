# Maintainer: Dylan Whichard <dylan at whichard dot com>
# Contributor: Michael Goehler <somebody dot here at gmx dot de>
# Contributor: Timothy Redaelli <timothy dot redaelli at gmail dot com>
# Contributor: DonVla <donvla at users dot sourceforge dot net>

pkgname=i2c-tools-git
_pkgname=i2c-tools
pkgver=r290.9726bed
pkgrel=2
pkgdesc="Heterogeneous set of I2C tools for Linux that used to be part of lm-sensors."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="http://www.lm-sensors.org/wiki/I2CTools"
license=('GPL')
provides=('i2c-tools' 'i2c-tools-svn')
conflicts=('i2c-tools' 'i2c-tools-svn')
makedepends=('git')
optdepends=('read-edid: for decode-edid script'
            'python2-smbus: python2 bindings'
            'python-smbus: python3 bindings')
source=('i2c-tools-git::git+https://github.com/groeck/i2c-tools.git')
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
    
build() {
  cd "${srcdir}/${pkgname}"
  make clean
  make -j1 EXTRA=eeprog
}

package() {
  cd "${srcdir}/${pkgname}"
  make prefix="${pkgdir}/usr" sbindir="$pkgdir/usr/bin" install
  install -Dm755 eeprog/eeprog "${pkgdir}/usr/bin"
  install -Dm755 eeprog/eeprog.8 "${pkgdir}/usr/share/man/man8"
}

# vim:set ts=2 sw=2 et:
