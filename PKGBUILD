# Maintainer: Slavi Pantaleev <slavi at devture.com>

pkgname=infonotary-client-software
pkgver=2.0.3
pkgrel=1
pkgdesc="InfoNotary client software - InfoNotary e-Doc Signer and InfoNotary Smart Card Manager."
arch=('i686' 'x86_64')
url="http://www.infonotary.com/"
license=('unknown')
depends=(qt5-base nss openssl)
replaces=(infonotary-scardmanager)
conflicts=(infonotary-scardmanager)
optdepends=(
	'ccid: generic USB Chip/Smart Card Interface Devices driver'
	'omnikey_ifdokccid-git: driver for OmniKey smart card readers'
	'bit4id-ipki: driver for T&S DS/2048 (L) smart cards'
	'pcsclite: smartcard middleware library (pcscd)'
	'pcsc-tools: smartcard tools (pcsc_scan)'
	'opensc: a set of libraries and utilities to work with smart cards'
)
install=$pkgname.install

if [ "${CARCH}" = 'x86_64' ]; then
    ARCH='amd64'
    md5sums=('861abc574ce689e6c9c9a4007da70d94')
else
    ARCH='i386'
    md5sums=('942dc34d3b023696ccfde0a7e27a9dd5')
fi

_file_name=$pkgname'_'$pkgver'.845_'$ARCH'.deb'
source=('http://repository.infonotary.com/install/linux/DEBS/pool/non-free/i/infonotary-client-software/'$_file_name)

package() {
    ar -xv $_file_name || return 1
	tar -xvf data.tar.[xg]z -C $pkgdir || return 1
}
