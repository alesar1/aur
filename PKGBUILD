# Maintainer: David Li <davidtianli@gmail.com>
pkgname=pax-mc-git
pkgver=1.6.0.r0.g42bdf30
pkgrel=2
pkgdesc="The MC modpack manager for professionals. VSC version."
arch=('x86_64')
url="https://github.com/froehlicha/pax"
license=('MIT')
makedepends=('git' 'nim' 'nimble')
provides=('pax-mc')
conflicts=('pax-mc-bin' 'pax-mc')
replaces=()
changelog=
source=("git+https://github.com/froehlichA/pax.git")
sha256sums=('SKIP')

pkgver() {
    cd "pax"
    git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}/pax"
    echo "y" | nimble build --nimbleDir:"${srcdir}/nimble" -d:ssl
}

package() {
    install -d -m755 "${pkgdir}/usr/bin"
    install -m755 "${srcdir}/pax/pax" "${pkgdir}/usr/bin/pax"
}
