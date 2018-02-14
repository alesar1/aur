# Maintainer : Daniel Bermond < yahoo-com: danielbermond >

pkgname=caffe2-cpu-git
pkgver=0.8.1.r1105.g867d3ce1f
pkgrel=1
pkgdesc='A new lightweight, modular, and scalable deep learning framework (git version, cpu only)'
arch=('i686' 'x86_64')
url='https://caffe2.ai/'
license=('APACHE')
depends=(
    # official repositories:
        # required:
            'google-glog' 'protobuf' 'lapack' 'python' 'python-numpy' 'python-protobuf'
        # not required but enabled in build:
            'gflags' 'gtest' 'openmp' 'leveldb' 'lmdb' 'openmpi' 'snappy' 'zeromq'
            'hiredis' 'ffmpeg'
        # python:
            'python-flask' 'python-future' 'graphviz' 'python-hypothesis'
            'python-jupyter_core' 'python-matplotlib' 'python-pydot' 'python-yaml'
            'python-requests' 'python-scipy' 'python-setuptools' 'python-six'
            'python-tornado' 'python-gflags' 'python-pyzmq'
    # AUR:
        # python:
            'python-nvd3' 'python-scikit-image' 'python-glog' 'python-leveldb'
            'python-lmdb'
)
makedepends=('git' 'cmake')
provides=('caffe2-cpu')
conflicts=('caffe' 'caffe-cpu' 'caffe-git' 'caffe-cpu-git'
           'caffe2' 'caffe2-git' 'caffe2-cpu')
options=('!emptydirs')
source=(
    # main source:
        "$pkgname"::'git+https://github.com/caffe2/caffe2.git'
    # git submodules:
        'submodule-pybind11'::'git+https://github.com/pybind/pybind11.git'
        'submodule-nccl'::'git+https://github.com/nvidia/nccl.git'
        'submodule-cub'::'git+https://github.com/NVlabs/cub.git'
        'submodule-eigen'::'git+https://github.com/RLovelett/eigen.git'
        'submodule-googletest'::'git+https://github.com/google/googletest.git'
        'submodule-nervanagpu'::'git+https://github.com/NervanaSystems/nervanagpu.git'
        'submodule-benchmark'::'git+https://github.com/google/benchmark.git'
        'submodule-protobuf'::'git+https://github.com/google/protobuf.git'
        'submodule-android-cmake'::'git+https://github.com/Yangqing/android-cmake.git'
        'submodule-ios-cmake'::'git+https://github.com/Yangqing/ios-cmake.git'
        'submodule-NNPACK'::'git+https://github.com/Maratyszcza/NNPACK.git'
        'submodule-gloo'::'git+https://github.com/facebookincubator/gloo'
        'submodule-NNPACK_deps-pthreadpool'::'git+https://github.com/Maratyszcza/pthreadpool.git'
        'submodule-NNPACK_deps-FXdiv'::'git+https://github.com/Maratyszcza/FXdiv.git'
        'submodule-NNPACK_deps-FP16'::'git+https://github.com/Maratyszcza/FP16.git'
        'submodule-NNPACK_deps-psimd'::'git+https://github.com/Maratyszcza/psimd.git'
        'submodule-aten'::'git+https://github.com/zdevito/ATen.git'
        'submodule-zstd'::'git+https://github.com/facebook/zstd.git'
        'submodule-cpuinfo'::'git+https://github.com/Maratyszcza/cpuinfo.git'
        'submodule-python-enum'::'git+https://github.com/PeachPy/enum34.git'
        'submodule-python-peachpy'::'git+https://github.com/Maratyszcza/PeachPy.git'
        'submodule-python-six'::'git+https://github.com/benjaminp/six.git'
)
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

