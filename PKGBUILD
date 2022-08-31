# Maintainer: imLinguin <lidwinpawel@gmail.com>
# Maintainer: flaviofearn <flavioislima@gmail.com>

pkgname=heroic-games-launcher-beta-bin
pkgver=2.4.1
pkgrel=1
pkgdesc="HGL, a Native alternative Linux Launcher for Epic Games"
arch=('x86_64')
url="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher"
license=('GPL3')
conflicts=(${pkgname%-*}-{appimage,electron} 'heroic-games-launcher-bin')
depends=('fuse2' 'gawk')
_filename=heroic-${pkgver}.pacman
source=("$url/releases/download/v${pkgver}/${_filename}")
noextract=("${_filename}")
md5sums=('42d3cbfa0bef2c3cec27f0426b37c971')
options=(!strip)

package() {
  tar -xJv -C "${pkgdir}" -f "${srcdir}/${_filename}" usr opt
  mkdir "$pkgdir/usr/bin"
  ln -s "/opt/Heroic/heroic" "$pkgdir/usr/bin/heroic"
}

# vim:set ts=2 sw=2 et: syntax=sh
