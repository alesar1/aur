# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=lemonade-git
pkgver=v1.1.1.r14.gddbd6c1
pkgrel=1
pkgdesc="Lemonade is a remote utility tool. (copy, paste and open browser) over TCP."
url="https://github.com/pocke/lemonade"
arch=('x86_64' 'i686')
license=('MIT')
makedepends=('go')
source=("${pkgname}::git+${url}")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"

	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "${srcdir}/${pkgname}"

	install -m755 -d "${srcdir}/go/src/github.com/pocke/"
	ln -sf "${srcdir}/${pkgname}" "${srcdir}/go/src/github.com/pocke/lemonade"
	#cp -a "${srcdir}/${pkgname}" "${srcdir}/go/src/github.com/pocke/lemonade"

	cd "${srcdir}/go/src/github.com/pocke/lemonade"

	GOROOT="/usr/lib/go" GOPATH="${srcdir}/go" \
	go get -v -d ./...
}

build() {
	cd "${srcdir}/go/src/github.com/pocke/lemonade"

	mkdir -p build

	GOROOT="/usr/lib/go" GOPATH="${srcdir}/go" \
	go build -ldflags "-s -w" \
		-gcflags="all=-trimpath=${GOPATH}/src" \
		-asmflags="all=-trimpath=${GOPATH}/src" \
		-o build/lemonade
}

package() {
	cd "${srcdir}/go/src/github.com/pocke/lemonade"

	install -Dm755 "./build/lemonade" "${pkgdir}/usr/bin/lemonade"
	install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

#check() {
#	cd "${srcdir}/go/src/github.com/pocke/lemonade"
#
#	export GOROOT="/usr/lib/go" GOPATH="${srcdir}/go"
#	make test
#}
#
#build() {
#	cd "${srcdir}/go/src/github.com/pocke/lemonade"
#
#	GOROOT="/usr/lib/go" GOPATH="${srcdir}/go" PATH="$PATH:$GOPATH/bin" make
#}
#
#package() {
#	cd "${srcdir}/go/src/github.com/pocke/lemonade"
#
#	install -Dm755 "lemonade" "${pkgdir}/usr/bin/lemonade"
#}
