# Maintainer: Elrondo46 TuxnVape <elrond94@hotmail.com>

pkgname=amar-installer
pkgver=1.9.9.b1
pkgrel=1
pkgdesc="Install AMAR repository"
arch=('x86_64')
license=('GPL3')
url="https://www.tuxnvape.fr/"
depends=("python" "python-gobject")
install=amar.install
source=("amar.py"
        "amar.png"
        "amar.desktop"
        "amar.conf"
		"amar.glade"
		"amarban.png"
	"org.tnv.amar.policy")

sha256sums=('64c4230895e40e12c268e6a5a02723e166ebe193a6d46786db82889a0d7de782'
            '874700067f446dff59f8e4e6c3b14519ca8afdf31742af629343c80002c71376'
            'c5dbfca766050bdbfd36866c1f479ca8039aae80fa8b2847b376c05087d1364c'
            'd8fafeb25a8b2368803565ed62ba147aa38adfe57089fe44125f5e07eea3d21b'
            'ce1ef2d94876564ab1c5cdfc8bf95f102fe03c04f545c7e6bbb191cf825c0c66'
            '2edefaa6f3143bc2ac3f6a11d069d2a72fc968e492f8e96a2a7e2c9423a4237a'
            'dcf05a9d8c5cfe2cc23523eaab9bbd30932b3d2c68ad8d38edbdcad372053920')

package() {
        install -Dm644 "amar.desktop" "${pkgdir}/usr/share/applications/amar.desktop"
        install -Dm644 "amar.py" "${pkgdir}/usr/bin/amar.py"
        install -Dm644 "amar.png" "${pkgdir}/usr/share/icons/amar.png"
        install -Dm644 "amar.conf" "${pkgdir}/etc/pacman.d/amar.conf"
		install -Dm644 "amar.glade" "${pkgdir}/usr/share/amar/amar.glade"
		install -Dm644 "amarban.png" "${pkgdir}/usr/share/amar/amarban.png"
        install -Dm644 "org.tnv.amar.policy" "${pkgdir}/usr/share/polkit-1/actions/org.tnv.amar.policy"
} 

