# Maintainer: Marco Giannini 
# Contributor:
pkgname=dike
pkgver=20201120-versione-7.3.0
pkgrel=1
pkgdesc="Tool di firma e rinnovo online per i certificati digitali emessi da InfoCert S.p.A."
arch=('x86_64')
url="https://www.infocert.it"
license=('custom:EULA')
groups=()
install=$pkgname.install
depends=('libnotify' 'usb_modeswitch' 'pcsclite' 'pcsc-tools' 'gstreamer' 'libcanberra' 'libxinerama' 'libappindicator-gtk2')
source=('https://www.firma.infocert.it/pdf/licenza-dike6.pdf'
	'https://rinnovofirma.infocert.it/download/x86_64/latest')
sha256sums=('c3b034216532919c0782349a50912dec280b8aa352a7272e740ff73cf5f3ab1f'
            '16342341e13b3816a5deb480dece870114ea39aa06e77b98d08b5b889a54d3af')

package() {
    cd ${srcdir}
    # extracting binaries
    tar -xvf data.tar.xz -C ${pkgdir}
    # installing license
    install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
    install -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "${srcdir}/licenza-dike6.pdf"
}
