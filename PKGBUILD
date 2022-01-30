# Maintainer: Alberto Oliveira <orkan.aos@gmail.com>
# Previous Maintainer: Jeremy Kescher <jeremy@kescher.at>
# Previous Maintainer: Kenneth Endfinger <kaendfinger@gmail.com>
# Contributor: Alexandre Demers <alexandre.f.demers@gmail.com>


pkgname=lib32-spirv-tools
pkgver=2021.4
pkgrel=1
_headers_version=sdk-1.2.198.0
pkgdesc="API and commands for processing SPIR-V modules"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url='https://github.com/KhronosGroup/SPIRV-Tools'
license=('Apache')
groups=('vulkan-devel')
depends=('lib32-gcc-libs'
         'spirv-tools'
)
makedepends=('cmake'
             'python'
             'git'
)
source=("git+https://github.com/KhronosGroup/SPIRV-Tools.git#tag=v${pkgver}"
        "git+https://github.com/KhronosGroup/SPIRV-Headers.git#tag=${_headers_version}"
)
sha256sums=('SKIP'
            'SKIP'
)

build() {
  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  mkdir -p build
  cd build

  cmake ../SPIRV-Tools \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DCMAKE_INSTALL_LIBDIR=lib32 \
      -DCMAKE_BUILD_TYPE=RELEASE \
      -DSPIRV_WERROR=OFF \
      -DSPIRV-Headers_SOURCE_DIR="${srcdir}/SPIRV-Headers"

  make
}

package() {
  make -C build DESTDIR="${pkgdir}" install

  # remove files
  rm -fr "${pkgdir}/usr/include"
  rm -fr "${pkgdir}/usr/share"

  install -Dm644 SPIRV-Tools/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  cd "${pkgdir}/usr/bin"
  for i in $(find . -type f); do mv ${i} ${i}-32; done
  mv spirv-lesspipe.sh-32 spirv-lesspipe-32.sh
  sed 's|spirv-dis|spirv-dis-32|g' -i spirv-lesspipe-32.sh
}
