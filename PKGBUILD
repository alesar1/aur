# Maintainer: Jimmy Stelzer jimmy.stelzer@gmail.com

pkgname=btusb-csr-0x8891
pkgver=0.8
pkgrel=1
pkgdesc="patch btusb so it works on CSR clone devices with id 0x8891"
url=https://bugzilla.kernel.org/show_bug.cgi?id=60824
arch=('i686' 'x86_64')
license=('GPL')
depends=(
	'dkms'
	'linux-headers'
)

source=(
	"Makefile"
	"btusb.patch"
	"btusb.c::https://github.com/zen-kernel/zen-kernel/blob/v5.6.13-zen1/drivers/bluetooth/btusb.c"
	"btintel.h::https://github.com/zen-kernel/zen-kernel/blob/v5.6.13-zen1/drivers/bluetooth/btintel.h"
	"btbcm.h::https://github.com/zen-kernel/zen-kernel/blob/v5.6.13-zen1/drivers/bluetooth/btbcm.h"
	"btrtl.h::https://github.com/zen-kernel/zen-kernel/blob/v5.6.13-zen1/drivers/bluetooth/btrtl.h"
	"dkms.conf"
)

prepare() {
	\cp --remove-destination $(readlink btusb.c) btusb.c
	patch -p1 < btusb.patch
}

package() {
	install -Dm644 dkms.conf "${pkgdir}"/usr/src/${pkgname}-${pkgver}/dkms.conf

	# Set name and version
	sed -e "s/@PKGNAME@/${pkgname}/" \
		-e "s/@PKGVER@/${pkgver}.1/" \
		-i "${pkgdir}"/usr/src/${pkgname}-${pkgver}/dkms.conf

	install -Dm644 btusb.c "${pkgdir}"/usr/src/${pkgname}-${pkgver}/btusb.c

	sed -e "s/define VERSION \"${pkgver}\"/define VERSION \"${pkgver}.1\"/" \
		-i "${pkgdir}"/usr/src/${pkgname}-${pkgver}/btusb.c

	install -Dm644 btintel.h "${pkgdir}"/usr/src/${pkgname}-${pkgver}/btintel.h
	install -Dm644 btbcm.h "${pkgdir}"/usr/src/${pkgname}-${pkgver}/btbcm.h
	install -Dm644 btrtl.h "${pkgdir}"/usr/src/${pkgname}-${pkgver}/btrtl.h
	install -Dm644 Makefile "${pkgdir}"/usr/src/${pkgname}-${pkgver}/Makefile
}

sha512sums=(
	'45210d56fc4604befa6f4fa0bf51fd9296a274c14b38c1671bcffeb0028af17eb72c4ef0b2c9cb0442906251603264315fa0d4f31e881f7d4eacc7b9b0b72ca2'
	'b743173b2466a88502fd59920fc88cf1a1fa64ffe21d6821afdad569570161ee2c6b17888cf98f6e04ae0542ead02f0a29cc1b59f93dbce0c794b61ae60740ab'
	'ff192171996c031b1bc03263173a9d78c425d4263ca3100b448bead71c8f67c74ca53add0e3d083a52409a91a17e6676025ff940fe252eb6ed1ba80c2300c04f'
	'16ce8e77b598ca4dc5dbba805046e066698a5157fee73b0425a4bd51e1b063a745a3aa3cc169abcacb249d3bd93901a059f3a71dc009f3ca93af2e542400a35b'
	'b526d42413a1621bbd6360ada6e0623c74c7cb31c0e82d1ac6690b782ea2c9b496bb6e650fe4a66fa16bb405ecb3f14233f7c3e68093f9939a21f61c2f082ea0'
	'3458820f64b426444406356c56d1845c6e077d829fa2cdb6804befda657b7ae495d39da11b6ba6202fb147a64e161e74a48fcb6d7a7ef19bc122da12c7c47ebf'
	'2bde0461ab2bb84bb5bb2a5dce5ae8e6919cf5649f72bd2dc3b505c359b80713d8573409d11101789e1455b5090bbdd9305adfbabb78d5cbc56598abedc24c18'
)

