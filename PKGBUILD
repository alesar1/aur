# vim:set ts=2 sw=2 et:
# Maintainer:  Marcin (CTRL) Wieczorek <marcin@marcin.co>
# Maintainer graysky <graysky AT archlinux DOT us>
# Contributor: BlackIkeEagle < ike DOT devolder AT gmail DOT com >
# Contributor: DonVla <donvla@users.sourceforge.net>
# Contributor: Ulf Winkelvos <ulf [at] winkelvos [dot] de>
# Contributor: Ralf Barth <archlinux dot org at haggy dot org>
# Contributor: B & monty - Thanks for your hints :)
# Contributor: marzoul
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Brad Fanella <bradfanella@archlinux.us>
# Contributor: [vEX] <niechift.dot.vex.at.gmail.dot.com>
# Contributor: Zeqadious <zeqadious.at.gmail.dot.com>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Maxime Gauduin <alucryd@gmail.com>
#
# Original credits go to Edgar Hucek <gimli at dark-green dot com>
# for his xbmc-vdpau-vdr PKGBUILD at https://archvdr.svn.sourceforge.net/svnroot/archvdr/trunk/archvdr/xbmc-vdpau-vdr/PKGBUILD

pkgbase=kodi-devel
pkgname=(
  "$pkgbase" kodi-bin-devel kodi-wayland-devel kodi-gbm-devel
  kodi-eventclients-devel kodi-tools-texturepacker-devel kodi-dev-devel
)
pkgver=18.6pre14
_major=18.5
pkgrel=1
arch=('x86_64')
url="https://kodi.tv"
license=('GPL2')
makedepends=(
  'afpfs-ng' 'bluez-libs' 'cmake' 'curl' 'doxygen' 'glew'
  'gperf' 'hicolor-icon-theme' 'java-runtime' 'libaacs' 'libass'
  'libbluray' 'libcdio' 'libcec' 'libgl' 'mariadb-libs' 'libmicrohttpd'
  'libmodplug' 'libmpeg2' 'libnfs' 'libplist' 'libpulse' 'libva'
  'libvdpau' 'libxrandr' 'libxslt' 'lirc' 'lzo' 'mesa' 'nasm'
  'python2-pycryptodomex' 'python2-pillow' 'python2-pybluez' 'python2-simplejson'
  'shairplay' 'smbclient' 'taglib' 'tinyxml' 'swig'
  'upower' 'giflib' 'rapidjson' 'ghostscript' 'git'
  # wayland
  'wayland-protocols' 'waylandpp>=0.2.7-1'
  # gbm
  'libinput' 'libxkbcommon'
)

_codename=Leia
#_tag="$pkgver-$_codename"
_tag="$_major-$_codename"
# Found on their respective github release pages. One can check them against
# what is pulled down when not specifying them in the cmake step.
# $CHROOT/build/kodi-devel/src/kodi-build/build/download
#
# https://github.com/xbmc/FFmpeg/tags
# https://github.com/xbmc/libdvdcss/tags
# https://github.com/xbmc/libdvdnav/tags
# https://github.com/xbmc/libdvdread/tags
#
# fmt and crossguid can be found http://mirrors.kodi.tv/build-deps/sources/
#
_libdvdcss_version="1.4.2-$_codename-Beta-5"
_libdvdnav_version="6.0.0-$_codename-Alpha-3"
_libdvdread_version="6.0.0-$_codename-Alpha-3"
_ffmpeg_version="4.0.4-$_codename-18.4"
_fmt_version="5.1.0"
_crossguid_version="8f399e8bd4"
_fstrcmp_version="0.7.D001"
_flatbuffers_version="1.9.0"

source=(
  "${pkgbase%%-*}-$_tag.tar.gz::https://github.com/xbmc/xbmc/archive/$_tag.tar.gz"
  "libdvdcss-$_libdvdcss_version.tar.gz::https://github.com/xbmc/libdvdcss/archive/$_libdvdcss_version.tar.gz"
  "libdvdnav-$_libdvdnav_version.tar.gz::https://github.com/xbmc/libdvdnav/archive/$_libdvdnav_version.tar.gz"
  "libdvdread-$_libdvdread_version.tar.gz::https://github.com/xbmc/libdvdread/archive/$_libdvdread_version.tar.gz"
  "ffmpeg-$_ffmpeg_version.tar.gz::https://github.com/xbmc/FFmpeg/archive/$_ffmpeg_version.tar.gz"
  "http://mirrors.kodi.tv/build-deps/sources/fmt-$_fmt_version.tar.gz"
  "http://mirrors.kodi.tv/build-deps/sources/crossguid-$_crossguid_version.tar.gz"
  "http://mirrors.kodi.tv/build-deps/sources/fstrcmp-$_fstrcmp_version.tar.gz"
  "http://mirrors.kodi.tv/build-deps/sources/flatbuffers-$_flatbuffers_version.tar.gz"
  cpuinfo
  001-PR16955.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16955.patch
  002-PR16969.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16969.patch
  003-PR16986.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16986.patch
  004-PR17024.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17024.patch
  005-PR17050.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17050.patch
  006-PR16977.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16977.patch
  007-PR17068.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17068.patch
  008-PR17070.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17070.patch
  009-PR17075.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17075.patch
  010-PR17097.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17097.patch
  011-PR17099.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17099.patch
  012-PR17100.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17100.patch
  013-PR17101.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17101.patch
  014-PR17103.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17103.patch
)
noextract=(
  "libdvdcss-$_libdvdcss_version.tar.gz"
  "libdvdnav-$_libdvdnav_version.tar.gz"
  "libdvdread-$_libdvdread_version.tar.gz"
  "ffmpeg-$_ffmpeg_version.tar.gz"
  "fmt-$_fmt_version.tar.gz"
  "crossguid-$_crossguid_version.tar.gz"
  "fstrcmp-$_fstrcmp_version.tar.gz"
  "flatbuffers-$_flatbuffers_version.tar.gz"
)
sha256sums=('108979df8b41ab4168f5cdc0233f46e38767eda5921f4ccae16584e98d0d6b29'
            '38816f8373e243bc5950449b4f3b18938c4e1c59348e3411e23f31db4072e40d'
            '071e414e61b795f2ff9015b21a85fc009dde967f27780d23092643916538a57a'
            'a30b6aa0aad0f2c505bc77948af2d5531a80b6e68112addb4c123fca24d5d3bf'
            'e11e7594af35f36ab2711252c3d6bb106908f26605498aef4a9be2d7bc001db2'
            '73d4cab4fa8a3482643d8703de4d9522d7a56981c938eca42d929106ff474b44'
            '3d77d09a5df0de510aeeb940df4cb534787ddff3bb1828779753f5dfa1229d10'
            'e4018e850f80700acee8da296e56e15b1eef711ab15157e542e7d7e1237c3476'
            '5ca5491e4260cacae30f1a5786d109230db3f3a6e5a0eb45d0d0608293d247e3'
            '27387e49043127f09c5ef0a931fffb864f5730e79629100a6e210b68a1b9f2c1'
            'a3c5e7b4f8b31744d8c8a72a87739fcabf1df883f0d250b4a460f645c9bbb6ab'
            'e1aabf601fb8871782a8b29e679829e9589e2a423368c2b0b7a66f8d48e91cb1'
            '7791c648ac6140d91ec21605aa5385a4755fbaf31339b64eef549764d82434e6'
            '0f6492a63be113aac81faa5963d2bad122c3256e9e9fa9ea85ee2390c8c34ce8'
            'f0f36152c991233d5a2778185aaf851b506846d4cf7203f4a654e768e2f1abde'
            '431476776ae38a4eea1d18de913374ffb186411fe7958d1cd08971fdcc6e19f3'
            '15da19309d420da1bd6c135fed442e3db878fbf594b44b50de0dc7bfbb05606d'
            '4f7c735d4116a3de19ac2d7bfa733bdebbe0fe5eaefa69e390d5cfacabbe2b9b'
            '3363b14eaf4925a74ba2c93e52902c9e364a106f38fb8fb809451ebede06e89a'
            'e3fae917683686c48ce3750e94b1235847060c76babece4d7197fb869a414889'
            'b0aefc3a103a581a436bf5bd8e5deaff013793a7661a4273e6d35a90c120da56'
            '8925ab7e022d6c565d37d7ed6abdaca1bdace12dfcb4c9808f6b7a6ac7e056a7'
            'f3d6132e63f9749227977cab9160c562fb542c261e4fa661ecb1424ad24cf82b'
            '46e634aa701369b89e657ffdff739b7e81ce2e6c8675b6b226e72715a56baabf')

