# Author: Madotsuki <madotsuki@national.shitposting.agency>

pkgname=mandelbulber2
pkgver=2.13.2
_pkgver_orig=2.13-2
pkgrel=1
pkgdesc="3D application designed to render 3D fractals such as the Mandelbulb, Mandelbox, BulbBox, JuliaBulb, Menger Sponge, and Iterated Function Systems."
arch=('x86_64' 'i686')
url="https://github.com/buddhi1980/mandelbulber2"
license=('GPL3')
depends=('qt5-tools' 'libjpeg-turbo' 'libpng12' 'gsl' 'openmpi')
provides=($pkgname)
conflicts=($pkgname)
source=("${pkgname}::https://github.com/buddhi1980/mandelbulber2/archive/2.13-2.tar.gz")
sha256sums=('75c9a4085dc68b50c10b310ce140072c5f160c00965f1e3a8cb5a8f2284e930f')

build()
{
    cd $pkgname-$_pkgver_orig/$pkgname
    qmake-qt5 qmake/mandelbulber.pro
    make PREFIX=/usr
}

package()
{
    cd "$srcdir/$pkgname-$_pkgver_orig"

    install -m755 -d "${pkgdir}/usr/bin"
    install -D -m644 "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/deploy/linux/mandelbulber2.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    install -m755 -d "${pkgdir}/usr/share/${pkgname}"
    install -m755 -d "${pkgdir}/usr/share/applications"
    install -m755 -d "${pkgdir}/usr/share/icons"

    cp -ra "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/deploy/share/mandelbulber2/data" "$pkgdir/usr/share/${pkgname}/data"
    cp -ra "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/deploy/share/mandelbulber2/examples" "$pkgdir/usr/share/${pkgname}/examples"
    cp -ra "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/deploy/share/mandelbulber2/icons" "$pkgdir/usr/share/${pkgname}/icons"
    cp -ra "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/language" "$pkgdir/usr/share/${pkgname}/language"
    cp -ra "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/formula" "$pkgdir/usr/share/${_pkgname}/formula"
    cp -ra "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/deploy/share/mandelbulber2/textures" "$pkgdir/usr/share/${pkgname}/textures"
    cp -ra "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/deploy/share/mandelbulber2/toolbar" "$pkgdir/usr/share/${pkgname}/toolbar"
    install -m755 "${srcdir}/${pkgname}-${_pkgver_orig}/${pkgname}/mandelbulber2" "${pkgdir}/usr/bin/"
}
