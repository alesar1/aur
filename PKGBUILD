pkgname=stm32pio
pkgver=2.1.0
pkgrel=1
pkgdesc="Automate managing of STM32CubeMX + PlatformIO projects" 
arch=('x86_64')
url="https://github.com/ussserrr/stm32pio"
license=('MIT')
depends=('python' 'pyside2')
makedepends=('python3' 'python-setuptools')
optdepends=('code: for text editing')
source=($pkgname-$pkgver.tar.gz::$url"/archive/v${pkgver}.tar.gz")
md5sums=('SKIP')
build(){
	cd "$srcdir/$pkgname-$pkgver"
    	python setup.py build
}
package() {
	cd "$srcdir/$pkgname-$pkgver"
    	python setup.py install --root="$pkgdir" --optimize=1 
	# license
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
