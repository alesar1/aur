# Maintainer: Dino Morelli <dino@ui3.info>

pkgname=epub-tools
pkgver=2.6
pkgrel=1
pkgdesc='Command line utilities for working with epub files'
arch=('i686' 'x86_64')
url='http://hub.darcs.net/dino/epub-tools'
license=('BSD3')
depends=('gmp' 'libffi' 'zlib')
makedepends=('ghc' 'cabal-install')
options=('strip')
source=("http://hackage.haskell.org/package/${pkgname}-${pkgver}/${pkgname}-${pkgver}.tar.gz")

sha256sums=('dbe89d574d3e7add1f623b959e97f785c2e0d1d62caf3a4e535b162f4e559e59')


# PKGBUILD functions

build() {
   cd ${srcdir}/${pkgname}-${pkgver}

   # This may have been causing problems in the past. It can possibly
   # be commented out.
   cabal update

   cabal sandbox init
   cabal install --only-dependencies
   cabal configure -O --prefix=/usr
   cabal build
}

package() {
   cd ${srcdir}/${pkgname}-${pkgver}

   cabal copy --destdir=${pkgdir}
}
