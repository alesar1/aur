# Maintainer: Mubashshir <ahmubashshir@gmail.com>
# pkg: pypi jq
_name=jq
pkgname=( python-$_name python2-$_name )
pkgbase=python-$_name

pkgver=1.1.3
pkgrel=2
pkgdesc='Python bindings for jq'

arch=('x86_64')
url=https://github.com/mwilliamson/jq.py
license=(BSD)
depends=('jq')
source=(
    "$pkgbase-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz"
    "https://raw.githubusercontent.com/mwilliamson/jq.py/$pkgver/LICENSE"
)
sha256sums=('f9ec1dfa7f9875b04495f3e08e85ee96f37a3b843e5bca738a3300732865dde7'
            '6663bbd049205d38a496ccacb412a151980b444627d38de218b3b809aef330f1')
makedepends=(
    'python-setuptools'
    'python2-setuptools'
    'python-requests'
    'python2-requests'
)

prepare() {
    # copy folder, so we can cleanly build for both python versions
    cp -rup $_name-$pkgver $_name-$pkgver-py2
}
build() {
    cd "$srcdir/$_name-$pkgver"
    python setup.py build
    cd "$srcdir/$_name-$pkgver-py2"
    python2 setup.py build
}
package_python-jq()
{
    depends=( python )
    conflicts=( 'python-jq-git' )
    provides=( "python3-jq=$pkgver" )
    cd "$srcdir/$_name-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
    install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/python-$_name/LICENSE"
}
package_python2-jq()
{
    depends=( python2 )
    conflicts=( 'python2-jq-git' )
    cd "$srcdir/$_name-$pkgver-py2"
    python2 setup.py install --root="$pkgdir" --optimize=1 --skip-build
    install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/python2-$_name/LICENSE"
}
