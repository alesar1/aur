# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=waifu2x-caffe
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=r13.2.g7b679d8
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (NVIDIA users only)(static libcaffe)(GIT version)"
arch=('x86_64')
url='https://forum.doom9.org/showthread.php?t=173673'
license=('MIT')
depends=('vapoursynth'
         'cuda'
         'boost-libs'
         'libopenblas'
         'google-glog'
         'gflags'
         'hdf5'
         'protobuf'
         'cudnn'
         'opencv'
         )
makedepends=('git'
             'boost'
             'gcc8'
             'meson'
             )
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/HomeOfVapourSynthEvolution/VapourSynth-Waifu2x-caffe.git"
        'git+https://github.com/HolyWu/caffe.git#branch=lltcggie/custom'
        )
sha256sums=('SKIP'
            'SKIP'
            )

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p fakeroot build

  # CUDA 10.1.x requires gcc8
  sed -e '/CUSTOM_CXX/s/^# //' \
      -e '/CUSTOM_CXX/s/$/-8/' \
      -i caffe/Makefile.config

  # set CUDA directory
  sed '/CUDA_DIR/s/\/usr\/local\/cuda/\/opt\/cuda/' \
      -i caffe/Makefile.config

  # -- local
  sed -e 's| /usr/local/include||g' \
      -e 's| /usr/local/lib||g' \
      -i caffe/Makefile.config

  cd "${_plug}"

  # Fix opencv4
  sed -e 's/CV_GRAY2RGB/cv::COLOR_GRAY2RGB/g' \
      -e 's/CV_RGB2GRAY/cv::COLOR_RGB2GRAY/g' \
      -e 's/CV_BGR2YUV/cv::COLOR_BGR2YUV/g' \
      -e 's/CV_YUV2BGR/cv::COLOR_YUV2BGR/g' \
      -e 's/CV_BGR2RGB/cv::COLOR_BGR2RGB/g' \
      -e 's/CV_BGRA2RGBA/cv::COLOR_BGRA2RGBA/g' \
      -e 's/CV_BGR2RGBA/cv::COLOR_BGR2RGBA/g' \
      -e 's/CV_BGRA2RGB/cv::COLOR_BGRA2RGB/g' \
      -i Waifu2x-caffe/stImage.cpp \
      -i Waifu2x-caffe/waifu2x.cpp

  # Fix unknown layer
  echo '#include "caffe/common.hpp"
#include "caffe/layers/input_layer.hpp"
#include "caffe/layers/flatten_layer.hpp"
#include "caffe/layers/scale_layer.hpp"
#include "caffe/layers/crop_layer.hpp"
namespace caffe{
    extern INSTANTIATE_CLASS(InputLayer);
    extern INSTANTIATE_CLASS(FlattenLayer);
    extern INSTANTIATE_CLASS(ScaleLayer);
    extern INSTANTIATE_CLASS(CropLayer);
    //REGISTER_LAYER_CLASS(Scale);
}' > Waifu2x-caffe/addlayer.h

  sed '1i#include "addlayer.h"' \
      -i Waifu2x-caffe/cNet.cpp \
      -i Waifu2x-caffe/waifu2x.cpp \
      -i Waifu2x-caffe/Waifu2x-caffe.cpp
}

build() {
  cd caffe
  make lib

  install -Dm644 build/lib/libcaffe.a "${srcdir}/fakeroot/lib/libcaffe.a"
  cp -R include "${srcdir}/fakeroot"
  install -Dm644 build/src/caffe/proto/caffe.pb.h "${srcdir}/fakeroot/include/caffe/proto/caffe.pb.h"

  cd "${srcdir}/build"

  CXXFLAGS+=" $(pkg-config --cflags-only-I opencv4)" \
  arch-meson "../${_plug}" \
    -Dcudaincludedir=/opt/cuda/include \
    -Dcudalibdir=/opt/cuda/lib64 \
    -Dcaffe_includedir="$(readlink -e "${srcdir}/fakeroot/include")" \
    -Dcaffe_libdir="$(readlink -e "${srcdir}/fakeroot/lib")" \
    --buildtype=release \
    -Db_lto=false

  ninja
}

package(){
  DESTDIR="${pkgdir}" ninja -C build install

  chmod -R a+w "${pkgdir}/usr/lib/vapoursynth/models"

  install -Dm644 "${_plug}/README.md" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/README.md"
  install -Dm644 "${_plug}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
