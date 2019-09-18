# Maintainer: Miguel Palencia <mike@qtum.org>

pkgname=qtum-core
pkgver=0.18.1
pkgrel=6
pkgdesc="Qtum Core is a Smart Contracts blockchain platform which makes use of UTXO and Proof of Stake."
arch=('x86_64')
url="https://qtum.org"
depends=('boost-libs' 'libevent' 'desktop-file-utils' 'qt5-base' 'protobuf' 'openssl' 'miniupnpc' 'zeromq' 'qrencode')
makedepends=('boost' 'qt5-tools' 'miniupnpc' 'qrencode' 'zeromq' 'git')
license=('MIT')
source=(https://github.com/qtumproject/qtum/archive/mainnet-ignition-v$pkgver.tar.gz )
sha256sums=('bad156843b9dc7ae61ffba527067893b7192bb873841381f26547a318d3be638')
provides=('qtum-cli' 'qtum-daemon' 'qtum-tx' 'qtum-qt')
conflicts=('qtum-cli' 'qtum-daemon' 'qtum-tx' 'qtum-qt')

build() {
 cd "$srcdir/qtum-mainnet-ignition-v$pkgver"
 git clone --recursive https://github.com/qtumproject/cpp-eth-qtum.git src/cpp-ethereum 
 ./autogen.sh
  ./configure \
    --prefix=/usr/ \
    --with-incompatible-bdb \

  make
}

package() {

 cd "$srcdir/qtum-mainnet-ignition-v$pkgver"
  sed -i -e 's/Bitcoin/Qtum/g' contrib/debian/qtum-qt.desktop
    install -Dm755 src/qt/qtum-qt "$pkgdir"/usr/bin/qtum-qt
    install -Dm755 src/qtumd "$pkgdir"/usr/bin/qtumd
    install -Dm755 src/qtum-cli "$pkgdir"/usr/bin/qtum-cli
    install -Dm755 src/qtum-wallet "$pkgdir"/usr/bin/qtum-wallet
    install -Dm755 src/qtum-tx "$pkgdir"/usr/bin/qtum-tx
    
    
    
    
  install -Dm644 contrib/debian/qtum-qt.desktop \
      "$pkgdir"/usr/share/applications/qtum.desktop
  install -Dm644 share/pixmaps/bitcoin128.png \
    "$pkgdir"/usr/share/pixmaps/qtum128.png
    install -Dm644 contrib/debian/qtum-qt-testnet.desktop \
      "$pkgdir"/usr/share/applications/qtum-testnet.desktop
  install -Dm644 share/pixmaps/qtumtestnet128.png \
    "$pkgdir"/usr/share/pixmaps/qtumtestnet128.png

}



