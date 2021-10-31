# Tom < reztho at archlinux dot org >
# Based on the munt-git package from Franco Tortoriello

pkgname=munt
pkgdesc='Software synthesizer emulating pre-GM MIDI devices such as the Roland MT-32, CM-32L, CM-64 and LAPC-I'
pkgver=2.5.3
pkgrel=0
arch=('i686' 'x86_64')
url='http://munt.sourceforge.net'
license=('GPL2')
depends=('qt5-multimedia' 'portaudio' 'hicolor-icon-theme')
makedepends=('cmake' 'imagemagick' 'gendesk')
options=('staticlibs')
__mt32suffix=libmt32emu
source=("https://github.com/${pkgname}/${pkgname}/archive/${__mt32suffix}_${pkgver//./_}.zip")
install=${pkgname}.install
sha512sums=('a8a9c3698b37e1417952801574ae1b9a2f6ca9b27c9322a2b54ba7dc42d275509e2fbc1a713a0f249f0ef39d95d98f0eb16ba62f9923ff8a6cbf10fbd239b718')

build() {
  cd "${srcdir}"
  gendesk -n -f \
          --pkgname="${pkgname}" \
          --pkgdesc="${pkgdesc}" \
          --name="Munt" \
          --categories="Audio;AudioVideo;Midi;X-Alsa;X-Jack;Qt" \
          --exec="/usr/bin/mt32emu-qt" \
          --startupnotify=true
  
  convert "${srcdir}/${pkgname}-${__mt32suffix}_${pkgver//./_}/mt32emu_qt/src/images/Icon.gif" -resize 32x32 "${srcdir}/munt.png"

  cd "${srcdir}/${pkgname}-${__mt32suffix}_${pkgver//./_}"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -Dlibmt32emu_SHARED=ON
  make
}

package() {
  cd "${srcdir}/${pkgname}-${__mt32suffix}_${pkgver//./_}"
  make DESTDIR="${pkgdir}" install
  
  install -Dm644 "${srcdir}/munt.png" "${pkgdir}/usr/share/icons/hicolor/32x32/apps/munt.png"
  install -Dm644 "${srcdir}/munt.desktop" "${pkgdir}/usr/share/applications/munt.desktop"
}
