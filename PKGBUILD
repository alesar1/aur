# Maintainer: Aleksandar Trifunović <akstrfn at gmail dot com>

_pkgname=LightGBM
pkgbase=lightgbm
pkgname=("${pkgbase}" "python-${pkgbase}")
pkgver=2.1.2
pkgrel=1
pkgdesc="Distributed gradient boosting framework based on decision tree algorithms."
arch=('x86_64')
url="https://github.com/Microsoft/LightGBM"
license=('MIT')
depends=('boost-libs' 'ocl-icd' 'openmpi')
makedepends=('boost' 'cmake' 'opencl-headers' 'python-setuptools')
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('2687a6379f9f438eabb2f460f7302bfeb765ff6f283528b821541d83622e80e6')

build() {
    cd "${_pkgname}-${pkgver}"
    cmake -H. -Bbuild \
        -DCMAKE_C_FLAGS:STRING="${CFLAGS}" \
        -DCMAKE_CXX_FLAGS:STRING="${CXXFLAGS}" \
        -DCMAKE_EXE_LINKER_FLAGS:STRING="${LDFLAGS}" \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DUSE_OPENMP=ON \
        -DUSE_GPU=ON \
        -DUSE_MPI=ON \

    cmake --build build
}

package_lightgbm() {
    cd "${_pkgname}-${pkgver}"
    cmake --build build -- DESTDIR="${pkgdir}" install
    install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_python-lightgbm() {
    depends=('lightgbm' 'python-numpy' 'python-scipy' 'python-scikit-learn')

    cd "${_pkgname}-${pkgver}/python-package"
    # use library from /usr/lib instead of making a copy
    sed -i 's/..\/..\/lib\//\/usr\/lib\//' lightgbm/libpath.py
    python setup.py install --root="$pkgdir/" --optimize=1 --gpu --mpi --precompile
    rm "$pkgdir/usr/lib/python3.6/site-packages/lightgbm/lib_lightgbm.so"
}
