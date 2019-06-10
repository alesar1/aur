# Maintainer: Sefa Eyeoglu <contact@scrumplex.net>
# Contributor: Daniel Maslowski <info@orangecms.org>

_branch=master
pkgname=fisher-git
pkgver=3.2.7.r0.gb2cd7ae
pkgrel=1
pkgdesc="A package manager for the fish shell"
arch=("any")
url="https://github.com/jorgebucaran/fisher"
license=("MIT")

depends=("fish>=2.3.0" "curl" "git")
makedepends=("git")
conflicts=("fisher")

install=fisher-git.install
source=("git+https://github.com/jorgebucaran/fisher.git#branch=${_branch}")
sha512sums=("SKIP")

pkgver() {
    cd "fisher"
    
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
    cd "fisher"

    # install fisher into the global fish directory
    sharepath="${pkgdir}/usr/share"
    fishpath="${sharepath}/fish"
    install -Dm 644 fisher.fish "${fishpath}/vendor_functions.d/fisher.fish"
    # README and LICENSE
    install -Dm 644 LICENSE.md "${sharepath}/licenses/${pkgname}/LICENSE.md"
    install -Dm 644 README.md "${sharepath}/doc/${pkgname}/README"
}
