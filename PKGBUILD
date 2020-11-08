# Maintainer: Simon Tas <simon.tas.st@gmail.com>

pkgname="deemix-git"
_pkgname="deemix"
pkgver=r523.d6a18749c0
pkgrel=1
pkgdesc="a deezer downloader built from the ashes of Deezloader Remix."
arch=('any')
url="https://notabug.org/RemixDev/$_pkgname"
license=('gpl3')
depends=('python>=3.6' 'python-click' 'python-pycryptodomex' 'python-mutagen' 'python-requests'  'python-spotipy' 'python-eventlet')
conflicts=('deemix')
makedepends=('git')
provides=('deemix')
source=("${_pkgname}::git+https://notabug.org/RemixDev/$_pkgname")
md5sums=('SKIP')

pkgver() {
	cd "${_pkgname}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short=10 HEAD)"
}

build() {
	cd ${srcdir}/${_pkgname}
		python setup.py build
}

package() {
	cd ${srcdir}/${_pkgname}

	python setup.py install --root="${pkgdir}" --optimize=1
}
