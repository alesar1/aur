# Maintainer: Tony Lambiris <tony@libpcap.net>

pkgname=ghw-git
pkgver=v0.8.0.r78.g4d0ed8f
pkgrel=1
pkgdesc="Golang hardware discovery/inspection library"
arch=('x86_64')
url="https://github.com/jaypipes/ghw.git"
license=('Apache')
makedepends=('go>=1.10' 'git')
conflicts=('ghw')
provides=('ghw')
source=("${pkgname}::git+${url}#branch=main")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"

	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "${srcdir}/${pkgname}"

	install -m755 -d "${srcdir}/go/src/github.com/jaypipes/"
	ln -sf "${srcdir}/${pkgname}" "${srcdir}/go/src/github.com/jaypipes/ghw"
}

build() {
	cd "${srcdir}/go/src/github.com/jaypipes/ghw"

	export GOPATH="${srcdir}/go" GO111MODULE="auto"
    CGO_ENABLED=0 go build -o ghwc \
		-trimpath -modcacherw -ldflags "-s -w" ./cmd/ghwc
}

package() {
	cd "${srcdir}/go/src/github.com/jaypipes/ghw"

	install -Dm755 "ghwc" "${pkgdir}/usr/bin/ghwc"
}
