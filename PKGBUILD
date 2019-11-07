# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=guiscrcpy
pkgver=2.0
pkgrel=1
pkgdesc="Open Source GUI based Android Screen Mirroring System"
arch=('i686' 'x86_64')
url="https://srevinsaju.github.io/guiscrcpy"
license=('GPL3')
depends=('scrcpy' 'python-pyqt5' 'python-psutil' 'python-qdarkstyle' 'python-gitpython' 
         'python-pillow' 'python-pynput')
makedepends=('python-setuptools')
optdepends=('python-pystray: for developers'
            'usbaudio: AOA audio, deprecated since Android 8.0')
_commit=c6169d4eee732575da197934e7b7a36e9fd1bfca
source=("git+https://github.com/srevinsaju/guiscrcpy.git#commit=$_commit" # 2.0
        "$pkgname.desktop"
        "$pkgname.sh"
        "$pkgname.patch")
sha256sums=('SKIP'
            'a97ede5e1f363df0b3960c7cfbfdff69e8c2b2c39ef0abc522d5ff5ecb04061b'
            '7d85c9d18ee989efa9cec44924294a5775c00a0d1ca6c369fb43a216e1d6f19f'
            'ea4260b593927008d6c57dd982b4fb2de5cf8579372f8daf5ef072cf70f27487')
            
prepare() {
	cd "$srcdir/$pkgname"
	
	# Remove shortcut creation as files cannot be placed in $HOME in fakeroot environment
	patch -Np1 -i "$srcdir/$pkgname.patch"
}
            
build() {
	cd "$srcdir/$pkgname"
	python setup.py build
}

package() {
	cd "$srcdir/$pkgname"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
	install -Dm644 "$srcdir/$pkgname.desktop" \
		"$pkgdir/usr/share/applications/$pkgname.desktop"
	install -Dm644 "installers/linux/icons/${pkgname}_logo.png" \
		"$pkgdir/usr/share/pixmaps/$pkgname.png"
}
