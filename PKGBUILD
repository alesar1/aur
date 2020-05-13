# Maintainer: Rustem B. <rustemb@systemli.org>
pkgname=bitfetch-git
pkgver=2.3.r1.gbe4f014
pkgrel=1
pkgdesc="Simple fetch written in C."
arch=(any)
url="https://gitlab.com/bit9tream/bitfetch"
license=('GPL2')
groups=()
depends=(libx11 libxinerama)
makedepends=(git pkgconf)
checkdepends=()
optdepends=()
provides=(bitfetch)
source=("${pkgname}::git+https://gitlab.com/bit9tream/bitfetch.git")
md5sums=("SKIP")

pkgver() {
    cd "${pkgname}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

# for Artix users you need ti set ID=artix for this time
build() {
    cd "${pkgname}"
    [ -f "/etc/os-release" ] && make bitfetch || make bitfetch ID=asd
}

package() {
    cd "${pkgname}"
    install -Dm644 "README.md" "${pkgdir}/usr/share/doc/bitfetch/README.md"
    install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/bitfetch/LICENSE"
    make DESTDIR="$pkgdir/" install

}
