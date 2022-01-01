# Maintainer: C. Dominik Bódi <dominik dot bodi at gmx dot de>
# Maintainer: jtmb <packaging at technologicalwizardry dot com>
_pkgname=PKHeX
pkgname=pkhex-bin
pkgver=21.11.27
pkgrel=1
pkgdesc="Pokémon core series save editor, programmed in C#."
arch=(any)
url="https://projectpokemon.org/home/files/file/1-pkhex/"
license=('GPL')
depends=(mono)
provides=(pkhex)
conflicts=(pkhex pkhex-git)
options=('!strip')
source=("https://dominikbodi.de/downloads/${_pkgname}-${pkgver}.tar.gz"
		"PKHeX.sh"
		"PKHeX.desktop"
		"PKHeX.png")
		
sha256sums=('6e98b9ac0d224d329211361d0d121220ea64ab80f713c81713669be158fcd30b'
            '6a13e35459c2ace9a32e34be76f0ec637c15b7481d4c280af7f148e0fae4ec88'
            '6093975bcf0157b889a0f95321c6fc4895904d17a86c4d3bc51ede2e040d32ef'
            '688456b442d51a9cdcffeb053099f23e3333e492c5b9d9266e97da7cd077b89b')
backup=("opt/${_pkgname}/PKHeX.exe.config"
        "opt/${_pkgname}/PKHeX.Core.dll.config")

package() {

  install -Dm644 "${_pkgname}.desktop" "$pkgdir/usr/share/applications/${_pkgname}.desktop"
  install -Dm644 "${_pkgname}.png" "$pkgdir/usr/share/pixmaps/${_pkgname}.png"
  install -Dm755 -- PKHeX.sh "$pkgdir/usr/bin/${_pkgname}"
  install -Dm755 -- PKHeX.exe "$pkgdir/opt/${_pkgname}/PKHeX.exe"

  mkdir -p -- "$pkgdir/opt/${_pkgname}/bak"
  mkdir -p -- "$pkgdir/opt/${_pkgname}/pkmdb"
  chmod 777 -- "$pkgdir/opt/${_pkgname}/bak"
  chmod 777 -- "$pkgdir/opt/${_pkgname}/pkmdb"
  
}

