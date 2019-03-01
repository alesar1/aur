# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=gitin
pkgver=0.1.5
pkgrel=2
pkgdesc="Commit/branch/workdir explorer for git"
arch=('x86_64')
url="https://github.com/isacikgoz/$pkgname"
license=('BSD')
makedepends=('cmake' 'go' 'git' 'libgit2' 'openssl')
source=("$pkgname-$pkgver.tar.gz::https://github.com/isacikgoz/$pkgname/archive/v$pkgver.tar.gz")
sha256sums=('997b2f75487fa1590eeb0191e72e7e70b576e796f8b35ded1846771f445d2d6a')

package() {
	cd $pkgname-$pkgver
	make DESTDIR="$pkgdir/" install
	install -m755 -D $pkgname $pkgdir/usr/bin/$pkgname
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
