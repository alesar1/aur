# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>
# Contributor: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: Penguin <TGates81.at.gmail.dot.com>

_pkgname=pylzma
pkgname=python2-$_pkgname
pkgver=0.5.0
_testing_data_version=210629
pkgrel=4
pkgdesc="Platform independent python bindings for the LZMA compression library"
url="https://www.joachim-bauch.de/projects/pylzma/"
license=("LGPL2.1")
arch=(i686 x86_64)
makedepends=('python2-setuptools')
source=($_pkgname-$pkgver.tar.gz::https://github.com/fancycode/pylzma/archive/v$pkgver.tar.gz
        # testing data
        ux.stackexchange.com.$_testing_data_version.7z::https://archive.org/download/stackexchange/ux.stackexchange.com.7z)
sha256sums=('baefed4c84d147a507a606206478ff0894e04fa41aa3742381159cde44836fc3'
            'SKIP')
noextract=(ux.stackexchange.com.$_testing_data_version.7z)

prepare() {
    ln -s ../../../ux.stackexchange.com.$_testing_data_version.7z $_pkgname-$pkgver/tests/data/ux.stackexchange.com.7z

    sed -i 's#/usr/bin/python -u#/usr/bin/python2 -u#' $_pkgname-$pkgver/py7zlib.py
}

build() {
    cd "$srcdir/$_pkgname-$pkgver"
    python2 setup.py build
}

check() {
    cd "$srcdir/$_pkgname-$pkgver"
    PYTHONPATH="$PWD:$PWD/build/lib.linux-$CARCH-2.7" python2 tests/__init__.py
}

package_python2-pylzma() {
    depends=('python2')
    provides=("pylzma=$pkgver")
    replaces=('pylzma')
    conflicts=('pylzma')

    cd "$srcdir/$_pkgname-$pkgver"
    python2 setup.py install --root=$pkgdir --optimize=1 --skip-build
}
