# Maintainer: Bojan Milevski <boyanmilevskix@gmail.com>
pkgname='ttf-impact'
pkgver=1.0.0
pkgrel=1
pkgdesc="Impact font"
arch=('any')
url="https://dafontonline.com/impact-font-download"
license=('unknown')
makedepends=('unzip')
source=("https://dafontonline.s3.amazonaws.com/wp-content/uploads/2021/04/Impact-Font.zip")
cksums=('3432747402' '181427')
md5sums=('f72319ff36601627138a8cbb65923d2a')
sha1sums=('6ce37664800cf0a9a01e9a750d49c3242bb91d26')
sha256sums=('5e8bb5d45990174c87dae72f6bfcf188c4538f8e78bf18ca537110f994c8f281')
sha224sums=('10be9e8090c6db9fd3590b130989fdeab3e0151bd22540455f49e0d0')
sha384sums=('cb5761ebe2f5422bf0796939c1253539b40cf6e3b6567efd2cf1bb0f8b4f0ddaf6b9758f69dab1718ef8fe7908f1e7e9')
sha512sums=('a510758ea5150803dcbfb184effa248b72db4be75e90624d750588b2238d98597c8f12e4aa6886ae3379d50dabf5044e1d01c88c07f74e10457a0e3c055f1f59')
b2sums=('3609688996f795aedf6d229adb63930a7ddd1b53a771a256221fccc235323c1cd7fd9a465f8b65427d95f3ca67daca643294118afd525e825062126f525b1a2e')

prepare()
{
	unzip "${srcdir}/Impact-Font.zip" -d "${srcdir}/Impact_Font"
}

package()
{
	cd "${srcdir}/Impact_Font"

	install -Dm644 "impact.ttf" "${pkgdir}/usr/share/fonts/TTF/Impact.ttf"
}
