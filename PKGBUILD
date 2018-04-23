# Maintainer : Daniel Bermond < yahoo-com: danielbermond >

# NOTE:
# In order to build with NCCL support, follow these steps:
#   1) uncomment the nccl line in 'depends'
#   2) in 'build()', change '-DUSE_NCCL:BOOL=OFF' from 'OFF' to 'ON'
#   3) add these options to cmake command line:
#       -DNCCL_INCLUDE_DIR:PATH='/opt/cuda/include'
#       -DNCCL_ROOT_DIR:PATH='/opt/cuda'

pkgname=caffe2-git
pkgver=0.1.11.r7977.g3b63be063
pkgrel=1
epoch=1
pkgdesc='A new lightweight, modular, and scalable deep learning framework (git version, gpu enabled)'
arch=('x86_64')
url='http://caffe2.ai/'
license=('BSD')
depends=(
    # official repositories:
        # required:
            'google-glog' 'protobuf' 'lapack' 'python' 'python-numpy' 'python-protobuf'
            'cuda' 'cudnn'
        # not required but enabled in build:
            'gflags' 'gtest' 'openmp' 'leveldb' 'lmdb' 'numactl' 'openmpi' 'snappy'
            'zeromq' 'hiredis' 'ffmpeg'
        # python:
            'python-flask' 'python-future' 'graphviz' 'python-hypothesis'
            'python-jupyter_core' 'python-matplotlib' 'python-pydot' 'python-yaml'
            'python-requests' 'python-scipy' 'python-setuptools' 'python-six'
            'python-tornado' 'python-gflags' 'python-pyzmq'
    # AUR:
        # not required and disabled in build:
            #'nccl'
        # python:
            'python-nvd3' 'python-scikit-image' 'python-glog' 'python-leveldb'
            'python-lmdb'
)
makedepends=(
    # official repositories:
        'git' 'cmake'
    # AUR:
        'gcc5'
)
provides=('caffe2')
conflicts=('caffe' 'caffe-cpu' 'caffe-git' 'caffe-cpu-git'
           'caffe2' 'caffe2-cpu' 'caffe2-cpu-git')
