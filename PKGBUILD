# vim:set ft=sh:
# Maintainer: BlackEagle < ike DOT devolder AT gmail DOT com >

pkgname=opera-beta-ffmpeg-codecs
pkgver=87.0.4280.60
pkgrel=1
pkgdesc="additional support for proprietary codecs for opera-beta"
arch=('x86_64')
url="https://ffmpeg.org/"
license=('LGPL2.1')
depends=('glibc')
makedepends=(
  'gtk3' 'libexif' 'libxss' 'ninja' 'nss' 'pciutils' 'python2' 'python'
  'xdg-utils' 'gn'
)
options=('!strip')
source=(
  "https://commondatastorage.googleapis.com/chromium-browser-official/chromium-$pkgver.tar.xz"
)
sha512sums=('f3a21320c8147743f3bd838a038f1525d08768fce44daf2bfa74e5d23351bff588de92a9b654da2341c9a19bd37a58b8dfd9806810a8a7794b168ae64380011d')

prepare() {
  cd "$srcdir/chromium-$pkgver"

  # Force script incompatible with Python 3 to use /usr/bin/python2
  sed -i '1s|python$|&2|' third_party/dom_distiller_js/protoc_plugins/*.py

  # Make xcbgen available to ui/gfx/x/gen_xproto.py running under Python 2
  ln -s /usr/lib/python3.*/site-packages/xcbgen "$srcdir/"

}

build() {
  cd "$srcdir/chromium-$pkgver"

  python2 tools/clang/scripts/update.py

  export PATH="${srcdir}/chromium-${pkgver}/third_party/llvm-build/Release+Asserts/bin:$PATH"

  # ui/gfx/x/gen_xproto.py needs xcbgen
  export PYTHONPATH=$srcdir

  # error while loading shared libraries: libtinfo.so.5: cannot open shared object file: No such file or directory
  ln -s /usr/lib/libtinfo.so.6 \
    third_party/llvm-build/Release+Asserts/lib/libtinfo.so.5

  export CC="clang"
  export CXX="clang++"

  local args="ffmpeg_branding=\"ChromeOS\" proprietary_codecs=true enable_platform_hevc=true enable_platform_ac3_eac3_audio=true enable_platform_mpeg_h_audio=true enable_platform_dolby_vision=true enable_mse_mpeg2ts_stream_parser=true use_gnome_keyring=false use_sysroot=false use_gold=false linux_use_bundled_binutils=false treat_warnings_as_errors=false enable_nacl=false enable_nacl_nonsfi=false clang_use_chrome_plugins=true is_component_build=true is_debug=false symbol_level=0 use_custom_libcxx=true"

  gn gen out/Release -v --args="$args" --script-executable=/usr/bin/python2

  ninja -C out/Release -v media/ffmpeg
}

package() {
  cd "$srcdir/chromium-$pkgver"

  install -Dm644 out/Release/libffmpeg.so \
    "$pkgdir/usr/lib/opera-beta/lib_extra/libffmpeg.so"
}

# vim:set ts=2 sw=2 et:
