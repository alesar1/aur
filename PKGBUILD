# Maintainer: Elrondo46 TuxnVape <elrond94@hotmail.com>

pkgname=lightning-lang-patcher
pkgver=1.4.6
pkgrel=1
pkgdesc="Patch langs of Lightning thunderbird addon"
arch=('x86_64')
license=('GPL3')
url="https://www.tuxnvape.fr/"
depends=('python' 'python-gobject' 'thunderbird')
source=("https://github.com/Elrondo46/lightning-lang-patcher/archive/${pkgver}.tar.gz")

sha256sums=('ae872aaf8f6bc77b0c451aa47b416ddfb64d629b3388db1acddb48d1b1aed046')

package() {
        install -Dm644 "${srcdir}/${pkgname}-${pkgver}/llp.desktop" "${pkgdir}/usr/share/applications/llp.desktop"
        install -Dm644 "${srcdir}/${pkgname}-${pkgver}/lighttrans.py" "${pkgdir}/opt/lighttrans/lighttrans.py"
        install -Dm644 "${srcdir}/${pkgname}-${pkgver}/llp.png" "${pkgdir}/usr/share/icons/llp.png"
        install -Dm644 "${srcdir}/${pkgname}-${pkgver}/title.png" "${pkgdir}/opt/lighttrans/title.png"
        install -Dm644 "${srcdir}/${pkgname}-${pkgver}/org.tnv.llp.policy" "${pkgdir}/usr/share/polkit-1/actions/org.tnv.llp.policy"
		install -Dm644 "${srcdir}/${pkgname}-${pkgver}/transl.glade" "${pkgdir}/opt/lighttrans/transl.glade"
		install -Dm644 "${srcdir}/${pkgname}-${pkgver}/config.json" "${pkgdir}/opt/lighttrans/config.json"
		install -Dm644 "${srcdir}/${pkgname}-${pkgver}/llp.png" "${pkgdir}/opt/lighttrans/llp.png"
} 

