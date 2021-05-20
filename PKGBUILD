# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=pika-backup
pkgver=0.3.1
pkgrel=3
pkgdesc="Simple backups based on borg"
arch=('x86_64' 'aarch64')
url="https://gitlab.gnome.org/World/pika-backup"
license=('GPL')
depends=('borg' 'gtk3' 'libhandy' 'python-llfuse')
makedepends=('git' 'meson' 'rust')
_commit=c2267e8d59b1faafbcfc49c26c8aa155b68c83aa # tag=v0.3.1^0
source=("git+https://gitlab.gnome.org/World/pika-backup.git#commit=$_commit"
        'remove-install_script.patch')
sha256sums=('SKIP'
            '92f89123e206a02f614faab838ca5bc4524f72283275630c07c8fa9f3aa4f3f6')

pkgver() {
	cd "$srcdir/$pkgname"
	git describe --tags | sed 's/^v//;s/-/+/g'
}

prepare() {
	cd "$srcdir/$pkgname"

	# Remove single process limit for tests
#	sed -i '/codegen-units/d' Cargo.toml

	# Disable update-desktop-database & gtk-update-icon-cache
	patch --strip=1 data/meson.build $srcdir/remove-install_script.patch
}

build() {
	arch-meson "$pkgname" build
	meson compile -C build
}

#check() {
#	meson test -C build --print-errorlogs
#}

package() {
	DESTDIR="$pkgdir" meson install -C build
}
