# Maintainer: grufo <madmurphy333 AT gmail DOT com>
# Contributor: redfish <redfish AT galactica DOT pw>
# Contributor: kertase <kertase AT gmail DOT com>
# Contributor: Sergej Pupykin <pupykin DOT s+arch AT gmail.com>
# Contributor: wahnby <wahnby AT yahoo DOT fr>

pkgname='gnunet'
pkgver='0.15.0'
pkgrel=8
pkgdesc='A framework for secure peer-to-peer networking'
arch=('i686' 'x86_64')
url="http://${pkgname}.org"
license=('GPL')
conflicts=("${pkgname}-git" "${pkgname}-bin")
depends=('bash' 'which' 'gnutls' 'gnurl' 'libgcrypt' 'libunistring' 'libidn2'
	'libmicrohttpd' 'jansson' 'nss' 'libtool' 'sqlite' 'zlib' 'libsodium'
	'openssl' 'libextractor' 'brotli' 'gettext')
makedepends=('pkgconfig' 'libtool' 'bluez-libs' 'python' 'libpulse'
             'opus')
optdepends=('bluez: for bluetooth transport'
            'libzbar: for reading/writing GNUnet URIs from/to QR codes using gnunet-qr'
            'texlive-core: for generating GNS business cards via gnunet-bcd'
            'miniupnpc: for NAT uPnP support'
	    'libpulse: for conversation service'
	    'opus: for conversation service'
            'pbc: for Attribute-Based Encryption (experimental)'
            'libgabe: for Attribute-Based Encryption (experimental)'
            'libpabc: for re:claimID zero-knowledge privacy credentials')
backup=("etc/${pkgname}.conf")
options=('!makeflags')
source=("http://ftpmirror.gnu.org/gnunet/${pkgname}-${pkgver}.tar.gz"{,.sig}
        "${pkgname}.service"
        "${pkgname}.sysusers"
        "${pkgname}.tmpfiles"
        "${pkgname}.conf")
validpgpkeys=('19647543F7861D3BF4E64FF7BF60708B48426C7E'
              '3D11063C10F98D14BD24D1470B0998EF86F59B6A')
sha256sums=('cca23d6fb40890a5eb2ccae4b8f7e74c8e4e84d3fca2f419d775cb4a58dd9a67'
            'SKIP'
            '577a6fd803d7f2a00380a200778dc0515efb26011e5b8ea4888554e7216a9042'
            '65daa9fb07bdc8b8a11ca06f320b94ce6cfcc9681c6693ac655ca54881645a39'
            'aa82707160c57e77ab3c426d16177283eb8d0bc018c04dcba3db689e6bea835f'
            '434d2389264ffdb524147679d5b8a27a568521be4945fb08455c8fcdb8dac0ae')

prepare() {

	cd "${srcdir}/${pkgname}-${pkgver}"

	export GNUNET_PREFIX='/usr/lib'

}

build() {

	cd "${srcdir}/${pkgname}-${pkgver}"

	test -f Makefile || ./configure --prefix='/usr'
	make
	make -C contrib

}

package() {

	cd "${srcdir}/${pkgname}-${pkgver}"

	make DESTDIR="${pkgdir}" install
	make DESTDIR="${pkgdir}" -C contrib install

	# rm -rf "${pkgdir}/usr/include/libltdl" "${pkgdir}"/usr/lib/libltdl.* "${pkgdir}/usr/include/ltdl.h"

	install -dm755 "${pkgdir}/etc"
	install -Dm644 "${srcdir}/${pkgname}.conf" "${pkgdir}/etc/${pkgname}.conf"

	install -dm755 "${pkgdir}/usr/lib/systemd/system"
	install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"

	install -dm755 "${pkgdir}/usr/lib/sysusers.d"
	install -Dm644 "${srcdir}/${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"

	install -dm755 "${pkgdir}/usr/lib/tmpfiles.d"
	install -Dm644 "${srcdir}/${pkgname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"

}

