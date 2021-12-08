# Maintainer: Leo <i@setuid0.dev>

_rr_ver=2.6.0
_binary_ver=2.6.4
_plugins_ver=2.6.4

pkgname=roadrunner
pkgver=$_rr_ver
pkgrel=3
pkgdesc="High-performance PHP application server, load-balancer and process manager written in Golang"
arch=(x86_64)
url="https://roadrunner.dev/"
license=(MIT)
depends=("php>=7.3")
makedepends=("go>=1.16" "composer")
source=(
	"$pkgname-$_rr_ver.tar.gz::https://github.com/spiral/$pkgname/archive/v$_rr_ver.tar.gz"
	"$pkgname-binary-$_binary_ver.tar.gz::https://github.com/spiral/$pkgname-binary/archive/v$_binary_ver.tar.gz"
	"$pkgname-plugins-$_plugins_ver.tar.gz::https://github.com/spiral/$pkgname-plugins/archive/v$_binary_ver.tar.gz"
	".rr.yaml.sample-full"
	".rr.yaml.sample-minimal"
)
sha256sums=(
	'dd6a42513252480e749b45fb99b118cfdc01be1ff393820f954c236227ffd191'
	'a53d7d276aba16427462943a2f1e3ca2338e7bbd2ce129ef10d8b8dc2b666daf'
	'46fa6889b5d512ade1a5fdb7ffbd5d76677d10b26f78d5996308cccce9383090'
	SKIP
	SKIP
)
options=("!buildflags")

prepare() {
	export GOPATH="$srcdir"/gopath

	cd "$srcdir/$pkgname-binary-$_binary_ver"
	go mod edit -replace "github.com/spiral/roadrunner/v2=../roadrunner-$_rr_ver"
	go mod edit -replace "github.com/spiral/roadrunner-plugins/v2=../roadrunner-plugins-$_plugins_ver"
	go mod tidy
	go mod download
}

build() {
	export GOPATH="$srcdir"/gopath
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"

	cd "$srcdir/$pkgname-binary-$_binary_ver"

	CGO_ENABLED=0 go build \
		-trimpath \
		-ldflags "-s\
		 -X github.com/spiral/roadrunner-binary/v2/internal/meta.version=${_rr_ver}\
		 -X github.com/spiral/roadrunner-binary/v2/internal/meta.buildTime=$(date +%FT%T%z)" \
		-o ./rr \
		./cmd/rr
}

check() {
	cd "$srcdir/$pkgname-$_rr_ver/tests"
	composer update --prefer-dist --no-progress --ansi

	cd "$srcdir/$pkgname-$_rr_ver"
	rm -rf coverage-ci
	mkdir ./coverage-ci
	go test -race -covermode=atomic -coverprofile ./coverage.txt ./...

	cd "$srcdir/$pkgname-binary-$_binary_ver"
	go test -race -covermode=atomic -coverprofile ./coverage.txt ./...
}

package() {
	install -Dt "$pkgdir/usr/bin/" -m755 "$srcdir/$pkgname-binary-$_binary_ver/rr"
	install -Dt "$pkgdir/usr/share/$pkgname/" -m644 "$srcdir/.rr.yaml.sample-full"
	install -Dt "$pkgdir/usr/share/$pkgname/" -m644 "$srcdir/.rr.yaml.sample-minimal"
}
