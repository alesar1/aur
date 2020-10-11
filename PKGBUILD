# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=thiefmd
pkgver=0.1.0
_codename=inandout
pkgrel=1
pkgdesc="The markdown editor worth stealing. Inspired by Ulysses, based on code from Quilter"
arch=('x86_64')
url="https://thiefmd.com"
license=('GPL3')
depends=('gtkspell3' 'webkit2gtk' 'discount' 'gtksourceview4' 'libxml2' 'libarchive'
         'clutter' 'libgee')
makedepends=('git' 'meson' 'vala')
#source=("$pkgname-$pkgver.tar.gz::https://github.com/kmwallio/ThiefMD/archive/v$pkgver-$_codename.tar.gz")
_commit=906f8ea9e35e415104cbb7963743be23af5ded4a
source=("git+https://github.com/kmwallio/ThiefMD.git#commit=$_commit"
        'git+https://github.com/TwiRp/ultheme-vala.git'
        'git+https://github.com/ThiefMD/libwritegood-vala.git')
sha256sums=('SKIP'
            'SKIP'
            'SKIP')


pkgver() {
	cd "$srcdir/ThiefMD"
	git describe --tags | sed "s/^v//;s/-$_codename//;s/-/+/g"
}

prepare() {
	cd "$srcdir/ThiefMD"
	git submodule init
	git config submodule.src/ultheme-vala.url $srcdir/mysubmodule
	git config submodule.src/libwritegood-vala.url $srcdir/mysubmodule
	git submodule update
}

build() {
	arch-meson ThiefMD build
	meson compile -C build
}

check() {
	meson test -C build --print-errorlogs
}

package() {
	DESTDIR="$pkgdir" meson install -C build

	ln -s /usr/bin/com.github.kmwallio.thiefmd "$pkgdir/usr/bin/$pkgname"
}
