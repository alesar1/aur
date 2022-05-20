# Maintainer: Markus Sommer <markus@splork.de>

_gopkgname='github.com/dtn7/dtn7-go'

pkgname=dtn7
pkgver=0.9.1
pkgrel=1
pkgdesc="Delay tolerant routing daemon - Implements Bundle Protocol Version 7"
arch=('x86_64' 'i686' 'armv6h' 'armv7h' 'aarch64')
url="https://dtn7.github.io/"
license=('GPL3')
depends=("glibc")
makedepends=("go")
provides=('dtnd' "dtn-tool")
conflicts=('dtnd')
backup=("etc/dtn7/configuration.toml" "etc/ufw/applications.d/dtn7")
source=("https://$_gopkgname/archive/v$pkgver.tar.gz")
sha512sums=("18662a754c75191ded80b7388357e384980576df6a8ce96cb7b684b3a53a60a83e6895adcd7ce56e3d69868c71601f25141e7f34858f73338a62af9db510bedb")

build() {
	cd "$srcdir/$pkgname-go-$pkgver"
	export GO111MODULE=on
	go build -buildmode=pie -trimpath -ldflags "-extldflags $LDFLAGS" ./cmd/dtnd
	go build -buildmode=pie -trimpath -ldflags "-extldflags $LDFLAGS" ./cmd/dtn-tool
}

package() {
	cd "$srcdir/$pkgname-go-$pkgver"
	install -D -m 0755 dtnd "$pkgdir/usr/bin/dtnd"
	install -D -m 0755 dtn-tool "$pkgdir/usr/bin/dtn-tool"

	install -D -m 0644 "cmd/dtnd/configuration.toml" "$pkgdir/etc/dtn7/configuration.toml"
	install -D -m 0644 "contrib/systemd/service/dtn7.service" "$pkgdir/usr/lib/systemd/system/dtn7.service"
	install -D -m 0644 "contrib/ufw/dtn7" "$pkgdir/etc/ufw/applications.d/dtn7"
	install -D -m 0644 "contrib/systemd/sysusers/dtn7" "$pkgdir/usr/lib/sysusers.d/dtn7.conf"
	install -D -m 0644 "contrib/systemd/tmpfiles/dtn7" "$pkgdir/usr/lib/tmpfiles.d/dtn7.conf"
}
