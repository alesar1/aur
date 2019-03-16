# Maintainer: BasioMeusPuga <disgruntled.mob@gmail.com>

pkgname=lector-git
_pkgname=lector
pkgdesc="Qt based ebook reader with support for PDF, epub, djvu, fb2, comicbooks, mobi, azw"
pkgver=r344.38de0dc
pkgrel=1
arch=('any')
url="https://github.com/BasioMeusPuga/Lector"
license=('GPL3')
provides=('lector')
conflicts=('lector')
depends=('qt5-base' 'qt5-multimedia' 'python' 'python-pyqt5' 'python-beautifulsoup4' 'python-lxml' 'python-pymupdf' 'python-xmltodict' 'python-djvulibre')
makedepends=('git' 'python-setuptools')

source=("git://github.com/basiomeuspuga/${_pkgname}.git")
md5sums=(SKIP)

pkgver() {
    cd "$_pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "$srcdir/$_pkgname"
    python setup.py build
}

package() {
  cd "$srcdir/$_pkgname"
  python setup.py install --root="$pkgdir" --optimize=1
}
