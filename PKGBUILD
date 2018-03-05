# vim:set ts=2 sw=2 et:
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

pkgbase=kodi-pre-release
pkgname=("kodi-${pkgbase#kodi-*}" "kodi-eventclients-${pkgbase#kodi-*}" "kodi-tools-texturepacker-${pkgbase#kodi-*}" "kodi-dev-${pkgbase#kodi-*}")
pkgver=18.0a1
_codename=Leia
pkgrel=2
arch=('x86_64')
url="http://kodi.tv"
license=('GPL2')
makedepends=(
  'afpfs-ng' 'bluez-libs' 'cmake' 'curl' 'doxygen' 'glew'
  'gperf' 'hicolor-icon-theme' 'jasper' 'java-runtime' 'libaacs' 'libass'
  'libbluray' 'libcdio' 'libcec' 'libgl' 'libmariadbclient' 'libmicrohttpd'
  'libmodplug' 'libmpeg2' 'libnfs' 'libplist' 'libpulse' 'libssh' 'libva'
  'libvdpau' 'libxrandr' 'libxslt' 'lzo' 'mesa' 'nasm' 'nss-mdns'
  'python2-pillow' 'python2-pybluez' 'python2-simplejson' 'rtmpdump'
  'shairplay' 'smbclient' 'speex' 'swig' 'taglib' 'tinyxml' 'unzip' 'upower'
  'yajl' 'zip' 'git' 'giflib' 'rapidjson'
  # AUR packages needed
  'fmt' 
)
_libdvdcss_commit="2f12236bc1c92f73c21e973363f79eb300de603f"
_libdvdnav_commit="981488f7f27554b103cca10c1fbeba027396c94a"
_libdvdread_commit="6f3f53a63549d937e75c0db132fb1bce6b71a496"
_ffmpeg_version="3.4.1-$_codename-Alpha-1"
source=(
  "${pkgbase%%-*}-$pkgver-$_codename.tar.gz::https://github.com/xbmc/xbmc/archive/$pkgver-$_codename.tar.gz"
  "${pkgbase%%-*}-libdvdcss-$_libdvdcss_commit.tar.gz::https://github.com/xbmc/libdvdcss/archive/$_libdvdcss_commit.tar.gz"
  "${pkgbase%%-*}-libdvdnav-$_libdvdnav_commit.tar.gz::https://github.com/xbmc/libdvdnav/archive/$_libdvdnav_commit.tar.gz"
  "${pkgbase%%-*}-libdvdread-$_libdvdread_commit.tar.gz::https://github.com/xbmc/libdvdread/archive/$_libdvdread_commit.tar.gz"
  "${pkgbase%%-*}-ffmpeg-$_ffmpeg_version.tar.gz::https://github.com/xbmc/FFmpeg/archive/$_ffmpeg_version.tar.gz"
  'cheat-sse-build.patch'
  'cpuinfo'
)
noextract=(
  "${pkgbase%%-*}-libdvdcss-$_libdvdcss_commit.tar.gz"
  "${pkgbase%%-*}-libdvdnav-$_libdvdnav_commit.tar.gz"
  "${pkgbase%%-*}-libdvdread-$_libdvdread_commit.tar.gz"
  "${pkgbase%%-*}-ffmpeg-$_ffmpeg_version.tar.gz"
)
sha256sums=('8892498d5248eea29c30db7c128a5910afc60d1b0b894aea472604bb879a0310'
            'b6eb2d929ff56cb051152c32010afc5e7cf5fe8c5ae32dca412a2b46b6b57e34'
            '312b3d15bc448d24e92f4b2e7248409525eccc4e75776026d805478e51c5ef3d'
            'ca9e510f4dd6a903de7ab27fe5d27714e6fad498ed9a595e3199f8b44761de36'
            '5f7b367f2b451098302f5a78a73e35924bbea24e9b1ac0af73cd32b4ee5942e3'
            '304d4581ef024bdb302ed0f2dcdb9c8dea03f78ba30d2a52f4a0d1c8fc4feecd'
            '27387e49043127f09c5ef0a931fffb864f5730e79629100a6e210b68a1b9f2c1')

prepare() {
  [[ -d kodi-build ]] && rm -rf kodi-build
  mkdir kodi-build

  cd "xbmc-$pkgver-$_codename"
  # detect if building in arch chroot
  if [[ "$srcdir" =~ ^\/build.* ]]; then
    patch -Np1 -i "$srcdir/cheat-sse-build.patch"
  fi
}

