# Current Maintainer: algebro <algebro at tuta dot io>
# Previous Maintainer: visad <visad@example.com>

_pkgname=frida
pkgname=python2-$_pkgname
pkgver=14.0.8
pkgrel=1
pkgdesc="Inject JavaScript to explore native apps on Windows, Mac, Linux, iOS and Android. Python 2 version from PyPi."
arch=('i686' 'x86_64')
url="http://www.frida.re"
license=('wxWindows Library License, Version 3.1')
depends=('python2' 'python2-pygments' 'python2-colorama')
source=("https://files.pythonhosted.org/packages/source/f/${_pkgname}/${_pkgname}-${pkgver}.tar.gz"
        "COPYING")
sha256sums=('5d069576dc16258cd854f1dc00d7df04a0ca454d6070872f3e9cfa1a4f2170a4'
            '5ea1544b51a28bc823b03159190d4108f9fb4f4ef912389f5137c6d295e175b2')
conflicts=("python-${_pkgname}")

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  python2 setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python2 setup.py install --root=$pkgdir --optimize=1 --skip-build
  cd "$srcdir"
  install -d "$pkgdir/usr/share/licenses/$pkgname"
  install -m 644 "COPYING" "$pkgdir/usr/share/licenses/$pkgname/"
}
