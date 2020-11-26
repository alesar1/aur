# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

pkgname=mingw-w64-qt6-imageformats
_qtver=6.0.0-rc
pkgver=${_qtver/-/}
pkgrel=1
arch=(any)
url='https://www.qt.io'
license=(GPL3 LGPL3 FDL custom)
#pkgdesc='Plugins for additional image formats: TIFF, MNG, TGA, WBMP (mingw-w64)'
#depends=('mingw-w64-qt6-base' 'mingw-w64-jasper' 'mingw-w64-libmng' 'mingw-w64-libwebp')
# FIXME: It doesn't actually build with MNG support at this point.
pkgdesc='Plugins for additional image formats: TIFF, TGA, WBMP (mingw-w64)'
depends=('mingw-w64-qt6-base' 'mingw-w64-jasper' 'mingw-w64-libwebp')
makedepends=('mingw-w64-cmake' 'qt6-base' 'ninja' 'git')
options=('!strip' '!buildflags' 'staticlibs' '!emptydirs')
groups=(mingw-w64-qt6)
_pkgfqn="qtimageformats-everywhere-src-${_qtver}"
source=("$_pkgfqn::git://code.qt.io/qt/qtimageformats.git#commit=9b0b68488ac75668da339bdcd1ab358db03f2932")
sha256sums=('SKIP')

_architectures='i686-w64-mingw32 x86_64-w64-mingw32'

build() {
  for _arch in ${_architectures}; do
    export PKG_CONFIG=/usr/bin/$_arch-pkg-config
    $_arch-cmake -G Ninja -B build-$_arch -S $_pkgfqn \
      -DFEATURE_pkg_config=ON
    cmake --build build-$_arch
  done
}

package() {
  for _arch in ${_architectures}; do
    DESTDIR="$pkgdir" cmake --install build-$_arch

    # Add symlinks of DLLs in usual bin directory
    mkdir -p "$pkgdir/usr/bin" "$pkgdir/usr/$_arch/bin"
    for dll in "$pkgdir"/usr/$_arch/lib/qt6/bin/*.dll; do
        ln -rs "$dll" "$pkgdir/usr/$_arch/bin/${dll##*/}"
    done

    # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
    find "$pkgdir/usr/$_arch/lib" -type f -name '*.prl' \
      -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

    find "$pkgdir/usr/$_arch" -iname '*.exe' -exec $_arch-strip --strip-all {} \;
    find "$pkgdir/usr/$_arch" -iname '*.dll' -exec $_arch-strip --strip-unneeded {} \;
    find "$pkgdir/usr/$_arch" -iname '*.a'   -exec $_arch-strip -g {} \;
  done

  install -d "$pkgdir"/usr/share/licenses
  ln -s /usr/share/licenses/mingw-w64-qt6-base "$pkgdir"/usr/share/licenses/$pkgname

}
