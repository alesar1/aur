# $Id$
# Maintainer: lily wilson <lily@lily.ml>

_pkgname=openssl
pkgname=${_pkgname}102
_ver=1.0.2h
# use a pacman compatible version scheme
pkgver=${_ver/[a-z]/.${_ver//[0-9.]/}}
#pkgver=$_ver
pkgrel=1
pkgdesc='The Open Source toolkit for Secure Sockets Layer and Transport Layer Security with Chacha20 cipher (1.0.2 branch)'
arch=('i686' 'x86_64')
url='https://www.openssl.org'
license=('custom:BSD')
depends=('zlib' 'perl')
conflicts=("$_pkgname")
provides=("$_pkgname=${pkgver}")
optdepends=('ca-certificates')
options=('!makeflags')
backup=('etc/ssl/openssl.cnf')
source=("https://www.openssl.org/source/${_pkgname}-${_ver}.tar.gz"
	"https://www.openssl.org/source/${_pkgname}-${_ver}.tar.gz.asc"
	'no-rpath.patch'
	'ca-dir.patch'
	'openssl__chacha20_poly1305_draft_and_rfc_ossl102g.patch')
sha256sums=('1d4007e53aad94a5b2002fe045ee7bb0b3d98f1a47f8b2bc851dcd1c74332919'
            'SKIP'
            '754d6107a306311e15a1db6a1cc031b81691c8b9865e8809ac60ca6f184c957c'
            '9e8126f3a748f4c1d6fe34d4436de72b16a40e97a6d18234d2e88caa179d50c4'
            '09a2e88f95d8cd12bd9c23cd87554ab700fb1625a848c0502951849fb1d564fc')
validpgpkeys=('8657ABB260F056B1E5190839D9C4D26D0E604491')

prepare() {
	cd $srcdir/$_pkgname-$_ver

	# remove rpath: http://bugs.archlinux.org/task/14367
	patch -p0 -i $srcdir/no-rpath.patch
	# set ca dir to /etc/ssl by default
	patch -p0 -i $srcdir/ca-dir.patch
	patch -p1 -i $srcdir/openssl__chacha20_poly1305_draft_and_rfc_ossl102g.patch
}

build() {
	cd $srcdir/$_pkgname-$_ver

	if [ "${CARCH}" == 'x86_64' ]; then
		openssltarget='linux-x86_64'
		optflags='enable-ec_nistp_64_gcc_128'
	elif [ "${CARCH}" == 'i686' ]; then
		openssltarget='linux-elf'
		optflags=''
	fi

	# mark stack as non-executable: http://bugs.archlinux.org/task/12434
	./Configure --prefix=/usr --openssldir=/etc/ssl --libdir=lib \
		shared zlib ${optflags} \
		"${openssltarget}" \
		"-Wa,--noexecstack ${CPPFLAGS} ${CFLAGS} ${LDFLAGS}"

	make depend
	make
}

package() {
	cd $srcdir/$_pkgname-$_ver
	install -D -m0755 libssl.so.1.0.0 $pkgdir/usr/lib/libssl.so.1.0.0
	install -D -m0755 libcrypto.so.1.0.0 $pkgdir/usr/lib/libcrypto.so.1.0.0
	install -D -m0755 apps/openssl $pkgdir/usr/bin/openssl102
	install -D -m644 LICENSE $pkgdir/usr/share/licenses/$_pkgname/LICENSE
}
