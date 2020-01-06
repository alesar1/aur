# Based on openssl 1.1.1d PKGBUILD
# Maintainer: Karel Kočí <cynerd@email.cz>
# Maintainer: Felix Golatofski <contact@xdfr.de>

_basename=openssl
pkgname=openssl-purify
_ver=1.1.1d
# use a pacman compatible version scheme
pkgver=${_ver/[a-z]/.${_ver//[0-9.]/}}
pkgrel=1
pkgdesc='The Open Source toolkit for Secure Sockets Layer and Transport Layer Security compiled with PURIFY flag'
arch=('i686' 'x86_64')
url='https://www.openssl.org'
license=('custom:BSD')
depends=('perl')
optdepends=('ca-certificates')
backup=('etc/ssl/openssl.cnf')
source=("https://www.openssl.org/source/${_basename}-${_ver}.tar.gz"{,.asc}
        'ca-dir.patch')
sha256sums=('1e3a91bc1f9dfce01af26026f856e064eab4c8ee0a8f457b5ae30b40b8b711f2'
            'SKIP'
            '0938c8d68110768db4f350a7ec641070686904f2fe7ba630ac94399d7dc8cc5e')
validpgpkeys=('8657ABB260F056B1E5190839D9C4D26D0E604491'
              '7953AC1FBC3DC8B3B292393ED5E9E43F7DF9EE8C')
provides=('openssl')
conflicts=('openssl')

prepare() {
	cd $srcdir/$_basename-$_ver

	# set ca dir to /etc/ssl by default
	patch -p0 -i $srcdir/ca-dir.patch
}

build() {
	cd $srcdir/$_basename-$_ver

	if [ "${CARCH}" == 'x86_64' ]; then
		openssltarget='linux-x86_64'
		optflags='enable-ec_nistp_64_gcc_128'
	elif [ "${CARCH}" == 'i686' ]; then
		openssltarget='linux-elf'
		optflags=''
	fi

	# mark stack as non-executable: http://bugs.archlinux.org/task/12434
	./Configure --prefix=/usr --openssldir=/etc/ssl --libdir=lib \
		shared no-ssl3-method ${optflags} \
		"${openssltarget}" \
		"-Wa,--noexecstack ${CPPFLAGS} ${CFLAGS} ${LDFLAGS} -DPURIFY"

	make depend
	make
}

check() {
	cd $srcdir/openssl-$_ver
	# the test fails due to missing write permissions in /etc/ssl
	# revert this patch for make test
	patch -p0 -R -i $srcdir/ca-dir.patch
	make test
	patch -p0 -i $srcdir/ca-dir.patch
}

package() {
	cd $srcdir/$_basename-$_ver
	make INSTALL_PREFIX=$pkgdir MANDIR=/usr/share/man MANSUFFIX=ssl install_sw install_ssldirs install_man_docs
	install -D -m644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
