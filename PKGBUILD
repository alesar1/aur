# Maintainer: Johannes Schleifenbaum <johannes [at] js-webcoding [dot] de>
# Please report issues at https://github.com/jojosch/pkgbuilds

_pkgbase=security-checker
pkgname="php-${_pkgbase}"
pkgver=4.1.4
pkgrel=1
pkgdesc="PHP frontend for security.sensiolabs.org"
url="https://github.com/sensiolabs/security-checker"
license=("MIT")
arch=("any")
depends=("php>=5.3.3")
makedepends=("php-box" "php-composer")
source=(
  "https://github.com/sensiolabs/${_pkgbase}/archive/v${pkgver}.zip"
)
sha256sums=(
  "30ffd48c77c5a03496e99fffb00af56cf9fcb67436faef82cd4d15c08c5eed76"
)

build() {
    cd "${srcdir}/${_pkgbase}-${pkgver}"
    composer install --prefer-dist
    php -d phar.readonly=Off /usr/bin/php-box build
}

package() {
  cd "${srcdir}/${_pkgbase}-${pkgver}"
  install -D -m644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m755 "${_pkgbase}.phar" "${pkgdir}/usr/share/webapps/bin/${pkgname}.phar"
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/webapps/bin/${pkgname}.phar" "${pkgdir}/usr/bin/${pkgname}"
}
