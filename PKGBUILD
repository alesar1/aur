# Maintainer: Alad Wenter <https://github.com/AladW>
pkgname=aurutils-git
pkgver=1.5.3.r234.g15ef2ab
pkgrel=1
pkgdesc='helper tools for the arch user repository'
url='https://github.com/AladW/aurutils'
arch=('any')
license=('custom:ISC')
source=("$pkgname::git+https://github.com/AladW/aurutils")
sha256sums=('SKIP')
conflicts=('aurutils')
provides=('aurutils')
depends=('pacman>=5.0' 'git' 'jq' 'pacutils')
makedepends=('git')
optdepends=('devtools: aurbuild_chroot'
            'expac: aursift'
            'parallel: threaded downloads'
            'vifm: build file interaction')

pkgver() {
    cd "$pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/; s/-/./g'
}

check() {
    cd "$pkgname"
    make check
}

package() {
    cd "$pkgname"
    make DESTDIR="$pkgdir" PREFIX='/usr' install
}
