# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Mantainer: Michael M. Tung <mtung at mat dot upv dot es>

_pipname=panflute
pkgname=python-$_pipname-git
pkgver=2.0.5
pkgrel=1
pkgdesc='A Pythonic alternative to John MacFarlane’s pandocfilters'
url="https://github.com/sergiocorreia/$_pipname"
arch=('any')
license=('BSD')
_pydeps=('click'
         'yaml')
depends=('pandoc>=2.11.0.4' 'python' "${_pydeps[@]/#/python-}")
makedepends=('git' 'python-setuptools')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
_pycheckdeps=('pandocfilters'
              'pytest-cov')
checkdepends=("${_pycheckdeps[@]/#/python-}")
source=("$pkgname::git://github.com/sergiocorreia/$_pipname.git")
sha256sums=('SKIP')

pkgver() {
    cd "${pkgname}"
    git describe --tags --abbrev=7 HEAD | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${pkgname}"
	python setup.py build
}

check() {
    cd "${pkgname}"
	python setup.py test
}

package() {
    cd "${pkgname}"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