prepare() {
    cd "$pkgname"
    local _submodule_list="pybind11 nccl cub eigen googletest nervanagpu benchmark \
                           protobuf android-cmake ios-cmake NNPACK gloo \
                           NNPACK_deps/pthreadpool NNPACK_deps/FXdiv NNPACK_deps/FP16 \
                           NNPACK_deps/psimd aten zstd cpuinfo python-enum python-peachpy \
                           python-six"
    git submodule init
    for _submodule in $_submodule_list
    do
        local _submodule_dir="submodule-$(printf '%s' "${_submodule}" | tr '/' '-')"
        git config --local "submodule.third_party/${_submodule}.url" "${srcdir}/${_submodule_dir}"
    done
    unset _submodule
    git submodule update
}

pkgver() {
    cd "$pkgname"
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    cd "$pkgname"
    
    mkdir -p build
    cd build
    
    local _pythonver="$(python --version | sed 's/^Python[[:space:]]//' | grep -o '^[0-9]*\.[0-9]*')"
    
    cmake \
        -DBLAS:STRING='Eigen' \
        \
        -DBUILD_BINARY:BOOL='ON' \
        -DBUILD_DOCS:BOOL='OFF' \
        -DBUILD_PYTHON:BOOL='ON' \
        -DBUILD_SHARED_LIBS:BOOL='ON' \
        \
        -DBUILD_TEST:BOOL='OFF' \
        \
        -DCMAKE_BUILD_TYPE:STRING='Release' \
        -DCMAKE_COLOR_MAKEFILE:BOOL='ON' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DCMAKE_SKIP_INSTALL_RPATH:BOOL='NO' \
        -DCMAKE_SKIP_RPATH:BOOL='NO' \
        -DCMAKE_VERBOSE_MAKEFILE:BOOL='FALSE' \
        \
        -DPYTHON_EXECUTABLE:FILEPATH="/usr/bin/python${_pythonver}" \
        -DPYTHON_INCLUDE_DIR:PATH="/usr/include/python${_pythonver}m" \
        -DPYTHON_LIBRARY:FILEPATH="/usr/lib/libpython${_pythonver}m.so" \
        \
        -DUSE_ATEN:BOOL='ON' \
        -DUSE_ASAN:BOOL='ON' \
        -DUSE_CUDA:BOOL='OFF' \
        -DUSE_FFMPEG:BOOL='ON' \
        -DUSE_GFLAGS:BOOL='ON' \
        -DUSE_GLOG:BOOL='ON' \
        -DUSE_GLOO:BOOL='ON' \
        -DUSE_LEVELDB:BOOL='ON' \
        -DUSE_LITE_PROTO:BOOL='OFF' \
        -DUSE_LMDB:BOOL='ON' \
        -DUSE_METAL:BOOL='OFF' \
        -DUSE_MOBILE_OPENGL:BOOL='OFF' \
        -DUSE_MPI:BOOL='ON' \
        -DUSE_NCCL:BOOL='OFF' \
        -DUSE_NERVANA_GPU:BOOL='OFF' \
        -DUSE_NNAPI:BOOL='OFF' \
        -DUSE_NNPACK:BOOL='ON' \
        -DUSE_OBSERVERS:BOOL='ON' \
        -DUSE_OPENCV:BOOL='OFF' \
        -DUSE_OPENMP:BOOL='ON' \
        -DUSE_REDIS:BOOL='ON' \
        -DUSE_ROCKSDB:BOOL='OFF' \
        -DUSE_THREADS:BOOL='ON' \
        -DUSE_ZMQ:BOOL='ON' \
        \
        -Wno-dev \
        ..
    make
}

package() {
    cd "${pkgname}/build"
    
    make DESTDIR="$pkgdir" install
    
    [ "$CARCH" = 'x86_64' ] && _architecture='64'
    
    rm -f "$pkgdir"/usr/include/{{bitcasts,cpuinfo,fp16,fxdiv,nnpack,psimd,pthreadpool}.h,{__init__,avx{,2}}.py}
    
    rm -f "$pkgdir"/usr/lib"$_architecture"/lib{cpuinfo,nnpack,pthreadpool}.a
    
    # copyright notice
    cd "${srcdir}/${pkgname}"
    install -D -m644 NOTICE "${pkgdir}/usr/share/licenses/${pkgname}/NOTICE"
}
