# Maintainer: Tony Lambiris <tony@criticalstack.com>
pkgname=aws-sdk-cpp-git
pkgver=1.0.10.r0.g9448c9d
pkgrel=1
epoch=
pkgdesc="AWS SDK for C++"
arch=(any)
url="https://github.com/aws/aws-sdk-cpp"
license=('BSD')
groups=()
depends=('cmake')
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("${pkgname}-${pkgver}::git+https://github.com/aws/aws-sdk-cpp")
noextract=()
sha256sums=('SKIP')
validpgpkeys=()

_gitname=${pkgname}-${pkgver}

#pkgver() {
#	cd $_gitname
#	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
#}

build() {
	cd $_gitname

    CMAKE_FLAGS="-Wno-dev -DCMAKE_INSTALL_PREFIX=/usr \
               -DCMAKE_BUILD_TYPE=Release \
               -DSTATIC_LINKING=1 -DNO_HTTP_CLIENT=1 \
               -DMINIMIZE_SIZE=ON -DBUILD_SHARED_LIBS=OFF \
               -DBUILD_ONLY=firehose;kinesis;sts"
    cmake $CMAKE_FLAGS .

	make -j $(nproc)
}

package() {
	cd $_gitname

	make DESTDIR="${pkgdir}" install
}
