# Maintainer: Daniel Bermond <dbermond@archlinux.org>

# NOTE:
# In order to build the package, you need to manually download the TensorRT
# file from NVIDIA's website (registration required). Place the downloaded
# file in the PKGBUILD directory and run makepkg.
# Download website:
# https://developer.nvidia.com/tensorrt/

pkgbase=tensorrt
pkgname=('tensorrt' 'python-tensorrt' 'tensorrt-doc')
pkgver=7.2.3.4
_tensorrt_tag=21.03
_cudaver=11.1
_cudnnver=8.1
_ubuntuver=18.04
_protobuf_ver=3.12.4
_onnx_tag=1.8.1
_graphsurgeonver=0.4.5
_uffver=0.6.9
pkgrel=2
pkgdesc='A platform for high-performance deep learning inference on NVIDIA hardware'
arch=('x86_64')
url='https://github.com/NVIDIA/TensorRT/'
license=('custom:NVIDIA-SLA' 'Apache')
makedepends=('git' 'cmake' 'ninja' 'poppler' "cuda=${_cudaver}" 'cudnn' 'pybind11' 'python'
             'python-onnx' 'python-wheel' 'absl-py' 'python-scipy' 'python-prettytable'
             'python-pyaml' 'python-pytorch-cuda' 'python-pip' 'zlib')
source=("local://TensorRT-${pkgver}.Ubuntu-${_ubuntuver}.${CARCH}-gnu.cuda-${_cudaver}.cudnn${_cudnnver}.tar.gz"
        "git+https://github.com/NVIDIA/TensorRT.git#tag=${_tensorrt_tag}"
        'protobuf-protocolbuffers'::'git+https://github.com/protocolbuffers/protobuf.git'
        'cub-nvlabs'::'git+https://github.com/NVlabs/cub.git'
        'git+https://github.com/onnx/onnx-tensorrt.git'
        'git+https://github.com/onnx/onnx.git'
        'git+https://github.com/pybind/pybind11.git'
        'git+https://github.com/google/benchmark.git'
        "https://github.com/google/protobuf/releases/download/v${_protobuf_ver}/protobuf-cpp-${_protobuf_ver}.tar.gz"
        '010-tensorrt-use-local-protobuf-sources.patch'
        '020-tensorrt-fix-cub-deprecation-huge-warnings.patch'
        '030-tensorrt-fix-python.patch')
noextract=("protobuf-cpp-${_protobuf_ver}.tar.gz")
sha256sums=('d3a1f478e304b48878604fac70ce7920fece71f9cac62f925c9c59c197f5d087'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'ccfbaaba52f67e0e6536a05f3df3f6618620d255513cfca3a07f5935b624e26b'
            'ea25bb1b188d53cbfbec35d242ab2a2fa8d6009c547c9f5f67bc2f1ad127ceac'
            'e6153bf43c248fb3ed843e41f6b722ff8c3507ad48fe105bfa129b8641741ecf'
            'dd7f4c0ef01baab251886ba01ae59c54b24c7d2fbd7076c50ed3339bf81275a5')

