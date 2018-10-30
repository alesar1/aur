# Mantainer: 32th System

pkgname=dosbox-x-sdl2
pkgver=0.82.9
pkgrel=1
pkgdesc="x86 emulator with builtin DOS, with patches and more features"
arch=(i686 x86_64)
url="http://dosbox-x.com"
license=(GPL)
depends=(fluidsynth libxkbfile libpng libxrandr mesa ffmpeg sdl2)
makedepends=(glu)
optdepends=()
source=(dosbox-x::https://codeload.github.com/joncampbell123/dosbox-x/tar.gz/dosbox-x-windows-v$pkgver
	dosbox-x.png
	dosbox-x.desktop)

prepare(){
	cd "$srcdir/dosbox-x-dosbox-x-windows-v$pkgver/src/hardware"
	sed -i -- 's/CODEC_FLAG2_FAST/AV_CODEC_FLAG2_FAST/g' hardware.cpp
}

build() {
  cd "$srcdir/dosbox-x-dosbox-x-windows-v$pkgver"
  ./autogen.sh
  chmod +x vs2015/sdl/build-scripts/strip_fPIC.sh
  chmod +x configure
  ./configure --enable-core-inline --disable-debug --enable-avcodec --prefix=/usr --enable-sdl2
  make -j$(nproc)
}

package() {
  cd "$srcdir/dosbox-x-dosbox-x-windows-v$pkgver"
  make DESTDIR="$pkgdir" install
  install -Dm644 "$srcdir/dosbox-x.png" \
	"$pkgdir/usr/share/pixmaps/dosbox-x.png"
  install -Dm644 "$srcdir/dosbox-x.desktop" \
	"$pkgdir/usr/share/applications/dosbox-x.desktop"
}

md5sums=('5a98e5f7ccb06664b5660d26a2c64abf'
         '3dcfe45c5ed0433316eaea51e3620b36'
	 '81346ce4aaba68a586f3726d8b156b24')
