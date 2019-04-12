# Maintainer: Alexander Schnaidt <alex.schnaidt@gmail.com>
# Original Contributor: Gareth R <newtackdesign@gmail.com>
# Contributor: Simon K <simon@booya.at>
# Contributor: James Duley <jagduley gmail>

pkgname=xflr5
pkgver=6.45
pkgrel=1
pkgdesc="An analysis tool for airfoils, wings and planes operating at low Reynolds Numbers."
arch=('i686' 'x86_64')
url="http://www.xflr5.com/xflr5.htm"
license=('GPL')
depends=('qt5-base')
source=("https://downloads.sourceforge.net/project/xflr5/${pkgver}/xflr5_${pkgver}_src.tar.gz")
sha256sums=('b138572ed59a575b5c9b46a44386bfd12b632baf721a5d4a8b7ebce15d6e4174')


build() {
  cd $pkgname
  
  qmake-qt5 PREFIX=/usr
  make
}

package() {
  cd $pkgname

  make INSTALL_ROOT="$pkgdir" install
}

