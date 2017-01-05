# Maintainer: Maarten van Gompel <proycon at anaproy dot nl>
pkgname=frog
pkgver=0.13.6
pkgrel=1
pkgdesc="Frog is an integration of memory-based natural language processing (NLP) modules developed for Dutch. It includes a tokenizer, part-of-speech tagger, lemmatizer, morphological analyser, named entity recognition, shallow parser and dependency parser."
arch=('i686' 'x86_64')
license=('GPL3')
depends=('ticcutils>=0.13' 'ucto>=0.9.0' 'libfolia>=1.3' 'icu' 'libxml2'  'frogdata>=0.11' 'timbl' 'mbt')
makedepends=('libtool' 'autoconf')
options=(!libtool)
_gituser="LanguageMachines"
_gitname="frog"
url="http://languagemachines.github.io/frog"
source=(https://github.com/LanguageMachines/frog/archive/v0.13.6.tar.gz)
md5sums=(3381967b5698bb18377b326225919de9)

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
