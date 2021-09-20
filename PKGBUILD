# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgbase=vkd3d-git
pkgname=('vkd3d-git'
         'lib32-vkd3d-git'
         )
pkgver=1.2.493.g4509f08
pkgrel=1
arch=('x86_64')
url='https://source.winehq.org/git/vkd3d.git'
license=('LGPL')
makedepends=('spirv-headers'
             'vulkan-headers'
             'xcb-proto'
             'wine'
             'spirv-tools'
             'lib32-spirv-tools'
             'vulkan-icd-loader'
             'lib32-vulkan-icd-loader'
             'libxcb'
             'lib32-libxcb'
            )
conflicts=('vkd3d')
provides=('vkd3d')
source=('git://source.winehq.org/git/vkd3d.git')
sha256sums=('SKIP')

pkgver() {
  cd vkd3d
  echo "$(git describe --long --tags | tr - . | sed 's|vkd3d.||')"
}

prepare() {
  mkdir -p build{32,64}

  git clone "${srcdir}/vkd3d" vkd3d32
}

build() {

  cd "${srcdir}/vkd3d"
  ./autogen.sh

  cd "${srcdir}/build64"
  ../vkd3d/configure \
    --prefix=/usr \
    --with-spirv-tools \
    --enable-tests=no

  make

  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  cd "${srcdir}/vkd3d32"
  ./autogen.sh

  cd "${srcdir}/build32"
  ../vkd3d32/configure \
    --prefix=/usr \
    --libdir=/usr/lib32 \
    --with-spirv-tools \
    --enable-tests=no \
    --host=i686-linux-gnu

  make
}

package_vkd3d-git() {
  pkgdesc='D3D12 to Vulkan translation library. (GIT version)'
  depends=('spirv-tools'
           'libvulkan.so'
           'libxcb'
           )
  provides=('vkd3d'
            "vkd3d=${pkgver}"
             )
  conflicts=('vkd3d')
  make -C build64 DESTDIR="${pkgdir}" install
}

package_lib32-vkd3d-git() {
  pkgdesc='D3D12 to Vulkan translation library. (GIT version) (32-bits)'
  depends=("vkd3d=${pkgver}"
           'lib32-spirv-tools'
           'libvulkan.so'
           'lib32-libxcb'
           )
  provides=('lib32-vkd3d')
  conflicts=('lib32-vkd3d')
  make -C build32 DESTDIR="${pkgdir}" install

  rm -fr "${pkgdir}/usr/include"
  mv "${pkgdir}/usr/bin/vkd3d-compiler" "${pkgdir}/usr/bin/vkd3d-compiler-32"
}
