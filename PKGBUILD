# Maintainer: Martin Müllenhaupt <mm+aur.archlinux.org@netlair.de>
pkgname=python2-fafclient
pkgver=0.12.5.12.g782be7d4
pkgrel=1
epoch=0
pkgdesc="Forged Alliance Forever - Lobby Client. Community-driven client system for Supreme Commander: Forged Alliance."
url="http://www.faforever.com/"
arch=('any')
license=('GPL3')
groups=()
depends=('python2-pyqt4>=4.0.0' 'python2-ipaddress' 'python2-enum34' 'python2-py' 'python2-pycparser' 'python2-dateutil' 'python2-requests' 'python2-lupa' 'python2-trueskill' 'python2-cffi' 'python2-marshmallow-jsonapi' 'python2-semantic-version' 'python2-faftools' 'lib32-libpulse' 'wine>1.6.0' 'xdelta3' 'faf-uid' 'faf-res')
makedepends=('python2-setuptools' 'python2-pathlib')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("git+https://github.com/FAForever/client.git#branch=develop" 'FAForever.desktop')
sha256sums=('SKIP'
            'f503475daa227d4ce1fa66063b065db7375ce3c0d161d77e3c2bd19c65468cbc')
noextract=()
validpgpkeys=()

pkgver() {
  cd "client"
  git describe --tags | sed -e 's/-/./g'
}
prepare() {
  cd "client"
  mv src fafclient
}

build() {
  cd "client"
  FAFCLIENT_VERSION=$pkgver python2 setup.py build
}

package() {
  cd "client"
  FAFCLIENT_VERSION=$pkgver python2 setup.py install --root="$pkgdir" --optimize=1 
  install -D "$srcdir/FAForever.desktop" "$pkgdir/usr/share/applications/FAForever.desktop"
}
