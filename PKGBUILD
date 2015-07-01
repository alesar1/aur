# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=fmtconv
pkgname=vapoursynth-plugin-${_plug}
pkgver=r16
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug}"
arch=('i686' 'x86_64')
url='http://forum.doom9.org/showthread.php?t=166504'
license=('custom:WTFPL')
depends=('vapoursynth')
source=("http://ldesoras.free.fr/src/vs/${_plug}-${pkgver}.zip")
sha1sums=('80b90c6404fbfa1a1301993cab069bbe5fed01c8')

prepare() {
  rm -fr src/VapourSynth.h

  cd build/unix
  autoreconf --verbose --install --force
}

build() {
  cd build/unix
  CPPFLAGS+=" $(pkg-config --cflags vapoursynth)" ./configure --libdir=/usr/lib/vapoursynth
  make
}

package(){
  make -C build/unix DESTDIR=${pkgdir} install
  (cd doc; for i in *.{html,png,css}; do install -Dm644 "${i}" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/${i}"; done)
  install -Dm644 doc/license.txt "${pkgdir}/usr/share/licenses/${pkgname}/license.txt"
}
