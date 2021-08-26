# Maintainer: grufo <madmurphy333 AT gmail DOT com>
# Contributor: redfish <redfish AT galactica DOT pw>
# Contributor: kertase <kertase AT gmail DOT com>
# Contributor: Sergej Pupykin <pupykin DOT s+arch AT gmail.com>
# Contributor: wahnby <wahnby AT yahoo DOT fr>

_appname='gnunet'
pkgname="${_appname}-git"
pkgver='0.15.2.r29783.45532e7bc'
pkgrel=2
pkgdesc='A framework for secure peer-to-peer networking'
arch=('i686' 'x86_64')
url="http://${_appname}.org"
license=('AGPL')
conflicts=("${_appname}" "${_appname}-bin")
provides=("${_appname}")
depends=('bash' 'which' 'gnutls' 'gnurl' 'libgcrypt' 'libunistring' 'libidn2'
         'libmicrohttpd' 'jansson' 'nss' 'libtool' 'sqlite' 'zlib' 'libsodium'
         'openssl' 'libextractor' 'brotli' 'gettext')
makedepends=('gettext' 'pkgconfig' 'libtool' 'bluez-libs' 'python' 'libpulse'
             'git' 'opus')
optdepends=('bluez: for bluetooth transport'
            'zbar: for reading/writing GNUnet URIs from/to QR codes using gnunet-qr'
            'texlive-core: for generating GNS business cards via gnunet-bcd'
            'miniupnpc: for NAT uPnP support'
	    'libpulse: for conversation service'
	    'opus: for conversation service'
            'pbc: for Attribute-Based Encryption'
            'libgabe: for Attribute-Based Encryption'
            'libpabc: for re:claimID zero-knowledge privacy credentials')
backup=("etc/${_appname}.conf")
options=('!makeflags')
source=("git+https://${_appname}.org/git/${_appname}.git"
        "${_appname}-system.service"
        "${_appname}-user.service"
        "${_appname}.sysusers"
        "${_appname}.tmpfiles")
sha256sums=('SKIP'
            'ef221a4cbdc2270d7a1b1447e6e8a498653ec16d2f73fa57a7c6888980af4dfb'
            '13760ecc1523a9acd030df34e6a90edcd2971271766c8e159c9e66341a9168c4'
            '66299dbbdd0219d2f5f0520e69fc094f38f789724d973c2f63a421257ea4f755'
            'e6db3d48757ee4a95970cc63606e5da86a01776a2c6ffddb8a099dde8bf20f63')

pkgver() {

	cd "${_appname}" > /dev/null 2>&1

	printf "'%s.r%s.%s'" \
		"$(grep 'AC_INIT' 'configure.ac' | grep -o '[0-9]\(\.[0-9]\+\)\+')" \
		"$(git rev-list --count HEAD)" \
		"$(git rev-parse --short HEAD)"

}

prepare() {

	cd "${srcdir}/${_appname}"

	export GNUNET_PREFIX='/usr/lib'
	./bootstrap

}

build() {

	cd "${srcdir}/${_appname}"

	./configure --prefix='/usr' --enable-experimental
	make
	make -C contrib

}

package() {

	cd "${srcdir}/${_appname}"

	make DESTDIR="${pkgdir}" install
	make DESTDIR="${pkgdir}" -C contrib install

	install -dm755 "${pkgdir}/usr/lib/systemd/system"
	install -Dm644 "${srcdir}/${_appname}-system.service" "${pkgdir}/usr/lib/systemd/system/${_appname}.service"

	install -dm755 "${pkgdir}/usr/lib/systemd/user"
	install -Dm644 "${srcdir}/${_appname}-user.service" "${pkgdir}/usr/lib/systemd/user/${_appname}.service"

	install -dm755 "${pkgdir}/usr/lib/sysusers.d"
	install -Dm644 "${srcdir}/${_appname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${_appname}.conf"

	install -dm755 "${pkgdir}/usr/lib/tmpfiles.d"
	install -Dm644 "${srcdir}/${_appname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${_appname}.conf"

	# Automatically generate a configuration file using the content of
	# `/usr/share/gnunet/config.d/` as model; in this way we can ensure
	# that this configuration file is the one backed up with each update,
	# while `/usr/share/gnunet/config.d/` is kept as immutable default
	# configuration.

	install -dm755 "${pkgdir}/etc"

	{
		echo "# /etc/${_appname}.conf"
		(cd "${pkgdir}" > /dev/null 2>&1 && find "usr/share/${_appname}/config.d" -type f -name '*.conf' \
			-printf '\n\n# For the default values of the the following lines please refer to\n# /%p\n\n' \
			-exec cat '{}' ';')
	} > "${pkgdir}/etc/${_appname}.conf"

}

