# Maintainer: Lukasz Pozarlik <lpozarlik@gmail.com>

_name="pyluach"
_module="$_name"

pkgname=("python-$_module")
pkgdesc="Pyluach is a Python package for manipulating Hebrew dates, Gregorian-Hebrew calendar conversions, and other Jewish calendar related calculations"
pkgver="1.4.0"
pkgrel=1
url="https://github.com/simlist/pyluach"
license=('MIT')
arch=('any')
makedepends=("python-pbr>=1.9")
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz"
        "LICENSE"
        "description.patch")
sha256sums=('a87de31aabd1ba56a8e97cf32f035727ac4f34dd374111fbd15e724c005cab1e'
            'a6900a379815872f27df1aac58d8c249ddd085259f6bab6768e162cc82d346b1'
            'c68b6a894e3264eb770aba1b3051666bc0656b1603cfb5f3a9b682d730baf660')

prepare() {
  patch -Np1 -i description.patch
}

build() {
    cd "$_name-$pkgver"
    python setup.py build
}

package_python-pyluach(){
    cd "$_name-$pkgver"
    python setup.py install --skip-build --root="$pkgdir" --optimize=1
    install -D --mode 644 --target-directory "$pkgdir/usr/share/licenses/$pkgname" ../LICENSE
}
