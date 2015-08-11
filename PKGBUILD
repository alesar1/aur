# Maintainer: Alexandre Petitjean <alpetitjean at gmail dot com>

pkgname=python2-pyspotify
_pkgname=pyspotify
pkgver=2.0.2
pkgrel=1
pkgdesc="A Python Spotify library"
arch=('any')
url="http://pyspotify.mopidy.com/"
license=('APACHE')
depends=('python2' 'libspotify' 'python2-cffi' 'python2-setuptools')
conflicts=('pyspotify-git' 'pyspotify')
source=("https://github.com/mopidy/$_pkgname/archive/v${pkgver}.tar.gz")
md5sums=('ef428a0ce19562355c2ec30e59bafb4e')

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:

