# Maintainer: Torsten Keßler <t dot kessler at posteo dot de>
# Contributor: acxz <akashpatel2008 at yahoo dot com>
pkgname=rocprofiler
pkgver=4.3.0
pkgrel=1
pkgdesc="ROC profiler library. Profiling with perf-counters and derived metrics."
arch=('x86_64')
url='https://rocmdocs.amd.com/en/latest/ROCm_Tools/ROCm-Tools.html'
license=('MIT')
depends=('hip-rocclr' 'python')
makedepends=('cmake' 'python-argparse' 'python-cppheaderparser')
options=(!staticlibs strip)
_git='https://github.com/ROCm-Developer-Tools/rocprofiler'
_roctracer='https://github.com/ROCm-Developer-Tools/roctracer'
source=("$pkgname-$pkgver.tar.gz::$_git/archive/rocm-$pkgver.tar.gz"
        "$pkgname-roctracer-$pkgver.tar.gz::$_roctracer/archive/rocm-$pkgver.tar.gz"
        'add_string_header.patch::https://patch-diff.githubusercontent.com/raw/ROCmSoftwarePlatform/hsa-class/pull/2.patch')
sha256sums=('3b876a0e601d2c6ae56ddf2a6027afe45b3533f4445b0c2da748d020b6b00cf2'
            'c3d9f408df8d4dc0e9c0026217b8c684f68e775da80b215fecb3cd24419ee6d3'
            '35c45b367d917b8ecf5d4d738e7761699b115b25530ab5528c8a6a4a49424199')
_dirname="$(basename "$_git")-$(basename "${source[0]}" ".tar.gz")"
_dirtracer="$(basename "$_roctracer")-$(basename "${source[1]}" ".tar.gz")"

prepare() {
    cd "$_dirname"
    patch -Np1 -i "$srcdir/add_string_header.patch"
}

build() {
  cmake -B build -Wno-dev \
        -S "$_dirname" \
        -DCMAKE_INSTALL_PREFIX=/opt/rocm \
        -DPROF_API_HEADER_PATH="$srcdir/$_dirtracer/inc/ext"

  make -C build
}

package() {
  DESTDIR="$pkgdir" make -C build install

  install -d "$pkgdir/usr/bin"
  ln -s "/opt/rocm/rocprofiler/bin/rocprof" "$pkgdir/usr/bin/rocprof"

  install -Dm644 "$_dirname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
