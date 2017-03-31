# Maintainer: pyamsoft <pyam(dot)soft(at)gmail(dot)com>

# Please read the comments in the PKGBUILD if you wish to attempt to use
# multiple versions of the dolphin emulator.
#
# Installing multiple versions alongside each other is not tested too often,
# use at own risk. Please report build issues.

pkgname=dolphin-emu-faster-melee
# shellcheck disable=SC2034
pkgver=4.4
# shellcheck disable=SC2034
pkgrel=4
# shellcheck disable=SC2034
pkgdesc='The FasterMelee NetPlay build of the Dolphin Emulator'
# shellcheck disable=SC2034
arch=('x86_64')
# shellcheck disable=SC2034
url='http://fastermelee.net'
# shellcheck disable=SC2034
license=('GPL')
# shellcheck disable=SC2034
install="faster-melee.install"
# shellcheck disable=SC2034
makedepends=('cmake')
# shellcheck disable=SC2034
depends=('bluez-libs' 'enet' 'ffmpeg' 'libao' 'libevdev' 'mbedtls' 'miniupnpc'
         'portaudio' 'sfml' 'soundtouch' 'xdg-utils' 'wxgtk')
# shellcheck disable=SC2034
optdepends=('pulseaudio: PulseAudio backend')
# shellcheck disable=SC2034
options=('!emptydirs')
# The commit for FasterMelee 4.3 (unchanged for FasterMelee 4.4)
# shellcheck disable=SC2034
source=("${pkgname}::git+https://github.com/Tinob/Ishiiruka.git#commit=0b00f1f6267190a8bf9a3584497a35d8762eb0a9"
        "0001-Fix-RasterFont.cpp-compile-error.patch"
        "GALE01r2.ini"
        "GALE01.ini"
        "MNCE02.ini"
        "NMNB01.ini"
        "PALE02.ini"
       )
# shellcheck disable=SC2034
sha256sums=('SKIP'
            '7a512b04f1d067e7ba59f4b0c7b3720018eccfd6bb63cd5c47ac84ee82b3ccfa'
            'eae12be9d008453d09bf1379315a2299eca9c76cc093727f8f41926193981c50'
            '62abf45f5064fac79aeead6340120be5beb8ad7a64f25fd85c07b45e3756df3f'
            '4dd62a40be7a41c92079c9ee23f5fd458c85f275431881c707450f634fdcf24c'
            '4dd62a40be7a41c92079c9ee23f5fd458c85f275431881c707450f634fdcf24c'
            '4dd62a40be7a41c92079c9ee23f5fd458c85f275431881c707450f634fdcf24c')
# shellcheck disable=SC2034
provides=('dolphin-emu')

# Pulled directly from github.com/ccl2of4
# Thank you
prepare() {
  # shellcheck disable=SC2154
  cd "${srcdir}/${pkgname}" || {
        msg "Failed to cd into ${srcdir}/${pkgname}"
        return 1
   }

   patch -p1 < ../0001-Fix-RasterFont.cpp-compile-error.patch || {
        msg "Failed to apply patch file"
        return 1
   }
}

build() {
  # shellcheck disable=SC2154
  cd "${srcdir}/${pkgname}" || {
        msg "Failed to cd into ${srcdir}/${pkgname}"
        return 1
  }

  mkdir build
  cd build || {
        msg "Failed to cd into ${srcdir}/${pkgname}/build"
        return 1
  }

  # To install multiple versions of the Dolphin emulator, use
  #
  #  -DCMAKE_INSTALL_PREFIX='/opt/dolphin-emu-faster-melee'
  #
  # instead of
  #
  #  -DCMAKE_INSTALL_PREFIX='/usr'
  cmake .. \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -DCMAKE_CXX_FLAGS='-fno-pie' \
    -DENABLE_LTO='TRUE' \
    -DUSE_SHARED_ENET='TRUE' \
    -DDISTRIBUTOR='aur.archlinux.org'
  make
}

package() {
  cd "${srcdir}/${pkgname}" || {
        msg "Failed to cd into ${srcdir}/${pkgname}"
        return 1
  }

  cd build || {
        msg "Failed to cd into ${srcdir}/${pkgname}/build"
        return 1
  }

  # shellcheck disable=SC2154
  make DESTDIR="${pkgdir}" install

  # To install multiple versions of the Dolphin emulator,
  # install the repository dolphin-emu first as it includes this file.
  # Then comment out this line.
  install -Dm 644 ../Data/51-usb-device.rules -t "${pkgdir}"/usr/lib/udev/rules.d/

  # Patch Gecko Codes
  #
  # To install multiple versions of the Dolphin emulator, use
  #
  # cp -f "${srcdir}/GALE01r2.ini" "${pkgdir}"/opt/dolphin-emu-faster-melee/dolphin-emu/sys/GameSettings/GALE01r2.ini
  #
  # Instead of the line below
  cp -f "${srcdir}/GALE01r2.ini" "${pkgdir}"/usr/share/dolphin-emu/sys/GameSettings/GALE01r2.ini
}

# vim: ts=2 sw=2 et:
