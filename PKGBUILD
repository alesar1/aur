# Maintainer: Tomas Groth <second@tgc.dk>
pkgbase='pysword'
pkgname=('python-pysword' 'python2-pysword')
pkgver=0.2.3
pkgrel=1
pkgdesc='A native Python2/3 reader module for the SWORD Project Bible Modules'
arch=('any')
license=('GPL2')
url='https://gitlab.com/tgc-dk/pysword'
makedepends=('python-setuptools' 'python2-setuptools')
source=("${pkgbase}-${pkgver}.tar.gz::https://gitlab.com/tgc-dk/pysword/repository/archive.tar.gz?ref=${pkgver}")
sha256sums=('d64c821a362a27e9ee962846cab22f7d607bea88bb3175cf18c8bb7a0db3a9ee')


# Link ${pkgbase}-${pkgver} to the extracted folder
prepare() {
	ln -sf $(ls ${srcdir} | grep "${pkgbase}-${pkgver}-*\w") ${pkgbase}-${pkgver}
}

build() {
	cd "${srcdir}/${pkgbase}-${pkgver}"

	msg 'Building Python 3...'
	python ./setup.py build

	msg 'Building Python 2...'
	python2 ./setup.py build
}


package_python-pysword() {
	depends=('python' 'python-setuptools')

	cd "${srcdir}/${pkgbase}-${pkgver}"

	python ./setup.py install --skip-build --root="$pkgdir/"
}

package_python2-pysword() {
	depends=('python2' 'python2-setuptools')

	cd "${srcdir}/${pkgbase}-${pkgver}"

	python2 ./setup.py install --skip-build --root="$pkgdir/"
}
