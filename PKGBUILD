# Maintainer: LiveLM <livelm at hotmail dot com> ghactions test
pkgname=emusak-bin
pkgver=1.0.72
pkgrel=1
pkgdesc="Allows you to download saves and shaders for Switch emulators."
arch=(x86_64)
url="https://github.com/stromcon/emusak-ui"
license=('GPL3')
depends=(expat glib2 nss gtk3)
source=("https://github.com/stromcon/emusak-ui/releases/download/v$pkgver/emusak_${pkgver}_amd64.deb")
sha256sums=('9263e7ea384a1148834b7de0f46ce9ae1066c2eb393cb506de7e6f29f1141f8b')

build(){
	tar -xvf data.tar.xz
}

package() {
	cp -r usr "$pkgdir"
}
