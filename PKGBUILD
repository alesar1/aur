pkgname=mtmigrate
pkgver=0.1.0
pkgrel=3
pkgdesc="mtmigrate (music torrent migrate) is a tool to help you with migrating your old data to a new torrent swarm."
arch=('armv6h' 'armv7h' 'aarch64' 'i686' 'x86_64')
url="https://github.com/nondescriptpointer/mtmigrate"
license=('MIT')
groups=('gazelle-tools')
makedepends=('rust')
source=("git+https://github.com/nondescriptpointer/mtmigrate")
md5sums=('SKIP')

build() {
    cd "${srcdir}"/"${pkgname}"
    cargo build --release
}

package() {
    cd "${srcdir}"/"${pkgname}"
    install -Dm 755 target/release/"${pkgname}" "${pkgdir}"/usr/bin/"${pkgname}"
}
