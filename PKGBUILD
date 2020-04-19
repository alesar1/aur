# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

_reponame=reflective-rapidjson
_llvmver=10
pkgname=reflective-rapidjson-git
_name=${pkgname%-git}
pkgver=204.8c032ee
pkgrel=1
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
pkgdesc='Code generator for serializing/deserializing C++ objects to/from JSON using Clang and RapidJSON'
license=('GPL')
depends=('c++utilities-git' 'rapidjson' "llvm-libs>=${_llvmver}.0.0" "llvm-libs<$((_llvmver + 1)).0.0" "clang>=${_llvmver}.0.0" "clang<$((_llvmver + 1)).0.0")
optdepends=("boost: use Boost.Hana instead of code generator"
            "$_name-doc: API documentation")
makedepends=('cmake' 'clang-tools-extra' 'llvm' 'git')
checkdepends=('cppunit' 'boost')
#provides=("${_name}")
#conflicts=("${_name}")
url="https://github.com/Martchus/${_reponame}"
source=("${_reponame}::${MARTCHUS_GIT_URL_PREFIX:-git+https://github.com/Martchus}/${_reponame}.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame}"
  echo "$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame}"
  cmake \
    -DCMAKE_BUILD_TYPE:STRING='Release' \
    -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
    -DCONFIGURATION_NAME:STRING='git' \
    -DCONFIGURATION_PACKAGE_SUFFIX:STRING='-git' \
    -DCONFIGURATION_TARGET_SUFFIX:STRING='git' \
    -DBUILD_SHARED_LIBS:BOOL=ON \
    .
  make
}

check() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame}"
  make check
}

package() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame}"
  make DESTDIR="${pkgdir}" install
}
