pkgname=python2-detox
_realname=detox
pkgver=0.11
pkgrel=1
pkgdesc="distributing activities of the tox tool"
url="https://github.com/tox-dev/detox"
depends=('python2' 'python2-tox>=2.0.0' 'python2-py>=1.4.27' 'python2-eventlet>=0.15.0')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_realname::1}/$_realname/$_realname-$pkgver.tar.gz")
md5sums=('dc0c4900ea2a952a699eedbf6bfd5786')

build() {
    cd $srcdir/$_realname-$pkgver
    python2 setup.py build
}

package() {
    cd $srcdir/$_realname-$pkgver
    python2 setup.py install --root="$pkgdir" --optimize=1
    mv "${pkgdir}/usr/bin/detox" "${pkgdir}/usr/bin/detox2"
}
