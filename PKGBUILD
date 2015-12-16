# Maintainer: Peter Vasil <mail@petervasil.net>
# Contributor: Lucas De Marchi <lucas.de.marchi@gmail.com>
# Contributor: Matthias Meulien orontee@gmail.com

pkgname=global
pkgver=6.5.2
pkgrel=1
pkgdesc="A source code tag system"
arch=('i686' 'x86_64')
url="http://www.gnu.org/software/global/"
license=('GPL')
depends=('libltdl' 'bash' 'perl')
optdepends=('idutils' 'ctags' 'python2-pygments')
options=(!emptydirs !libtool)
install=global.install
source=(http://tamacom.com/global/${pkgname}-${pkgver}.tar.gz)
md5sums=('c154bc9ba77e7630068e2916cb9531c5')
sha256sums=('c0fc831c1a54a5ee4f5fc765a7af90ade773e4fb4763416c0b6d4d2e571b1d1f')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    sed -i 's/\.la/.so/g' gtags.conf.in
}

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	autoreconf -fi
	PYTHON=/usr/bin/python2 ./configure --prefix=/usr --with-exuberant-ctags=/usr/bin/ctags
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

