# Maintainer: Aniket-Pradhan aniket17133@iiitd.ac.in

pkgname=alpine
pkgver=2.21
pkgrel=1
pkggit=3443fe5
arch=("x86_64")
pkgdesc="Apache licensed PINE mail user agent"
url="http://repo.or.cz/alpine.git"
license=("APACHE")
depends=("libldap" "krb5" "gettext")
optdepends=("aspell: for spell-checking support"
			"hunspell: for spell-checking support"
			"topal: glue program that links GnuPG and alpine")
provides=("pine")
conflicts=("pine" "re-alpine")
replaces=("pine")
options=("!makeflags")
source=(https://repo.or.cz/alpine.git/snapshot/3443fe5fcfcb33d3a2510111855e619632de57df.tar.gz)

build() {
	cd "${srcdir}/${pkgname}-${pkggit}"

	# Configure Alpine
	LIBS+="-lpam -lkrb5 -lcrypto" ./configure --prefix=/usr \
	--without-passfile --without-tcl --disable-shared \
	--with-system-pinerc=/etc/${pkgname}.d/pine.conf \
	--with-system-fixed-pinerc=/etc/${pkgname}.d/pine.conf.fixed

	# Build Alpine
	make
}


package() {
	cd "${srcdir}/${pkgname}-${pkggit}"

	# Install Alpine
	make DESTDIR="${pkgdir}" install
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

md5sums=('59360da211af2c6c06241ea560e912f8')
