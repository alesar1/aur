# Maintainer: Maarten van Gompel <proycon at anaproy dot nl>
pkgname=uctodata
pkgver=0.8
pkgrel=1
pkgdesc="An advanced rule-based (regular-expression) and unicode-aware tokenizer for various languages. Tokenization is an essential first step in any NLP pipeline. This package contains the necessary data."
arch=('any')
license=('GPL3')
makedepends=('libtool' 'autoconf' 'autoconf-archive')
options=(!libtool)
_gituser="LanguageMachines"
_gitname="uctodata"
url="https://languagemachines.github.io/ucto"
source=(https://github.com/LanguageMachines/uctodata/archive/v0.8.tar.gz)
md5sums=(f3d164c05acc0c6b18e83800b693f4b3)

build() {
  cd $srcdir/$pkgname-$pkgver
  bash bootstrap.sh
  ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var
  make
}

package() {
  cd $srcdir/$pkgname-$pkgver
  make DESTDIR=$pkgdir install
}
