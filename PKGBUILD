# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: sparzz
pkgname=vulkan-extensionlayer-sparzz-git
pkgver=1.2.140._2020.06.08
pkgrel=1
epoch=
pkgdesc="Vulkan ExtensionLayer build from source. My oder Vulkan packages from the AUR depends on this packages. For install instruction and the order of install visit my GitHub page ----> https://github.com/sparzz/vulkan-arch-aur"
arch=(x86_64)
url="https://github.com/sparzz/vulkan-arch-aur"
license=('Apache')
groups=()
depends=("yay"
        "glslang-sparzz-git"
        "vulkan-headers-sparzz-git"
        "spirv-headers-sparzz-git")
makedepends=("cmake"
            "git"
            "make"
            "vulkan-headers-sparzz-git")
checkdepends=()
optdepends=()
provides=(vulkan-extensionlayer-sparzz-git)
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("Vulkan-ExtensionLayer::git+https://github.com/KhronosGroup/Vulkan-ExtensionLayer.git")
noextract=()
md5sums=("SKIP")
validpgpkeys=()






package() {
	cmake setup Vulkan-ExtensionLayer \
        -DVulkanRegistry_DIR=/usr/local/share/vulkan/registry \
        -DGLSLANG_INSTALL_DIR=/usr/local/bin \
        -DVULKAN_HEADERS_INSTALL_DIR=/usr/local/share/vulkan \
        -DVULKAN_HEADERS_INSTALL_DIR=/usr/local/include \
        -DSPIRV_HEADERS_INSTALL_DIR=/usr/local/include/spirv \
        -DSPIRV_HEADERS_INSTALL_DIR=/usr/local/lib/cmake/SPIRV-Headers \
        -DVulkanHeaders_INCLUDE_DIRS=/usr/local/share/vulkan/registry \
        -DVulkanHeaders_INCLUDE_DIRS=/usr/local/include/vulkan \
        cmake configue Vulkan-ExtensionLayer 
	make DESTDIR="$pkgdir" install
}