prepare() {
    # tensorrt git submodules
    git -C TensorRT submodule init
    git -C TensorRT config --local submodule.parsers/onnx.url         "${srcdir}/onnx-tensorrt"
    git -C TensorRT config --local submodule.third_party/protobuf.url "${srcdir}/protobuf-protocolbuffers"
    git -C TensorRT config --local submodule.third_party/cub.url      "${srcdir}/cub-nvlabs"
    git -C TensorRT submodule update
    
    # onnx-tensorrt git submodule
    git -C TensorRT/parsers/onnx submodule init
    git -C TensorRT/parsers/onnx config --local submodule.third_party/onnx.url "${srcdir}/onnx"
    git -C TensorRT/parsers/onnx submodule update
    
    # https://github.com/onnx/onnx/issues/2481
    git -C TensorRT/parsers/onnx/third_party/onnx config --local advice.detachedHead false
    git -C TensorRT/parsers/onnx/third_party/onnx checkout "v${_onnx_tag}"
    
    # onnx git submodules
    git -C TensorRT/parsers/onnx/third_party/onnx submodule init
    git -C TensorRT/parsers/onnx/third_party/onnx config --local submodule.third_party/pybind11.url  "${srcdir}/pybind11"
    git -C TensorRT/parsers/onnx/third_party/onnx config --local submodule.third_party/benchmark.url "${srcdir}/benchmark"
    git -C TensorRT/parsers/onnx/third_party/onnx submodule update
    
    # protobuf
    mkdir -p build/third_party.protobuf/src
    cp -a "protobuf-cpp-${_protobuf_ver}.tar.gz" build/third_party.protobuf/src
    
    patch -d TensorRT -Np1 -i "${srcdir}/010-tensorrt-use-local-protobuf-sources.patch"
    patch -d TensorRT -Np1 -i "${srcdir}/020-tensorrt-fix-cub-deprecation-huge-warnings.patch"
    patch -d TensorRT -Np1 -i "${srcdir}/030-tensorrt-fix-python.patch"
}

build() {
    cmake -B build -S TensorRT \
        -DBUILD_ONNX_PYTHON:BOOL='ON' \
        -DBUILD_SAMPLES:BOOL='OFF' \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DTRT_LIB_DIR="${srcdir}/TensorRT-${pkgver}/lib" \
        -DGPU_ARCHS='52 53 60 61 62 70 72 75 80 86' \
        -DPROTOBUF_VERSION="$_protobuf_ver" \
        -DCUDA_VERSION="$_cudaver" \
        -DCUDNN_VERSION="$_cudnnver" \
        -Wno-dev
    make -C build
    
    # python bindings
    local _pyver
    _pyver="$(python -c 'import sys; print("%s.%s" %sys.version_info[0:2])')"
    export PYTHON_MAJOR_VERSION="${_pyver%%.*}"
    export PYTHON_MINOR_VERSION="${_pyver#*.}"
    export TARGET_ARCHITECTURE="$CARCH"
    export TRT_OSSPATH="${srcdir}/TensorRT"
    export EXT_PATH="$srcdir"
    export TRT_NONOSS_ROOT="${srcdir}/TensorRT-${pkgver}"
    cd TensorRT/python
    ./build.sh
    
    # python tools
    local _dir
    for _dir in onnx-graphsurgeon Polygraphy pytorch-quantization
    do
        cd "${srcdir}/TensorRT/tools/${_dir}"
        python setup.py build
    done
    
    # license
    pdftotext -layout "${srcdir}/TensorRT-${pkgver}/doc/pdf/TensorRT-SLA.pdf"
}

