# Maintainer: Josh Dye <josh.jpenguin@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Daniel Wallace <daniel.wallace@gatech.edu>

pkgname=openpht
pkgver=1.5.1.508
_pkghash=67218541
pkgrel=2
pkgdesc='OpenPHT is a community driven fork of Plex Home Theater '
arch=('i686' 'x86_64')
url='https://github.com/RasPlex/OpenPHT/'
license=('GPL2')
conflicts=("plex-home-theater")
depends=('alsa-lib' 'avahi' 'boost-libs' 'curl' 'expat' 'freetype2' 'fribidi'
         'gcc-libs' 'glew' 'glibc' 'glu' 'libcdio' 'libgl' 'libjpeg' 'libmad'
         'libmicrohttpd' 'libmpeg2' 'libpng' 'libpulse' 'libsamplerate'
         'libssh' 'libtiff' 'libusb-compat' 'libva' 'libvdpau' 'libx11'
         'libxext' 'libxrandr' 'lzo' 'pcre' 'python2' 'sdl' 'sdl_image'
         'sdl_mixer' 'sqlite' 'smbclient' 'taglib' 'tinyxml' 'yajl' 'zlib')
makedepends=('boost' 'cmake' 'doxygen' 'ffmpeg-compat' 'git' 'java-environment'
             'libcec' 'libplist' 'libshairport' 'nasm' 'swig' 'unzip' 'zip')
optdepends=('libplist: AirPlay support'
            'libshairport: AirPlay support'
            'libcec: Pulse-Eight USB-CEC adapter support'
            'pulseaudio: PulseAudio support')
source=("https://github.com/RasPlex/OpenPHT/archive/v${pkgver}-${_pkghash}.tar.gz"
        'plexhometheater.sh')
sha256sums=('4fd3d382adbbc3ce00a5ce96b0393eb75a4f09a12a6de25a96338e0f271e9744'
            'dc6bd394c07a2ececbb2f8c53cb54afd5d78f7c00a0b34acab3e71217da085fb')

prepare() {
  cd OpenPHT-${pkgver}-${_pkghash}
}

build() {
  cd OpenPHT-${pkgver}-${_pkghash}

  if [[ -d build ]]; then
    rm -rf build
  fi
  mkdir build && cd build

  cmake .. \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -DCMAKE_C_FLAGS="$CMAKE_C_FLAGS -I/usr/include/glib-2.0 -I/usr/lib/glib-2.0/include" \
    -DCMAKE_CXX_FLAGS="$CMAKE_CXX_FLAGS -I/usr/include/glib-2.0 -I/usr/lib/glib-2.0/include" \
    -DCREATE_BUNDLE='FALSE' \
    -DDUMP_SYMBOLS='FALSE' \
    -DENABLE_AUTOUPDATE='FALSE' \
    -DENABLE_PYTHON='TRUE' \
    -DPYTHON_EXEC='/usr/bin/python2' \
    -DUSE_INTERNAL_FFMPEG='TRUE'
  make
}

package() {
  cd OpenPHT-${pkgver}-${_pkghash}/build

  make DESTDIR="${pkgdir}" install
  install -dm 755 "${pkgdir}"/usr/{lib/plexhometheater,share/{applications,pixmaps}}
  mv "${pkgdir}"/usr/bin/{system,xbmc-xrandr} "${pkgdir}"/usr/lib/plexhometheater/
  mv "${pkgdir}"/usr/share/XBMC "${pkgdir}"/usr/share/plexhometheater
  rm -rf "${pkgdir}"/usr/bin/*.so
  install -m 755 "${srcdir}"/plexhometheater.sh "${pkgdir}"/usr/bin/
  install -m 644 ../plex/Resources/plexhometheater.desktop "${pkgdir}"/usr/share/applications/
  install -m 644 ../plex/Resources/plex-icon-256.png "${pkgdir}"/usr/share/pixmaps/plexhometheater.png
}
