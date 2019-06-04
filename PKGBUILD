# Maintainer: Riccardo Berto <riccardobrt at gmail dot com>

_pkgname=redis-graph
pkgname=redis-graph-git
pkgver=r311.5c904af4
pkgrel=1
pkgdesc="This project is a Redis module that implements a graph database."
arch=('i686' 'x86_64' 'aarch64' 'armv7h')
url="https://github.com/RedisLabsModules/$_pkgname"
license=('AGPL-3.0')
depends=('redis' 'cmake')
makedepends=('git')
conflicts=('redis-graph')
source=("git+$url")
install=$pkgname.install
sha256sums=("SKIP")

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd $_pkgname/
	make $MAKEFLAGS
}

package() {
        cd $_pkgname
        install -D src/redisgraph.so $pkgdir/usr/lib/redis/redisgraph.so
        install -Dm644 LICENSE $pkgdir/usr/share/licenses/$_pkgname/LICENSE
}
