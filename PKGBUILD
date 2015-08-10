# Maintainer: farseerfc <farseerfc@archlinuxcn.org>
# Contributor:	refujee		<gmail.com: refujee>
# Contributor:	sausageandeggs	<archlinux.us: sausageandeggs>
# Maintainer:	Jesse Jaara	<gmail.com: jesse.jaara>

# Set to 'y' if you want native optimizations (-march=native)
# based on your hardware. Enabled automatically if -march
# is set to native in makepkg.conf.
NATIVE_OPTIMIZATIONS=n



pkgname=powder-toy
_sver=90
_mver=2
_build=322
pkgver=${_sver}.${_mver}
pkgrel=4
pkgdesc="Desktop version of the classic falling sand physics sandbox, simulates air pressure, velocity & heat!"
arch=(i686 x86_64)
depends=('sdl' 'lua52' 'fftw' 'bzip2' 'zlib')
makedepends=('python2' 'scons')
url="http://powdertoy.co.uk/"
license=('GPL3')
source=(http://github.com/FacialTurd/The-Powder-Toy/archive/v${_sver}.${_mver}.${_build}.tar.gz
	${pkgname}.desktop ${pkgname}.png lua-5.2-arch.patch)

prepare() {
  cd "${srcdir}/The-Powder-Toy-${_sver}.${_mver}.${_build}"

  #Disable the updates. I cant get the buildsystem to not compile a beta version.
  #Also I do not know the logic behind the generated snapshotids.
  sed 's|//#define I|#define I|' -i src/Config.h

  patch --binary -p0 -i ../lua-5.2-arch.patch
}

build() {
  unset _xarch _ssever _native
  cd "${srcdir}/The-Powder-Toy-${_sver}.${_mver}.${_build}"

  if $(grep -q 'pni' -i /proc/cpuinfo); then
    _ssever="sse3"
  elif $(grep -q sse2 -i /proc/cpuinfo); then
    _ssever="sse2"
  else
    _ssever="sse"
  fi

#  if [ NATIVE_OPTIMIZATIONS == "y"  ] || $(echo ${CXXFLAGS} | grep -q -- "-march=native"); then
#    _native="--native"
#  fi

  if [ "${CARCH}" == "x86_64" ]; then
    _xarch="--64bit"
  fi

  msg2 "building powder with options with following extra flags ${_xarch} --${_ssever} ${_native}"
  scons --lin ${_xarch} --release --${_ssever} ${_native} --save-version=${_sver} \
	--minor-version=${_mver} --build-number=${_build} ${MAKEFLAGS}

  mv build/{powder*,binary}
}

package() {
  install -Dm 755 "${srcdir}/The-Powder-Toy-${_sver}.${_mver}.${_build}/build/binary" "${pkgdir}/usr/bin/powder-toy"
  install -Dm 644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm 644 "${srcdir}/${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
}

md5sums=('0eec9ce14da705b1525e9c641460cc2c'
         '8901d334c53c04738cbd3518c80fa37c'
         'bb40bf9c2fa3982e2872b5d32de3b006'
         '6d17fa966ac45f42e51eb574bcd08881')