prepare() {
  # force python 'binary' as python2
  [[ -d "$srcdir/path" ]] && rm -rf "$srcdir/path"
  mkdir "$srcdir/path"
  ln -s /usr/bin/python2 "$srcdir/path/python"

  [[ -d kodi-build-x11 ]] && rm -rf kodi-build-x11
  mkdir kodi-build-x11
  [[ -d kodi-build-wayland ]] && rm -rf kodi-build-wayland
  mkdir kodi-build-wayland
  [[ -d kodi-build-gbm ]] && rm -rf kodi-build-gbm
  mkdir kodi-build-gbm

  cd "xbmc-$_tag"

  # detect if building in arch chroot using $pkgname rather than hard coding it into a patch
  if [[ "$srcdir" =~ ^\/build.* ]]; then
    local _find="exec_program(cat ARGS \"/proc/cpuinfo\" OUTPUT_VARIABLE CPUINFO)"
    local _replace="exec_program(cat ARGS \"/build/$pkgname/src/cpuinfo\" OUTPUT_VARIABLE CPUINFO)"
    sed -i s"|$_find|$_replace|" cmake/modules/FindSSE.cmake
  fi

  # needed for `git apply` ... if you know how to avoid this let me know
  git init

  local src
  for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    # only patch subset of patches that begin with 0-9
    [[ $src == [0-9]*.patch ]] || continue
    msg2 "Applying patch $src..."
    # patch will fail if binary diffs are present so use git apply first and only
    # if it fails try patch
    if ! git apply --verbose -p1 < "../$src"; then
      patch -Np1 < "../$src"
    fi
  done

  rm -rf .git
}

