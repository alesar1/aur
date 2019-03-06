#Maintainer: Mikhail Rudenko <mike.rudenko@gmail.com>

_pkgname=peldd
pkgname=$_pkgname-git
pkgver=r19.5b07cb3
pkgrel=2
pkgdesc='A tool for listing shared object dependencies of a portable executable (PE)'
arch=('x86_64')
url="https://github.com/gsauthof/pe-util"
license=('MIT')
depends=('boost')
makedepends=('cmake' 'git')
source=("$_pkgname::git+https://github.com/gsauthof/pe-util"
        "git://github.com/trailofbits/pe-parse"
        "0001-Fix-search-paths-for-Arch.patch")
md5sums=('SKIP'
         'SKIP'
         '892f4cbac38d0c9edcb6342f260a6002')
provides=($_pkgname)
conflicts=($_pkgname)

prepare() {
  cd $_pkgname
  git submodule init
  git config submodule.pe-parse.url $srcdir/pe-parse
  git submodule update
  patch -p1 -i $srcdir/0001-Fix-search-paths-for-Arch.patch
}

pkgver() {
  cd $_pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  mkdir -p build
  cd build
  cmake ../$_pkgname -DCMAKE_BUILD_TYPE=Release
  make
}

package() {
  cd build
  install -Dm755 $_pkgname "$pkgdir"/usr/bin/$_pkgname
}
