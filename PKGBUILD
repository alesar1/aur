# Maintainer: Nicola Squartini <tensor5@gmail.com>
_hkgname=flaccuraterip
pkgname=flaccuraterip
pkgver=0.3.8
pkgrel=1
pkgdesc="Verify FLAC files ripped from CD using AccurateRip™"
url="http://hackage.haskell.org/package/${_hkgname}"
license=('GPL3')
arch=('i686' 'x86_64')
makedepends=('ghc'
             'haskell-binary>=0.5' 'haskell-binary<0.9'
             'haskell-deepseq>=1.3' 'haskell-deepseq<1.5'
             'haskell-http>=4000.2' 'haskell-http<4000.4'
             'haskell-optparse-applicative>=0.10' 'haskell-optparse-applicative<0.15'
             'haskell-process>=1.5' 'haskell-process<1.7'
            )
depends=('haskell-http'
         'haskell-optparse-applicative')
options=('strip')
source=("http://hackage.haskell.org/packages/archive/${_hkgname}/${pkgver}/${_hkgname}-${pkgver}.tar.gz")
sha256sums=('1aa77d70128cc250584f03adb1f5f579914a9fdd2f96298c9003da6bd72eb347')

build() {
    cd "${srcdir}/${_hkgname}-${pkgver}"
    runhaskell Setup configure --prefix=/usr --docdir=/usr/share/doc/${pkgname} -O --enable-executable-dynamic
    runhaskell Setup build
}

package() {
    cd "${srcdir}/${_hkgname}-${pkgver}"
    runhaskell Setup copy --destdir="${pkgdir}"
}
