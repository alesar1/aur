# Maintainer: Tobias Bachmann <tobachmann@gmx.de>
pkgname=connectome-workbench
pkgver=1.4.0
pkgrel=1
pkgdesc="Connectome Workbench is an open source, freely available visualization and discovery tool used to map neuroimaging data, especially data generated by the Human Connectome Project."
arch=('x86_64')
url="http://humanconnectome.org/software/connectome-workbench"
license=('GPL')
depends=('qt5-base')
source=("https://github.com/Washington-University/workbench/archive/v$pkgver.tar.gz"
        "$pkgname.desktop"
	"001-add_missing_annotation.patch")
sha256sums=('b782b913edee3386c6f0217f83369bff5ff50ac362696772dd9da4ff2b94f7d7'
            'dc8385561d8b65a9cb0179254bc5c0d66a808dcfb2a5a2c11dd1d1716c7b8c23'
    	    'bd431e28870a2555af2644c9ac3eab51e2820d623f222da6ba353f6142251956')

prepare() {
  cd "workbench-$pkgver"
  patch -Np1 -i "${srcdir}"/001-add_missing_annotation.patch
}

build() {
  mkdir build
  cd build
  cmake -D CMAKE_INSTALL_PREFIX=/usr -D CMAKE_BUILD_TYPE=Release -D WORKBENCH_MESA_DIR=/usr -D WORKBENCH_USE_QT5=TRUE ../workbench-$pkgver/src
  make -j $(nproc)
}

check() {
  cd build
  ctest
}

package() {
  cd build
  make DESTDIR="$pkgdir/" install
  mkdir -p $pkgdir/usr/share/$pkgname/icons
  install ../workbench-$pkgver/icons/linux/workbench_128x128x32.png $pkgdir/usr/share/$pkgname/icons/workbench_128x128x32.png
  mkdir -p $pkgdir/usr/share/applications
  install ../../$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
}

post_install() {
  update-desktop-database
}
