# Maintainer: Milian Reichardt <mreichardt95@gmail.com>

pkgname=check_mk-agent
pkgver=1.2.8p21
pkgrel=1
pkgdesc="Agent to send information to a Check_MK server"
arch=(any)
url="https://mathias-kettner.de"
license=('GPLv2')
install=${pkgname}.install
depends=('xinetd')
source=("https://mathias-kettner.de/download/check_mk-$pkgver.tar.gz")
md5sums=('96c80d5ef359f7f35fa0c26ad59c24ac')
build() {
	tar xfvz "$srcdir/check_mk-$pkgver/agents.tar.gz"
}

package() {
	mkdir -p "$pkgdir/usr/bin/"
	mkdir -p "$pkgdir/etc/xinetd.d/"
	install -m744 "$srcdir/check_mk_agent.linux" "$pkgdir/usr/bin/check_mk_agent"
	install -m644 "$srcdir/cfg_examples/xinetd.conf" "$pkgdir/etc/xinetd.d/check_mk"
	install -m744 "$srcdir/check_mk_caching_agent.linux" "$pkgdir/usr/bin/check_mk_caching_agent"
}