package_tensorrt() {
    depends=("cuda=${_cudaver}" 'cudnn')
    
    make -C build DESTDIR="$pkgdir" install
    install -D -m755 "TensorRT-${pkgver}/bin"/* -t "${pkgdir}/usr/bin"
    install -D -m644 build/libnv{caffeparser,infer_plugin}_static.a -t "${pkgdir}/usr/lib"
    cp -dr --no-preserve='ownership' "TensorRT-${pkgver}/include" "${pkgdir}/usr"
    cp -dr --no-preserve='ownership' "TensorRT-${pkgver}/lib"/lib{myelin*,nv{infer,parsers}}{.so*,_static.a} "${pkgdir}/usr/lib"
    
    install -D -m644 "TensorRT-${pkgver}/doc/pdf/TensorRT-SLA.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 "TensorRT-${pkgver}/doc/Acknowledgements.txt" "${pkgdir}/usr/share/licenses/${pkgname}/ACKNOWLEDGEMENTS"
}

package_python-tensorrt() {
    pkgdesc+=' (python bindings and tools)'
    depends=('python' 'tensorrt')
    optdepends=('absl-py: for pytorch_quantization python module'
                'python-numpy: for graphsurgeon, onnx_graphsurgeon, polygraphy, pytorch_quantization and uff python modules'
                'python-onnx: for onnx_graphsurgeon python module'
                'python-prettytable: for uff python module and convert-to-uff tool'
                'python-pyaml: for pytorch_quantization python module'
                'python-pytorch-cuda: for pytorch_quantization python module'
                'python-scipy: for pytorch_quantization python module'
                'python-sphinx-glpi-theme: for pytorch_quantization python module'
                'python-tensorflow-cuda: for graphsurgeon and uff python modules and convert-to-uff tool')
    
    local _pyver
    _pyver="$(python -c 'import sys; print("%s.%s" %sys.version_info[0:2])')"
    export PYTHONHASHSEED='0'
    
    local _trt_major
    local _trt_minor
    local _trt_patch
    local _trt_build
    _trt_major="$(awk '/^#define NV_TENSORRT_MAJOR/ { print $3 }' TensorRT/include/NvInferVersion.h)"
    _trt_minor="$(awk '/^#define NV_TENSORRT_MINOR/ { print $3 }' TensorRT/include/NvInferVersion.h)"
    _trt_patch="$(awk '/^#define NV_TENSORRT_PATCH/ { print $3 }' TensorRT/include/NvInferVersion.h)"
    _trt_build="$(awk '/^#define NV_TENSORRT_BUILD/ { print $3 }' TensorRT/include/NvInferVersion.h)"
    local _trtver="${_trt_major}.${_trt_minor}.${_trt_patch}.${_trt_build}"
    
    PIP_CONFIG_FILE='/dev/null' pip install --isolated --root="$pkgdir" --ignore-installed --no-deps --no-warn-script-location \
        "TensorRT-${pkgver}/graphsurgeon/graphsurgeon-${_graphsurgeonver}-py2.py3-none-any.whl" \
        "TensorRT-${pkgver}/uff/uff-${_uffver}-py2.py3-none-any.whl" \
        "TensorRT/python/build/dist/tensorrt-${_trtver}-cp${_pyver%%.*}${_pyver#*.}-none-linux_${CARCH}.whl"
    python -O -m compileall "${pkgdir}/usr/lib/python${_pyver}/site-packages"/{graphsurgeon,uff,tensorrt}
    
    local _dir
    for _dir in onnx-graphsurgeon Polygraphy pytorch-quantization
    do
        cd "${srcdir}/TensorRT/tools/${_dir}"
        python setup.py install --root="$pkgdir" --skip-build --optimize='1'
    done
    
    mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
    ln -s "../../../lib/python${_pyver}/site-packages/tensorrt-${pkgver}.dist-info/LICENSE.txt" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_tensorrt-doc() {
    pkgdesc+=' (documentation)'
    arch=('any')
    license=('custom:NVIDIA-SLA')
    
    install -D -m644 "TensorRT-${pkgver}/doc/pdf/TensorRT-Best-Practices.pdf"  -t "${pkgdir}/usr/share/doc/${pkgbase}"
    install -D -m644 "TensorRT-${pkgver}/doc/pdf/TensorRT-Developer-Guide.pdf" -t "${pkgdir}/usr/share/doc/${pkgbase}"
    install -D -m644 "TensorRT-${pkgver}/doc/pdf/TensorRT-Release-Notes.pdf"   -t "${pkgdir}/usr/share/doc/${pkgbase}"
    install -D -m644 "TensorRT-${pkgver}/doc/pdf/TensorRT-Support-Matrix-Guide.pdf" -t "${pkgdir}/usr/share/doc/${pkgbase}"
    cp -dr --no-preserve='ownership' "TensorRT-${pkgver}/doc"/{cpp,python} "${pkgdir}/usr/share/doc/${pkgbase}"
    
    install -D -m644 "TensorRT-${pkgver}/doc/pdf/TensorRT-SLA.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 "TensorRT-${pkgver}/doc/Acknowledgements.txt" "${pkgdir}/usr/share/licenses/${pkgname}/ACKNOWLEDGEMENTS"
}
