# Maintainer: Nabobalis <nabil dot freij at gmail dot com>
# Contributor: Nabobalis <nabil dot freij at gmail dot com>
pkgname=python2-sunpy-git
_gitname=sunpy
pkgver=20150626
pkgrel=1
pkgdesc="Python library for solar physics"
arch=('i686' 'x86_64')
url="http://www.sunpy.org/"
license=('BSD')
depends=('python2'
         'python2-astropy'
         'python2-matplotlib'
         'python2-scipy'
         'python2-pandas'
         'python2-requests'
         'python2-suds'
         'python2-beautifulsoup4')
optdepends=('python2-sqlalchemy: for the database package'
            'python2-pytest: for running tests')
provides=(python2-sunpy)
conflicts=(python2-sunpy)
options=(!emptydirs)
source=(git+https://github.com/sunpy/sunpy)
md5sums=('SKIP')

pkgver() {
  cd "$_gitname"
  git log -1 --format="%cd" --date=short | sed 's|-||g'
}

package(){
  cd $srcdir/sunpy
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
