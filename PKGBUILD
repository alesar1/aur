# Maintainer : Daniel Bermond <dbermond@archlinux.org>

pkgname=caffe-cuda
pkgver=1.0
pkgrel=10
pkgdesc='A deep learning framework made with expression, speed, and modularity in mind (with cuda support)'
arch=('x86_64')
url='https://caffe.berkeleyvision.org/'
license=('BSD')
depends=('openblas' 'lapack' 'boost-libs' 'protobuf' 'google-glog' 'gflags'
         'hdf5' 'opencv' 'leveldb' 'lmdb' 'python' 'python-numpy' 'python-pandas'
         'cuda' 'nccl')
optdepends=(
    # official repositories:
        'cython' 'python-scipy' 'python-matplotlib' 'ipython' 'python-h5py'
        'python-networkx' 'python-nose' 'python-dateutil' 'python-protobuf'
        'python-gflags' 'python-yaml' 'python-pillow' 'python-six'
    # AUR:
        'python-leveldb' 'python-scikit-image' 'python-pydotplus'
    # NOTE:
    # python-pydotplus (or python-pydot) is required by python executable 'draw_net.py'
    # https://github.com/BVLC/caffe/blob/1.0/python/caffe/draw.py#L7-L22
)
makedepends=('boost' 'doxygen' 'texlive-core' 'texlive-latexextra' 'ghostscript')
provides=('caffe')
conflicts=('caffe')
source=("caffe-${pkgver}.tar.gz"::"https://github.com/BVLC/caffe/archive/${pkgver}.tar.gz"
        'Makefile.config'
        'caffe-opencv4-fix.patch'::'https://github.com/BVLC/caffe/pull/6625/commits/7f503bd9a19758a173064e299ab9d4cac65ed60f.patch')
sha256sums=('71d3c9eb8a183150f965a465824d01fe82826c22505f7aa314f700ace03fa77f'
            'fa15c69970a6006512319944dc171e92b42b3eb0ea8d0e9e1fb9cf0e4833b04c'
            '2072c8ca1393b53ef280a15c43af940cc9bf1419ae32b3d8a6541b10b8cb50e9')

prepare() {
    cp -af Makefile.config "caffe-${pkgver}"
    patch -d "caffe-${pkgver}" -Np1 -i "${srcdir}/caffe-opencv4-fix.patch"
}

build() {
    make -C "caffe-${pkgver}" all pycaffe test
    rm -rf  "caffe-${pkgver}/doxygen"
    make -C "caffe-${pkgver}" docs distribute
}

check() {
    make -C "caffe-${pkgver}" runtest
}

package() {
    local _pyver
    _pyver="$(python -c 'import sys; print("%s.%s" %sys.version_info[0:2])')"
    
    mkdir -p "$pkgdir"/usr/{bin,include,lib/python"$_pyver"/site-packages,share/doc}
    
    # binaries
    install -m755 "caffe-${pkgver}/distribute/bin"/* "${pkgdir}/usr/bin"
    
    # library
    cp -a "caffe-${pkgver}/distribute/lib"/libcaffe.so* "${pkgdir}/usr/lib"
    chmod 755 "${pkgdir}/usr/lib"/libcaffe.so.*.*.*
    
    # headers
    cp -a "caffe-${pkgver}/distribute/include" "${pkgdir}/usr"
    
    # python
    install -m755 "caffe-${pkgver}/distribute/python"/*.py "${pkgdir}/usr/bin"
    cp -a "caffe-${pkgver}/distribute/python/caffe" "${pkgdir}/usr/lib/python${_pyver}/site-packages"
    
    # proto
    install -D -m644 "caffe-${pkgver}/distribute/proto/caffe.proto" -t "${pkgdir}/usr/share/caffe"
    
    # docs
    cp -a "caffe-${pkgver}/doxygen/html" "${pkgdir}/usr/share/doc/${pkgname}"
    
    # license
    install -D -m644 "caffe-${pkgver}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
