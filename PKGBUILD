# Maintainer: PastLeo <chgu82837@gmail.com>
pkgname=ooni-probe-cli-git
pkgver=r244.222b0bf
pkgrel=1
pkgdesc="Next generation OONI Probe CLI"
arch=('x86_64')
url='https://github.com/ooni/probe-cli'
license=('BSD')
depends=('zlib' 'libevent' 'openssl' 'libnghttp2' 'curl' 'libmaxminddb')
makedepends=('git' 'gcc' 'go' 'measurement-kit')
provides=('ooni-probe-cli')
conflicts=('ooni-probe-cli')
source=(
	'git://github.com/ooni/probe-cli.git#commit=222b0bfbca84e4547d8507261b7e1f847776c2ec'
	'ooni-engine-measurementkit-task_gco.go.patch'
)
md5sums=(
	'SKIP'
	'e36ee10a071236d376c3b1971f987210'
)

pkgver() {
	cd "$srcdir/probe-cli"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/probe-cli"
	export GOPATH="$srcdir/go"

	go mod download
	chmod -R 755 "$srcdir/go/pkg/mod"
	patch "$srcdir/go/pkg/mod/github.com/ooni/probe-engine@v0.2.1-0.20191114165804-831e879ea56a/measurementkit/task_cgo.go" "$srcdir/ooni-engine-measurementkit-task_gco.go.patch"

	go build -o dist/linux/amd64/ooniprobe -v ./cmd/ooniprobe
}

package() {
	cd "$srcdir/probe-cli"
	install -Dm755 dist/linux/amd64/ooniprobe "$pkgdir"/usr/bin/ooniprobe
}
