# Maintainer: Jörg Thalheim <joerg@higgsboson.tk
# Contributor: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>
# Contributor: Peter Richard Lewis <plewis@aur.archlinux.org>
# Contributor: Wieland Hoffmann <the_mineo@web.de>
# Contributor: stonecrest <stonecrest[at]gmail[dot]com>

pkgname='python-mpd2-git'
pkgrel=1
pkgver=20130625
pkgdesc="Python MPD client library"
depends=('python')
conflicts=('python-mpd2')
provides=('python-mpd2')
url="http://github.com/Mic92/python-mpd2"
makedepends=('git' 'python-distribute')
license=('GPL3')
arch=('any')
sha1sums=('SKIP')
source=("git+https://github.com/Mic92/python-mpd2.git")

pkgver() {
  cd "$srcdir/python-mpd2"
  git log -1 --format='%cd' --date=short | tr -d -- '-'
}

package() {
  cd "$srcdir/python-mpd2"
  python3 setup.py install --root="$pkgdir/" --optimize=1
}
