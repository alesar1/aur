# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=guiscrcpy
pkgver=3.3
pkgrel=1
pkgdesc="Open Source GUI based Android Screen Mirroring System"
arch=('any')
url="https://srevinsaju.github.io/guiscrcpy"
license=('GPL3')
depends=('scrcpy' 'python-gitpython' 'python-pyqt5' 'python-psutil' 'python-pynput')
makedepends=('python-setuptools')
optdepends=('python-pystray: for Notification Auditor'
            'usbaudio: AOA audio, deprecated since Android 8.0')
source=("git+https://github.com/srevinsaju/guiscrcpy.git#tag=$pkgver"
        "$pkgname.desktop"
        "$pkgname.png")
sha256sums=('SKIP'
            'a97ede5e1f363df0b3960c7cfbfdff69e8c2b2c39ef0abc522d5ff5ecb04061b'
            '153a306cebc6f576ebc07be67d5caef6a4900157a4398266519360b87bdef0aa')

prepare() {
	cd "$srcdir/$pkgname"
	patch setup.py "$srcdir/setup.py.patch"
}

build() {
	cd "$srcdir/$pkgname"
	python setup.py build
}

package() {
	cd "$srcdir/$pkgname"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

	install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications"
	install -Dm644 "$srcdir/$pkgname.png" -t "$pkgdir/usr/share/pixmaps"
}
