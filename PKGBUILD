# Maintainer: Patrice Peterson <runiq at archlinux dot us>
pkgname=gog-baldurs-gate-2-enhanced-edition
_pkgname=baldurs-gate-2-enhanced-edition
_original="Baldurs Gate 2 Enhanced Edition"
pkgver=2.0.0.2
pkgrel=1
pkgdesc="Your story begins anew in the exotic southern kingdom of Amn, amidst the opulence of the sinister capital city of Athkatla. GOG Version. Linux native."
arch=('i686' 'x86_64')
url="http://www.gog.com/game/baldurs_gate_2_enhanced_edition"
license=('custom')
depends_i686=('glibc' 'alsa-lib' 'libgl')
depends_x86_64=('lib32-glibc' 'lib32-alsa-lib' 'lib32-libgl')
optdepends_i686=('libpulse: pulseaudio support')
optdepends_x86_64=('lib32-libpulse: pulseaudio support')
DLAGENTS+=("gog::/usr/bin/echo Could not find %u. Manually download it to \"$(pwd)\", or set up a gog:// DLAGENT in /etc/makepkg.conf.")
source=("gog://gog_baldur_s_gate_2_enhanced_edition_$pkgver.sh"
        "$pkgname"
        "$pkgname.desktop")
sha256sums=('bd797cbdd93cd45d77065e90c06ae98d5cd4275962e34ca42a3b37f1b01090f8'
            '55e56f5c3e4b03a3dfa70ad66e85b5cdac229baa7fc72775fd77a6962ea68ca7'
            '082330f67a7a6aa4ecc4d2f71765f12224f03260edff82e42d7622fd5084c14d')


package() {
  _pkgdir="$pkgdir/opt/gog/$_pkgname"
  mkdir -p "$pkgdir"/opt/gog/$_pkgname
  cp -r data/noarch/* "$_pkgdir"
  install -Dm755 $pkgname "$pkgdir/usr/bin/$pkgname"
  install -Dm644 $pkgname.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 data/noarch/support/icon.png "$pkgdir/usr/share/pixmaps/hicolor/256x256/$pkgname.png"
  install -Dm644 data/noarch/docs/End\ User\ License\ Agreement.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
