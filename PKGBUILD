# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
pkgname=auctex-git
pkgver=11.88.238.gcb4e33e
pkgrel=1
pkgdesc="TeX/LaTeX writing environment for Emacs - git checkout"
arch=('any')
url="http://savannah.gnu.org/projects/auctex"
license=('GPL3')
depends=('texlive-core' 'emacs')
makedepends=('git' 'texinfo' 'perl')
provides=('auctex')
conflicts=('auctex')
install=auctex.install
backup=(var/auctex/.nosearch)
options=('!makeflags')
source=('git://git.sv.gnu.org/auctex.git')
md5sums=('SKIP')
_gitname='auctex'

pkgver() {
  cd $srcdir/$_gitname
  git describe --tags | cut -c9- | sed 's+[_-]+.+g'
}

build() {
  cd "$srcdir/$_gitname"
  ./autogen.sh
  ./configure --prefix=/usr --localstatedir=/var \
	      --with-texmf-dir=$(dirname $(kpsewhich texmf.cnf))
  make
}

package() {
  cd "$srcdir/$_gitname"
  make DESTDIR="$pkgdir" install
}
