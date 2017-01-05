# Maintainer: Sam Stuewe <halosghost at archlinux dot info>

pkgname=pbpst-git
pkgver=v1.3.0.r27.ga3a2884
pkgrel=1

pkgdesc='A small tool to interact with pb instances'
url='https://github.com/HalosGhost/pbpst'
arch=('i686' 'x86_64')
license=('GPL2')

provides=('pbpst')
conflicts=('pbpst')

depends=('curl' 'jansson')
makedepends=('git' 'tup' 'clang' 'python-sphinx')

source=('git+https://github.com/HalosGhost/pbpst.git')
sha256sums=('SKIP')

pkgver () {
    cd pbpst
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare () {
    cd pbpst
    ./configure --prefix='/usr'
}

build () {
    cd pbpst
    make
}

package () {
    cd pbpst
    make DESTDIR="${pkgdir}" install
}
