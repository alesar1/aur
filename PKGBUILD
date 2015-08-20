# Maintainer: Ricardo Funke <ricardo [at] gmail [dot] com>
# Contributor: Attila Bukor <r1pp3rj4ck [at] w4it [dot] eu>
# Contributor: Iwan Timmer <irtimmer [at] gmail [dot] com>
# Contributor: Eric Engestrom <aur [at] engestrom [dot] ch>
# Contributor: Ricardo Band <me [at] xengi [dot] de>
# Contributor: Axilleas Pipinellis (aka axil42) <axilleas [at] archlinux [dot] info>
# Contributor: UshakovVasilii <UshakovVasilii [at] yahoo [dot] com>
# Contributor: Giulio Fidente <gfidente [at] gmail [dot] com>
# Contributor: xantares <xantares09 [at] hotmail [dot] com>
# Contributor: petterk <stifler3k [at] hotmail [dot] com>

pkgname=popcorntime-bin
pkgver=0.3.8.3
_pkgver='0.3.8-3'
pkgrel=2
pkgdesc="Stream movies from torrents. Skip the downloads. Launch, click, watch."
arch=('x86_64' 'i686')
url="http://popcorntime.io/"
license=('GPL3')
depends=('libnotify' 'desktop-file-utils' 'ttf-font' 'gconf' 'nss' 'libxtst' 'gtk2' 'alsa-lib')
optdepends=('net-tools: necessary for the new vpn feature' 'ttf-liberation: open source ttf fonts')
provides=('popcorntime')
conflicts=('popcorntime')
options=('!strip')
install="popcorntime.install"
sha1sums=('8aff55d7e6fe79a407b615d62e0bc8ec1ff4d596'
            'd2e56426a321faabd316ea0bc89b2fa2fb0dfa48'
            '98cba5c0c979d37e601cc33cf3b562f106427d36')

_platform='Linux-64'

if [ "$CARCH" = 'i686' ]; then
  _platform='Linux-32'
  sha1sums[0]='22573cdad5687502101f36100e8c4c5cbcb97e09'
fi

source=("http://get.popcorntime.io/build/Popcorn-Time-${_pkgver}-${_platform}.tar.xz"
        "popcorntime.install"
        "popcorntime.desktop")

package() {
  cd "${srcdir}"

  install -dm755 "${pkgdir}/opt/${pkgname}/"
  install -dm755 "${pkgdir}/usr/bin"
  install -dm755 "${pkgdir}/usr/share"

  # Program
  echo "${pkgdir}/opt/${pkgname}/"
  install -Dm755 "${srcdir}/Popcorn-Time"	"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/nw.pak"		"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/libffmpegsumo.so"	"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/CHANGELOG.md"	"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/icudtl.dat"		"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/install"		"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/LICENSE.txt"	"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/package.json"	"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/popcorntime.png"	"${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/README.md"		"${pkgdir}/opt/${pkgname}/"

  # Directories
  cp -a "${srcdir}/locales"			"${pkgdir}/opt/${pkgname}/"
  cp -a "${srcdir}/node_modules"		"${pkgdir}/opt/${pkgname}/"
  cp -a "${srcdir}/src"				"${pkgdir}/opt/${pkgname}/"

  # Link to program
  ln -s "/opt/${pkgname}/Popcorn-Time" "${pkgdir}/usr/bin/popcorntime"

  # Desktop file
  install -Dm644 "${srcdir}/popcorntime.desktop" "${pkgdir}/usr/share/applications/popcorntime.desktop"

  # Icon
  install -Dm644 "${srcdir}/popcorntime.png" "${pkgdir}/usr/share/pixmaps/popcorntime.png"
}
