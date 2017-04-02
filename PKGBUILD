# Maintainer: Johannes Loher <johannes dor loher at fg4f dot de>

pkgname='ansiweather'
pkgver=1.10
pkgrel=1
pkgdesc='A Shell script for displaying the current weather conditions in your terminal, with support for ANSI colors and Unicode symbols.'
arch=('any')
url='https://github.com/fcambus/ansiweather'
license=('custom')
depends=('curl' 'jq' 'bc')
optdepends=('wget: support for downloading with wget'
            'ftp: support for downloading with ftp')
provides=('ansiweather')
source=("https://github.com/fcambus/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('3c52b72f2bfdc94c6f6cd6ecda2d1320')
install=${pkgname}.install

package(){
    cd "${srcdir}/${pkgname}-${pkgver}"
    install -dm755 "${pkgdir}/usr/bin"
    install -m755 ${pkgname} "${pkgdir}/usr/bin/"

    install -dm755 "${pkgdir}/usr/share/man/man1"
    install -m644 ${pkgname}.1 "${pkgdir}/usr/share/man/man1"

	install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
	install -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
