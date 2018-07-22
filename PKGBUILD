# Maintainer: redfish <redfish at galactica dot pw>

pkgname='monero-wallet-qt'
_monerover=0.12.0.0
pkgver=${_monerover}
pkgrel=2
arch=('x86_64' 'i686')
url="https://getmonero.org/"
license=('custom:Cryptonote')

provides=('monero-wallet-qt')

depends=("libmonero-wallet>=$_monerover"
	'openssl' 'boost-libs>=1.45'  'libunwind' 'readline' 'unbound'
	'qt5-base' 'qt5-declarative' 'qt5-graphicaleffects'
	'qt5-location' 'qt5-quickcontrols' 'qt5-quickcontrols2' 'qt5-tools' 'qt5-webchannel'
	'qt5-webengine' 'qt5-x11extras' 'qt5-xmlpatterns')

makedepends=('git' 'cmake' 'boost')

pkgdesc="Official QT GUI wallet for Monero, a private, secure, untraceable peer-to-peer currency"

source=("https://github.com/monero-project/monero-gui/archive/v${pkgver}.tar.gz")

md5sums=('ac71691e1f114aafc8c02252a276c128')

_srcdir=monero-gui-$_monerover

prepare() {
    cd "$srcdir/$_srcdir"

    echo "var GUI_VERSION = \"$pkgver\"" > version.js
    echo "var GUI_MONERO_VERSION = \"$_monerover\"" >> version.js
}

build() {
    cd "$srcdir/$_srcdir"

    make -C src/zxcvbn-c

    qmake
    make
}

package() {
    install -D -m755 "$srcdir/$_srcdir/release/bin/monero-wallet-gui" "$pkgdir/usr/bin/monero-wallet-qt"
    install -D -m644 "$srcdir/$_srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
