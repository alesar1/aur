# Maintainer: Caleb Bassi <calebjbassi@gmail.com>

# https://wiki.archlinux.org/index.php/VCS_package_guidelines
# https://wiki.archlinux.org/index.php/Rust_package_guidelines

pkgname=ytop-git
_pkgname=${pkgname%-git}
pkgver=r228.dd3d53e
pkgrel=1
pkgdesc="A TUI system monitor written in Rust"
arch=('any')
url="https://github.com/cjbassi/ytop"
license=("MIT")
makedepends=("git" "cargo")
provides=(${_pkgname})
conflicts=(${_pkgname})
source=("${_pkgname}::git+${url}")
sha256sums=("SKIP")

pkgver() {
	cd "${_pkgname}"
	( set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	cd "${_pkgname}"
	cargo build --release --locked --all-features
}

package() {
	install -Dm755 "${_pkgname}/target/release/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
}
