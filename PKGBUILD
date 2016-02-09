# Maintainer: Lettier <gifcurry_aur [[@] lettier [[.]]]com>
_hkgname=Gifcurry
_licensefile=LICENSE
_ver=0.1.0.4
_xrev=0

pkgname=gifcurry
pkgver=${_ver}_${_xrev}
pkgrel=1
pkgdesc="Create animated GIFs, overlaid with optional text, from video files."
url="https://github.com/lettier/gifcurry"
license=("Apache")
arch=("i686" "x86_64")
makedepends=("ghc=7.10.3-1" "cabal-install")
depends=("gtk3")
options=("strip" "staticlibs")
source=("http://hackage.haskell.org/packages/archive/${_hkgname}/${_ver}/${_hkgname}-${_ver}.tar.gz")
sha256sums=('6bc6eb7b57d3f45db937dd4160f10d27694480fbc31cf981464a9bb1697b2d31')

build() {
    cd "${srcdir}/${_hkgname}-${_ver}"
    cabal sandbox init
    cabal --require-sandbox update
    cabal --require-sandbox install gtk2hs-buildtools -j
    cabal --require-sandbox install --force-reinstalls --reinstall --only-dependencies
    cabal --require-sandbox configure --prefix=/usr
    cabal --require-sandbox build
}

package() {
    cd "${srcdir}/${_hkgname}-${_ver}"
    cabal --require-sandbox copy --destdir="$pkgdir"
}
