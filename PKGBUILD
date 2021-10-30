# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgbase=duckdb
pkgname=('duckdb' 'python-duckdb')
pkgver=0.3.0
pkgrel=1
pkgdesc="A high-performance analytical database system"
arch=('x86_64')
url="https://duckdb.org"
license=('MIT')
depends=('gcc-libs' 'openssl')
makedepends=('git' 'cmake' 'python-setuptools' 'pybind11' 'python-numpy' 'python-pandas' 'libutf8proc' 'python-pip' 'python-wheel' 'python-setuptools-scm')
conflicts=('duckdb-git')
_commit='46a0fc50aa00ac019aee2157cf3382b85993f728'
source=("$pkgbase::git+https://github.com/duckdb/duckdb.git#commit=$_commit")
b2sums=('SKIP')

pkgver() {
  cd "$pkgbase"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$pkgbase"

  python "scripts/amalgamation.py" --extended

  cmake -S . -B "$srcdir/build" \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_VISUALIZER_EXTENSION=1 \
    -DBUILD_ICU_EXTENSION=1 \
    -DBUILD_TPCH_EXTENSION=1 \
    -DBUILD_TPCDS_EXTENSION=1 \
    -DBUILD_FTS_EXTENSION=1 \
    -DBUILD_HTTPFS_EXTENSION=1 \
    -DBUILD_PARQUET_EXTENSION=1 \
    -DBUILD_BENCHMARKS=1 \
    -DBUILD_REST=1 \
    -DBUILD_TPCE=1 \
    -DAMALGAMATION_BUILD=1
}

build() {
  cmake --build "$srcdir/build"

  python "$srcdir/$pkgbase/tools/pythonpkg/setup.py" build
}

package_duckdb() {
  DESTDIR="$pkgdir" cmake --install build

  # sqlite wrapper
  install -vDm755 -t "$pkgdir/usr/lib" build/tools/sqlite3_api_wrapper/libsqlite3_api_wrapper.so

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgbase" "$pkgbase/LICENSE"
}

package_python-duckdb() {
  pkgdesc+=" (Python API)"
  depends=('python')
  optdepends=('python-numpy' 'python-pandas')

  # library
  python "$pkgbase/tools/pythonpkg/setup.py" install --root="$pkgdir" --optimize=1 --skip-build

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgname" "$pkgbase/LICENSE"

  # remove cruft
  rm -rf "$pkgdir/usr/duckdb" "$pkgdir/usr/"*.list
}
