# Maintainer: Adrian Perez de Castro <aperez@igalia.com>
# Contributor: Yamakaky <yamakaky@yamaworld.fr>
pkgname=bloaty-git
pkgver=v1.0.r2.gfeaca23
pkgrel=1
pkgdesc='A size profiler for binaries'
arch=(x86_64 i686)
url=https://github.com/google/bloaty
license=(Apache)
depends=(gcc-libs)
makedepends=(git cmake)
conflicts=(bloaty)
source=("${pkgname}::git+${url}")
sha512sums=(SKIP)

pkgver () {
	cd "${pkgname}"
	(
		set -o pipefail
		git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
    rm -rf "${srcdir}/build"
    mkdir "${srcdir}/build"
    cd "${srcdir}/build"
    cmake -G 'Unix Makefiles' \
        -DCMAKE_INSTALL_PREFIX=/usr \
        "${srcdir}/${pkgname}"
    make
}

package() {
    cd "${srcdir}/build"
    install -Dm755 "${srcdir}/build/bloaty" \
        "${pkgdir}/usr/bin/bloaty"
    install -Dm644 "${srcdir}/${pkgname}/README.md" \
        "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
