# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=clair-git
pkgver=v2.0.0.r280.gcafe0976
pkgrel=1
pkgdesc="Vulnerability Static Analysis for Containers"
arch=(x86_64)
url='https://github.com/coreos/clair'
license=(Apache)
makedepends=('git' 'go')
source=("${pkgname}::git+${url}")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"

	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "${srcdir}/${pkgname}"

	install -m755 -d "${srcdir}/go/src/github.com/coreos/"
	ln -sf "${srcdir}/${pkgname}" "${srcdir}/go/src/github.com/coreos/clair"

	cd "${srcdir}/go/src/github.com/coreos/clair"

	export GOROOT="/usr/lib/go" GOPATH="${srcdir}/go"
	go get -v ./...
}

build() {
	cd "${srcdir}/go/src/github.com/coreos/clair"

	mkdir -p build

	export GOROOT="/usr/lib/go" GOPATH="${srcdir}/go"
	go build \
		-ldflags "-s -w -X github.com/coreos/clair/pkg/version.Version=${pkgver}" \
		-gcflags="all=-trimpath=${GOPATH}/src" \
		-asmflags="all=-trimpath=${GOPATH}/src" \
		-o build/clair ./cmd/clair
}

package() {
	cd "${srcdir}/go/src/github.com/coreos/clair"

	install -Dm755 "build/clair" "${pkgdir}/usr/bin/clair"
	install -Dm755 "config.yaml.sample" "${pkgdir}/etc/clair/config.yaml"
	install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
