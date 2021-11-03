# Maintainer: TheDalaiAlpaca dleeg at tutanota dot com
# Issues: https://gitlab.com/TheDalaiAlpaca/sat-yt/-/issues

_pkgname="sat-yt"
pkgname="$_pkgname"-git
pkgver=0.3.2
pkgrel=1
pkgdesc="Youtube plugin for saturnon"
arch=('any')
url="https://gitlab.com/TheDalaiAlpaca/sat-yt"
license=('GPL3')
makedepends=()
depends=('bash' 'coreutils' 'ncurses' 'yt-dlp' 'mpv' 'jq' 'less' 'grep') 
optdepends=()
md5sums=(SKIP)
source=("https://gitlab.com/TheDalaiAlpaca/$_pkgname/-/archive/$pkgver/$_pkgname-$pkgver.tar.gz")


package() {
	cd "$_pkgname-$pkgver"

	install -Dm 644 -t "$pkgdir/etc/saturnon"          "conf/youtube.conf"
	install -Dm 644 -t "$pkgdir/etc/saturnon"          "conf/sat_channelmove.conf"
	install -Dm 755 -t "$pkgdir/usr/share/saturnon"    "scripts/refresh"
	install -Dm 755 -t "$pkgdir/usr/share/saturnon"    "scripts/subscribe"
	install -Dm 755 -t "$pkgdir/usr/share/saturnon"    "scripts/install_dirs"
	install -Dm 755 -t "$pkgdir/usr/share/saturnon"    "scripts/info"
}
