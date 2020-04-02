# Contributor: Thor K. Høgås <thor at roht.no>
# Maintainer: Alex J. Malozemoff <amaloz@galois.com>
pkgname=matterhorn
pkgver=50200.8.0
pkgrel=3
pkgdesc="A terminal-based chat client for MatterMost"
arch=('x86_64')
url="https://github.com/matterhorn-chat/matterhorn"
license=('BSD')
depends=('gmp' 'zlib')
makedepends=('cabal-install' 'ghc')
source=("https://github.com/matterhorn-chat/matterhorn/archive/${pkgver}.tar.gz")
sha1sums=('9c8790ad5ec28fd843b8fb3ead001d6036d987ee')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  rm -f cabal.project
  cabal new-update
  cabal new-build -j --enable-shared --enable-executable-dynamic --ghc-options=-dynamic
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -m755 -D $(find . -name "matterhorn" -type f) "${pkgdir}"/usr/bin/matterhorn
  install -m644 -D LICENSE "${pkgdir}"/usr/share/licenses/matterhorn/LICENSE
}
