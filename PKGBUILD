# Maintainer: DDoSolitary <DDoSolitary@gmail.com>
pkgname=nodejs-unblockneteasemusic
pkgver=0.25.3
pkgrel=2
pkgdesc="Revive unavailable songs for Netease Cloud Music"
arch=(any)
url=https://github.com/nondanee/UnblockNeteaseMusic
license=(MIT)
depends=(nodejs)
makedepends=(npm jq)
source=(
	$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz
	unblockneteasemusic.service
	unblockneteasemusic.sysusers
	args.conf
)
sha512sums=('63425da7a0a7419dcd9e12f620601eebdedeb40016af876b44779f78f8a0c586fa97599076b61948a476cba3439f4da8f7e2121d8ec216882c580a848ca18898'
            '30a085967dbaf8d8caeb25f58cb5b2a9f98c258d4893a3e648c4ca2310572966877faecaee94b8081b9799d268827f5cf1e26184c6a4bf927b1a3458f30ef5df'
            '20b8c61fcc55a7d2b4b4b8e231f2888a8232b9edcd7811cf845976ca944c31d982cffdce3ad574abb87d3cf12d5ba442ce3baae4a18a7763fb9769e16f99207b'
            'bbf170413150b9eab5fe996f213ca2e454f7acac7ce64c39a70e8ae4a2e2fb5a467b5a253898e0f488a272dfde2060310d7ebff958390dd918510bda764a65be')
package() {
	npm install -g --user root --prefix "$pkgdir/usr" -cache  "$srcdir/npm-cache" "$srcdir/$pkgname-$pkgver.tar.gz"
	find "$pkgdir/usr" -type d -exec chmod 755 {} \;
	chown -R root:root "$pkgdir"
	find "$pkgdir" -name package.json -print0 | xargs -r -0 sed -i "/_where/d"
	local tmppackage="$(mktemp)"
	local pkgjson="$pkgdir/usr/lib/node_modules/@nondanee/unblockneteasemusic/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
	mv "$tmppackage" "$pkgjson"
	chmod 644 "$pkgjson"

	install -Dm644 "$srcdir/unblockneteasemusic.service" "$pkgdir/usr/lib/systemd/system/unblockneteasemusic.service"
	install -Dm644 "$srcdir/unblockneteasemusic.sysusers" "$pkgdir/usr/lib/sysusers.d/unblockneteasemusic.conf"
	install -Dm644 "$srcdir/args.conf" "$pkgdir/etc/systemd/system/unblockneteasemusic.service.d/args.conf"
}
