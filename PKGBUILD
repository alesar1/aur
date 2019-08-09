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
  "$pkgbase" "$pkgbase-bin" "$pkgbase-wayland" "$pkgbase-gbm"
  "$pkgbase-eventclients" "$pkgbase-tools-texturepacker" "$pkgbase-dev"
)
pkgver=18.4rc1pre17
_major=18.3
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
  'python2-pycryptodome' 'python2-pillow' 'python2-pybluez' 'python2-simplejson'
  'shairplay' 'smbclient' 'taglib' 'tinyxml' 'swig'
  'upower' 'giflib' 'rapidjson' 'ghostscript' 'git'
  # wayland
  'wayland-protocols' 'waylandpp'
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
_ffmpeg_version="4.0.3-$_codename-18.2"
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
  000-fix.building.with.mariadb.patch::https://github.com/wsnipex/xbmc/commit/cd20c8eb8a0394db1f028b118c4ca9b91b7e746a.patch
  001-PR16305.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16305.patch
  002-PR16313.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16313.patch
  003-PR16323.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16323.patch
  004-PR16334.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16334.patch
  005-PR16337.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16337.patch
  006-PR16340.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16340.patch
  007-PR16342.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16342.patch
  008-PR16352.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16352.patch
  009-PR16353.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16353.patch
  010-PR16355.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16355.patch
  011-PR16364.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16364.patch
#  012-PR16378.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16378.patch
  013-PR16409.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16409.patch
  014-PR16416.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16416.patch
  015-PR16422.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16422.patch
  016-PR16426.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16426.patch
  017-PR16447.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/16447.patch
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
sha256sums=('4f265901c00f582beb8d6ad96c9c303e5ab82611e828c7121ae822b07c0915cc'
            '38816f8373e243bc5950449b4f3b18938c4e1c59348e3411e23f31db4072e40d'
            '071e414e61b795f2ff9015b21a85fc009dde967f27780d23092643916538a57a'
            'a30b6aa0aad0f2c505bc77948af2d5531a80b6e68112addb4c123fca24d5d3bf'
            '68535cc2a000946b62ce4be6edf7dda7900bd524f22bcb826800b94f4a873314'
            '73d4cab4fa8a3482643d8703de4d9522d7a56981c938eca42d929106ff474b44'
            '3d77d09a5df0de510aeeb940df4cb534787ddff3bb1828779753f5dfa1229d10'
            'e4018e850f80700acee8da296e56e15b1eef711ab15157e542e7d7e1237c3476'
            '5ca5491e4260cacae30f1a5786d109230db3f3a6e5a0eb45d0d0608293d247e3'
            '27387e49043127f09c5ef0a931fffb864f5730e79629100a6e210b68a1b9f2c1'
            '849daf1d5b081ef6d0e428bbc7d448799fc43a8ac9e79cd7513de0eb5a91b0bb'
            'a162fee84b8c7a52d5120874fa81cbf0534e5f993a1bb33b842a071186191698'
            'db2a285d0ef635e9cad6c8cace1937e39f0393bc2efbc724203c3cf580471951'
            'f9b0c2368151a37265a380d5cd164b8b73b8d3b0dea6df25bcc745ef23bee594'
            '6d9a3710c4e205ff5ecf63d71181e0acde207bb8b93f3677c5c3395cbfa5dc9a'
            'e75f924d3e9f2fc0935791e324a111e77f4243476084f7e08cfabb28af903520'
            'bafe677ee2e8a8484d01bc41812fdd099b05185eb85a821760639503d34d679a'
            '841cbdce9f207ce5d7eb719f4a6eace49232787bc7e06d66b222dda128c8d346'
            '61b42371a22f4683d13358a7f6d59284ef8b6b82a1235e508c15fdc5a29423ba'
            'a5d8af6af6c33aa62c935d924f3df2b341cd34a9d008f3f50a1697533a628db8'
            'd2ba346fbe3f2b428409588fe3461b58cc450dc56d5d5083703fa252155a1aef'
            '9ac8a0404739172e77addf6f1d3c05bbb6e3938c9e1e662264e95c64942de278'
            'fa6e929a5f55f9dc1b8807c2c83ca387225f87bb014dfc15ca5ea977d7a41180'
            'fa44afc553164952c497c75a2ebca36358f73a22bde3c2bfcd243e45bfb6247c'
            'a44771f00abda9f219340b4afce974b3add7d53db3b73ff36a30cabb4bda546e'
            '6835c87aabb8e43f6313f6a1d61b06efc31daea3cb2777d10392b5f2c8c604f5'
            '7fadba3375a912ff5c65ac1bf5d78394173b9ab1a19435ee99aa713dd0175f78')

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
    -DENABLE_MARIADBCLIENT=ON \
    -DENABLE_MYSQLCLIENT=OFF \
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
    'desktop-file-utils' 'hicolor-icon-theme' 'mesa' 'python2-pycryptodome'
    'python2-pillow' 'python2-simplejson' 'xorg-xdpyinfo'
    "$pkgbase-bin"
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

package_kodi-devel-bin() {
  pkgdesc="x11 kodi binary"
  conflicts=('kodi-bin')
  depends=(
    'bluez-libs' 'curl' 'lcms2' 'libass' 'libbluray' 'libcdio' 'libcec'
    'libmicrohttpd' 'libnfs' 'libpulse' 'libva' 'libvdpau' 'libxrandr'
    'libxslt' 'lirc' 'mariadb-libs' 'python2' 'smbclient' 'taglib'
    'tinyxml' "$pkgbase"
  )

  cd kodi-build-x11
  install -Dm755 kodi-x11 "$pkgdir/usr/lib/kodi/kodi-x11"
  install -Dm755 kodi-xrandr "$pkgdir/usr/lib/kodi/kodi-xrandr"
}

# kodi-wayland
# components: kodi-bin

package_kodi-devel-wayland() {
  pkgdesc="wayland kodi binary"
  provides=("$pkgbase-bin=${pkgver}")
  conflicts=('kodi-wayland')
  depends=(
    'bluez-libs' 'curl' 'lcms2' 'libass' 'libbluray' 'libcdio' 'libcec'
    'libmicrohttpd' 'libnfs' 'libpulse' 'libva' 'libxkbcommon' 'libxslt'
    'lirc' 'mariadb-libs' 'python2' 'smbclient' 'taglib' 'tinyxml'
    'waylandpp' "$pkgbase"
  )

  cd kodi-build-wayland
  install -Dm755 kodi-wayland "$pkgdir/usr/lib/kodi/kodi-wayland"
}

# kodi-gbm
# components: kodi-bin

package_kodi-devel-gbm() {
  pkgdesc="gbm kodi binary"
  provides=("$pkgbase-bin=${pkgver}" 'kodi-gbm')
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

package_kodi-devel-eventclients() {
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

package_kodi-devel-tools-texturepacker() {
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

package_kodi-devel-dev() {
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
