# Maintainer: gee
# contributors: yochananmarqos, bpierre, PedroHLC, rodrigo21
pkgname='lib32-vkbasalt'
pkgver=0.3.2.6
pkgrel=2
pkgdesc='A Vulkan post-processing layer. Some of the effects are CAS, FXAA, SMAA, deband.'
arch=('x86_64')
url='https://github.com/DadSchoorse/vkBasalt'
license=('zlib')
makedepends=('meson' 'ninja' 'glslang' 'spirv-headers' 'vulkan-headers'
             'lib32-gcc-libs' 'lib32-libx11')
depends=('lib32-gcc-libs' 'lib32-libx11' 'vkbasalt')
source=("${url}/releases/download/v${pkgver}/vkBasalt-${pkgver}.tar.gz")
sha256sums=('bf71e34d5d3fea677bc5ab95c07fd5eb052369c399d839789331614b90957593')

build() {
  cd ${srcdir}/vkBasalt-${pkgver}

  ASFLAGS+=" --32" \
  CFLAGS+=" -m32" \
  CXXFLAGS+=" -m32" \
  LDFLAGS+=" -m32"
  PKG_CONFIG_PATH=/usr/lib32/pkgconfig \
  arch-meson \
    --buildtype=release \
    --libdir=lib32 \
    -Dwith_json=true \
    build
  ninja -C build
}

package() {
  cd ${srcdir}/vkBasalt-${pkgver}

  DESTDIR="${pkgdir}" ninja -C build install
  mv "${pkgdir}/usr/share/vulkan/implicit_layer.d/vkBasalt.json" "${pkgdir}/usr/share/vulkan/implicit_layer.d/vkBasalt.x86.json"
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/lib32-vkBasalt"
}
