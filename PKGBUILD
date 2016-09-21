# Maintainer: petRUShka <petrushkin@yandex.ru>

pkgname=nuvola-app-yandex-music
pkgver=1.2
pkgrel=1
pkgdesc="Yandex Music integration for Nuvola Player."
arch=("any")
url="https://github.com/tiliado/nuvola-app-yandex-music"
license=('custom:BSD')
depends=('nuvolaplayer')
makedepends=('git')
conflicts=("nuvola-app-yandex-music-git")
source=(https://github.com/tiliado/${pkgname}/archive/${pkgver}.tar.gz)
sha256sums=('870af779336df56c36f44d1a881f6e571513b1c66b7ec8a73948dfb64db9fb26')

build() {
    cd "$srcdir/${pkgname}-${pkgver}"
	make build
    cp LICENSE-BSD.txt LICENSE
}

package() {
    cd "$srcdir/${pkgname}-${pkgver}"
	install -vCDm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	make install DEST="${pkgdir}/usr/share/nuvolaplayer3/web_apps"
}
