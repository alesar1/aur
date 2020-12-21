# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=python-fusepyng
_name=${pkgname#python-}
pkgver=1.0.7
pkgrel=5
pkgdesc="Simple ctypes bindings for FUSE"
arch=('any')
url="https://github.com/rianhunter/fusepyng"
license=('ISC')
depends=('python')
makedepends=('python-setuptools')
source=("https://pypi.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz"{,.asc}
        "https://raw.githubusercontent.com/rianhunter/$_name/$_name/LICENSE")
sha256sums=('8b4f6ef81e8600f23da7509169acb2615582ef116d46a2a1ad4b7e530d8f899f'
            'SKIP'
            'e61e6b2171e77a5da5a6b8bdb1e588dd0c660fd2ac64342cded4ab53cf3d4140')
validpgpkeys=('584EDA5AAC13B9FBFB13F678A6A5398DACC9C15C') # Rian Hunter <rian@thelig.ht>

build() {
	cd "$_name-$pkgver"
	python setup.py build
}

package() {
	cd "$_name-$pkgver"
	export PYTHONHASHSEED=0
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

	install -Dm644 "$srcdir/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
}
