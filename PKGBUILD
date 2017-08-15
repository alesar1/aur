# Maintainer: Tobias Bachmann <tobachmann@gmx.de>
pkgname=connectome-workbench
pkgver=1.2.3
pkgrel=1
epoch=
pkgdesc="Connectome Workbench is an open source, freely available visualization and discovery tool used to map neuroimaging data, especially data generated by the Human Connectome Project."
arch=('x86_64')
url="http://humanconnectome.org/software/connectome-workbench"
license=('GPL')
depends=('qt5-base')
source=("https://github.com/Washington-University/workbench/archive/v$pkgver.tar.gz"
        "VolumeFile_return_NULL.patch::https://github.com/Washington-University/workbench/commit/aca82aea455bd5f15d6fdaee7c3227c06be45b4a.patch"
        "$pkgname.desktop")
sha256sums=('3e366f4e4a9f1a6213668ca7513348b617c8f61800d5006361bf101cebe7b417'
            '49beca647ba3130c071320c3c66a8ec0cb8adab821b25e757e7f7d9188d52fed'
            'dc8385561d8b65a9cb0179254bc5c0d66a808dcfb2a5a2c11dd1d1716c7b8c23')

prepare() {
	cd "workbench-$pkgver"
	patch -p1 -i "$srcdir/VolumeFile_return_NULL.patch"
}

build() {
    mkdir build
    cd build
    cmake -D CMAKE_INSTALL_PREFIX=/usr -D CMAKE_BUILD_TYPE=Release -D WORKBENCH_MESA_DIR=/usr -D WORKBENCH_USE_QT5=TRUE ../workbench-$pkgver/src
	make
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
