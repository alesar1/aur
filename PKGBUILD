# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Maintainer: Horo <horo@yoitsu.moe>

pkgname=parsoid-git
_pkgname=parsoid
pkgver=v0.3.0.r801.g647e9a5
pkgrel=2
pkgdesc="A bidirectional wikitext parser and runtime"
arch=('any')
url="https://www.mediawiki.org/wiki/Parsoid"
license=('GPL2')
depends=('nodejs')
makedepends=('git' 'npm')
optdepends=(
    'mediawiki: MediaWiki engine'
)
conflicts=('parsoid')
replaces=('parsoid')
provides=('parsoid')
backup=(usr/share/webapps/parsoid/localsettings.js)
source=("git+https://gerrit.wikimedia.org/r/p/mediawiki/services/parsoid"
        "parsoid.service"
        "parsoid.install")
sha512sums=("SKIP"
            "b4f8a2fc5119fa4741d79c66b5bb2282b274018ad548d383c6007fbe66d14ee1de6744a2cdcf1f8453ca055f48716598b42d3faecd29b81f61c06a54df64ed7d"
            "103f701601103dfd8374a6461e8ffb7ebf2a85a5689c7d9792f22673dba0dcf5dd144b9905cc6e4a4143242ac931fc7f39c187b3b9eb5ecf401abfb4fd2b94ef")
options=('!strip')
install="parsoid.install"
pkgver() {
  cd "$_pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g' 
}
build() {
    cd $srcdir/parsoid
    npm install
}
package() {
    cd $srcdir/parsoid
    cp localsettings.example.js localsettings.js    
    mkdir -p "${pkgdir}/usr/share/webapps/${_pkgname}"
    cp -R . "${pkgdir}/usr/share/webapps/${_pkgname}/"
    install -Dm644 "${srcdir}/parsoid.service" "${pkgdir}/usr/lib/systemd/system/parsoid.service"
    install -D "COPYING.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

