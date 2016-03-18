# Maintainer: Peter Vasil <mail@petervasil.net>
# Contributor: Lucas De Marchi <lucas.de.marchi@gmail.com>
# Contributor: Matthias Meulien orontee@gmail.com

pkgname=global
pkgver=6.5.3
pkgrel=1
pkgdesc="A source code tag system"
arch=('i686' 'x86_64')
url="http://www.gnu.org/software/global/"
license=('GPL')
depends=('libltdl' 'bash' 'perl')
optdepends=('idutils' 'ctags' 'python-pygments')
makedepends=('python')
options=(!emptydirs !libtool)
install=global.install
source=(http://tamacom.com/global/${pkgname}-${pkgver}.tar.gz)
md5sums=('0ca31fc718bb59d3496a4ba32d1ced35')
sha256sums=('336f91f1d4a84469bc37a0dc7e9dc7cde9154cf677bb1bb5cd220c9b41b80302')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    sed -i 's/\.la/.so/g' gtags.conf.in
}

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	autoreconf -fi
	./configure --prefix=/usr --with-exuberant-ctags=/usr/bin/ctags
	make
}

check() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	make -k check
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install

	install -d "${pkgdir}/usr/share/emacs/site-lisp"
	ln -s ../../gtags/gtags.el "${pkgdir}/usr/share/emacs/site-lisp/gtags.el"
}

