# Maintainer: Ben Brooks <ben@bbrks.me>
# PRs/Issues: https://github.com/bbrks/aur-sync_gateway-community-bin

pkgname=sync_gateway-community-bin
pkgver=2.8.0
pkgrel=1
pkgdesc="Manages access and synchronization between Couchbase Lite and Couchbase Server - Community Edition (CE)"
url="https://github.com/couchbase/sync_gateway"
arch=('x86_64')
license=('custom:Couchbase Community Edition License')
provides=('sync_gateway')
conflicts=('sync_gateway-git')
source=(
	"https://packages.couchbase.com/releases/couchbase-sync-gateway/${pkgver}/couchbase-sync-gateway-community_${pkgver}_x86_64.deb"
	'sync_gateway.service'
)
sha256sums=(
	'f26ba49a2449f589acdd7e732244b4cd6577cb591d9a67e366bf81ef98df8ab2'
	'4bc3c5843b2b6e31d954a53d43c9ecdce77faf3942b5da4ffdaba846f02dd381'
)

prepare () {
	msg2 "Extracting the data.tar.gz file"
	tar -xf "${srcdir}/data.tar.xz"
}

package() {
	install -Dm755 "${srcdir}/opt/couchbase-sync-gateway/bin/sync_gateway" "${pkgdir}/usr/bin/sync_gateway"
	install -Dm644 "${srcdir}/opt/couchbase-sync-gateway/examples/serviceconfig.json" "${pkgdir}/etc/sync_gateway.json"
	install -Dm644 "${srcdir}/sync_gateway.service" "${pkgdir}/usr/lib/systemd/system/sync_gateway.service"
	install -Dm644 "${srcdir}/opt/couchbase-sync-gateway/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
