# Maintainer: GodronGR <ntheo1979@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: damir <damir@archlinux.org>
# Contributor: Paul Mattal <paul@archlinux.org>

pkgname=lib32-x264
_pkgname=x264
pkgver=155.r0a84d986
pkgrel=3
pkgdesc='Open Source H264/AVC video encoder (lib32)'
arch=('x86_64')
url='https://www.videolan.org/developers/x264.html'
license=('GPL')
depends=("${_pkgname}")
makedepends=('git' 'l-smash' 'nasm')
provides=('lib32-libx264' 'libx264.so')
conflicts=('lib32-libx264' 'lib32-libx264-10bit' 'lib32-libx264-all')
replaces=('lib32-libx264' 'lib32-libx264-10bit' 'lib32-libx264-all')
_commit='545de2ffec6ae9a80738de1b2c8cf820249a2530'
source=("git+https://git.videolan.org/git/x264.git#commit=${_commit}")
sha256sums=('SKIP')

prepare() {
if [[ -d build ]]; then
	rm -rf build
fi
mkdir build
}

build() {
cd build
export CC="gcc -m32"
export CXX="g++ -m32"
export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

../x264/configure \
	--prefix='/usr' \
	--enable-shared \
	--enable-pic \
	--enable-lto \
	--libdir=/usr/lib32 \
	--host=i686-linux-gnu
make
}

package() {
make -C build DESTDIR="${pkgdir}" install-cli install-lib-shared
cd "$pkgdir/usr"
rm -rf {bin,include}/
}
