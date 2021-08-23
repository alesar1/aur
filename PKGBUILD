#Maintainer: HurricanePootis <hurricanepootis@protonmail.com>
pkgname=betterww-git
pkgver=1.4.r16.g640a2a4
pkgrel=6
pkgdesc="Wind Waker Modding Tool for Game Cube"
arch=('any')
url="https://github.com/WideBoner/betterww"
license=('MIT')
depends=("python" "pyside2" "python-pyaml" "python-pillow" "python-pyqt5")
makedepends=("git")
source=("git+https://github.com/WideBoner/betterww.git"
	"betterww-launcher"
	"betterww.desktop"
	"betterww.png"
	"LICENSE")
sha512sums=('SKIP'
            'ce76d738bbe669e3839dbaa09300603c604a6bdc3d5a932c4c5a6121495c3981d2c95f6fd56a979249dcfeec5a9e53cd9939bbc6d49ed2241925b9a45a2a942f'
            'c5d63dc5a391c28eec09181c684af882898e9c37a29615fe086ce59ac267e1e1b22af19461277b4ca9f81049288307e3d9ba806d6dc395fc4b98d61234f25d63'
            'f4f5ec0ed0c72ab640188d802d81daf2a14c1eab3fedb0e3d6b85068cc5c2164bd1fddb1db6a4d53ae1cbe4a439ab244f96fed3a1e05c6e09893d366904f9d9d'
            'cde29735b23877e3c1dafd07bb1e86ddb84f48e836db5872bbce67ff83d15f06097c9f54313742cfbf34d0302de13447581dd976f0f22178726a2a49f5baf19b')
pkgver() {  
  cd "$srcdir/betterww"
  git describe --long --tags | sed -r "s/([^-]*-g)/r\1/;s/-/./g" 
} 

package() {
	mkdir -p "$pkgdir/opt/"
	mkdir -p "$pkgdir/usr/bin/"
	mkdir -p "$pkgdir/usr/share/icons/hicolor/256x256/apps/"
	mkdir -p "$pkgdir/usr/share/applications/"
	mkdir -p "$pkgdir/usr/share/licenses/betterww/"
	cp "$srcdir/betterww.desktop" "$pkgdir/usr/share/applications/betterww.desktop"
	cp "$srcdir/betterww.png" "$pkgdir/usr/share/icons/hicolor/256x256/apps/betterww.png"
	cp "$srcdir/betterww-launcher" "$pkgdir/usr/bin/betterww-launcher"
	cp "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/betterww/LICENSE"
	cp -r "$srcdir/betterww/" "$pkgdir/opt/"
	chmod 777 -R "$pkgdir/opt/betterww/"
}
