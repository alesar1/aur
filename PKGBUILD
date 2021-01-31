pkgname=bgfx-cmake-git
pkgver=r7631.741028840
pkgrel=1
pkgdesc="Cross-platform, graphics API agnostic, \"Bring Your Own Engine/Framework\" style rendering library. (With CMake build scripts)"
arch=('x86_64')
url="https://bkaradzic.github.io/bgfx"
license=('BSD' 'CC')

depends=('mesa' 'libx11')
makedepends=('git' 'cmake')
conflicts=(bgfx bgfx-git)
provides=(bgfx)

source=('git://github.com/bkaradzic/bx.git'
        'git://github.com/bkaradzic/bimg.git'
        'git://github.com/bkaradzic/bgfx.git'
        'git://github.com/widberg/bgfx.cmake.git'
        '0001-cmake-turn-on-CMAKE_POSITION_INDEPENDENT_CODE-for-sh.patch'
        '0002-bimg-specify-visibility-of-linked-libs.patch'
        '0003-install-if-generating-shared-only-install-bgfx.patch'
        '0004-bgfx-make-bx-and-bimg-private.patch') # https://github.com/widberg/bgfx.cmake/pull/100
sha256sums=('SKIP' 'SKIP' 'SKIP' 'SKIP'
            '164c5d569d605f3e02552ad57383fbb2448e48270cdb95009672ade6e1be8050'
            '20d6949f9a5d95bd0f21c51a99baca8b84163462b42a5472c2b237ee915993cc'
            '471c2f61b071246bd653623e5939aa2874aac7b006af6907459b1a3c23dc1952'
            '294df452d039824ac8280af6089918ac09a5feafd3bc1821e125e602cca073fa')

pkgver() {
  cd "${srcdir}/bgfx"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/bgfx.cmake"

  git config --file=.gitmodules submodule.bx.url $srcdir/bx
  git config --file=.gitmodules submodule.bimg.url $srcdir/bimg
  git config --file=.gitmodules submodule.bgfx.url $srcdir/bgfx
  git submodule sync
  git submodule update --init

  patch -p1 -i $srcdir/0001-cmake-turn-on-CMAKE_POSITION_INDEPENDENT_CODE-for-sh.patch
  patch -p1 -i $srcdir/0002-bimg-specify-visibility-of-linked-libs.patch
  patch -p1 -i $srcdir/0003-install-if-generating-shared-only-install-bgfx.patch
  patch -p1 -i $srcdir/0004-bgfx-make-bx-and-bimg-private.patch

  # prepend bgfx to bin names to avoid naming conflicts
  for BIN in geometryc geometryv shaderc texturec texturev
  do
    echo "" >> cmake/tools/$BIN.cmake
    echo "set_target_properties( $BIN PROPERTIES OUTPUT_NAME bgfx-$BIN )" >> cmake/tools/$BIN.cmake
  done
}

build() {
  cd "${srcdir}/bgfx.cmake"
  cmake -DBGFX_BUILD_EXAMPLES=OFF \
        -DBGFX_INSTALL_EXAMPLES=OFF \
        -DBGFX_CUSTOM_TARGETS=OFF \
        -DBGFX_LIBRARY_TYPE=SHARED \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=RelWithDebInfo
  cmake --build .
}

package() {
  cd "${srcdir}/bgfx.cmake"
  cmake --install . -v --strip --prefix "$pkgdir/usr"

  # remove helper and 3rdparty includes used to compile bgfx
  rm -rf ${pkgdir}/usr/include/compat
  rm -rf ${pkgdir}/usr/include/tinystl
}

# vim:set ts=2 sw=2 et:
