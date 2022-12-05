# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>
pkgname=vulkan-caps-viewer-wayland
pkgver=3.27
pkgrel=3
epoch=1
pkgdesc="Vulkan Hardware Capability Viewer"
arch=('x86_64' 'aarch64')
url="https://vulkan.gpuinfo.org"
license=('LGPL3')
depends=('vulkan-icd-loader' 'qt5-wayland')
makedepends=('git')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
_commit=0f9fd085cf82c46f8391a5ec5b4986e35c8ded3b  # tags/3.27^0
source=("git+https://github.com/SaschaWillems/VulkanCapsViewer.git#commit=$_commit"
        'git+https://github.com/KhronosGroup/Vulkan-Headers.git'
        '155.patch')
sha256sums=('SKIP'
            'SKIP'
            'cd6a775c44cacc8549346cb31696822646806f51655a36cf834ef9029d201976')

pkgver() {
  cd "$srcdir/VulkanCapsViewer"
  git describe --tags | sed 's/_fixed//;s/-/+/g'
}

prepare() {
  cd "$srcdir/VulkanCapsViewer"
  git submodule init
  git config submodule.Vulkan-Headers.url "$srcdir/Vulkan-Headers"
  git -c protocol.file.allow=always submodule update

  # Fix Wayland build
  patch -Np1 -i ../155.patch
}

build() {
  cd "$srcdir/VulkanCapsViewer"
  qmake-qt5 \
    DEFINES+=WAYLAND \
    CONFIG+=release \
    PREFIX=/usr
  make
}

package() {
  cd "$srcdir/VulkanCapsViewer"
  make INSTALL_ROOT="$pkgdir/" install

  # There's a bug preventing this from being installed automatically
  install -m644 gfx/android_icon_256.png \
    "$pkgdir"/usr/share/icons/hicolor/256x256/apps/vulkanCapsViewer.png
}
