# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=link-grammar-git
pkgver=5.7.0.r166.g965b0b0f
pkgrel=1
pkgdesc="A Grammar Checking library"
arch=('x86_64')
url="http://www.abisource.com/projects/link-grammar/"
license=('LGPL')
depends=('hunspell' 'sqlite' 'libedit' 'pcre2' 'java-runtime<12')
makedepends=('swig' 'flex' 'graphviz' 'python' 'python2' 'java-environment<12')
conflicts=('link-grammar')
provides=('link-grammar')
source=("git+https://github.com/opencog/link-grammar")
md5sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  git describe --tags | cut -c14- | sed 's+-+.r+' | tr - .
}

build() {
  cd ${pkgname%-git}
  ./autogen.sh
  ./configure --prefix=/usr --disable-python-bindings 
  make
}

package() {
  cd ${pkgname%-git}
  make DESTDIR="${pkgdir}" install
}
