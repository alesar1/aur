# Maintainer: zoe <chp321@gmail.com>

pkgname=kfoldersync
_pkgname=KFolderSync
_id1=1485353737
_id2=8884ea838cec6b64d8bc75d8ac73ae82
_id3=1526499274
_id4=338265
pkgver=3.4.1
pkgrel=5
pkgdesc="Folder synchronization and backup tool for KDE"
arch=('i686' 'x86_64')
url="https://www.linux-apps.com/content/show.php/${_pkgname}?content=164092"
license=('GPLv2')
depends=('plasma-workspace' 'hicolor-icon-theme' 'kconfigwidgets' 'kdbusaddons' 'kitemviews' 'kwindowsystem' 'kxmlgui')
makedepends=('extra-cmake-modules' 'phonon-qt5-gstreamer')
source=("https://dl.opendesktop.org/api/files/downloadfile/id/$_id1/s/$_id2/t/$_id3/u/$_id4/${pkgname}-${pkgver}.tar.xz"
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
