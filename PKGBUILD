# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Cesar Lucas <jester2@gmail.com>
pkgname=cdf-nasa
pkgver=3.7.0
pkgrel=1
epoch=
pkgdesc="NASA Common Data Format (CDF) library for scientific data management"
arch=("x86_64")
url="https://cdf.gsfc.nasa.gov/"
license=('unknown')
groups=()
depends=()
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
source=("https://spdf.sci.gsfc.nasa.gov/pub/software/cdf/dist/cdf37_0/linux/cdf37_0-dist-all.tar.gz")
noextract=()
md5sums=("36c5485a0700fb76d11cc7d01bbe2995")
validpgpkeys=()

#prepare() {
#}

build() {
	cd cdf37_0-dist 
	make OS=linux ENV=gnu SHARED=yes all
}

check() {
	cd cdf37_0-dist 
	make test
}

package() {
	cd cdf37_0-dist
	make INSTALLDIR="$pkgdir/usr" install
}
