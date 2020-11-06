# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=pangolin-desktop-git
pkgver=r1339.b10860d
pkgrel=1
pkgdesc="Pangolin Desktop UI shell, designed for dahliaOS, written in Flutter."
arch=('x86_64')
url="https://github.com/dahlia-os/pangolin-desktop"
license=('Apache')
depends=('gtk3')
makedepends=('git' 'flutter' 'cmake' 'ninja' 'imagemagick')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/dahlia-os/pangolin-desktop.git'
        "${pkgname%-git}.desktop")
sha256sums=('SKIP'
            'f9b790200ac34e3dc038b0bc3366d91c08239762466ccc383fc2eb8f03ad2c02')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	flutter channel master
	flutter upgrade
	flutter config --enable-linux-desktop
	flutter build linux
}

package() {
	cd "$srcdir/${pkgname%-git}/build/linux/release/bundle"
	install -d "$pkgdir/opt/${pkgname%-git}"
	cp -r * "$pkgdir/opt/${pkgname%-git}"

	install -d "$pkgdir/usr/bin"
	ln -s "/opt/${pkgname%-git}/pangolin_desktop" "$pkgdir/usr/bin/${pkgname%-git}"

	convert \
		data/flutter_assets/assets/images/logos/dahliaOS/PNG/dahliaOS_logo.png \
		-resize 1024 "$srcdir/dahliaOS_logo-1024.png"
	install -Dm644 "$srcdir/dahliaOS_logo-1024.png" \
		"$pkgdir/usr/share/pixmaps/${pkgname%-git}.png"

	install -Dm644 "$srcdir/${pkgname%-git}.desktop" -t "$pkgdir/usr/share/applications"
}
