# Maintainer: Nils Amiet <amietn@foobar>
pkgname=vcsi
pkgver=4
pkgrel=2
pkgdesc="Create video contact sheets, thumbnails"
arch=(any)
url="https://github.com/amietn/vcsi"
license=('MIT')
groups=()
depends=(python ffmpeg python-numpy python-pillow python-jinja ttf-liberation ttf-dejavu)
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=("${pkgname}::git+https://github.com/amietn/vcsi.git#tag=v${pkgver}")
md5sums=('SKIP')

package() {
  cd "${pkgname}"
  python setup.py install --root="$pkgdir/" --optimize=1
}
