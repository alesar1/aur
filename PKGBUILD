# Maintainer: Amos Onn <amosonn at gmail dot com>
pkgname=python-sortedcollections
pkgver=1.0.1
pkgrel=1
pkgdesc="A python library for sorted collections."
arch=('any')
url="http://www.grantjenks.com/docs/sortedcollections/"
license=('Apache-v2')
depends=('python>=3.5' 'python-babel>=2.0' 'python-jinja>=2.8'
    'python-markupsafe>=0.23' 'python-pygments>=2.0.2' 'python-sphinx>=1.3.1'
    'python-sphinx-alabaster-theme>=0.7.6' 'python-docutils>=0.12'
    'python-nose>=1.3.7' 'python-pluggy>=0.3.0' 'python-py>=1.4.30'
    'python-pytz>=2015.4' 'python-six>=1.9.0' 'python-snowballstemmer>=1.2.0'
    'python-sortedcontainers>=2.0.0' 'python-sphinx_rtd_theme>=0.1.8'
    'python-tox>=2.1.1' 'python-virtualenv>=13.1.0' 'python-wsgiref>=0.1.2')
source=(https://codeload.github.com/grantjenks/sortedcollections/tar.gz/v$pkgver)
sha256sums=('2de3882c9682a7ac471e3aad589f54952fee343d42689ae7d1921a99857529e9')

package() {
  cd $srcdir/sortedcollections-$pkgver
  python setup.py install --root=$pkgdir || return 1
  install -d $pkgdir/usr/share/licenses/$pkgname
  install LICENSE $pkgdir/usr/share/licenses/$pkgname/COPYING
}
