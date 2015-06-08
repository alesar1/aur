# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>
# Contributor: Xiao-Long Chen <chenxiaolong@cxl.epac.to>
# Contributor: Jakub Schmidtke <sjakub-at-gmail-dot-com>
# Contributor: mosra <mosra@centrum.cz>

pkgname=kdevplatform-git
pkgver=1.90.90.r12542.28d895e
pkgrel=1
pkgdesc="A C/C++ development platform for KDE. (GIT Version)"
arch=(i686 x86_64)
url="http://www.kdevelop.org/"
license=(GPL)
groups=(kde)
depends=('qt5-quick1' 'ktexteditor' 'threadweaver' 'kcmutils' 'kdelibs4support' 'knewstuff'
         'knotifyconfig'  'grantlee-qt5' 'libkomparediff2' 'hicolor-icon-theme')
makedepends=('cmake' 'boost' 'git' 'extra-cmake-modules' 'kdoctools' 'subversion')
optdepends=('kompare-git: difference checking'
            'subversion: Subversion plugin')
provides=('kdevplatform')
conflicts=('kdevplatform')
source=('git+git://anongit.kde.org/kdevplatform')
sha1sums=('SKIP')
install='kdevplatform-git.install'

pkgver() {
  cd kdevplatform
  _ver="$(cat CMakeLists.txt | grep -e KDEVPLATFORM_VERSION_MAJOR -e KDEVPLATFORM_VERSION_MINOR -e KDEVPLATFORM_VERSION_PATCH | head -n3 | cut -d ' ' -f2 | tr -d ')')"
  echo "$(echo ${_ver} | tr ' ' .).r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../kdevplatform \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIB_INSTALL_DIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  make -C build DESTDIR="${pkgdir}" install
}
