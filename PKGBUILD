# Maintainer: Lev Levitsky <levlev@mail.ru>
pkgname=msgfplus
pkgver=2020.01.16
pkgrel=1
pkgdesc="MS/MS database search tool"
arch=('any')
url="https://github.com/MSGFPlus/msgfplus"
license=('custom')
depends=('java-environment')
source=("https://github.com/MSGFPlus/msgfplus/releases/download/v2020.01.16/MSGFPlus_v20200115.zip"
		"msgf+"
		"mzid2tsv"
        "https://raw.githubusercontent.com/sangtaekim/msgfplus/master/LICENSE.txt")
md5sums=('1e79ed1f10409ad1fd506a6ccd5263d1'
         'c43c6581b373266171c3930c3718eb9c'
         'c860b9c30b74dae43de2d3933a405ac1'
         '88b22e0922010401ea88bcf03e3bb5d2')

package() {
    cd "$srcdir"
    install -D MSGFPlus.jar "${pkgdir}/usr/share/java/${pkgname}/MSGFPlus.jar"
    mkdir -p "${pkgdir}/usr/share/${pkgname}"
    cp -r Docs/Examples "${pkgdir}/usr/share/${pkgname}/"
    install -D msgf+ "${pkgdir}/usr/bin/msgf+"
    install -D mzid2tsv "${pkgdir}/usr/bin/mzid2tsv"
    install -D LICENSE.txt -t "${pkgdir}/usr/share/licenses/msgfplus/"
}
