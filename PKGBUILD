# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>

pkgname=libplacebo-git
pkgver=4.208.0.99.g0ce3fa4
pkgrel=1
pkgdesc='Reusable library for GPU-accelerated video/image rendering primitives. (GIT version)'
url='https://code.videolan.org/videolan/libplacebo'
arch=('x86_64')
license=('LGPL2.1')
depends=('libvulkan.so'
         'liblcms2.so'
         'glslang'
         'libepoxy'
         'glfw'
         'libshaderc_shared.so'
         'libavcodec.so'
         'libavutil.so'
         'libavformat.so'
         )
makedepends=('git'
             'meson'
             'ninja'
             'vulkan-headers'
             'vulkan-icd-loader'
             'python-mako'
             'python-jinja'
             'python-markupsafe'
             'ffmpeg'
             'lcms2'
             'shaderc'
             'dav1d'
             )
provides=('libplacebo'
          'libplacebo.so'
          )
conflicts=('libplacebo')
source=('git+https://code.videolan.org/videolan/libplacebo.git'
        'git+https://github.com/Immediate-Mode-UI/Nuklear.git'
        'git+https://github.com/Dav1dde/glad.git'
        )
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            )
options=('debug')

pkgver() {
  cd libplacebo
  echo "$(git describe --long --tags | tr -d v| tr - .)"
}

prepare() {
  mkdir -p build

  cd libplacebo
  git config submodule.demos/3rdparty/nuklear.url "${srcdir}/Nuklear"
  git config submodule.3rdparty/glad.url "${srcdir}/glad"
  git -c protocol.file.allow=always submodule update --init \
    3rdparty/glad \
    demos/3rdparty/nuklear
}

build() {
  cd "${srcdir}/build"
  arch-meson ../libplacebo \
    -D vulkan=enabled \
    -D glslang=enabled \
    -D shaderc=enabled \
    -D lcms=enabled \
    -D d3d11=disabled \
    -D tests=true \
    -D demos=false

   PYTHONPATH="${srcdir}/libplacebo/3rdparty/glad" LC_ALL=C ninja

}

check() {
  ninja -C build test
}

package() {

  DESTDIR="${pkgdir}" ninja -C build install

  install -Dm644 libplacebo/README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
