# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

_name=tagparser
_reponame=tagparser
pkgname=$_name-doc
pkgver=9.0.0
pkgrel=1
arch=('any')
pkgdesc='C++ library for reading and writing MP4/M4A/AAC (iTunes), ID3, Vorbis, Opus, FLAC and Matroska tags (API documentation)'
license=('GPL')
makedepends=('cmake' 'doxygen' 'dia' 'graphviz' 'c++utilities')
url="https://github.com/Martchus/${_reponame}"
source=("${_name}-${pkgver}.tar.gz::https://github.com/Martchus/${_reponame}/archive/v${pkgver}.tar.gz")
sha256sums=('79915e782b319ffa1f21b3cc895826b6035c197baa003b9417d7574b039a5041')

build() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  cmake \
    -DCMAKE_BUILD_TYPE:STRING='Release' \
    -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
    -DBUILD_SHARED_LIBS:BOOL=ON \
    .
  make ${_name}_apidoc
}

package() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  make DESTDIR="${pkgdir}" install-api-doc
}
