# Maintainer: Bumsik Kim <k.bumsik@gmail.com>
_pkgname_camelcase=VirtScreen
pkgname=virtscreen
pkgver=0.1.1
pkgrel=1
pkgdesc="Make your iPad/tablet/computer as a secondary monitor on Linux"
arch=("i686" "x86_64")
url="https://github.com/kbumsik/VirtScreen"
license=('GPL')
groups=()
depends=('xorg-xrandr' 'x11vnc' 'python-pyqt5' 'python-twisted' 'python-netifaces' 'python-qt5reactor')
makedepends=('python-setuptools')
optdepends=(
    'arandr: for display settings option'
)
provides=($pkgname)
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=(https://github.com/kbumsik/$_pkgname_camelcase/archive/$pkgver.tar.gz)
noextract=()
sha256sums=('c584fe68ef296bced2ef5f3d88ffe81de1039c3062531c34547eeabd8c2f186d')

build() {
  echo "$pkgdir"
  cd $_pkgname_camelcase-$pkgver
  python setup.py build
}

package() {
  cd $_pkgname_camelcase-$pkgver
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}