# Maintainer: Per Osbeck <per@osbeck.com>
pkgname=perfops-cli
pkgver=0.7.5
pkgrel=1
pkgdesc="A simple command line tool to interact with hundreds of servers around the world. Run benchmarks and debug your infrastructure without leaving your console."
arch=(x86_64)
url="https://perfops.net"
license=('APACHE')
makedepends=('git' 'go')
source=("$pkgname::git+https://github.com/ProspectOne/$pkgname.git#tag=v$pkgver")
md5sums=(SKIP)

build() {
	cd "$pkgname"
	PERFOPS_BUILD_PLATFORMS=linux bash hack/build-all.sh
}

# check() {
# 	#
# }

package() {
	cd "$pkgname"
	install -Dm755 "release/perfops-linux-amd64" "$pkgdir/usr/bin/perfops-cli"
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
