# Maintainer: Guoyi Zhang <myname at malacology dot net>

pkgname=iqtree
_pkgname=iqtree2
pkgver=2.1.2
pkgrel=4
pkgdesc="Efficient phylogenomic software by maximum likelihood; multicore version (OMP). https://doi.org/10.1093/molbev/msaa015"
arch=(x86_64)
url="https://github.com/iqtree/iqtree2"
license=('GPL2')
depends=('boost' 'eigen' 'gcc-libs' 'zlib')
makedepends=('cmake' 'make' 'gcc' 'git')
source=("git+$url.git#tag=v${pkgver}")
md5sums=('SKIP')

prepare() {
  cd $_pkgname
  git submodule update --init --recursive
}

build() {
  cd $_pkgname
  mkdir -p build && cd build
  cmake -DIQTREE_FLAGS=omp ..
  make
}

package() {
  cd $_pkgname/build 
  chmod +x $_pkgname
  install -Dm 755 $_pkgname ${pkgdir}/usr/bin/$pkgname
}
