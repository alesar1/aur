# Contributor: Taylor Venable <taylor@metasyntax.net>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname='gauche-git'
pkgver=0.9.5.pre1.8764
pkgrel=1
pkgdesc="R5RS Scheme implementation developed to be a handy script interpreter"
arch=('i686' 'x86_64')
url='http://practical-scheme.net/gauche/index.html'
license=('BSD')
depends=('zlib' 'gdbm' 'libatomic_ops')
makedepends=('gauche' 'bash' 'git') # gauche only needed if this is the first build of gauche-git
provides=('gauche')
conflicts=('gauche')
source=('git+https://github.com/shirok/Gauche.git')
md5sums=('SKIP')
install="$pkgname.install"
_gitname='Gauche'
options=('!makeflags' '!emptydirs')

pkgver() {
  cd "$srcdir/$_gitname"
  printf 0.9.5.pre1.%s $(git rev-list --count HEAD)
}

prepare() {
  cd "$srcdir/$_gitname"/lib
  sed -i '130,134d' Makefile.in
}
  
build() {
  cd "$srcdir/$_gitname"
  ./DIST gen
  CC=gcc CONFIG_SHELL=/bin/bash ./configure --prefix=/usr --enable-multibyte=utf-8 \
	      --enable-threads=pthreads 
  make DESTDIR="$pkgdir"
}

package() {
  cd "$srcdir/$_gitname"
  make DESTDIR="$pkgdir" install
  install -D -m644 COPYING $pkgdir/usr/share/licenses/$pkgname/COPYING
}
