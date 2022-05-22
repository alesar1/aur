# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>

pkgname=jakt-git
pkgver=r428.b8863dc
pkgrel=2
pkgdesc="The Jakt Programming Language from SerenityOS"
arch=("x86_64")
url="https://github.com/SerenityOS/jakt"
license=("BSD")
depends=("clang")
makedepends=("cargo" "git")
provides=("jakt")
conflicts=("jakt")
source=("${pkgname}::git+https://github.com/SerenityOS/jakt.git")
md5sums=('SKIP')

pkgver() {
    cd "${pkgname}"
    ( set -o pipefail
      git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
      printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}

build() {
    cd "${pkgname}"
    cargo build --release
}

check() {
    cd "${pkgname}"
    cargo test
}

package() {
    install -d "${pkgdir}/usr/bin"
    install -d "${pkgdir}/usr/lib/jakt/runtime"
    install -d "${pkgdir}/usr/share/doc/jakt"
    install -d "${pkgdir}/usr/share/licenses/jakt"

    cd "${pkgname}"

    install -Dm755 "target/release/jakt" "${pkgdir}/usr/bin/jakt"
    cp runtime/lib.h "${pkgdir}/usr/lib/jakt/runtime/"
    find runtime -maxdepth 1 -mindepth 1 -type d -exec cp -r {} ${pkgdir}/usr/lib/jakt/ \;
    find runtime -maxdepth 1 -mindepth 1 -type f \( ! -iname "lib.h" \) -exec cp {} ${pkgdir}/usr/lib/jakt/ \;
    install -Dm 644 README.md -t "${pkgdir}/usr/share/doc/jakt"
    install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/jakt"
}
