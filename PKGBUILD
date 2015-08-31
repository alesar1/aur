# Maintainer: Hugo Osvaldo Barrera <hugo@barrera.io>

pkgname=python2-vdirsyncer
_pkgname=vdirsyncer
pkgver=0.5.2
pkgrel=1
pkgdesc="Synchronize CalDAV and CardDAV."
arch=('any')
url="https://github.com/untitaker/vdirsyncer"
license=('MIT')
depends=('python2-click' 'python2-setuptools' 'python2-lxml'
         'python2-requests-toolbelt' 'python2-atomicwrites')
checkdepends=('python2-pytest' 'python2-wsgi-intercept>=0.6.1'
              'python2-radicale' 'python2-werkzeug-git'
              'python2-pytest-xprocess' 'python2-pytest-localserver')
source=("https://pypi.python.org/packages/source/v/${_pkgname}/${_pkgname}-${pkgver}.tar.gz"
        "build.patch")
md5sums=('c42f52b404ea30ac3f7bd95e639ca6b5'
         'b0b1e52f38d13d2e856a9699ca84410d')

# check() {
#   cd "$srcdir/${_pkgname}-$pkgver"
#   patch build.sh < ../build.patch
#   sh build.sh tests
# }

build() {
  cd "$srcdir/${_pkgname}-$pkgver"
  python2 setup.py build
}

package() {
  cd "$srcdir/${_pkgname}-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1

  install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  mv "$pkgdir/usr/bin/vdirsyncer" "$pkgdir/usr/bin/vdirsyncer2"
}

