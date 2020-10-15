# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
# Maintainer: Edgar Luque <git@edgarluque.com>

pkgname=ddnet-skins
pkgver=20201014
pkgrel=1
pkgdesc="DDraceNetwork skin database"
arch=(any)
url="https://ddnet.tw"
license=('custom:zlib'
         'custom:CC0'
         'CCPL:cc-by'
         'CCPL:cc-by-sa'
         'CCPL:cc-by-nc-nd')
makedepends=('unzip')
source=("$pkgname-$pkgver.zip::https://ddnet.tw/skins/zip/database.zip"
        "https://raw.githubusercontent.com/ddnet/ddnet/master/data/skins/license.txt")
sha256sums=('fe3e1d0b3ba591921130470ac0e0d405a724e52e30a55f3d96e253bc97d31ade'
            '163301fe1b71d2d9ad19888690d0a82a9dea865119459f7bcad44e0d1d8f461c')

prepare() {
  rm -rf $pkgname-$pkgver
  mv database.dir $pkgname-$pkgver
}

package() {
  install -Dvm644 "$srcdir/license.txt" "$pkgdir/usr/share/licenses/$pkgname/license.txt"
  
  cd $pkgname-$pkgver
  install -dm755 "$pkgdir/usr/share/ddnet/data/skins/"
  install -Dvm644 * "$pkgdir/usr/share/ddnet/data/skins/"
  
  cd "$pkgdir/usr/share/ddnet/data/skins/"
  
  # Remove skins already provided by DDNet Client
  rm 'antiantey.png' 'bluekitty.png' 'bluestripe.png' 'bomb.png' 'brownbear.png' 'cammo.png' 'cammostripes.png' 'coala_bluekitty.png' 'coala_bluestripe.png' 'coala_cammo.png' 'coala_cammostripes.png' 'coala_default.png' 'coala_limekitty.png' 'coala_pinky.png' 'coala.png' 'coala_redbopp.png' 'coala_redstripe.png' 'coala_saddo.png' 'coala_toptri.png' 'coala_twinbop.png' 'coala_twintri.png' 'coala_warpaint.png' 'default.png' 'demonlimekitty.png' 'dino.png' 'dragon.png' 'evil.png' 'evilwolfe.png' 'ghostjtj.png' 'ghost.png' 'giraffe.png' 'greensward.png' 'greyfox_2.png' 'greyfox.png' 'hammie-chew.png' 'jeet.png' 'kintaro_2.png' 'kitty_bluestripe.png' 'kitty_brownbear.png' 'kitty_cammo.png' 'kitty_cammostripes.png' 'kitty_coala.png' 'kitty_default.png' 'kitty_pinky.png' 'kitty_redbopp.png' 'kitty_redstripe.png' 'kitty_saddo.png' 'kitty_toptri.png' 'kitty_twintri.png' 'kitty_warpaint.png' 'limekitty.png' 'mermydon-coala.png' 'mermydon.png' 'mouse.png' 'musmann.png' 'nanami.png' 'nanas.png' 'nersif.png' 'oldschool.png' 'PaladiN.png' 'penguin.png' 'pinky.png' 'random.png' 'redbopp.png' 'redstripe.png' 'saddo.png' 'teerasta.png' 'Terrorist.png' 'toptri.png' 'twinbop.png' 'twintri.png' 'veteran.png' 'warpaint.png' 'wartee.png' 'whis.png' 'x_ninja.png'
}
