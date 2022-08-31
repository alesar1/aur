# Maintainer: Lance Roy <ldr709@gmail.com>

# PKGBUILD generated by pipman
# Python package author: Edgar Felix <eaafelix@gmail.com>
pkgname=python-pdfjinjax
pkgver=1.2.2
pkgrel=1
pkgdesc="Use jinja templates to fill and sign PDF forms, based on rammie/pdfjinja with a few enhancements."
arch=(any)
url="http://github.com/edgaraafelix/pdfjinjax/"
license=(MIT)
depends=(python python-fdfgen python-jinja python-pdfminer python-pillow python-pypdf2 python-reportlab pdftk)
makedepends=("python" "python-pip")
source=('https://files.pythonhosted.org/packages/d5/77/fef6087e6d833c287d7f207096c6faf80c97358ada19ef4dc98f00ec0efb/pdfjinjax-1.2.2.tar.gz')
md5sums=('a53535a251b2e0aa88c908923ce55441')

prepare() {
    cd "$srcdir/pdfjinjax-$pkgver"
    sed -i 's/pdfjinja:main/pdfjinjax:main/' setup.py
}

build() {
    cd "$srcdir/pdfjinjax-$pkgver"
    python setup.py build
}

package() {
    cd "$srcdir/pdfjinjax-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1
}
