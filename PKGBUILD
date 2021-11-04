# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: Kazuo Teramoto <kaz.rag at gmail dot com>
# Contributor: Rémy Oudompheng <remy@archlinux.org>
# Contributor: Firmicus <francois.archlinux.org>
# Contributor: bender02 at gmx dot com

pkgname=asymptote-git
epoch=2
pkgver=2.71.git.354.gbf21a342
pkgrel=1
pkgdesc="A vector graphics language (like metapost)"
arch=('i686' 'x86_64')
url="https://asymptote.sourceforge.net/"
license=('LGPL3')
depends=('gc' 'python' 'freeglut' 'gsl' 'fftw' 'libsigsegv')
makedepends=('git' 'flex' 'ghostscript' 'imagemagick' 'librsvg')
optdepends=('python-pyqt5:      for the xasy GUI'
            'tix:               for the xasy GUI'
	    'python-cson:       for the xasy GUI')
conflicts=('asymptote')
provides=('asymptote')
source=('git+https://github.com/vectorgraphics/asymptote.git')
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  git describe --tags|sed s+git+.git+|tr - .
}

build() {
  cd ${pkgname%-git}
  ./autogen.sh
  export CXXFLAGS+=" -I${pkgname%-git}"
  ./configure --disable-gc \
	      --disable-gl \
	      --prefix=/usr \
	      --enable-offscreen \
	      --enable-texlive-build
  make all
}

check() {
  cd ${pkgname%-git}
  make check-all
}

package() {
  cd ${pkgname%-git}
  make DESTDIR="${pkgdir}" install-all

  # move vim files to correct place
  install -dm755 "$pkgdir"/usr/share/vim/vimfiles/{ftdetect,syntax}
  install -Dm644 "$pkgdir"/usr/share/asymptote/asy.vim \
	  "$pkgdir"/usr/share/vim/vimfiles/syntax/asy.vim
  install -Dm644 "$pkgdir"/usr/share/asymptote/asy_filetype.vim \
	  "$pkgdir"/usr/share/vim/vimfiles/ftdetect/asy.vim
  rm "$pkgdir"/usr/share/asymptote/asy.vim \
     "$pkgdir"/usr/share/asymptote/asy_filetype.vim
}
