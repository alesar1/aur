# Maintainer: Ben Westover <kwestover.kw@gmail.com>

pkgname='nuxhash-git'
pkgver=v1.0.0b2.r33.g33e9a09
pkgrel=4
pkgdesc="A NiceHash cryptocurrency mining client for Linux."
arch=('x86_64')
url="https://github.com/YoRyan/nuxhash"
license=('GPL3')
depends=('python' 'python-requests' 'curl' 'nvidia' 'opencl-nvidia' 'cuda')
makedepends=('python-setuptools')
optdepends=('python-wxpython: GUI support'
            'python-pypubsub: GUI support')
source=("git+https://github.com/YoRyan/nuxhash.git"
        "fix-wx-issues.patch"
        "nuxhash-gui.desktop")
sha256sums=('SKIP'
            '0c3b44fdb4b44098cfbcd49df553b3325205faae0902f3cf8b1d223720a0876a'
            '779c28c990c97b6c6fb2b2ad1cf84ff99dcdf5c1b72f034750994fdc8a645055')

pkgver() {
	cd nuxhash
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	patch -p1 < fix-wx-issues.patch
}

package() {
	cd nuxhash
	python3 setup.py install --optimize=1 --root "$pkgdir"
	install -Dm644 nuxhash/gui/icons/nuxhash.svg "$pkgdir/usr/share/pixmaps/nuxhash.svg"
	install -Dm644 ../nuxhash-gui.desktop "$pkgdir/usr/share/applications/nuxhash-gui.desktop"
}
