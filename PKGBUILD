# Maintainer: Manuel Schmitzberger <mail@ms-sw.at>

pkgname=python-cppheaderparser
_name=CppHeaderParser
pkgver=2.7.4
pkgrel=2
pkgdesc="Parse C++ header files and generate a data structure representing the class"
arch=('any')
url="http://senexcanis.com/open-source/cppheaderparser"
license=('custom')
depends=('python-ply')
makedepends=('python-setuptools')
source=("https://pypi.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz"
        'https://bitbucket.org/senex/cppheaderparser/raw/6613bc9718009a3bd90b9de2f64e0e94eec5afcc/LICENSE.txt')
sha256sums=('382b30416d95b0a5e8502b214810dcac2a56432917e2651447d3abe253e3cc42'
            'eb7b784bb4d031e970db11186fdbd3833b327d77d0250687daffd18b4900693d')

build() {
    cd "$_name-$pkgver"
    python setup.py build
}

package() {
    cd "$_name-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build

    install -Dm644 "$srcdir/LICENSE.txt" -t "$pkgdir/usr/share/licenses/$pkgname"
}
