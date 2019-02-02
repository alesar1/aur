# Contributor: Gergely Imreh <imrehg gmail com>

pkgname=particle-cli
pkgdesc='CLI tool for the Particle hardware platform'
pkgver=1.38.0
pkgrel=1
arch=(any)
url='http://particle.io/'
license=('GPL')
depends=('libusb' 'nodejs')
makedepends=('npm' 'git' 'python2')
optdepends=('dfu-util: local flashing'
            'openssl: local flashing')
source=(http://registry.npmjs.org/$pkgname/-/${pkgname}-${pkgver}.tgz)
noextract=(${pkgname}-${pkgver}.tgz)
sha256sums=('1a23aa99862a072147aca99eaaab9f6ac6596f70e87f5a83a49fa1d75bb4341c')

package() {
  npm install -g --user root --prefix "${pkgdir}/usr" "${srcdir}/${pkgname}-${pkgver}.tgz"
  rm `find "${pkgdir}/" -name '.deps'` -rf
}
