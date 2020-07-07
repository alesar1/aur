# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Valerio Pizzi (Pival81) <pival81@yahoo.com>

_pkgname=arx-libertatis
pkgname=$_pkgname-bin
pkgver=1.1.2
pkgrel=2
rpmrel=9.27
pkgdesc='Cross-platform port of Arx Fatalis, a first-person role-playing game. (binary version)'
url='https://arx-libertatis.org/'
arch=('x86_64')
license=('GPL3')
depends=('sdl' 'openal' 'glew1.10')
optdepends=('qt5-base: enable built-in crash handler (Qt5 version; recompile needed)'
            'gdb: generate detailed crash reports'
	    'arxfatalis-data-copy: Arx Fatalis game data, required to play'
	    'arxfatalis-data-demo: Arx Fatalis game data from the demo, required to play'
	    'arxfatalis-data-gog: Arx Fatalis game data from the GOG installer, required to play')

provides=('arxlibertatis')
conflicts=('arxlibertatis' 'arx-libertatis-git')
source=("https://download.opensuse.org/repositories/home:/dscharrer/Fedora_Rawhide/x86_64/$_pkgname-$pkgver-$rpmrel.x86_64.rpm")
sha256sums=('85260e78cec225ca036713cc77d7ab6afb926619badd902f16e6a23db53891c4')

package() {
	bsdtar -C $pkgdir -xf $srcdir/$_pkgname-$pkgver-*.rpm 
}