build() {
  export PATH="$srcdir/path:$PATH"

  ### Optionally uncomment and setup to your liking
  # export CFLAGS+=" -march=native"
  # export CXXFLAGS="${CFLAGS}"

  msg2 "building kodi-x11"
  cd "$srcdir/kodi-build-x11"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DENABLE_EVENTCLIENTS=ON \
    -DENABLE_INTERNAL_FFMPEG=ON \
    -DENABLE_INTERNAL_FMT=ON \
    -DENABLE_INTERNAL_CROSSGUID=ON \
    -DENABLE_INTERNAL_FSTRCMP=ON \
    -DENABLE_INTERNAL_FLATBUFFERS=ON \
    -Dlibdvdcss_URL="$srcdir/libdvdcss-$_libdvdcss_version.tar.gz" \
    -Dlibdvdnav_URL="$srcdir/libdvdnav-$_libdvdnav_version.tar.gz" \
    -Dlibdvdread_URL="$srcdir/libdvdread-$_libdvdread_version.tar.gz" \
    -DFFMPEG_URL="$srcdir/ffmpeg-$_ffmpeg_version.tar.gz" \
    -DFMT_URL="$srcdir/fmt-$_fmt_version.tar.gz" \
    -DCROSSGUID_URL="$srcdir/crossguid-$_crossguid_version.tar.gz" \
    -DFSTRCMP_URL="$srcdir/fstrcmp-$_fstrcmp_version.tar.gz" \
    -DFLATBUFFERS_URL="$srcdir/flatbuffers-$_flatbuffers_version.tar.gz" \
    -DENABLE_MYSQLCLIENT=ON \
    ../"xbmc-$_tag"
  make
  make preinstall

  msg2 "building kodi-wayland"
  cd "$srcdir/kodi-build-wayland"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DENABLE_EVENTCLIENTS=ON \
    -DENABLE_INTERNAL_FFMPEG=ON \
    -DENABLE_INTERNAL_FMT=ON \
    -DENABLE_INTERNAL_CROSSGUID=ON \
    -DENABLE_INTERNAL_FSTRCMP=ON \
    -DENABLE_INTERNAL_FLATBUFFERS=ON \
    -Dlibdvdcss_URL="$srcdir/libdvdcss-$_libdvdcss_version.tar.gz" \
    -Dlibdvdnav_URL="$srcdir/libdvdnav-$_libdvdnav_version.tar.gz" \
    -Dlibdvdread_URL="$srcdir/libdvdread-$_libdvdread_version.tar.gz" \
    -DFFMPEG_URL="$srcdir/ffmpeg-$_ffmpeg_version.tar.gz" \
    -DFMT_URL="$srcdir/fmt-$_fmt_version.tar.gz" \
    -DCROSSGUID_URL="$srcdir/crossguid-$_crossguid_version.tar.gz" \
    -DFSTRCMP_URL="$srcdir/fstrcmp-$_fstrcmp_version.tar.gz" \
    -DFLATBUFFERS_URL="$srcdir/flatbuffers-$_flatbuffers_version.tar.gz" \
    -DCORE_PLATFORM_NAME=wayland \
    -DWAYLAND_RENDER_SYSTEM=gl \
    ../"xbmc-$_tag"
  make
  make preinstall

  msg2 "building kodi-gbm"
  cd "$srcdir/kodi-build-gbm"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DENABLE_EVENTCLIENTS=ON \
    -DENABLE_INTERNAL_FFMPEG=ON \
    -DENABLE_INTERNAL_FMT=ON \
    -DENABLE_INTERNAL_CROSSGUID=ON \
    -DENABLE_INTERNAL_FSTRCMP=ON \
    -DENABLE_INTERNAL_FLATBUFFERS=ON \
    -Dlibdvdcss_URL="$srcdir/libdvdcss-$_libdvdcss_version.tar.gz" \
    -Dlibdvdnav_URL="$srcdir/libdvdnav-$_libdvdnav_version.tar.gz" \
    -Dlibdvdread_URL="$srcdir/libdvdread-$_libdvdread_version.tar.gz" \
    -DFFMPEG_URL="$srcdir/ffmpeg-$_ffmpeg_version.tar.gz" \
    -DFMT_URL="$srcdir/fmt-$_fmt_version.tar.gz" \
    -DCROSSGUID_URL="$srcdir/crossguid-$_crossguid_version.tar.gz" \
    -DFSTRCMP_URL="$srcdir/fstrcmp-$_fstrcmp_version.tar.gz" \
    -DFLATBUFFERS_URL="$srcdir/flatbuffers-$_flatbuffers_version.tar.gz" \
    -DCORE_PLATFORM_NAME=gbm \
    -DGBM_RENDER_SYSTEM=gles \
    ../"xbmc-$_tag"
  make
  make preinstall
}

# kodi
# components: kodi

package_kodi-devel() {
  pkgdesc="Alpha, Beta, or RC versions of the software media player and entertainment hub for digital media"
  depends=(
    'desktop-file-utils' 'hicolor-icon-theme' 'mesa' 'python2-pycryptodomex'
    'python2-pillow' 'python2-simplejson' 'xorg-xdpyinfo'
    'kodi-bin'
  )
  optdepends=(
    'afpfs-ng: Apple shares support'
    'bluez: Blutooth support'
    'python2-pybluez: Bluetooth support'
    'libplist: AirPlay support'
    'pulseaudio: PulseAudio support'
    'shairplay: AirPlay support'
    'upower: Display battery level'
  )
  provides=("kodi=${pkgver}")
  conflicts=('kodi')

  _components=(
    'kodi'
    'kodi-bin'
  )

  export PATH="$srcdir/path:$PATH"

  cd kodi-build-x11
  # install eventclients
  for _cmp in ${_components[@]}; do
  DESTDIR="$pkgdir" /usr/bin/cmake \
    -DCMAKE_INSTALL_COMPONENT="$_cmp" \
     -P cmake_install.cmake
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | \
    while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done

  # remove x11 binaries
  rm "$pkgdir/usr/lib/kodi/"{kodi-x11,kodi-xrandr}
}

# kodi-x11
# components: kodi-bin

