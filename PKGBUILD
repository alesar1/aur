# Maintainer: JackMacWindows <jackmacwindowslinux@gmail.com>
pkgname=craftos-pc
pkgver=2.7
pkgrel=1
epoch=
pkgdesc="Advanced ComputerCraft emulator written in C++"
arch=('x86_64' 'i386' 'armv7l' 'aarch64')
url="https://www.craftos-pc.cc/"
license=('MIT')
groups=()
depends=('craftos-pc-data>=2.5' 'sdl2>=2.0.8' 'sdl2_mixer' 'poco')
makedepends=('unzip' 'patchelf')
optdepends=('libharu: PDF output support' 'png++: PNG screenshot support' 'ncurses: CLI mode support' 'libwebp: WebP screenshot/recording support')
checkdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("craftos2-${pkgver}.tar.gz::https://github.com/MCJack123/craftos2/archive/v${pkgver}.tar.gz"
        "craftos2-lua-${pkgver}.tar.gz::https://github.com/MCJack123/craftos2-lua/archive/v${pkgver}.tar.gz")
noextract=()
sha256sums=('e354529e5500741580edfed0a53f04a31994545dca47c0fd964f9c45e5dacfdc' 'd5558cd419c8d46bdc958064cb97f963d1ea793866414c025906ec15033512ed')
validpgpkeys=()

prepare() {
    cp -R "craftos2-lua-$pkgver"/* "craftos2-$pkgver/craftos2-lua/"
    cd "craftos2-$pkgver"
    mkdir icons
    unzip resources/linux-icons.zip -d icons
    make -C craftos2-lua -j$(nproc) linux
}

build() {
	cd "craftos2-$pkgver"
	./configure --prefix=/usr
	make -j$(nproc)
}

check() {
	cd "craftos2-$pkgver"
	make -k test
}

package() {
	cd "craftos2-$pkgver"
	mkdir -p "$pkgdir/usr/bin"
	DESTDIR="$pkgdir/usr/bin" make install
	install -D -m 0755 craftos2-lua/src/liblua.so "$pkgdir/usr/lib/libcraftos2-lua.so"
	patchelf --replace-needed craftos2-lua/src/liblua.so libcraftos2-lua.so "$pkgdir/usr/bin/craftos"
	mkdir -p "$pkgdir/usr/include"
	cp -R api "$pkgdir/usr/include/CraftOS-PC"
	install -D -m 0644 icons/CraftOS-PC.desktop "$pkgdir/usr/share/applications/CraftOS-PC.desktop"
	install -D -m 0644 icons/16.png "$pkgdir/usr/share/icons/hicolor/16x16/apps/craftos.png"
	install -D -m 0644 icons/24.png "$pkgdir/usr/share/icons/hicolor/24x24/apps/craftos.png"
	install -D -m 0644 icons/32.png "$pkgdir/usr/share/icons/hicolor/32x32/apps/craftos.png"
	install -D -m 0644 icons/48.png "$pkgdir/usr/share/icons/hicolor/48x48/apps/craftos.png"
	install -D -m 0644 icons/64.png "$pkgdir/usr/share/icons/hicolor/64x64/apps/craftos.png"
	install -D -m 0644 icons/96.png "$pkgdir/usr/share/icons/hicolor/96x96/apps/craftos.png"
}

