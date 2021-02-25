# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=sword-svn
pkgver=r3844
pkgrel=1
epoch=1
pkgdesc="Libraries for Bible programs - svn-version"
arch=('i686' 'x86_64')
url="http://www.crosswire.org/sword/"
license=('GPL')
depends=('curl' 'clucene' 'xapian-core')
makedepends=('subversion')
provides=('sword=1.8.1')
conflicts=('sword=1.8.1')
source=('sword::svn+https://www.crosswire.org/svn/sword/trunk/#revision=3844')
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-svn}"
  local ver="$(svnversion)"
  printf "r%s" "${ver//[[:alpha:]]}"
}

build() {
  cd "${pkgname%-svn}"
  ./autogen.sh
  CXXFLAGS+=' -DU_USING_ICU_NAMESPACE=1'
  ./configure --prefix=/usr --libdir=/usr/lib --sysconfdir=/etc 
  make
}

package() {
  cd "${pkgname%-svn}"
  make DESTDIR="$pkgdir/" install
  make DESTDIR="$pkgdir/" install_config
}
