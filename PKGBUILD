# Maintainer: fenrig <fenrig.linux at outlook.com>
pkgname=libsahtrace
pkgver=0.1.0.r0.g37c28b2
pkgrel=1
pkgdesc="Small and flexible library to enable tracing and logging"
arch=('any')
url="https://gitlab.com/soft.at.home/logging/libsahtrace.git"
license=('MIT')

depends=(
)
makedepends=(
	'sah_components_config'
	'm4'
	'gcc'
	'make'
)
provides=(
	'libsahtrace'
)
conflicts=(
	'libsahtrace'
)

gitbranch="master"

source=("${pkgname}::git+https://gitlab.com/soft.at.home/logging/libsahtrace.git#branch=${gitbranch}" "components.config")
md5sums=('SKIP' 'SKIP')

pkgver() {
  cd "${pkgname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	sah_components_config
	! mkdir include
	cp -f components.h include/components.h 
}

build() {
	# STAGINGDIR
	export STAGINGDIR=$(pwd)
	# Disable some warnings
	export CFLAGS+=" -Wstringop-overflow=0"
	cd "${pkgname}"
	make
}

package() {
	cd "${pkgname}"
	make D="${pkgdir}/" install
}
