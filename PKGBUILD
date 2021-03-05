# Maintainer: Yoan Blanc <yoan@dosimple.ch>
# Contributor: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=headset
pkgver=3.3.3
pkgrel=1
pkgdesc="Discover and collect music on YouTube"
arch=('x86_64')
url="https://headsetapp.co"
license=('MIT')
depends=('gtk3' 'libnotify' 'nss' 'libxss')
makedepends=('npm' 'git')
source=("$pkgname-$pkgver.tar.gz::https://github.com/headsetapp/headset-electron/archive/v$pkgver.tar.gz"
        "$pkgname.desktop")
sha256sums=('389bcd5772ca503c7c58af511f72709a8b7b65a8e70ce5da047e444b49a2a82a'
            '3bc18b531f1e914e317267a570241855dbf11b27347435fe4770d75b74958123')

build() {
	cd "$pkgname-electron-$pkgver"

	# https://github.com/typicode/husky/issues/851
	git init .

	npm ci --cache "$srcdir/npm-cache"

	node_modules/.bin/electron-packager . \
		--executable-name headset \
		--ignore "(^/bin$|^/sig$|^/gh-pages$|^/player$|^/test$|Procfile|\.md$|^\.|^\/\.)" \
		--prune true \
		--out build/ \
		--overwrite \
		--asar \
		--platform=linux \
		--arch=x64
}

package() {
	cd "$pkgname-electron-$pkgver"

	# Fix file permissions
	find build/Headset-linux-x64 -type f -exec chmod 0644 {} +
	find build/Headset-linux-x64 -type d -exec chmod 0755 {} +
	chmod 0755 build/Headset-linux-x64/"$pkgname"

	install -d "$pkgdir/opt/$pkgname"
	cp -r build/Headset-linux-x64/* "$pkgdir/opt/$pkgname"

	install -d "$pkgdir/usr/bin"
	ln -s "/opt/$pkgname/$pkgname" "$pkgdir/usr/bin/$pkgname"

	install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications"

	install -Dm644 "src/icons/$pkgname.png" -t "$pkgdir/usr/share/pixmaps"

	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
