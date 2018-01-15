# Maintainer: Bjarno Oeyen <aur _AT_ bjarno _DOT_ be>

pkgname=game-jolt-client
pkgrel=6
pkgver=0.13.2
pkgdesc="Play games. Make games. Stay indie."
url="http://gamejolt.com/client"
provides=('game-jolt-client')
arch=('x86_64')
license=('mit')
depends=('gtk2' 'alsa-lib' 'libnotify' 'gconf' 'nss' 'libxtst' 'nodejs')
makedepends=()
backup=()
install=''
source=("https://n3b6p5n5.ssl.hwcdn.net/data/client/releases/v0.13.2/game-jolt-client.tar.gz" "game-jolt-client.desktop" "package.json.new" "game-jolt.png" "APPLICENSE")
sha256sums=('c890762dd44383bb6716f698c4f624b49e4bebeabaa0c4ab6f6978e2e9ff0b88'
            '599bec494e752969b7badf9fdd3bea3132354c28d4a5289ec4a03ea0e957f44b'
            '7964898d5dda4a89507df2a20e762e70e31f83538bf9df1bfb1420fe6e552def'
            '0439b7c3a514be13dc686823d86721cdd9bddefe2c447ca3081bfcd666d9557c'
            '4a6d7bf96cc458dae22ac812180b2705de56465df3d8544cc40eae91cec04443')
options=(!strip)

prepare() {
  cd "$srcdir"
  mkdir -p "$srcdir"/unpacked
  tar -xzf game-jolt-client.tar --directory "$srcdir"/unpacked
}

package() {
  install -d "$pkgdir"/opt/game-jolt-client
  cp -R "$srcdir"/unpacked/* "$pkgdir"/opt/game-jolt-client

  find "$pkgdir"/opt/game-jolt-client -type f -exec chmod 644 {} \;
  chmod 755 "$pkgdir"/opt/game-jolt-client/game-jolt-client

  install -d "$pkgdir"/usr/bin
  ln -s ../../opt/game-jolt-client/game-jolt-client "$pkgdir"/usr/bin/game-jolt-client

  install -Dm644 "$srcdir"/APPLICENSE               "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "$srcdir"/game-jolt-client.desktop "${pkgdir}/usr/share/applications/game-jolt-client.desktop"
  install -Dm644 "$srcdir"/game-jolt.png            "${pkgdir}/usr/share/pixmaps/game-jolt.png"
  install -Dm644 "$srcdir"/package.json.new         "${pkgdir}/opt/game-jolt-client/package.json"
}
