# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: Penguin <TGates81.at.gmail.dot.com>

_pkgname=pylzma
pkgbase=python-$_pkgname
pkgname=(python-$_pkgname python2-$_pkgname)
pkgver=0.5.0
pkgrel=1
pkgdesc="Platform independent python bindings for the LZMA compression library"
url="https://www.joachim-bauch.de/projects/pylzma/"
license=("LGPL2.1")
arch=(i686 x86_64)
makedepends=('python-setuptools' 'python2-setuptools')
source=($_pkgname-$pkgver.tar.gz::https://github.com/fancycode/pylzma/archive/v$pkgver.tar.gz
        # testing data
        https://archive.org/download/stackexchange/ux.stackexchange.com.7z)
sha256sums=('baefed4c84d147a507a606206478ff0894e04fa41aa3742381159cde44836fc3'
            'ffa75f00eaf0d12fbe5c591d130136bb671e35b42d6738777718ecdbbf21637b')
noextract=(ux.stackexchange.com.7z)

prepare() {
    cp -r $_pkgname-$pkgver{,-py2}

    ln -s ../../../ux.stackexchange.com.7z $_pkgname-$pkgver/tests/data/
    ln -s ../../../ux.stackexchange.com.7z $_pkgname-$pkgver-py2/tests/data/

    sed -i 's#/usr/bin/python -u#/usr/bin/python2 -u#' $_pkgname-$pkgver-py2/py7zlib.py
}

build() {
    cd "$srcdir/$_pkgname-$pkgver"
    python setup.py build

    cd "$srcdir/$_pkgname-$pkgver-py2"
    python2 setup.py build
}

check() {
    cd "$srcdir/$_pkgname-$pkgver"
    PYTHONPATH="$PWD:$PWD/build/lib.linux-$CARCH-3.7" python tests/__init__.py

    cd "$srcdir/$_pkgname-$pkgver-py2"
    PYTHONPATH="$PWD:$PWD/build/lib.linux-$CARCH-2.7" python2 tests/__init__.py
}

package_python-pylzma() {
    depends=('python')
    conflicts=('pylzma')

    cd "$srcdir/$_pkgname-$pkgver"
    python setup.py install --root=$pkgdir --optimize=1 --skip-build
}

package_python2-pylzma() {
    depends=('python2')
    provides=("pylzma=$pkgver")
    replaces=('pylzma')
    conflicts=('pylzma')

    cd "$srcdir/$_pkgname-$pkgver-py2"
    python2 setup.py install --root=$pkgdir --optimize=1 --skip-build
}
