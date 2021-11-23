# Maintainer : Daniel Bermond <dbermond@archlinux.org>
# Contributor: Micah Chambers <micahc.vt@gmail.com>

pkgname=caffe
pkgver=1.0
pkgrel=16
pkgdesc='A deep learning framework made with expression, speed, and modularity in mind (cpu only)'
arch=('x86_64')
url='https://caffe.berkeleyvision.org/'
license=('BSD')
depends=('openblas' 'lapack' 'boost-libs' 'protobuf' 'google-glog' 'gflags'
         'hdf5' 'opencv' 'leveldb' 'lmdb' 'python' 'python-numpy' 'python-pandas')
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
provides=('caffe-cpu')
conflicts=('caffe-cpu')
replaces=('caffe-cpu')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/BVLC/caffe/archive/${pkgver}.tar.gz"
        'Makefile.config'
        'caffe-1.0-opencv4-fix.patch')
sha256sums=('71d3c9eb8a183150f965a465824d01fe82826c22505f7aa314f700ace03fa77f'
            'd2a96f1cc984a2258b9f44a9dec8ec994796bd80f5f29b8f7bbb9a9de9f2f19b'
            '2072c8ca1393b53ef280a15c43af940cc9bf1419ae32b3d8a6541b10b8cb50e9')

prepare() {
    cp -af Makefile.config "${pkgname}-${pkgver}"
    
    # fix build with opencv 4
    # https://github.com/BVLC/caffe/pull/6625
    patch -d "${pkgname}-${pkgver}" -Np1 -i "${srcdir}/caffe-1.0-opencv4-fix.patch"
}

build() {
    make -C "${pkgname}-${pkgver}" all pycaffe test
    rm -rf  "${pkgname}-${pkgver}/doxygen"
    make -C "${pkgname}-${pkgver}" docs distribute
}

check() {
    make -C "${pkgname}-${pkgver}" runtest
}

package() {
    cd "${pkgname}-${pkgver}/distribute"
    
    local _pyver
    _pyver="$(python -c 'import sys; print("%s.%s" %sys.version_info[0:2])')"
    
    mkdir -p "$pkgdir"/usr/{bin,include,lib/python"$_pyver"/site-packages,share/doc}
    
    # binaries
    install -m755 bin/* "${pkgdir}/usr/bin"
    
    # library
    cp -a lib/libcaffe.so* "${pkgdir}/usr/lib"
    chmod 755 "${pkgdir}/usr/lib"/libcaffe.so.*.*.*
    
    # headers
    cp -a include "${pkgdir}/usr"
    
    # python
    install -m755 python/*.py "${pkgdir}/usr/bin"
    cp -a python/caffe "${pkgdir}/usr/lib/python${_pyver}/site-packages"
    
    # proto
    install -D -m644 proto/caffe.proto -t "${pkgdir}/usr/share/caffe"
    
    cd "${srcdir}/${pkgname}-${pkgver}"
    
    # docs
    cp -a doxygen/html "${pkgdir}/usr/share/doc/${pkgname}"
    
    # license
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
