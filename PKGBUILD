# Maintainer: Bob Allred  <balinbob@gmail.com>
pkgname=scenic
pkgver=r22.df08474
pkgrel=1
pkgdesc="wallpaper browser/cycler for fluxbox, etc, and batch image-processing frontend for CLI programs such as feh and imagemagick"
arch=('any')
url="https://github.com/balinbob/scenic"
license=('GPL3')
groups=()
depends=('python2' 'gtk2' 'pygtk' 'python2-keybinder2' 'python2-gobject' 'python2-dbus')
makedepends=('git')
optdepends=('feh' 'imagemagick')
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=('git+https://github.com/balinbob/scenic')
_gitname='scenic'
md5sums=('SKIP')
pkgver () {
  cd "${srcdir}/${_gitname}"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

package() {
     cd "$srcdir/$pkgname"
     python2 setup.py install --root="$pkgdir/" --optimize=1
     mv "$pkgdir/usr/scenic-folder.svg" "$pkgdir/usr/lib/python2.7/site-packages/resources/scenic-folder.svg"
}

# vim:set ts=2 sw=2 et:

