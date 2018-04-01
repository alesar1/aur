# Maintainer: Lev Lybin <lev.lybin@gmail.com>
# Contributor: Lev Lybin <lev.lybin@gmail.com>

pkgname=burstcoin-wallet
_realname=burstcoin
pkgver=2.0.3
pkgrel=1
pkgdesc="The world's first HDD-mined cryptocurrency using an energy efficient and fair Proof-of-Capacity (PoC) consensus algorithm."
arch=('i686' 'x86_64')
url="https://github.com/PoC-Consortium/burstcoin"
license=('GPL3')
options=('!strip')
backup=(opt/burstcoin-wallet/conf/{logging-default.properties,brs-default.properties})
depends=('java-runtime-common' 'java-runtime>=8')
source=(https://github.com/PoC-Consortium/burstcoin/releases/download/${pkgver}/burstcoin-${pkgver}.zip
burstcoin-wallet.service
)
sha256sums=('6e1d4771be5896eb5210e2e1bfb83cb51db32b4b3d2afd26af8f9b90855a10b4'
            '677aa600c97fcba5ec20f3e442f02acd920602e6bf08a8e536088fd6e2d15585')

package() {
    install -dm755 $pkgdir/usr/lib/systemd/system
    install -dm755 $pkgdir/opt/$pkgname

    install -Dm644 burstcoin-wallet.service $pkgdir/usr/lib/systemd/system/burstcoin-wallet.service

    cd $srcdir

    cp -dr --no-preserve=ownership {burst_db,conf,html,burst.jar,Burst_Wallet.url,genscoop.cl} $pkgdir/opt/$pkgname

    install -Dm755 burst.sh $pkgdir/opt/$pkgname
}
