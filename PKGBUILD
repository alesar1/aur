# former Maintainer python-dill: Antony Lee
# former Maintainer python2-dill: bchretien

pkgname=("python-dill" "python2-dill")
pkgbase=python-dill
pkgver=0.2.6
pkgrel=3
pkgdesc='Serialize all of python (almost)'
arch=('any')
url='http://pypi.python.org/pypi/dill/'
license=('BSD')
source=("https://github.com/uqfoundation/dill/releases/download/$pkgver/dill-$pkgver.tgz" "python2-dill.install")
md5sums=('eff3385ff87c3de142ce502b38fb928a'
         '2ac075f39bab33c203e7b25adb3e07b3')

build() {
    cd "$srcdir/dill-$pkgver"
    python setup.py build
}

package_python-dill() {
    depends=('python')
    cd "$srcdir/dill-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-dill() {
    depends=('python2')
    install=python2-dill.install
    cd "$srcdir/dill-$pkgver"
    find . -name "*.py" -exec sed -i 's#/usr/bin/env python#/usr/bin/env python2#' {} \;
    python2 setup.py install --root="$pkgdir/" --optimize=1
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    mv "$pkgdir/usr/bin/get_objgraph.py" "$pkgdir/usr/bin/get_objgraph2.py"
    mv "$pkgdir/usr/bin/dill_unpickle.py" "$pkgdir/usr/bin/dill_unpickle2.py"
}
