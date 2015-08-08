# Maintainer: pzl <alsoelp@gmail.com>

pkgname=pacvcs
pkgver=1.0489599
pkgrel=1
pkgdesc="Pacman VCS version checker"
arch=('any')
url="https://github.com/pzl/pacvcs"
license=('MIT')
depends=()
optdepends=('git' 'bzr')
makedepends=('git')
provides=("${pkgname}")
conflicts=("${pkgname}")
options=()
source=('git+https://github.com/pzl/pacvcs.git')
md5sums=('SKIP')
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

package() {
    cd "$srcdir/$pkgname"
    install -D -m755 "$pkgname" "${pkgdir}/usr/bin/$pkgname"
}
