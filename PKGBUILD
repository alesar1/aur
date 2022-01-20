# Maintainer: aiwe <dev at karbo dot io>
# Contributor: Stanislav Sizonov <eikoninaru at gmail dot com>
# Contributor: https://t.me/archlinux_ukraine

pkgname='karbowanecwallet-bin'
_pkgname='KarbowanecWallet'
pkgver=1.7.8
pkgrel=1
pkgdesc='Karbowanec Wallet - wallet for Karbo (Karbovanets) cryptocurrency'
arch=('x86_64')
url='https://karbo.io'
license=('custom')
depends=('qt5-networkauth')
source=("$pkgname-$pkgver.deb::https://github.com/seredat/karbowanecwallet/releases/download/v.1.7.8/Karbo-wallet-ubuntu-20.04-v.1.7.8.tar.gz")
sha256sums=('A48B84C838AEECC25E6A16E214394FB82466AE120570032BFB91D82C6A27B60C')

prepare() {
  cd "$srcdir"

  ar p $_pkgname-$pkgver-64-bit.deb data.tar.gz | tar zx
  sed -e 's|Exec=/usr/bin/karbowanecwallet/|Exec=karbowanecwallet|g' \
      -e 's|/usr/share/pixmaps/karbowanec.png|karbowanec.png|g' \
      -i usr/share/applications/karbowanecwallet.desktop 
}

package() {
  cd "$srcdir"

  install -dm755 "$pkgdir/opt"
  cp -r "$srcdir/opt/karbo/" "$pkgdir/opt/"
  cp -r "$srcdir/usr/" "$pkgdir/usr/"
  install -Dm644 usr/share/applications/karbowanecwallet.desktop -t "$pkgdir/usr/share/applications/"
  install -Dm644 usr/share/doc/karbowanecwallet/copyright "$pkgdir/usr/share/doc/karbowanecwallet/copyright "

  install -dm755 "$pkgdir/usr/bin/"
  ln -s /usr/bin/KarbowanecWallet "$pkgdir/usr/bin/karbowanecwallet"
}
