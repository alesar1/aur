# Maintainer: Huki <gk7huki@gmail.com>
# Contributor: Svitozar Cherepii <razotivs@gmail.com>

pkgname=rvgl-io-lmstag
pkgver=20.0503
pkgrel=1
pkgdesc="Additional Battle Tag and Last Man Standing levels for RVGL."
url='https://rvgl.re-volt.io'
arch=('any')
license=('custom')
depends=('rvgl-bin')
makedepends=('git')
groups=('rvgl-community')
source=("rvgl_io_lmstag"::git+https://gitlab.com/re-volt/rvio/arenas.git#tag=${pkgver})
sha256sums=('SKIP')

package() {
    cd "$srcdir/rvgl_io_lmstag"
    find * -type f -exec install -Dm644 {} "$pkgdir/opt/rvgl/{}" \;
}
