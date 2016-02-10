# Maintainer: Jesse Bryan <winneonsword@gmail.com>
pkgname=cappy
pkgver=1.0.4
pkgrel=2
epoch=
pkgdesc="A simple and reliable screenshot tool."
arch=('any')
url="https://github.com/Winneon/cappy"
license=('MIT')
depends=('curl'
         'xdotool'
         'xclip'
         'imagemagick')
source=("https://github.com/Winneon/cappy/archive/master.tar.gz")
md5sums=('a3a5d5647280638644fc1b4f7a3acb23')


package(){
	cd "$srcdir/cappy-master"
	
	# install script
	mkdir -p "$pkgdir/usr/bin"
	install -m755 cappy "$pkgdir/usr/bin/cappy"
	
	# install MIT
	mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
	install -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
