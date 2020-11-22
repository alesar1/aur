# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=pika-backup
pkgver=0.1.3
pkgrel=2
pkgdesc="Simple backups based on borg"
arch=('x86_64')
url="https://gitlab.gnome.org/World/pika-backup"
license=('GPL')
depends=('borg' 'gtk3' 'python-llfuse')
makedepends=('meson' 'rust')
source=("$url/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
sha256sums=('fcbed45d280e55fe2301e82a512a6ee9ccffff832e9e78e35f75573a3c2e5bda')

build() {
	arch-meson "$pkgname-v$pkgver" build
	meson compile -C build
}

package() {
	DESTDIR="$pkgdir" meson install -C build
}
