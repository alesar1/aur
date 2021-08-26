# Maintainer: Michael Gisbers <michael@gisbers.de>
pkgname=flashprint
pkgver=5.1.0
pkgrel=1
pkgdesc="Slicer for the FlashForge 3D printers."
arch=('x86_64')
url="http://www.ff3dp.com/"
depends=('qt5-base')
license=('custom')
#source=("${pkgname}-${pkgver}_amd64.deb::http://www.ishare3d.com/3dapp/public/FlashPrint-ii/FlashPrint/flashprint_${pkgver}_amd64.deb" "${pkgname}")
source=("${pkgname}-${pkgver}_amd64.deb::https://en.fss.flashforge.com/10000/software/9458ba560a686736e2f57b16d8dbc169.deb" "${pkgname}")


package() {
    cd ${pkgdir}
    tar -Jxvf ${srcdir}/data.tar.xz
    install -d ${pkgdir}/usr/bin
#    ln -s ../share/FlashPrint/FlashPrint ${pkgdir}/usr/bin/flashprint
    # workaround for render issues
    install ${srcdir}/flashprint ${pkgdir}/usr/bin/flashprint
    # patch desktop file, workaround for render issues
    sed -i "/^Exec=/ c Exec=/usr/bin/flashprint" ${pkgdir}/usr/share/applications/FlashPrint5.desktop
}




md5sums=('28ff1da4e41d6476eba1c42dfc371513'
         'e2a783e7d78b40b55432c00f38dacae8')
sha256sums=('02b8ab3ab7216f1d7e589335ab0ee082fb39a82467a24213550122d23d8c1a2a'
            '65c17b8b726d779956e99a3df4d1e90435a194686370c589f71b09aeebddda5c')
sha512sums=('0ee3174b5ba905ff97c3692489a34708c70642dcf67fc94828219dc26c8d713fa5a6408c7f39eb61fff942f471b66c86372f39308b523f45bd1e53bd39ad2e04'
            'fc3364dfdce9d3558ceea74137343c4a7a2fe6231dfe02f3298cca03d055b7237d4397fe58171452cca962f842f93dc6116b0761e4d5ef3c54105b4203c66f9f')
