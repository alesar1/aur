# Maintainer: tocic <tocic at protonmail dot ch>
# Contributor: Pierre Neidhardt <ambrevar@gmail.com>
# Contributor: mdraw.gh at gmail dot com

pkgbase='python-colorlog'
pkgname=('python-colorlog' 'python2-colorlog')
_name=${pkgname#python-}
pkgver=4.0.1
pkgrel=1
pkgdesc="Log formatting with colors"
arch=('any')
url='https://pypi.org/project/colorlog/'
license=('MIT')
makedepends=('python-setuptools' 'python2-setuptools')
source=("$pkgbase-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('c015387d4d9cfc853555e066949806102431e6aec946b0fe8bb5cbef3ae42e5f')

package_python-colorlog() {
    depends=('python')
    conflicts=('python-colorlog-git')

    cd "$srcdir/$_name-$pkgver"
    python setup.py install --root="$pkgdir" --prefix=/usr --optimize=1
    install -Dm644 ./LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-colorlog() {
    depends=('python2')
    conflicts=('python2-colorlog-git')

    cd "$srcdir/$_name-$pkgver"
    python2 setup.py install --root="$pkgdir" --prefix=/usr --optimize=1
    install -Dm644 ./LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
