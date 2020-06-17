# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>

pkgname=python-onnxruntime
pkgver=1.3.1
pkgdesc='Cross-platform, high performance scoring engine for ML models'
pkgrel=1
arch=(x86_64)
url='https://github.com/microsoft/onnxruntime'
license=(MIT)
depends=(protobuf re2 python-numpy)
makedepends=(git cmake pybind11 python-setuptools nlohmann-json chrono-date)
# not de-vendored libraries
# eigen: API changes a lot since extra/eigen 3.3.7 to the commit onnxruntime uses
# onnx: onnxruntime uses different protobuf files than upstream onnx
# https://github.com/microsoft/onnxruntime/blob/v1.1.2/onnxruntime/core/protobuf/onnx-ml.proto#L250-L251
source=("git+https://github.com/microsoft/onnxruntime#tag=v$pkgver"
        "git+https://gitlab.com/libeigen/eigen.git"
        "git+https://github.com/google/gemmlowp.git"
        "git+https://github.com/google/nsync.git"
        "git+https://github.com/onnx/onnx.git"
        "git+https://github.com/dcleblanc/SafeInt.git"
        "git+https://github.com/microsoft/wil.git"
        build-fixes.patch
        gcc10.diff
        protobuf-debundle.patch)
sha512sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            '8ece04a7f2ffc89aa9da0a34db1febf31a0516dc2271f2fa711e8160577b2195ba746c150ed76506ce378e913be2888947e21d5745e52fe6d248b1d5aa7f2a83'
            'cc4fe39dba1d1565ebea51c90fa81ea18975d12db60468d6508b386d1423e5500b3579bce7c5d633a5504163248f5278aaaca6374b90c282344575b911dd852a'
            'a147afdd18d68f7aa5ba06f69993d06876e9c80bfe42dedf7e279576a2fc19a177f6441122cde905771b57fc747a561d215df8729cd0ca6289cf1fbc398efd30')

prepare() {
  cd onnxruntime

  patch -Np1 -i ../build-fixes.patch
  # part of https://github.com/microsoft/onnxruntime/commit/e86214e5c00ffbb95b85478c111c8eb21de94fe9
  patch -Np1 -i ../gcc10.diff
  patch -Np1 -i ../protobuf-debundle.patch

  git submodule init
  for mod in eigen gemmlowp nsync onnx SafeInt wil; do
    git config submodule.cmake/external/$mod.url "$srcdir"/$mod
    git submodule update cmake/external/$mod
  done
}

build() {
  cd "$srcdir"/onnxruntime
  # Use protobuf-lite instead of full protobuf to workaround symbol conflicts
  # with onnx; see https://github.com/onnx/onnx/issues/1277 for details.
  cmake -B build -S cmake \
    -Donnxruntime_ENABLE_PYTHON=ON \
    -DONNX_CUSTOM_PROTOC_EXECUTABLE=/usr/bin/protoc \
    -Donnxruntime_PREFER_SYSTEM_LIB=ON \
    -Donnxruntime_USE_FULL_PROTOBUF=OFF \
    -Donnxruntime_BUILD_UNIT_TESTS=OFF

  cd build
  make
  python ../setup.py build
}

package() {
  cd onnxruntime/build
  python ../setup.py install --root="$pkgdir" --skip-build --optimize=1

  PY_SITE_DIR="$(python -c 'import site; print(site.getsitepackages()[0])')"
  install -Ddm755 "$pkgdir"/usr/share/licenses/$pkgname
  for f in LICENSE ThirdPartyNotices.txt ; do
    ln -s "$PY_SITE_DIR/onnxruntime/$f" "$pkgdir"/usr/share/licenses/$pkgname/$f
  done
}
