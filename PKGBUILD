# Contributor: mihai303

pkgname=rpmdevtools
pkgver=8.6
pkgrel=1
pkgdesc="RPM Development Tools"
arch=('any')
url="https://fedorahosted.org/$pkgname/"
source=("https://fedorahosted.org/released/$pkgname/$pkgname-$pkgver.tar.xz")
license=('GPL2')
depends=('python' 'rpm-org')
makedepends=('bash-completion' 'help2man')
md5sums=('daee90323a325efee01257c1e9c6aced')

build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr \
	            --sysconfdir=/etc
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}

# vim: set ft=sh ts=4 sw=4 noet:
