# Maintainer: Peter Vasil <mail@petervasil.net>
# Contributor: Lucas De Marchi <lucas.de.marchi@gmail.com>
# Contributor: Matthias Meulien orontee@gmail.com

pkgname=global
pkgver=6.5.6
pkgrel=1
pkgdesc="A source code tag system"
arch=('i686' 'x86_64')
url="http://www.gnu.org/software/global/"
license=('GPL')
depends=('libltdl' 'bash' 'perl')
optdepends=('idutils' 'ctags' 'python-pygments' 'emacs' 'vim')
makedepends=('python')
options=(!emptydirs !libtool)
source=(http://tamacom.com/global/${pkgname}-${pkgver}.tar.gz)
md5sums=('079b657e5c34ff80fbcde4d1df6d7ded')
sha256sums=('122f9afa69a8daa0f64c12db7f02981fe573f51a163fa3829ed4f832cd281505')

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
  mv "${pkgdir}/usr/share/gtags/gtags.el" "${pkgdir}/usr/share/emacs/site-lisp/gtags.el"
  install -d "${pkgdir}/usr/share/vim/vimfiles/plugin"
  mv "${pkgdir}/usr/share/gtags/gtags.vim" "${pkgdir}/usr/share/vim/vimfiles/plugin/gtags.vim"
  mv "${pkgdir}/usr/share/gtags/gtags-cscope.vim" "${pkgdir}/usr/share/vim/vimfiles/plugin/gtags-cscope.vim"
}
