# Maintainer: Jason Edson <jason@oceighty.co>

_pkgname=meld
pkgname=$_pkgname-dev
pkgver=3.16.0
pkgrel=2
pkgdesc='Visual diff and merge tool'
url='http://meldmerge.org/'
license=(GPL)
arch=(any)
conflicts=('meld','meld-git')
replaces=('meld','meld-git')
provides=('meld')
makedepends=(intltool itstool)
install=meld.install
depends=(python2-gobject python2-cairo gtksourceview3 hicolor-icon-theme desktop-file-utils
         gsettings-desktop-schemas)
optdepends=('python2-dbus: open a new tab in an already running instance')
source=("https://download.gnome.org/sources/$_pkgname/${pkgver%.*}/meld-${pkgver}.tar.xz")
sha1sums=('12cd5074ad23650776334cf3d1f2d803d5f2db97')

# Meld does not support Python 3. The build succeeds, but
# the main executable checks the version and errors out.

prepare() {
  cd $_pkgname-$pkgver
}

build() {
  cd $_pkgname-$pkgver
  python2 setup.py build
}

package() {
  cd $_pkgname-$pkgver
  # using --skip-build breaks install
  python2 setup.py --no-update-icon-cache --no-compile-schemas \
    install --prefix=/usr --root="$pkgdir" --optimize=1
}
