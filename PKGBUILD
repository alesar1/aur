# Maintainer: Daniel Bermond <dbermond@archlinux.org>

# select the desired cuda architecture(s)
# default is to build for all (takes a very long time to build)
_cuda_archs='5.2;5.3;6.0;6.0+PTX;6.1;6.1+PTX;6.2;6.2+PTX;7.0;7.0+PTX;7.2;7.2+PTX;7.5;7.5+PTX;8.0;8.0+PTX'

pkgbase=caffe2
pkgname=('caffe2' 'caffe2-cuda')
_pytorchver=1.6.0 # pytorch stable release version
pkgver="0.8.2_${_pytorchver}"
pkgrel=1
pkgdesc='A new lightweight, modular, and scalable deep learning framework'
arch=('x86_64')
url='https://caffe2.ai/'
license=('BSD')
depends=('google-glog' 'protobuf' 'openmp' 'python' 'python-numpy' 'python-protobuf'
         'python-yaml' 'blas' 'lapack' 'gflags' 'numactl' 'intel-mkl' 'opencv' 'libuv')
optdepends=('python-flask' 'graphviz' 'python-hypothesis' 'python-matplotlib'
            'python-pydot' 'python-nvd3' 'python-yaml' 'python-requests'
            'python-scikit-image' 'python-scipy' 'python-setuptools'
            'python-future' 'python-tornado' 'python-six' 'python-lmdb')
makedepends=('git' 'cmake' 'gtest' 'snappy' 'cuda' 'cudnn' 'nccl' 'pybind11')
conflicts=('python-pytorch')
options=('!emptydirs')
source=("git+https://github.com/pytorch/pytorch.git#tag=v${_pytorchver}"
        'git+https://github.com/pybind/pybind11'
        'git+https://github.com/NVlabs/cub'
        'git+https://github.com/eigenteam/eigen-git-mirror'
        'git+https://github.com/google/googletest'
        'git+https://github.com/google/benchmark'
        'protobuf-protocolbuffers'::'git+https://github.com/protocolbuffers/protobuf'
        'git+https://github.com/Yangqing/ios-cmake'
        'git+https://github.com/Maratyszcza/NNPACK'
        'git+https://github.com/facebookincubator/gloo'
        'git+https://github.com/Maratyszcza/pthreadpool'
        'git+https://github.com/Maratyszcza/FXdiv'
        'git+https://github.com/Maratyszcza/FP16'
        'git+https://github.com/Maratyszcza/psimd'
        'git+https://github.com/facebook/zstd'
        'cpuinfo-pytorch'::'git+https://github.com/pytorch/cpuinfo'
        'git+https://github.com/PeachPy/enum34'
        'git+https://github.com/Maratyszcza/PeachPy'
        'git+https://github.com/benjaminp/six'
        'git+https://github.com/onnx/onnx'
        'git+https://github.com/onnx/onnx-tensorrt'
        'git+https://github.com/shibatch/sleef'
        'git+https://github.com/intel/ideep'
        'git+https://github.com/NVIDIA/nccl.git'
        'git+https://github.com/google/gemmlowp'
        'git+https://github.com/pytorch/QNNPACK'
        'git+https://github.com/intel/ARM_NEON_2_x86_SSE'
        'git+https://github.com/pytorch/fbgemm'
        'git+https://github.com/houseroad/foxi'
        'git+https://github.com/01org/tbb'
        'git+https://github.com/facebookincubator/fbjni'
        'git+https://github.com/google/XNNPACK'
        'git+https://github.com/fmtlib/fmt'
        'git+https://github.com/pytorch/tensorpipe'
        'git+https://github.com/asmjit/asmjit.git'
        'git+https://github.com/01org/mkl-dnn.git'
        'git+https://github.com/emil-e/rapidcheck.git'
        '010-caffe2-fix-include-system-path.patch'
        '020-caffe2-use-system-libuv.patch')
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
            'e3d8ebbed02311d065f32a10e8264b1ad76e8df691d78baac3caa1b5b3f1e9f6'
            '4e8840d3c6311c17ff19184fa5a7dec2d51ad6f0520708616af0f03a6c231648')

