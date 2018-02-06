# Maintainer: zoe <chp321@gmail.com>

pkgname=kfoldersync
_pkgname=KFolderSync
pkgver=3.4.1
pkgrel=3
pkgdesc="Folder synchronization and backup tool for KDE"
arch=('i686' 'x86_64')
url="https://www.linux-apps.com/content/show.php/${_pkgname}?content=164092"
license=('GPLv2')
depends=('plasma-workspace' 'hicolor-icon-theme' 'kconfigwidgets' 'kdbusaddons' 'kitemviews' 'kwindowsystem' 'kxmlgui')
makedepends=('extra-cmake-modules' 'phonon-qt5-gstreamer')
source=("${pkgname}-${pkgver}.tar.xz::https://www.linux-apps.com/p/1127677/startdownload?file_id=1485353737&file_name=${pkgname}-${pkgver}.tar.xz&file_type=application/x-xz&file_size=49308&url=https%3A%2F%2Fdl.opendesktop.org%2Fapi%2Ffiles%2Fdownloadfile%2Fid%2F1485353737%2Fs%2F72d4af4d5371bf50a1ae4ea6e39c2bf0%2Ft%2F1517951648%2Fu%2F%2F${pkgname}-${pkgver}.tar.xz"
        "${pkgname}.install")
install=${pkgname}.install
md5sums=('33e049d7065cb27382eb7bcb6432b41b' '262fc1597fb332894d1367f510a7f39b')

build()
{
cd ${srcdir}/${pkgname}-${pkgver}
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX=`qtpaths --install-prefix` -DCMAKE_BUILD_TYPE=Release ..
make -j`nproc`
}

package()
{
cd "${srcdir}/${pkgname}-${pkgver}/build"
make  DESTDIR="${pkgdir}" install
}
