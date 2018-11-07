# Maintainer: asm0dey <pavel.finkelshtein+AUR@gmail.com>

pkgbase="python-prompt_toolkit-2"
pkgname=("python-prompt_toolkit-2" "python2-prompt_toolkit-2")
pkgver=2.0.7
pkgrel=1
pkgdesc="Library for building powerful interactive command line applications in Python"
url="https://github.com/jonathanslenders/python-prompt-toolkit"
arch=(any)
license=('BSD')
makedepends=('python-distribute')
source=($pkgname-$pkgver.tar.gz::https://github.com/jonathanslenders/python-prompt-toolkit/archive/$pkgver.tar.gz)
md5sums=('43fa46c2fd484d221db2637ef545c944')

prepare() {
    cp -a "${srcdir}/python-prompt-toolkit-${pkgver}" "${srcdir}/python2-prompt-toolkit-${pkgver}"
}

build() {
    cd "${srcdir}/python-prompt-toolkit-${pkgver}"
    python setup.py build
    cd "${srcdir}/python2-prompt-toolkit-${pkgver}"
    python2 setup.py build
}

package_python-prompt_toolkit-2() {
    depends=(
        'python'
        'python-six>=1.9.0'
        'python-wcwidth'
    )
    provides=('python-prompt_toolkit-2')
    conflicts=('python-prompt_toolkit')
    cd "${srcdir}/python-prompt-toolkit-${pkgver}"
    python setup.py install --skip-build --root="${pkgdir}" --optimize=1
    install -D --mode 644 --target-directory "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}

package_python2-prompt_toolkit-2() {
    depends=(
        'python2'
        'python-six>=1.9.0'
        'python2-wcwidth'
    )
    provides=('python2-prompt_toolkit-2')
    conflicts=('python2-prompt_toolkit')
    cd "${srcdir}/python2-prompt-toolkit-${pkgver}"
    python2 setup.py install --skip-build --root="${pkgdir}" --optimize=1
    install -D --mode 644 --target-directory "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}
