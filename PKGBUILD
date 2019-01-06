# Maintainer: Evan Purkhiser <evanpurkhiser@gmail.com>
# Contributor: corubba <corubba at gmx dot de>
# Contributor: Jakub Kozisek <nodevel at gmail dot com>

pkgname=puddletag-git
pkgdesc="An audio tag editor for GNU/Linux."
license=('GPL')
url="http://docs.puddletag.net/"
pkgver=758.489acd2
pkgrel=1

provides=('puddletag')
conflicts=('puddletag')

source=("$pkgname::git://github.com/keithgg/puddletag#branch=pyqt5")
md5sums=('SKIP')
depends=('python2' 'mutagen' 'python2-pyqt5' 'python2-pyparsing' 'python2-configobj' 'python2-musicbrainz2')
makedepends=('git')
optdepends=('python2-imaging: edit/view FLAC cover art'
            'quodlibet: edit a QuodLibet library')
arch=('i686' 'x86_64')

pkgver() {
    cd "$srcdir/$pkgname"
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
    cd "$srcdir/$pkgname/source"

    python2 setup.py config
}

package() {
    cd "$srcdir/$pkgname/source"

    python2 setup.py install --root="$pkgdir" --optimize=1 || return 1
}
