# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

_reponame=tagparser
pkgname=tagparser
pkgver=11.5.0
pkgrel=1
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
pkgdesc='C++ library for reading and writing MP4/M4A/AAC (iTunes), ID3, Vorbis, Opus, FLAC and Matroska tags'
license=('GPL')
depends=('libc++utilities.so' 'zlib')
makedepends=('cmake' 'ninja' 'iso-codes')
checkdepends=('cppunit' 'openssl')
optdepends=("$pkgname-doc: API documentation")
provides=(libtagparser.so)
url="https://github.com/Martchus/${_reponame}"
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Martchus/${_reponame}/archive/v${pkgver}.tar.gz")
sha256sums=('361401093cd8855ba11403f10658e843417d00894c1af82b720cd106b9d814d2')

prepare() {
  [[ -d tagparser ]] || ln -s "${PROJECT_DIR_NAME:-$_reponame-$pkgver}" tagparser
}

build() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  cmake \
    -G Ninja \
    -DCMAKE_BUILD_TYPE:STRING='Release' \
    -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
    -DBUILD_SHARED_LIBS:BOOL=ON \
    .
  ninja
}

check() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  if [[ $TEST_FILE_PATH ]]; then
    ninja check
  else
    msg2 'Skipping execution of testsuite because the environment variable TEST_FILE_PATH is not set.'
  fi
}

package() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  DESTDIR="${pkgdir}" ninja install
}
