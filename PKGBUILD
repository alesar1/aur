# Maintainer: Alad Wenter <https://github.com/AladW>
pkgname=aurutils-git
pkgver=1.5.3.r421.g44baaac
pkgrel=1
pkgdesc='helper tools for the arch user repository'
url='https://github.com/AladW/aurutils'
arch=('any')
license=('custom:ISC')
source=('git+https://github.com/AladW/aurutils')
sha256sums=('SKIP')
conflicts=('aurutils')
provides=('aurutils')
depends=('pacman>=5.0' 'git' 'jq' 'pacutils' 'wget')
makedepends=('git')
optdepends=('aria2: thread downloads'
            'devtools: aur-build-nspawn'
            'diffstat: aur-fetch-snapshot'
            'expac: aur-rfilter'
            'vifm: build file interaction'
            'xdelta3: generate delta files')

pkgver() {
    cd aurutils
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/; s/-/./g'
}

build() {
    cd aurutils
    make DESTDIR="$pkgdir"
}

package() {
    cd aurutils
    make DESTDIR="$pkgdir" install
}
