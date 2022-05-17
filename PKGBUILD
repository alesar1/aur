# Maintainer: Huki <gk7huki@gmail.com>
# Contributor: Svitozar Cherepii <razotivs@gmail.com>

pkgname=rvgl-io-stunts
pkgver=22.0514
pkgrel=1
pkgdesc="Additional Stunt Arena levels for RVGL."
url='https://re-volt.io/online/tracks/battle'
arch=('any')
license=('custom')
depends=('rvgl-bin')
makedepends=('git')
groups=('rvgl-bonus')
source=("rvgl_io_stunts"::git+https://gitlab.com/re-volt/rvio/stunt-arenas.git#tag=${pkgver})
sha256sums=('SKIP')

package() {
    cd "$srcdir/rvgl_io_stunts"
    find * -type f -exec install -Dm644 {} "$pkgdir/opt/rvgl/{}" \;
}
