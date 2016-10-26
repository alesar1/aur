# Maintainer: Sam Bazley <samb1999@hotmail.co.uk>
pkgname=spacebgdl
pkgver=1.1
pkgrel=1
pkgdesc="Downloads the latest Image of the Day from apod.nasa.gov/apod/astropix.html"
arch=('any')
license=('ZLIB')
url=https://github.com/Curly-/spacebgdl/
depends=()
source=("https://github.com/Curly-/spacebgdl/archive/${pkgver}.tar.gz")
package() {
    cd "$pkgname-$pkgver"
    install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/spacebgdl/LICENSE
    install -Dm755 spacebgdl ${pkgdir}/usr/bin/spacebgdl
    install -Dm755 spacebgdl.service ${pkgdir}/usr/lib/systemd/system/spacebgdl.service
    echo "Enable the service with:"
    echo "systemctl enable spacebgdl; systemctl start spacebgdl"
}
md5sums=('f8906401426df001bb69428a6c535afd')
