# Maitainer: Debendra Oli <debendraoli@pm.me>

pkgname=arduino-language-server-bin
pkgver=0.6.0
pkgrel=1
pkgdesc="An Arduino Language Server based on Clangd to Arduino code autocompletion"
arch=(x86_64)
makedepends=('go')
url="https://github.com/arduino/arduino-language-server"
license=('APACHE')
sha256sums=('6d9398bd4a001a4bf77f12f9cc0e42212b48027973bdc5f25abf2c63d54f0cc1')
provides=('arduino-language-server')
conflicts=('arduino-language-server')

source=(https://github.com/arduino/arduino-language-server/releases/download/${pkgver}/arduino-language-server_${pkgver}_Linux_64bit.tar.gz)

package() {
	cd ${srcdir}
	msg2 'Installing executables...'
	install -Dm 755 arduino-language-server -t "$pkgdir"/usr/bin
}
