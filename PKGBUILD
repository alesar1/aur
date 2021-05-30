# Maintainer: Alex Kashirin <kashirin.alex@gmail.com>

_group_name="swcdb"
_sub_name="ranger"

pkgname=${_group_name}-${_sub_name}
pkgver=0.5.2
pkgrel=1
pkgdesc="The SWC-DB Ranger Application"
arch=("x86_64")

groups=($_group_name)
provides=(
  swcdbRanger
)

url="https://www.swcdb.org"
license=('GPLv3')


depends=(
  'swcdb-lib'
  'swcdb-lib-fs'
)
makedepends=(
  'git'
  'cmake'
  'make'
  'gcc'
  'asio'
  'swcdb-lib'
  'swcdb-lib-fs'
)
optdepends=(
  'swcdb-lib-fs-broker'
  'swcdb-lib-fs-local'
  'swcdb-lib-fs-ceph'
  'swcdb-lib-fs-hadoop'
  'swcdb-lib-fs-hadoop-jvm'
)

conflicts=()
replaces=()
backup=()
options=()
install=README.md
changelog=


source=(
  $pkgname-$pkgver-source::git+https://github.com/kashirin-alex/swc-db.git#tag=v$pkgver
)
sha256sums=('SKIP')



build() {
  mkdir -p $pkgname-$pkgver-build;
  cd $pkgname-$pkgver-build;

  cmake ../$pkgname-$pkgver-source \
    -DO_LEVEL=3 -DSWC_BUILD_PKG=${_sub_name} \
    -DCMAKE_SKIP_RPATH=ON -DCMAKE_INSTALL_PREFIX=$pkgdir/usr \
    -DCMAKE_BUILD_TYPE=Release;
  make -j$((`grep -c processor < /proc/cpuinfo || echo 1`));
}


package() {
  cd $pkgname-$pkgver-build;
  make install;
}
