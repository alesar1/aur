# Maintainer: Joan Bruguera Micó <joanbrugueram@gmail.com>
pkgname=doom2masterlevelspatch
pkgver=1.2
pkgrel=1
pkgdesc="Unofficial Master Levels For Doom 2 Patcher For ZDoom (Join all Master Levels WADs)"
url=http://maniacsvault.net/projects
arch=('x86_64')
license=('custom')
depends=('qt5-base')
makedepends=('cmake')
source=("http://maniacsvault.net/files/masterlevelspatch.7z"
        qt5_support.patch)

sha256sums=(bd2e1a432084af72db2c860959392132db45ddc43abec61c101249c613b672c2
            b1ef893f549bd742333ae906eb71d630260b7b7e5317043d34cf6276641db83a)

prepare() {
	# Extract relevant license excerpt from readme.txt
	tail -6 "readme.txt" > "license.txt"

	# Qt4 -> Qt5 port to make build without AUR dependencies possible
	tar xf "patch_src.tar"
	cd "patch_src"
	patch -Np1 -i "${srcdir}/qt5_support.patch"
}

build() {
	mkdir -p build
	cd build
	cmake "../patch_src" -DCMAKE_BUILD_TYPE=Release
	make
}

package() {
	install -Dm755 "build/patch" "$pkgdir/usr/bin/doom2masterlevelspatch"
	install -Dm755 "license.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