build() {
  cd kodi-build
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DENABLE_EVENTCLIENTS=ON \
    -DLIRC_DEVICE=/run/lirc/lircd \
    -Dlibdvdcss_URL="$srcdir/${pkgbase%%-*}-libdvdcss-$_libdvdcss_commit.tar.gz" \
    -Dlibdvdnav_URL="$srcdir/${pkgbase%%-*}-libdvdnav-$_libdvdnav_commit.tar.gz" \
    -Dlibdvdread_URL="$srcdir/${pkgbase%%-*}-libdvdread-$_libdvdread_commit.tar.gz" \
    -DFFMPEG_URL="$srcdir/${pkgbase%%-*}-ffmpeg-$_ffmpeg_version.tar.gz" \
    ../"xbmc-$pkgver-$_codename"
  make
  make preinstall
}

# kodi
# components: kodi, kodi-bin

package_kodi-pre-release() {
  pkgdesc="Beta or RC versions of a media player and entertainment hub for digital media."
  depends=(
    'bluez-libs' 'desktop-file-utils' 'freetype2' 'fribidi'
    'hicolor-icon-theme' 'libass' 'libcdio' 'libjpeg-turbo' 'libmariadbclient'
    'libmicrohttpd' 'libpulse' 'libssh' 'libva' 'libvdpau' 'libxrandr'
    'libxslt' 'lzo' 'mesa' 'python2-pillow' 'python2-simplejson' 'smbclient'
    'speex' 'taglib' 'tinyxml' 'xorg-xdpyinfo' 'yajl'
  )
  optdepends=(
    'afpfs-ng: Apple shares support'
    'bluez: Blutooth support'
    'python2-pybluez: Bluetooth support'
    'libnfs: NFS shares support'
    'libplist: AirPlay support'
    'libcec: Pulse-Eight USB-CEC adapter support'
    'lirc: Remote controller support'
    'lsb-release: log distro information in crashlog'
    'pulseaudio: PulseAudio support'
    'shairplay: AirPlay support'
    'unrar: Archives support'
    'unzip: Archives support'
    'upower: Display battery level'
  )
  provides=('xbmc' 'kodi')
  conflicts=('xbmc' 'kodi' 'kodi-devel' 'kodi-git')
  replaces=('xbmc')

  _components=(
  'kodi'
  'kodi-bin'
  )

  cd kodi-build
  # install eventclients
  for _cmp in ${_components[@]}; do
  DESTDIR="$pkgdir" /usr/bin/cmake \
    -DCMAKE_INSTALL_COMPONENT="$_cmp" \
     -P cmake_install.cmake
  done

  # Licenses
  install -dm755 "$pkgdir/usr/share/licenses/$pkgname"
  for licensef in LICENSE.GPL copying.txt; do
    mv "$pkgdir/usr/share/doc/kodi/$licensef" \
      "$pkgdir/usr/share/licenses/$pkgname"
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done
}

# kodi-eventclients
# components: kodi-eventclients-common kodi-eventclients-ps3 kodi-eventclients-xbmc-send

package_kodi-eventclients-pre-release() {
  pkgdesc="Kodi Event Clients (pre-release versions)"
  conflicts=('kodi-eventclients')

  _components=(
    'kodi-eventclients-common'
    'kodi-eventclients-ps3'
    'kodi-eventclients-xbmc-send'
  )

  cd kodi-build
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done
}

# kodi-tools-texturepacker
# components: kodi-tools-texturepacker

package_kodi-tools-texturepacker-pre-release() {
  pkgdesc="Kodi Texturepacker tool (pre-release versions)"
  depends=('libpng' 'giflib' 'libjpeg-turbo' 'lzo')

  _components=(
    'kodi-tools-texturepacker'
  )

  cd kodi-build
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done
}

# kodi-dev
# components: kodi-addon-dev kodi-audio-dev kodi-eventclients-dev kodi-game-dev kodi-inputstream-dev kodi-peripheral-dev kodi-pvr-dev kodi-screensaver-dev kodi-visualization-dev

package_kodi-dev-pre-release() {
  pkgdesc="Kodi dev files (pre-release versions)"
  depends=('kodi-pre-release')

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

  cd kodi-build
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done
}
