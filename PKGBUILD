# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=guiscrcpy-git
pkgver=2.0.r0.c6169d4
pkgrel=1
pkgdesc="Open Source GUI based Android Screen Mirroring System"
arch=('i686' 'x86_64')
url="https://srevinsaju.github.io/guiscrcpy"
license=('GPL3')
depends=('scrcpy' 'python-pyqt5' 'python-psutil' 'python-qdarkstyle' 'python-gitpython' 
         'python-pillow' 'python-pynput')
makedepends=('git' 'python-setuptools')
optdepends=('python-pystray: for developers'
            'usbaudio: AOA audio, deprecated since Android 8.0')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/srevinsaju/guiscrcpy.git'
        "${pkgname%-git}.desktop"
        "${pkgname%-git}.sh"
        "$pkgname.patch")
sha256sums=('SKIP'
            'a97ede5e1f363df0b3960c7cfbfdff69e8c2b2c39ef0abc522d5ff5ecb04061b'
            '7d85c9d18ee989efa9cec44924294a5775c00a0d1ca6c369fb43a216e1d6f19f'
            'ea4260b593927008d6c57dd982b4fb2de5cf8579372f8daf5ef072cf70f27487')
            
prepare() {
	cd "$srcdir/${pkgname%-git}"
	
	# Remove shortcut creation as files cannot be placed in $HOME in fakeroot environment
	patch -Np1 -i "$srcdir/$pkgname.patch"
}

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "%s" "$(git describe --long --tags | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	python setup.py build
}

package() {
	cd "$srcdir/${pkgname%-git}"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm755 "$srcdir/${pkgname%-git}.sh" "$pkgdir/usr/bin/${pkgname%-git}"
	install -Dm644 "$srcdir/${pkgname%-git}.desktop" \
		"$pkgdir/usr/share/applications/${pkgname%-git}.desktop"
	install -Dm644 "installers/linux/icons/${pkgname%-git}_logo.png" \
		"$pkgdir/usr/share/pixmaps/${pkgname%-git}.png"
}
