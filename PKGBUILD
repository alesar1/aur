# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=aminal-git
pkgver=r422.a2f23c7
_pkgname=aminal
pkgrel=1
pkgdesc="Golang terminal emulator from scratch"
url="https://github.com/liamg/aminal"
arch=('x86_64' 'i686')
license=('GPL3')
makedepends=('go')
source=("${pkgname}::git+${url}")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${srcdir}/${pkgname}"

	install -m755 -d "${srcdir}/go/src/github.com/liamg/"
	ln -sf "${srcdir}/${pkgname}" "${srcdir}/go/src/github.com/liamg/aminal"

	cd "${srcdir}/go/src/github.com/liamg/aminal"

	export GOROOT="/usr/lib/go" GOPATH="${srcdir}/go"
	go get -v ./...
}

build() {
	cd "${srcdir}/go/src/github.com/liamg/aminal"

	mkdir -p build

	export GOROOT="/usr/lib/go" GOPATH="${srcdir}/go"
	go build -ldflags "-s -w" \
		-gcflags="all=-trimpath=${GOPATH}/src" \
		-asmflags="all=-trimpath=${GOPATH}/src" \
		-o build/aminal .
}

package() {
	cd "${srcdir}/go/src/github.com/liamg/aminal"

	install -Dm755 "./build/aminal" "${pkgdir}/usr/bin/aminal"
	install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
