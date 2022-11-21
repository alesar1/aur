# Maintainer: Young Fellow <youngfellow.le@gmail.com>
pkgname=walc
pkgver=0.2.4
pkgrel=2
pkgdesc="An unofficial WhatsApp Desktop client for linux systems."
arch=('x86_64')
url="https://github.com/WAClient/WALC"
license=('GPL3')
depends=('nodejs-lts-gallium' 'npm' 'gtk3' 'alsa-lib' 'nss')
makedepends=('gendesk')
provides=('walc')
conflicts=('walc')
source=("WALC-$pkgver.tar.gz::https://github.com/WAClient/WALC/archive/refs/tags/v$pkgver.tar.gz")
md5sums=('c496ab1dc6159164b34e9a6c70ae3b0c')

prepare() {
	gendesk --pkgname "$pkgname" --pkgdesc "$pkgdesc" --name='WALC' --genericname='Unofficial WhatsApp Client for Linux' --custom='StartupWMClass=walc' --exec='npm start --prefix /opt/WALC' --icon='/opt/WALC/src/icons/logo360x360.png' --startupnotify='true' --categories='Network;Applications' -n

}

build() {
        cd "WALC-$pkgver"
        npm install
        npm run dev
}

package() {
        mkdir "$pkgdir/opt"
        mv "WALC-$pkgver" "$pkgdir/opt/WALC"

        install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
