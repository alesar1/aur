# Maintainer: Peter Vasil <mail@petervasil.net>
# Contributor: Lucas De Marchi <lucas.de.marchi@gmail.com>
# Contributor: Matthias Meulien orontee@gmail.com

pkgname=global
pkgver=6.5.4
pkgrel=2
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
md5sums=('a6693598b4cd0890c648aa2cbfa92fe7')
sha256sums=('af16e0a686a46f759156cb685e25f345680703f43f93af1ce8d834caaf541da6')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  sed -i 's/\.la/.so/g' gtags.conf.in

  # Package idutils from AUR installs lid as lid-idutils
  # See: https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=idutils
  msg "Change idutils lid executable name to lid-idutils"
  sed -i 's/usable("lid")/usable("lid-idutils")/g' global/global.c
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