package_kodi-bin-devel() {
  pkgdesc="x11 kodi binary"
  conflicts=('kodi-bin')
  depends=(
    'bluez-libs' 'curl' 'lcms2' 'libass' 'libbluray' 'libcdio' 'libcec'
    'libmicrohttpd' 'libnfs' 'libpulse' 'libva' 'libvdpau' 'libxrandr'
    'libxslt' 'lirc' 'mariadb-libs' 'python2' 'smbclient' 'taglib'
    'tinyxml' "$pkgbase"
  )
  provides=("kodi-bin=${pkgver}")

  cd kodi-build-x11
  install -Dm755 kodi-x11 "$pkgdir/usr/lib/kodi/kodi-x11"
  install -Dm755 kodi-xrandr "$pkgdir/usr/lib/kodi/kodi-xrandr"
}

# kodi-wayland
# components: kodi-bin

package_kodi-wayland-devel() {
  pkgdesc="wayland kodi binary"
  provides=("kodi-bin=${pkgver}" "kodi-wayland")
  conflicts=('kodi-wayland')
  depends=(
    'bluez-libs' 'curl' 'lcms2' 'libass' 'libbluray' 'libcdio' 'libcec'
    'libmicrohttpd' 'libnfs' 'libpulse' 'libva' 'libxkbcommon' 'libxslt'
    'lirc' 'mariadb-libs' 'python2' 'smbclient' 'taglib' 'tinyxml'
    'waylandpp>=0.2.7-1' "$pkgbase"
  )

  cd kodi-build-wayland
  install -Dm755 kodi-wayland "$pkgdir/usr/lib/kodi/kodi-wayland"
}

# kodi-gbm
# components: kodi-bin

package_kodi-gbm-devel() {
  pkgdesc="gbm kodi binary"
  provides=("kodi-bin=${pkgver}" 'kodi-gbm')
  conflicts=('kodi-gbm')
  depends=(
    'bluez-libs' 'curl' 'lcms2' 'libass' 'libbluray' 'libcdio' 'libcec'
    'libinput' 'libmicrohttpd' 'libnfs' 'libpulse' 'libva' 'libxkbcommon'
    'libxslt' 'lirc' 'mariadb-libs' 'python2' 'smbclient' 'taglib'
    'tinyxml' "$pkgbase"
  )

  cd kodi-build-gbm
  install -Dm755 kodi-gbm "$pkgdir/usr/lib/kodi/kodi-gbm"
}

# kodi-eventclients
# components: kodi-eventclients-common kodi-eventclients-ps3 kodi-eventclients-wiiremote kodi-eventclients-kodi-send

package_kodi-eventclients-devel() {
  pkgdesc="Kodi Event Clients"
  provides=("kodi-eventclients=${pkgver}")
  conflicts=('kodi-eventclients')
  optdepends=('python2: most eventclients are implemented in python2')

  _components=(
    'kodi-eventclients-common'
    'kodi-eventclients-ps3'
    'kodi-eventclients-kodi-send'
  )

  export PATH="$srcdir/path:$PATH"

  cd kodi-build-x11
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | \
    while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done
}

# kodi-tools-texturepacker
# components: kodi-tools-texturepacker

package_kodi-tools-texturepacker-devel() {
  pkgdesc="Kodi Texturepacker tool"
  provides=("kodi-tools-texturepacker=${pkgver}")
  conflicts=('kodi-tools-texturepacker')
  depends=('libpng' 'giflib' 'libjpeg-turbo' 'lzo')

  _components=(
    'kodi-tools-texturepacker'
  )

  cd kodi-build-x11
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done
}

# kodi-dev
# components: kodi-addon-dev kodi-audio-dev kodi-eventclients-dev kodi-game-dev
#             kodi-inputstream-dev kodi-peripheral-dev kodi-pvr-dev
#             kodi-screensaver-dev kodi-visualization-dev

package_kodi-dev-devel() {
  pkgdesc="Kodi dev files"
  depends=("$pkgbase")
  provides=("kodi-dev=${pkgver}")
  conflicts=('kodi-dev')

  _components=(
    'kodi-addon-dev'
    'kodi-audio-dev'
    'kodi-eventclients-dev'
    'kodi-game-dev'
    'kodi-inputstream-dev'
    'kodi-peripheral-dev'
    'kodi-pvr-dev'
    'kodi-screensaver-dev'
    'kodi-visualization-dev'
  )

  export PATH="$srcdir/path:$PATH"

  cd kodi-build-x11
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | \
    while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done
}
