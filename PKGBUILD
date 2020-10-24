# Maintainer: spikecodes <19519553+spikecodes@users.noreply.github.com>
pkgname=nat-git
_pkgname=${pkgname%-git}
pkgver=v1.0.8
pkgrel=1
pkgdesc="nat the ls replacement you never knew you needed"
arch=('x86_64')
url="https://github.com/willdoescode/nat"
license=("MIT")
makedepends=("git" "cargo")
provides=(${_pkgname})
conflicts=(${_pkgname})
source=("${_pkgname}::git+${url}")
sha256sums=("SKIP")

pkgver() {
	cd "${_pkgname}"
	( set -o pipefail
		printf "$(git describe --tags | awk -F- '{print $1}')"
	)
}

build() {
	cd "${_pkgname}"
	cargo build --release --all-features --target-dir=target
}

package() {
	cd "${_pkgname}"
	install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/${_pkgname}/LICENSE"
	install -Dm755 "target/release/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
}
