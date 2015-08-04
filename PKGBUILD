# Author: Madotsuki <madotsuki@national.shitposting.agency>

pkgname=mandelbulber2-git
_pkgname=mandelbulber2
pkgver=20150804
pkgrel=1
pkgdesc="3D application designed to render 3D fractals such as the Mandelbulb, Mandelbox, BulbBox, JuliaBulb, Menger Sponge, and Iterated Function Systems. Git version."
arch=('any')
url="https://github.com/buddhi1980/mandelbulber2"
license=('GPL3')
depends=('qt5-tools' 'libjpeg-turbo' 'libpng12' 'gsl' 'openmpi')
makedepends=('git')
provides=($_pkgname)
conflicts=($_pkgname)
source=("${_pkgname}::git+https://github.com/buddhi1980/mandelbulber2")
md5sums=('SKIP')

pkgver()
{
	cd $_pkgname
	git log -1 --format="%cd" --date=short | sed "s|-||g"
}

build()
{ 
	cd $_pkgname/$_pkgname/Release
	qmake-qt5 mandelbulber.pro
	make PREFIX=/usr
}

package()
{
	cd "$srcdir/$_pkgname"

	install -m755 -d "${pkgdir}/usr/bin"
	install -D -m644 "${srcdir}/${_pkgname}/${_pkgname}/deploy/linux/mandelbulber2.desktop" "${pkgdir}/usr/share/applications/mandelbulber2.desktop"

	install -m755 -d "${pkgdir}/usr/share/${_pkgname}"
	install -m755 -d "${pkgdir}/usr/share/applications"
	install -m755 -d "${pkgdir}/usr/share/icons"

	cp -ra "${srcdir}/${_pkgname}/${_pkgname}/qt" "$pkgdir/usr/share/${_pkgname}/qt"
	install -m755 "${srcdir}/${_pkgname}/${_pkgname}/Release/mandelbulber2" "${pkgdir}/usr/bin/"
}