prepare() {
    # submodules which clone dir coincides with the submodule name
    local _submodule_list=('pybind11'
                           'cub'
                           'googletest'
                           'benchmark'
                           'protobuf'
                           'ios-cmake'
                           'NNPACK'
                           'gloo'
                           'zstd'
                           'onnx'
                           'onnx-tensorrt'
                           'sleef'
                           'ideep'
                           'QNNPACK'
                           'fbgemm'
                           'foxi'
                           'tbb'
                           'XNNPACK'
                           'fmt'
                           'tensorpipe')
    
    git -C pytorch submodule init
    
    local _submodule
    for _submodule in "${_submodule_list[@]}"
    do
        git -C pytorch config --local "submodule.third_party/${_submodule}.url" "${srcdir}/${_submodule}"
    done
    
    # submodules which clone dir does not coincide with the submodule name
    git -C pytorch config --local submodule.third_party/eigen.url "${srcdir}/eigen-git-mirror"
    git -C pytorch config --local submodule.third_party/protobuf.url "${srcdir}/protobuf-protocolbuffers"
    git -C pytorch config --local submodule.third_party/NNPACK_deps/pthreadpool.url "${srcdir}/pthreadpool"
    git -C pytorch config --local submodule.third_party/NNPACK_deps/FXdiv.url "${srcdir}/FXdiv"
    git -C pytorch config --local submodule.third_party/NNPACK_deps/FP16.url "${srcdir}/FP16"
    git -C pytorch config --local submodule.third_party/NNPACK_deps/psimd.url "${srcdir}/psimd"
    git -C pytorch config --local submodule.third_party/python-enum.url "${srcdir}/enum34"
    git -C pytorch config --local submodule.third_party/python-peachpy.url "${srcdir}/PeachPy"
    git -C pytorch config --local submodule.third_party/python-six.url "${srcdir}/six"
    git -C pytorch config --local submodule.third_party/neon2sse.url "${srcdir}/ARM_NEON_2_x86_SSE"
    git -C pytorch config --local submodule.third_party/nccl/nccl.url "${srcdir}/nccl"
    git -C pytorch config --local submodule.third_party/gemmlowp/gemmlowp.url "${srcdir}/gemmlowp"
    git -C pytorch config --local submodule.android/libs/fbjni.url "${srcdir}/fbjni"
    
    # special case (upstream uses third-party instead of third_party)
    git -C pytorch config --local submodule.third-party/cpuinfo.url "${srcdir}/cpuinfo-pytorch"
    
    git -C pytorch submodule update
    
    # fbgemm submodules
    git -C pytorch/third_party/fbgemm submodule init
    git -C pytorch/third_party/fbgemm config --local submodule.third_party/asmjit.url "${srcdir}/asmjit"
    git -C pytorch/third_party/fbgemm config --local submodule.third_party/cpuinfo.url "${srcdir}/cpuinfo-pytorch"
    git -C pytorch/third_party/fbgemm config --local submodule.third_party/googletest.url "${srcdir}/googletest"
    git -C pytorch/third_party/fbgemm submodule update
    
    # ideep submodules
    git -C pytorch/third_party/ideep submodule init
    git -C pytorch/third_party/ideep config --local submodule.mkl-dnn.url "${srcdir}/mkl-dnn"
    git -C pytorch/third_party/ideep config --local submodule.tests/googletest.url "${srcdir}/googletest"
    git -C pytorch/third_party/ideep config --local submodule.tests/rapidcheck.url "${srcdir}/rapidcheck"
    git -C pytorch/third_party/ideep submodule update
    
    patch -d pytorch -Np1 -i "${srcdir}/010-caffe2-fix-include-system-path.patch"
    patch -d pytorch -Np1 -i "${srcdir}/020-caffe2-use-system-libuv.patch"
}

build() {
    local _common_opts=('..'
                        '-DBLAS:STRING=Eigen'
                        '-DBUILD_BINARY:BOOL=ON'
                        '-DBUILD_CUSTOM_PROTOBUF:BOOL=OFF'
                        '-DBUILD_SHARED_LIBS:BOOL=ON'
                        '-DCMAKE_BUILD_TYPE:STRING=None'
                        '-DCMAKE_INSTALL_LIBDIR:PATH=lib'
                        '-DCMAKE_INSTALL_PREFIX:PATH=/usr'
                        '-DCMAKE_SKIP_INSTALL_RPATH:BOOL=YES'
                        '-DCXX_AVX2_FOUND:BOOL=FALSE'
                        '-DCXX_AVX_FOUND:BOOL=FALSE'
                        '-DC_AVX2_FOUND:BOOL=FALSE'
                        '-DC_AVX_FOUND:BOOL=FALSE'
                        '-DUSE_GFLAGS:BOOL=ON'
                        '-DUSE_GLOG:BOOL=ON'
                        '-DUSE_OPENCV:BOOL=ON'
                        '-Wno-dev')
    
    # caffe2-cuda
    cmake -B build-cuda -S pytorch \
        "${_common_opts[@]}" \
        -DCMAKE_CXX_COMPILER:FILEPATH='/opt/cuda/bin/g++' \
        -DCMAKE_C_COMPILER:FILEPATH='/opt/cuda/bin/gcc' \
        -DCUDA_HOST_COMPILER:FILEPATH='/opt/cuda/bin/gcc' \
        -DCUDA_NVCC_FLAGS:STRING='-Xfatbin -compress-all' \
        -DTORCH_CUDA_ARCH_LIST="$_cuda_archs" \
        -DUSE_CUDA:BOOL='ON' \
        -DUSE_CUDNN:BOOL='ON' \
        -DUSE_METAL:BOOL='OFF' \
        -DUSE_NCCL:BOOL='ON' \
        -DUSE_SYSTEM_NCCL:BOOL='ON'
    ## fix: avoid a second compilation in package()
    sed -i 's/^preinstall:[[:space:]]all/preinstall:/' build-cuda/Makefile
    make -C build-cuda
    
    # caffe2 (cpu only, without cuda support)
    cmake -B build-cpu-only -S pytorch "${_common_opts[@]}" -DUSE_CUDA:BOOL='OFF' -DUSE_NCCL:BOOL='OFF'
    make -C build-cpu-only
}

_package_common() {
    make -C "$1" DESTDIR="$pkgdir" install
    
    # remove unneeded files
    rm -f  "$pkgdir"/usr/include/*.h*
    rm -rf "$pkgdir"/usr/share/ATen
    local _dir
    local _file
    while read -r -d '' _dir
    do
        rm -r "$_dir"
    done < <(find "${pkgdir}/usr"/{include,share/doc} -mindepth 1 -maxdepth 1 -type d ! -name 'caffe*' ! -name 'c10*' \
                 ! -name 'TH*' ! -name 'torch' ! -name 'tensorpipe' -print0)
    while read -r -d '' _dir
    do
        rm -r "$_dir"
    done < <(find "${pkgdir}/usr"/{lib,share}/cmake -mindepth 1 -maxdepth 1 -type d ! -name 'Caffe*' ! -name 'Torch' \
                 ! -name 'tensorpipe' -print0)
    while read -r -d '' _file
    do
        rm "$_file"
    done < <(find -L "${pkgdir}/usr/lib" -mindepth 1 -maxdepth 1 -type f ! -name '*c10*.so*' ! -name '*caffe*' \
                 ! -name '*shm*' ! -name '*torch*.so*' ! -name '*tensorpipe*' -print0)
    
    # license
    install -D -m644 pytorch/{LICENSE,NOTICE} -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_caffe2-cuda() {
    pkgdesc+=' (with cuda support)'
    depends+=('cuda' 'cudnn' 'nccl')
    provides=('caffe2')
    conflicts+=('caffe2')
    
    _package_common 'build-cuda'
}

package_caffe2() {
    pkgdesc+=' (cpu only)'
    provides=('caffe2-cpu')
    conflicts+=('caffe2-cpu')
    replaces=('caffe2-cpu')
    
    _package_common 'build-cpu-only'
}
