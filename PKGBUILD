# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: Kazuo Teramoto <kaz.rag at gmail dot com>
# Contributor: Rémy Oudompheng <remy@archlinux.org>
# Contributor: Firmicus <francois.archlinux.org>
# Contributor: bender02 at gmx dot com

pkgname=asymptote-git
epoch=1
pkgver=2.45r332.6427
pkgrel=1
pkgdesc="A vector graphics language (like metapost)"
arch=('i686' 'x86_64')
url="http://asymptote.sourceforge.net/"
license=('GPL3')
depends=('gc' 'librsvg' 'freeglut' 'glu' 'gsl' 'fftw' 'libsigsegv')
makedepends=('git' 'flex' 'ghostscript' 'imagemagick6' 'texlive-plainextra')
optdepends=('python-pyqt5:      for the xasy GUI'
            'python-imaging:    for the xasy GUI'
            'tix:               for the xasy GUI')
conflicts=('asymptote')
provides=('asymptote')
source=('git+https://github.com/vectorgraphics/asymptote.git')
md5sums=('SKIP')
options=('!makeflags')

pkgver() {
  cd ${pkgname%-git}
  printf %s%s $(git describe --tags|sed s+git.+r+|sed s+-+.+g|cut -dg -f1) $(git rev-list --count HEAD)
}

prepare() {
  cd ${pkgname%-git}/GUI
  sed -i '1s+python3+python+' xasyOptions.py xasyFile.py UndoRedoStack.py
}
  
build() {
  cd ${pkgname%-git}
  ./autogen.sh
  ./configure --enable-gc=/usr \
    --prefix=/usr \
    --with-latex=/usr/share/texmf/tex/latex \
    --with-context=/usr/share/texmf/tex/context \
    --enable-offscreen

  make all
}

check() {
  cd ${pkgname%-git}
  make check-all
}

package() {
  cd ${pkgname%-git}
  make -j1 DESTDIR="${pkgdir}" install-all
  sed -i -e 's@env python@env python2@' "$pkgdir"/usr/share/asymptote/GUI/*.py
  # this dir contains png files that are already embedded in the pdf documentation:
  rm -rf "$pkgdir"/usr/share/info/asymptote

  # move vim files to correct place
  install -dm755 "$pkgdir"/usr/share/vim/vimfiles/{ftdetect,syntax}
  mv "$pkgdir"/usr/share/asymptote/asy.vim \
    "$pkgdir"/usr/share/vim/vimfiles/syntax/asy.vim
  mv "$pkgdir"/usr/share/asymptote/asy_filetype.vim \
    "$pkgdir"/usr/share/vim/vimfiles/ftdetect/asy.vim
}
