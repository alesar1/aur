# Maintainer: DiogoNSilva <o.diogosilva@gmail.com>
# Contributor: Stunts <f.pinamartins@gmail.com>

_pkgname=TriFusion
pkgname=trifusion
pkgver=0.5.0
pkgrel=1
pkgdesc="Streamlining phylogenomic data gathering, processing and visualization"
arch=("any")
url="https://github.com/ODiogoSilva/TriFusion"
license=("GPL3")
depends=("python2-kivy" "python2-numpy" "python2-scipy" "python2-matplotlib" "python2-psutil" "python2-seaborn" "python2-configparser" "python2-pandas")
conflicts=("trifusion-git" "trifusion-bin")
source=("https://github.com/ODiogoSilva/${_pkgname}/archive/${pkgver}.tar.gz")
md5sums=("ab5e966cb4e5d0477c6811ca5b397106")

package() {
	cd ${srcdir}/${_pkgname}-${pkgver}
	python2 setup.py install --prefix=/usr --root="${pkgdir}"
	install -Dm644 trifusion/data/resources/trifusion.desktop "${pkgdir}/usr/share/applications/trifusion.desktop"
	install -Dm644 trifusion/data/backgrounds/trifusion-icon-128.png "${pkgdir}/usr/share/pixmaps/trifusion-icon-128.png"
}
