# Maintainer: Johannes Loher <johannes dor loher at fg4f dot de>

pkgname='ansiweather'
pkgver=1.17.0
pkgrel=2
pkgdesc='A Shell script for displaying the current weather conditions in your terminal, with support for ANSI colors and Unicode symbols.'
arch=('any')
url='https://github.com/fcambus/ansiweather'
license=('BSD')
depends=('curl' 'jq' 'bc')
optdepends=('wget: support for downloading with wget'
            'inetutils: support for downloading with ftp')
provides=('ansiweather')
source=("https://github.com/fcambus/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('07e5ed61181250670e55cfa750e2da51')

package(){
    cd "${srcdir}/${pkgname}-${pkgver}"
    install -dm755 "${pkgdir}/usr/bin"
    install -m755 ${pkgname} "${pkgdir}/usr/bin/"

    install -dm755 "${pkgdir}/usr/share/man/man1"
    install -m644 ${pkgname}.1 "${pkgdir}/usr/share/man/man1"

	install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
	install -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
