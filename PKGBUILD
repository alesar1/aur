# Maintainer: Kieran Colford <kieran@kcolford.com>
pkgname=bauerbill-over-pacaur
pkgver=1.0.0
pkgrel=2
epoch=
pkgdesc="Use bauerbill to satisfy any dependencies on pacaur."
arch=('any')
url="https://aur.archlinux.org/packages/bauerbill-over-pacaur"
license=('GPL')
groups=()
depends=(bauerbill sh)
makedepends=()
checkdepends=()
optdepends=()
provides=(pacaur)
conflicts=(pacaur{,-git})
replaces=()
backup=()
options=()
install=
changelog=
source=(pacaur)
sha256sums=('f673f35d09961d6903f37593bd93786a933d88c0f6ae554070284ea304d281cd')
sha512sums=('4ff756577338969d3f2cd4fb9621b672be4b23f1d1b53efcb36d2a3524604f0fda30c0b65d3ba1e4b9ddd471216e8ea088554341d803641eee657ccc3bfd0030')
noextract=()

package() {
  cd "$srcdir/"

  mkdir -p "$pkgdir"/usr/bin/
  install pacaur "$pkgdir"/usr/bin/
}

# vim:set ts=2 sw=2 et:
