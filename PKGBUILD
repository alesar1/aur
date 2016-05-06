# Maintainer: Jia Li <lijia1608@gmail.com>
pkgname=alpscore-git
pkgver=0.5.4.r9.g97556b9
pkgrel=1
pkgdesc="ALPS Core libraries for numerical simulations of condensed matter systems."
arch=(i686 x86_64)
url="http://alpscore.org"
license=('GPL2')
depends=('cmake>=2.8.12' 'boost>=1.54.0' 'hdf5>=1.8')
makedepends=(git)
optdepends=('openmpi: for MPI support')
provides=(${pkgname%-*}=$pkgver)
conflicts=(alpscore alps)
source=($pkgname::git+https://github.com/ALPSCore/ALPSCore.git)
md5sums=('SKIP')

pkgver() {
    cd "$pkgname"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$pkgname"
    mkdir -p build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr -DDocumentation=OFF ..
	make
}

check() {
    cd "$pkgname/build"
	make test
}

package() {
    cd "$pkgname/build"
	make DESTDIR="$pkgdir/" install
}
