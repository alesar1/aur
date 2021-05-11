# Maintainer: DisLogicator <supasecrethacker@gmail.com>

pkgname='hwpviewer2020'
pkgver=11.20.0.672
pkgrel=1
pkgdesc="Newer version of Hancom office viewer provided by Hancom. (Previous version:hwpviewer) Ported to Arch Linux from Hancom Gooroom OS"
arch=('x86_64')
url='https://www.hancom.com/'
license=('custom:hancomoffice')
depends=('harfbuzz-icu' 'libcurl-gnutls' 'glu')
source=(
    "https://github.com/DisLogicator/hoffice/releases/download/11.20.0.1520-rc2/hwpviewer2020-11.20.0.1520.tar.gz"
    "LICENSE"
)
sha256sums=(
    'SKIP'
    'SKIP'
)

package() {
    msg2 "Please ignore the errors. They don't mean anything."
    mkdir "${pkgdir}/opt"
    mkdir "${pkgdir}/opt/hnc"
    install -Dm644 -t "${pkgdir}/usr/share/licenses/$pkgname" "${srcdir}/LICENSE"
    install -Dm644 -t "${pkgdir}/usr/share/applications" "${srcdir}"/*.desktop
    bsdtar -xf hofficeviewer11.zip -C "${pkgdir}/opt/hnc"
    install -Dm644 -t "${pkgdir}/opt/hnc/viewericons" "${srcdir}"/*.png

}
