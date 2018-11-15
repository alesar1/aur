# Maintainer: Jose Riha <jose1711 at gmail dot com>
# Contributor: John Faust <contact at yayponies dot eu>
# Contributor: fhilg
# Contributor: skunk

pkgname=ultrastardx-git
pkgver=r832.fd788a21
pkgrel=1
pkgdesc='Free and open source karaoke game. (GIT)'
arch=('i686' 'x86_64')
url="http://usdx.eu/"
license=('GPL')
depends=('ffmpeg2.8' 'lua' 'portaudio' 'sdl2' 'sdl2_gfx' 'sdl2_mixer' 'sdl2_net'
         'sdl2_ttf' 'sdl2_image' 'ttf-dejavu' 'ttf-freefont' 'wqy-microhei' 'portmidi'
         'pkg-config' 'autoconf' 'automake')
makedepends=('git' 'fpc' 'gendesk')
optdepends=('ultrastar-creator: Qt program to generate USDX songs'
            'ultrastardx-songs: Free songs for USDX'
            'ultrastardx-utility: Manage USDX songs')
#options=('!libtool')
provides=('ultrastardx')
conflicts=('ultrastardx')
groups=('usdx')
source=("git://github.com/UltraStar-Deluxe/USDX.git"
        "ultrastardx.sh"
)

sha256sums=('SKIP'
            '031df0e2201f5a568a31c8f500a6a31a4bdebd2c6ca26ca7e38839d30ca199f3')

pkgver() {
  cd "${srcdir}/USDX"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/USDX"
  ./autogen.sh
}


build() {
  cd "${srcdir}/USDX"
  PKG_CONFIG_PATH="/usr/lib/ffmpeg2.8/pkgconfig" ./configure --prefix=/usr --enable-debug
  make LDFLAGS="-O1 --sort-common --as-needed -z relro"
  gendesk -f -n --pkgname ultrastardx --name "UltraStar Deluxe" --exec "ultrastardx.sh" --pkgdesc "Karaoke game" --categories 'Games'
}

package() {
  cd "${srcdir}/USDX"
  touch COPYING.txt
  make DESTDIR="$pkgdir/" install
  install -Dm644 "ultrastardx.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm755 "${srcdir}/ultrastardx.sh" "${pkgdir}/usr/bin/ultrastardx.sh"
  install -Dm644 "${srcdir}/USDX/game/resources/icons/ultrastardx-icon.png" "${pkgdir}/usr/share/pixmaps/ultrastardx.png"
}
