# Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgbase=vulkan
pkgname=('vulkan-loader' 'vulkan-sdk')
pkgver=1.0.3.1
pkgrel=3
url='https://www.khronos.org/vulkan'
arch=('x86_64')
license=('MIT')
source=("sdk.run::https://vulkan.lunarg.com/pub/sdks/linux/latest"
        'vulkan.pc')
sha1sums=('869e60e46df3c1938d206158ec0591bf037cf83c'
          'beaab6bfd4f3f219f295c4fbdc6300098ddeea2c')
depends=('glslang-git' 'spirv-tools')

_libver=${pkgver%.*}

build() {
  cd "${srcdir}"
  sh sdk.run --noexec --target sdk
}

package_vulkan-loader() {
  pkgdesc='Vulkan ICD (installable client driver) loader'

  cd "${srcdir}"/sdk/"${pkgver}"/"${CARCH}"

  # Shared library & symlinks
  install -dm755 "${pkgdir}"/usr/lib/
  install -m755 lib/libvulkan.so."${_libver}"     "${pkgdir}"/usr/lib/libvulkan.so."${_libver}"
  ln -s             libvulkan.so."${_libver}"     "${pkgdir}"/usr/lib/libvulkan.so."${_libver%%.*}"
  ln -s             libvulkan.so."${_libver%%.*}" "${pkgdir}"/usr/lib/libvulkan.so

  #TODO: LICENSE
}

package_vulkan-sdk() {
  pkgdesc='Vulkan SDK'
  depends=('vulkan-headers' 'vulkan-loader')
  optdepends=('vulkan-man-pages')
  options=('staticlibs')

  cd "${srcdir}"/sdk/"${pkgver}"/"${CARCH}"

  # Tools
  install -dm755            "${pkgdir}"/usr/bin/
  install -m755 bin/vk*     "${pkgdir}"/usr/bin/
  install -m755 bin/vulkan* "${pkgdir}"/usr/bin/

  # Layers
  install -dm755                          "${pkgdir}"/usr/share/vulkan/explicit_layer.d/
  install -m644 lib/vulkan/layer/* "${pkgdir}"/usr/share/vulkan/explicit_layer.d/
  install -m644 lib/libVkLayer_vktrace_layer.so "${pkgdir}"/usr/share/vulkan/explicit_layer.d/

  # pkg-config
  install -dm755                       "${pkgdir}"/usr/lib/pkgconfig/
  install  -m644 "${srcdir}"/vulkan.pc "${pkgdir}"/usr/lib/pkgconfig/
  sed s/%{version}/${pkgver}/       -i "${pkgdir}"/usr/lib/pkgconfig/vulkan.pc

  #TODO: LICENSE
}
