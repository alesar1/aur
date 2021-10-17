# Maintainer: AlphaJack <alphajack at tuta dot io>

pkgname="webtrees"
pkgver=2.0.17
pkgrel=2
pkgdesc="The web’s leading online collaborative genealogy application"
url="https://webtrees.net/"
license=("GPL3")
arch=("any")
depends=("php>=7.1")
source=("https://github.com/fisharebest/webtrees/releases/download/$pkgver/webtrees-$pkgver.zip")
sha256sums=('cf354f7fff855881bc9647b98a517654ded5a780d5f09737bc2bef17e1cccd71')
backup=("var/lib/webtrees/.htaccess" "var/lib/webtrees/index.php")
options=("!strip")

package(){
 cd "webtrees"
 install -d "$pkgdir/usr/share/webapps/webtrees"
 cp -r * "$pkgdir/usr/share/webapps/webtrees"

 install -d "$pkgdir/var/lib"
 mv "$pkgdir/usr/share/webapps/webtrees/data" "$pkgdir/var/lib/webtrees"
 ln -s "/var/lib/webtrees" "$pkgdir/usr/share/webapps/webtrees/data"
 chown -R http: "$pkgdir/var/lib/webtrees"
 chmod 750 "$pkgdir/var/lib/webtrees"

 # main configuration file will need to be created manually after the web wizard setup ends
}
