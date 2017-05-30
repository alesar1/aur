# Maintainer: Carl George < arch at cgtx dot us >

_name="smmap2"
_module="${_name%2}"

pkgname=("python-$_name" "python2-$_name")
pkgver="2.0.2"
pkgrel="1"
pkgdesc="a pure-Python git object database"
arch=("any")
url="https://github.com/gitpython-developers/$_module"
license=("BSD")
makedepends=("python-setuptools" "python2-setuptools")
source=("https://files.pythonhosted.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz"
        "https://raw.githubusercontent.com/gitpython-developers/smmap/v$pkgver/LICENSE")
sha256sums=('305d8cdaa7d11c00b528f57ecefd258da5cd3193cd57b61ea656c9281b5ce1eb'
            '88e9d93f708d110b328a834302dd1d5c6afbda530e7721d15d80b3511d86f235')

build() {
    cd "$_name-$pkgver"
    python setup.py build
    python2 setup.py build
}

package_python-smmap2() {
    depends=("python")
    conflicts=("python-smmap")
    cd "$_name-$pkgver"
    python setup.py install --skip-build --root="$pkgdir" --optimize=1
    install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" "$srcdir/LICENSE"
}

package_python2-smmap2() {
    depends=("python2")
    conflicts=("python2-smmap")
    cd "$_name-$pkgver"
    python2 setup.py install --skip-build --root="$pkgdir" --optimize=1
    install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" "$srcdir/LICENSE"
}
