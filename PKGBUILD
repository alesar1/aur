# Maintainer: Pierre-Alain TORET <pierre-alain.toret@protonmail.com>
pkgname=peertube
pkgver=1.0.0_beta.3
_pkgver=1.0.0-beta.3
pkgrel=2
pkgdesc="Federated (ActivityPub) video streaming platform using P2P (BitTorrent) directly in the web browser with WebTorrent and Angular."
arch=("x86_64")
depends=("nodejs" "ffmpeg" "postgresql" "openssl" "redis" "nginx-mainline")
makedepends=("yarn" "npm")
url="https://joinpeertube.org/"
license=("AGPL")
backup=('etc/peertube/production.yaml')
install=$pkgname.install
source=("https://github.com/Chocobozzz/PeerTube/releases/download/v$_pkgver/$pkgname-v$_pkgver.zip"
        "$pkgname.install")
sha256sums=("6c6714d5229fcfaa5215fedc40e3dd476f39cf7cc62a27ab55e5bb082bd2509c"
            "23116acd08dcc84832b814a0bfa3ef50a449a44852cc70b343ac4b09816a5278")

build() {
        cd "$pkgname-v$_pkgver"
        yarn install --production --pure-lockfile
}

package() {
	install -d "$pkgdir/usr/share/webapps"
	install -d "$pkgdir/usr/share/doc/$pkgname"
	install -d "$pkgdir/usr/share/licenses/$pkgname"
	install -d "$pkgdir/var/lib/$pkgname"

	install -Dm644 "$pkgname-v$_pkgver/config/production.yaml.example"  "$pkgdir/etc/$pkgname/production.yaml"
	sed -i  "s@/var/www/$pkgname@/var/lib/$pkgname@g" "$pkgdir/etc/$pkgname/production.yaml"

	cp -a "$pkgname-v$_pkgver/support/doc"  "$pkgdir/usr/share/doc/$pkgname"
	install -Dm644 "$pkgname-v$_pkgver/CREDITS.md" "$pkgdir/usr/share/doc/$pkgname/CREDITS"
	install -Dm644 "$pkgname-v$_pkgver/FAQ.md" "$pkgdir/usr/share/doc/$pkgname/FAQ.md"
	install -Dm644 "$pkgname-v$_pkgver/README.md" "$pkgdir/usr/share/doc/$pkgname/README.md"

	install -Dm644 "$pkgname-v$_pkgver/support/systemd/$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
	sed -i  "s@/var/www/$pkgname/config@/etc/$pkgname@;s@/var/www/$pkgname/$pkgname-latest@/usr/share/webapps/$pkgname@g" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
	install -Dm644 "$pkgname-v$_pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

	rm -rf "$pkgname-v$_pkgver"/{config,*.md,LICENSE}
	cp -a "$pkgname-v$_pkgver" "$pkgdir/usr/share/webapps/$pkgname"
}
