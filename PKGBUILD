# Maintainer: dhead666 <myfoolishgames@gmail.com>
# https://github.com/dhead666/archlinux-pkgbuilds
#
# package version generated with # git log -1 --date=short --format="%cd.%h" | tr -d '-'

pkgname=kodi-devel-pvr-pctv
_gitname=pvr.pctv
pkgver=20150720.ff5d536
_gitver=ff5d536042e667ba3a91a628fa9b3d4c50d260f4
_jsoncpp_ver=0.5.0
pkgrel=2
pkgdesc='PCTV PVR client addon for Kodi'
arch=('i686' 'x86_64')
url="https://github.com/kodi-pvr/$_gitname"
license=('GPL')
groups=('kodi-devel')
makedepends=('cmake' 'kodi-devel-platform' 'kodi-devel-libplatform')
depends=('kodi-devel' 'jsoncpp')
source=(
  "https://github.com/kodi-pvr/$_gitname/archive/$_gitver.tar.gz"
  "http://garr.dl.sourceforge.net/project/jsoncpp/jsoncpp/0.5.0/jsoncpp-src-$_jsoncpp_ver.tar.gz"
  "jsoncpp-cmakelists.patch")
md5sums=(
  'SKIP'
  '24482b67c1cb17aac1ed1814288a3a8f'
  'SKIP')

_prefix='/usr'

prepare() {
  msg "Building JsonCpp"

  cd "$srcdir/jsoncpp-src-$_jsoncpp_ver"
  patch -p1 -i "$srcdir/jsoncpp-cmakelists.patch"
  mkdir -p build && pushd build
  cmake \
    -DCMAKE_INSTALL_PREFIX=$_prefix \
    -DCMAKE_BUILD_TYPE=Release \
    ..
  make
  mkdir ../out
  make DESTDIR="../out" install
  popd
}

build() {
  msg "Starting make..."

  cd "$srcdir/$_gitname-$_gitver"
  mkdir -p build && pushd build
  cmake \
    -DCMAKE_INSTALL_PREFIX=$_prefix \
    -DJSONCPP_INCLUDE_DIRS="$srcdir/jsoncpp-src-$_jsoncpp_ver/out/usr/include/jsoncpp" \
    -DJSONCPP_LIBRARIES="$srcdir/jsoncpp-src-$_jsoncpp_ver/out/usr/lib" \
    -DCMAKE_BUILD_TYPE=Release \
    ..
  make
  popd
}

package() {
  cd "$srcdir/$_gitname-$_gitver/build"
  make DESTDIR="$pkgdir" install
}
