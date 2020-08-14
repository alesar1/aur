#maintainer lxgr <lxgr@protonmail.com>
pkgname=buildaur
pkgver=42.0.3.2
pkgrel=2
pkgdesc="An AUR helper with asp support"
arch=(any)
url="https://github.com/lxgr-linux/buildaur"
license=('GPL3')
depends=('pacman' 'asp' 'devtools' 'git' 'python3')
makedepends=()
backup=('etc/buildaur/buildaur.conf' 'usr/share/buildaur/blacklist')

source=("${pkgname}.tar.gz"::"https://github.com/lxgr-linux/buildaur/archive/${pkgver}.tar.gz")
md5sums=('9dbbe76ee3cb8a9afada655c2092b746')

package() {
	cd "$srcdir/$pkgname-$pkgver"
	install -dm755 "${pkgdir}/usr/share/buildaur"
	install -m644 blacklist "${pkgdir}/usr/share/buildaur"
	install -dm755 "${pkgdir}/etc/buildaur"
	install -dm755 "${pkgdir}/etc/buildaur/prehooks"
	install -dm755 "${pkgdir}/etc/buildaur/posthooks"
	install -dm755 "${pkgdir}/etc/buildaur/prerunhooks"
	install -dm755 "${pkgdir}/etc/buildaur/postrunhooks"
	install -dm755 "${pkgdir}/etc/buildaur/hooks"
	install -Dm0755 -t "$pkgdir/etc/buildaur/prehooks" ./prehooks/*
	install -m644 buildaur.conf "$pkgdir/etc/buildaur/"
	#install -Dm0755 -t "$pkgdir/etc/buildaur/posthooks" ./posthooks/*
	install -Dm0755 -t "$pkgdir/usr/bin" "buildaur"
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
