# Maintainer: Sean Greenslade <aur at seangreenslade dot com>
# Contributor: Jon Gjengset
# Contributor: jsteel <mail at jsteel dot org>
# Contributor: andreas_baumann <abaumann at yahoo dot com>
# Contributor: tobias [tobias [at] archlinux.org]
# Contributor: Gaetan Bisson <bisson@archlinux.org>

_pkgbase=mutt
pkgname=${_pkgbase}-slang
pkgver=1.14.1
pkgrel=1
pkgdesc='Small but very powerful text-based mail client - slang version'
url='http://www.mutt.org/'
provides=('mutt')
conflicts=('mutt')
license=('GPL')
backup=('etc/Muttrc')
arch=('x86_64')
optdepends=('perl: for smime_keys'
            'smtp-forwarder: to send mail')
depends=('gpgme' 'slang' 'openssl' 'libsasl' 'gdbm' 'libidn2' 'mime-types' 'krb5')
validpgpkeys=('8975A9B33AA37910385C5308ADEF768480316BDA')
source=("http://ftp.mutt.org/pub/mutt/${_pkgbase}-${pkgver}.tar.gz"{,.asc})
sha256sums=('35d564c335f7364b8a43349fe0115a7cdc8ebf1ba8bf809d3fc51b9828844425'
            'SKIP')

build() {
	cd "${srcdir}/${_pkgbase}-${pkgver}"
	./configure \
		--prefix=/usr \
		--sysconfdir=/etc \
		--enable-debug \
		--enable-gpgme \
		--enable-pop \
		--enable-imap \
		--enable-smtp \
		--enable-hcache \
		--enable-sidebar \
		--enable-autocrypt \
		--with-slang=/usr \
		--with-gss=/usr \
		--with-ssl=/usr \
		--with-sqlite3 \
		--with-sasl \
		--with-idn2 \

	make
}

package() {
	cd "${srcdir}/${_pkgbase}-${pkgver}"
	make DESTDIR="${pkgdir}" install

	rm "${pkgdir}"/etc/mime.types{,.dist}
	install -Dm644 contrib/gpg.rc "${pkgdir}"/etc/Muttrc.gpg.dist
}
