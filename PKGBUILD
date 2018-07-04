# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Sean Anderson <seanga2@gmail.com>
_srcname=crawl
pkgname=crawl-tiles
pkgver=0.21.1
pkgrel=2
epoch=
pkgdesc="Dungeon Crawl Stone Soup with graphical tiles and sound support"
arch=('i686' 'x86_64')
url="https://crawl.develz.org/"
license=('GPL')
depends=(
	'sdl2_image'
	'sdl2_mixer'
	'freetype2'
	'lua51'
	'sqlite'
	'glu'
)
makedepends=('gendesk')
checkdepends=()
optdepends=()
provides=('crawl')
conflicts=('crawl')
backup=()
options=()
source=("https://github.com/crawl/$_srcname/archive/$pkgver.tar.gz")
md5sums=('634808232f0811c7f16594a8c35d8b72')

prepare() {
	gendesk -f -n --pkgname "$pkgname" --pkgdesc "$pkgdesc" --name "Crawl tiles" --categories "Application;Game" --exec "crawl"

	cd "$_srcname-$pkgver/crawl-ref/source"
	
	echo $_makeflags
	echo $pkgver > util/release_ver
}

build() {
	cd "$_srcname-$pkgver/crawl-ref/source"

	make \
		prefix=/usr \
		bin_prefix=bin \
		DESTDIR=$pkgdir \
		SAVEDIR='~/.crawl' \
		LUA_PACKAGE=lua51 \
		TILES=y \
		SOUND=y
}

# Tests cannot be run without a debug build.
# To enable them, add the debug target to build()
#check() {
#	cd "$_srcname-$pkgver/crawl-ref/source"
#	make -k test \
#		prefix=/usr \
#		bin_prefix=bin \
#		DESTDIR=$pkgdir \
#		SAVEDIR='~/.crawl' \
#		LUA_PACKAGE=lua51 \
#		TILES=y
#}

package() {
	install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"

	cd "$_srcname-$pkgver/crawl-ref/source"

	make install \
		prefix=/usr \
		bin_prefix=bin \
		DESTDIR=$pkgdir \
		SAVEDIR='~/.crawl' \
		LUA_PACKAGE=lua51 \
		TILES=y \
		SOUND=y

	install -Dm644 "dat/tiles/stone_soup_icon-32x32.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
}
