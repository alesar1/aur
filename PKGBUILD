# Maintainer: thegala <thegala at disroot.org>

_pkgname=pcbdraw
pkgname=pcbdraw-git
pkgver=194.99bcecd
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="Convert your KiCAD boards into nice looking 2D drawings suitable for pinout diagrams."
url="https://github.com/INTI-CMNB/pcbdraw"
license=('Apache2.0')
depends=('python' 'kicad')
makedepends=('git' 'python' 'python-setuptools')
source=("${_pkgname}::git+https://github.com/INTI-CMNB/pcbdraw")
md5sums=('SKIP')
provides=('pcbdraw')
conflicts=('pcbdraw')

pkgver()
{
  cd "$_pkgname"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}


package() {
  cd $_pkgname
  python setup.py install --root="$pkgdir"
}
