# Contributor: Gergely Imreh <imrehg gmail com>

pkgname=particle-cli
pkgdesc='CLI tool for the Particle hardware platform'
pkgver=1.43.3
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
md5sums=('2a11484a4c8bee52395e8e7d7e2aae5c')
sha256sums=('2bfa66ca57a5c7cc74f869d2800a90915dd36625b7bff50a4ccd5519fd91a397')

package() {
  npm install -g --user root --prefix "${pkgdir}/usr" "${srcdir}/${pkgname}-${pkgver}.tgz"
  sed -i 's|, GROUP="plugdev"||g; s|, MODE="0666"||g' "${pkgdir}/usr/lib/node_modules/${pkgname}/assets/50-particle.rules"
  install -D -m644 "${pkgdir}/usr/lib/node_modules/${pkgname}/assets/50-particle.rules" "${pkgdir}/etc/udev/rules.d/50-particle.rules"
  rm `find "${pkgdir}/" -name '.deps'` -rf
}
