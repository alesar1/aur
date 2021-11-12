# Maintainer :		ethan_v2 $(tr +- .@ <<<'<ethan-ethanjmarshall+co+uk>')
# Upstream :		ethanv2 <https://github.com/ethanv2/podbit/>

pkgname=podbit
pkgver=1.2.2
pkgrel=1

pkgdesc='Podboat Improved: A podcast client for your terminal'
arch=('any')
url="https://github.com/ethanv2/$pkgname"
license=('GPL3')

depends=('mpv' 'ncurses')
optdepends=('newsboat: enqueue podcasts from RSS')
makedepends=('go')

source=("$pkgname-$pkgver.tgz::$url/archive/v$pkgver.tar.gz")
md5sums=('d1700346a7188d0de88cd13a2edee593')

package() {
	cd "$pkgname-$pkgver"
	make PREFIX=/usr MANPREFIX=/usr/share/man DESTDIR="$pkgdir" -s install
}