options=('!emptydirs')
source=(
    # main source:
        'pytorch-git'::'git+https://github.com/pytorch/pytorch.git'
    # git submodules:
        'caffe2-submodule-aten-cpuinfo'::'git+https://github.com/Maratyszcza/cpuinfo'
        'caffe2-submodule-aten-tbb_remote'::'git+https://github.com/01org/tbb#branch=tbb_2018'
        'caffe2-submodule-aten-catch'::'git+https://github.com/catchorg/Catch2.git'
        'caffe2-submodule-nanopb'::'git+https://github.com/nanopb/nanopb.git'
        'caffe2-submodule-pybind11'::'git+https://github.com/pybind/pybind11.git'
        'caffe2-submodule-nccl'::'git+https://github.com/nvidia/nccl.git'
        'caffe2-submodule-cub'::'git+https://github.com/NVlabs/cub.git'
        'caffe2-submodule-eigen'::'git+https://github.com/RLovelett/eigen.git'
        'caffe2-submodule-googletest'::'git+https://github.com/google/googletest.git'
        'caffe2-submodule-nervanagpu'::'git+https://github.com/NervanaSystems/nervanagpu.git'
        'caffe2-submodule-benchmark'::'git+https://github.com/google/benchmark.git'
        'caffe2-submodule-protobuf'::'git+https://github.com/google/protobuf.git'
        'caffe2-submodule-ios-cmake'::'git+https://github.com/Yangqing/ios-cmake.git'
        'caffe2-submodule-NNPACK'::'git+https://github.com/Maratyszcza/NNPACK.git'
        'caffe2-submodule-gloo'::'git+https://github.com/facebookincubator/gloo'
        'caffe2-submodule-NNPACK_deps-pthreadpool'::'git+https://github.com/Maratyszcza/pthreadpool.git'
        'caffe2-submodule-NNPACK_deps-FXdiv'::'git+https://github.com/Maratyszcza/FXdiv.git'
        'caffe2-submodule-NNPACK_deps-FP16'::'git+https://github.com/Maratyszcza/FP16.git'
        'caffe2-submodule-NNPACK_deps-psimd'::'git+https://github.com/Maratyszcza/psimd.git'
        'caffe2-submodule-zstd'::'git+https://github.com/facebook/zstd.git'
        'caffe2-submodule-cpuinfo'::'git+https://github.com/Maratyszcza/cpuinfo.git'
        'caffe2-submodule-python-enum'::'git+https://github.com/PeachPy/enum34.git'
        'caffe2-submodule-python-peachpy'::'git+https://github.com/Maratyszcza/PeachPy.git'
        'caffe2-submodule-python-six'::'git+https://github.com/benjaminp/six.git'
        'caffe2-submodule-ComputeLibrary'::'git+https://github.com/ARM-software/ComputeLibrary.git'
        'caffe2-submodule-onnx'::'git+https://github.com/onnx/onnx.git'
        'caffe2-submodule-ideep'::'git+https://github.com/intel/ideep.git'
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
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

prepare() {
    cd pytorch-git
    
    local _submodule_list="nanopb pybind11 nccl cub eigen googletest nervanagpu benchmark \
                           protobuf ios-cmake NNPACK gloo NNPACK_deps/pthreadpool \
                           NNPACK_deps/FXdiv NNPACK_deps/FP16 NNPACK_deps/psimd zstd \
                           python-enum python-peachpy python-six ComputeLibrary onnx ideep"
                           
    git submodule init
    
    git config --local 'submodule.aten/src/ATen/cpu/cpuinfo.url'        "${srcdir}/caffe2-submodule-aten-cpuinfo"
    git config --local 'submodule.aten/src/ATen/cpu/tbb/tbb_remote.url' "${srcdir}/caffe2-submodule-aten-tbb_remote"
    git config --local 'submodule.aten/src/ATen/utils/catch.url'        "${srcdir}/caffe2-submodule-aten-catch"
    git config --local 'submodule.third-party/cpuinfo.url'              "${srcdir}/caffe2-submodule-cpuinfo"
    
    for _submodule in $_submodule_list
    do
        local _submodule_dir="caffe2-submodule-${_submodule/\//-}"
        git config --local "submodule.third_party/${_submodule}.url" "${srcdir}/${_submodule_dir}"
    done
    
    git submodule update
    
    # fix build with if eigen is installed (use eigen from git submodule)
    local _eigen='  message(STATUS "Using Eigen third party subdirectory for compatibility.")'
    sed -i '/find_package(Eigen3)/s/^/#/' cmake/Dependencies.cmake
    sed -i "/Did[[:space:]]not[[:space:]]find[[:space:]]system[[:space:]]Eigen/s/.*/${_eigen}/" cmake/Dependencies.cmake
}

pkgver() {
    cd pytorch-git
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    cd pytorch-git
    
    local _pythonver="$(python --version | sed 's/^Python[[:space:]]//' | grep -o '^[0-9]*\.[0-9]*')"
    
    mkdir -p build
    cd build
    
    cmake \
        -DBLAS:STRING='Eigen' \
        \
        -DBUILD_BINARY:BOOL='ON' \
        -DBUILD_PYTHON:BOOL='ON' \
        -DBUILD_SHARED_LIBS:BOOL='ON' \
        \
        -DBUILD_TEST:BOOL='OFF' \
        \
        -DCMAKE_COLOR_MAKEFILE:BOOL='ON' \
        -DCMAKE_CXX_COMPILER='/usr/bin/g++-5' \
        -DCMAKE_CXX_FLAGS:STRING="${CXXFLAGS/-fno-plt/}" \
        -DCMAKE_C_COMPILER='/usr/bin/gcc-5' \
        -DCMAKE_C_FLAGS:STRING="${CFLAGS/-fno-plt/}" \
        -DCMAKE_INSTALL_LIBDIR:PATH='lib' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DCMAKE_SKIP_INSTALL_RPATH:BOOL='NO' \
        -DCMAKE_SKIP_RPATH:BOOL='NO' \
        -DCMAKE_VERBOSE_MAKEFILE:BOOL='FALSE' \
        \
        -DCUDA_ARCH_NAME:STRING='Auto' \
        -DCUDA_64_BIT_DEVICE_CODE:BOOL='ON' \
        -DCUDA_ATTACH_VS_BUILD_RULE_TO_CUDA_FILE:BOOL='ON' \
        -DCUDA_BUILD_CUBIN:BOOL='OFF' \
        -DCUDA_BUILD_EMULATION:BOOL='OFF' \
        -DCUDA_HOST_COMPILATION_CPP:BOOL='ON' \
        -DCUDA_HOST_COMPILER:FILEPATH='/usr/bin/gcc-5' \
        -DCUDA_NVCC_EXECUTABLE:FILEPATH='/opt/cuda/bin/nvcc' \
        -DCUDA_PROPAGATE_HOST_FLAGS:BOOL='ON' \
        -DCUDA_SDK_ROOT_DIR:PATH='/opt/cuda' \
        -DCUDA_SEPARABLE_COMPILATION:BOOL='OFF' \
        -DCUDA_TOOLKIT_INCLUDE:PATH='/opt/cuda/include' \
        -DCUDA_TOOLKIT_ROOT_DIR:PATH='/opt/cuda' \
        -DCUDA_USE_STATIC_CUDA_RUNTIME:BOOL='OFF' \
        -DCUDA_VERBOSE_BUILD:BOOL='OFF' \
        -DCUDNN_INCLUDE_DIR:PATH='/opt/cuda/include' \
        -DCUDNN_LIBRARY:FILEPATH='/opt/cuda/lib64/libcudnn.so' \
        -DCUDNN_ROOT_DIR:PATH='/opt/cuda' \
        \
        -DGLOO_STATIC_OR_SHARED:STRING='STATIC' \
        \
        -DOpenCV_DIR:PATH='/usr/share/OpenCV' \
        \
        -DPYTHON_EXECUTABLE:FILEPATH="/usr/bin/python${_pythonver}" \
        -DPYTHON_INCLUDE_DIR:PATH="/usr/include/python${_pythonver}m" \
        -DPYTHON_LIBRARY:FILEPATH="/usr/lib/libpython${_pythonver}m.so" \
        \
        -DUSE_ACL:BOOL='OFF' \
        -DUSE_ASAN:BOOL='OFF' \
        -DUSE_ATEN:BOOL='OFF' \
        -DUSE_CUDA:BOOL='ON' \
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
        -DUSE_NUMA:BOOL='ON' \
        -DUSE_OBSERVERS:BOOL='ON' \
        -DUSE_OPENCL:BOOL='OFF' \
        -DUSE_OPENCV:BOOL='OFF' \
        -DUSE_OPENMP:BOOL='ON' \
        -DUSE_PROF:BOOL='OFF' \
        -DUSE_REDIS:BOOL='ON' \
        -DUSE_ROCKSDB:BOOL='OFF' \
        -DUSE_SNPE:BOOL='OFF' \
        -DUSE_TENSORRT:BOOL='OFF' \
        -DUSE_ZMQ:BOOL='ON' \
        -DUSE_ZSTD:BOOL='ON' \
        \
        -Wno-dev \
        ..
        
    # NOTE:
    # The recommended approach of running make in build() and make install in
    # package() produces two compilations (being the second one unnecessary).
    # A workaround is to suppress make in build() and run only make install
    # in package().
    
    #make
}

package() {
    cd pytorch-git/build
    
    make DESTDIR="$pkgdir" install
    
    # remove unneeded files
    rm -rf "${pkgdir}/usr/include/google"
    rm -rf "${pkgdir}/usr/lib/cmake/protobuf"
    rm -f "$pkgdir"/usr/bin/{protoc,unzstd,zstd{cat,mt,}}
    rm -f "$pkgdir"/usr/include/{{bitcasts,cpuinfo,fp16,fxdiv,nnpack,psimd,pthreadpool,zbuff,zdict,zstd*}.h,{__init__,avx{,2}}.py}
    rm -f "$pkgdir"/usr/lib/lib{{cpuinfo,nnpack,protobuf-lite,protobuf,protoc,pthreadpool,zstd}.a,zstd.so*}
    rm -f "$pkgdir"/usr/lib/pkgconfig/{protobuf-lite,protobuf}.pc
    rm -f "$pkgdir"/usr/share/pkgconfig/libzstd.pc
    rm -f "$pkgdir"/usr/share/man/man1/{unzstd,zstd{cat,}}.1
    
    # license
    cd "${srcdir}/pytorch-git"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 NOTICE  "${pkgdir}/usr/share/licenses/${pkgname}/NOTICE"
}
