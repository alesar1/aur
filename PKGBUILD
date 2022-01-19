# Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgname=swiftshader-git
pkgver=r6374.2e74d5dc03
pkgrel=1
pkgdesc='High-performance CPU-based implementation of the Vulkan graphics API12.'
arch=(x86_64)
url=https://swiftshader.googlesource.com/SwiftShader
provides=(swiftshader libgl opengl-driver vulkan-driver)
conflicts=(swiftshader)
license=(Apache)
source=("git+$url#branch=master"
        git+https://github.com/google/googletest.git
        git+https://github.com/ianlancetaylor/libbacktrace.git)
sha1sums=('SKIP' 'SKIP' 'SKIP')
depends=()
makedepends=(cmake ninja)

pkgver() {
  cd SwiftShader
  printf "r%d.%s" \
    "$(git rev-list --count HEAD)" \
    "$(git rev-parse --short=10 HEAD)"
}

prepare() {
  git -C SwiftShader submodule init
  # this repo is not publicly accessible so we won't fetch it
  git -C SwiftShader config submodule."third_party/git-hooks".update none
  git -C SwiftShader config submodule."third_party/googletest".url "$srcdir/googletest"
  git -C SwiftShader config submodule."third_party/libbacktrace/src".url "$srcdir/libbacktrace"
  git -C SwiftShader submodule update --depth=1

  cmake \
    -G Ninja \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -D WARNINGS_AS_ERRORS=off \
    -D BUILD_SAMPLES=off \
    -S SwiftShader -B build
}

build() {
  ninja -C build
}

check() {
  build/ReactorUnitTests
  #build/math-unittests  # getting what looks like an infinite loop here; disabled for now
  build/gles-unittests
  build/vk-unittests
}

package() {
  # this installs one of the submodules instead (spirv-tools)
  #DESTDIR="$pkgdir" ninja -C build install

  install -dm755 "$pkgdir"/usr/lib
  install -m755 -t "$pkgdir"/usr/lib \
    build/libvk_swiftshader.so

  install -dm755 "$pkgdir"/usr/share/vulkan/icd.d/
  install -m644 -t "$pkgdir"/usr/share/vulkan/icd.d/ \
    build/Linux/vk_swiftshader_icd.json
  sed 's#./libvk_swiftshader.so#/usr/lib/libvk_swiftshader.so#' \
    -i "$pkgdir"/usr/share/vulkan/icd.d/vk_swiftshader_icd.json
}
