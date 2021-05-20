# Maintainer: xpander <xpander0 at gmail dot com>
# Maintainer: Natherul <natherul0 at gmail dot com>

pkgname=waraddonclient
_pkgname=WARAddonClient
pkgver=1.12.1
pkgrel=1
pkgdesc="Warhammer Return of Reckoning Addon Client"
arch=('x86_64')
url="https://github.com/Idrinth/WARAddonClient"
license=('MIT')
depends=('java-runtime')
source=("$_pkgname.jar::$url/releases/download/$pkgver/$_pkgname.jar"
        "$pkgname.desktop"
        "logo.png"
        "waraddonclient"
        "permissions.install")
sha256sums=('517f21245f95c590784460a86aeab867742d38fcf8dbc2d0fe690c6f3a4568b8'
            '1ca564ed8afec3a55a126ccd3647e44588772ffa446efc7aa4414119cfb96690'
            '43c55b23d98950ed17d88d95d72e1eac1903f3f6a5b9ef99b29d328fe3cb5d24'
            '3fc22a8c6adab85c59cbabee0e807e5261f0ffd377b3acf998ffd694a8a536ef'
            'f281a15fccf8fd10844ad91b7bf902e583dcff4ce1d3d47dc2764eceed9011ec')
install=permissions.install

package() {
	cd "$src"
	install -Dm644 $_pkgname.jar "$pkgdir/opt/$_pkgname/$_pkgname.jar"
	install -Dm644 logo.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
	install -Dm755 waraddonclient "$pkgdir/usr/bin/waraddonclient"
	install -Dm755 "$pkgname.desktop" -t "$pkgdir/usr/share/applications"
	
}
