# Maintainer: Microoo <hu@microoo.net>
pkgname=substratumnode-git
pkgver=0.4.0.r4.g80869fb
pkgrel=2
pkgdesc="SubstratumNode is the foundation of the decentralized SubstratumNetwork. SubstratumNodes work together to relay CORES packages and content on the network."
arch=('x86_64')
url="https://github.com/SubstratumNetwork/SubstratumNode"
license=('GPLv3')
depends=('rust' 'openssl' 'yarn')
provides=('substratumnode')
conflicts=('substratumnode')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("${pkgname}::git://github.com/SubstratumNetwork/SubstratumNode")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$srcdir/${pkgname}"
    sed -i 's/gpg --/# gpg --/' ci/release.sh
    sed -i 's/zip -j/# zip -j/' ci/release.sh
    ci/release.sh
}

package() {

    # Extract deb file
    bsdtar -xf "$srcdir/${pkgname}/node_ui/dist/SubstratumNode_${pkgver}_amd64.deb"
    
    # Extract package data
    tar xf "data.tar.xz" -C "${pkgdir}"

}
