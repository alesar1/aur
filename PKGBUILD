# Maintainer: Matej Dujava <mdujava (plus) aur (at) kocurkovo (dot) cz>

pkgname=('beaker-common' 'beaker-client')
pkgbase='beaker'
pkgver=28.2
pkgrel=1
pkgdesc="Full-stack software and hardware integration testing system"
arch=('any')
url="https://beaker-project.org/"
license=('GPL' 'BSD')
makedepends=('python-nose' 'python-mock' 'python-docutils' 'python-sphinx' 'make' 'python-gssapi' 'python-lxml' 'python-prettytable' 'python-lxml')
provides=('bkr' 'beaker-wizard')
options=('zipman')
source=("beaker-$pkgver.tar.gz::https://github.com/beaker-project/beaker/archive/refs/tags/beaker-$pkgver.tar.gz")
sha256sums=('5aa4c1807187e7c318db1ddc9132d1045824f6eaa6f04773663d9fae0e950b8c')

build() {
	export BKR_PY3="$(which python3)"
	cd "$pkgbase-$pkgbase-$pkgver"
	make
}

package_beaker-common() {
	pkgdesc="Full-stack software and hardware integration testing system - common files"

	export BKR_PY3="$(which python3)"
	cd "$pkgbase-$pkgbase-$pkgver"
	make DESTDIR="$pkgdir/" -C Common install
}

package_beaker-client() {
	pkgdesc="Full-stack software and hardware integration testing system - cli"
	depends=('python' 'python-six' 'python-setuptools' 'python-gssapi' 'python-lxml' 'python-requests' 'python-prettytable' 'python-jinja' "beaker-common=$pkgver")

	export BKR_PY3="$(which python3)"
	cd "$pkgbase-$pkgbase-$pkgver"
	make DESTDIR="$pkgdir/" -C Client install

	install -Dm 755 -d "$pkgdir/usr/share/man/man1"
	install -m 644 -t "$pkgdir/usr/share/man/man1" documentation/_build/man/*
}
