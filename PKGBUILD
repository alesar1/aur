# Maintainer: silverhikari <kerrickethan@gmail.com>
pkgname=clk-qt
pkgver=2022_04_17
pkgrel=1
epoch=
pkgdesc="a latency hating emulator for 8 and 16 bit platforms(qt version)"
arch=(x86_64)
url="https://github.com/TomHarte/CLK"
license=('MIT')
depends=('qt5-base' 'qt5-multimedia' 'qt5-x11extras')
provides=('clksignal')
conflicts=('clk-sdl' 'clk-qt-git' 'clk-sdl-git')
source=("https://github.com/TomHarte/CLK/archive/refs/tags/${pkgver//_/-}.tar.gz")
noextract=()
install="clk.install"
sha256sums=('6fb86c35207cd58312add62f5d9407d3eb8df169cf934175b3f40bb1ad954f25')

build() {
	cd "CLK-${pkgver//_/-}/OSBindings/Qt/"
	qmake
	make
}

package() {
	install -d "${pkgdir}/usr/share/CLK/"
	install -d "${pkgdir}/usr/local/share/CLK"
	cd "CLK-${pkgver//_/-}"
	install -Dm755 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	cd "${srcdir}/CLK-${pkgver//_/-}/OSBindings/Qt/"
	install -Dm755 clksignal "${pkgdir}/usr/bin/clksignal"
}
