# Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgname=vulkan-caps-viewer
pkgver=2.03a
pkgrel=2
pkgdesc='Vulkan Hardware Capability Viewer'
url='http://vulkan.gpuinfo.org/'
arch=('x86_64')
license=('GPL2')
source=("git+https://github.com/SaschaWillems/VulkanCapsViewer#tag=$pkgver"
        "git+https://github.com/KhronosGroup/Vulkan-Headers")
sha1sums=('SKIP'
          'SKIP')
makedepends=(git)
depends=(vulkan-icd-loader qt5-base qt5-x11extras)

prepare() {
  git -C VulkanCapsViewer submodule init
  git -C VulkanCapsViewer config submodule.Vulkan-Headers.url "$srcdir/Vulkan-Headers"
  git -C VulkanCapsViewer submodule update

  mkdir build
  cd build
  export PREFIX="$pkgdir"
  qmake \
    QMAKE_CFLAGS="$CFLAGS" \
    QMAKE_CXXFLAGS="$CXXFLAGS" \
    QMAKE_LFLAGS="$LDFLAGS" \
    PREFIX=/usr \
    ../VulkanCapsViewer
}

build() {
  make -C build
}

package() {
  make -C build INSTALL_ROOT="$pkgdir" install

  # There's a bug preventing this from being installed automatically
  install -Dm644 VulkanCapsViewer/gfx/android_icon_256.png \
    "$pkgdir"/usr/share/icons/hicolor/256x256/apps/vulkanCapsViewer.png
}
