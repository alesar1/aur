# Maintainer: Chan Beom Park <cbpark@gmail.com>

_hkgname=ghc-exactprint
pkgname=haskell-ghc-exactprint
pkgver=0.5.6.0
pkgrel=1
pkgdesc="Using the API Annotations available from GHC 7.10.2, this library provides a means to round trip any code that can be compiled by GHC, currently excluding lhs files."
url="https://hackage.haskell.org/package/${_hkgname}"
arch=('x86_64')
license=("custom:BSD3")
depends=('ghc-libs' 'haskell-ghc-paths' 'haskell-mtl' 'haskell-syb' 'haskell-free')
makedepends=('ghc' 'haskell-filemanip' 'haskell-hunit' 'haskell-diff' 'haskell-silently')
source=("https://hackage.haskell.org/package/${_hkgname}-${pkgver}/${_hkgname}-${pkgver}.tar.gz")
sha512sums=('1aedcfc5bf741fe62cfc0c80786f7776e0ce87741668baeafdc1db5f0a737e0cb9d13837c507728ad805b61850e85b2601d6764e616d9794ff4477501bec05fe')

build() {
    cd "${srcdir}/${_hkgname}-${pkgver}"

    runhaskell Setup configure -O --enable-shared --enable-executable-dynamic --disable-library-vanilla \
        --prefix=/usr --docdir="/usr/share/doc/${pkgname}" --enable-tests \
        --dynlibdir=/usr/lib --libsubdir=\$compiler/site-local/\$pkgid
    runhaskell Setup build
    runhaskell Setup register --gen-script
    runhaskell Setup unregister --gen-script
    sed -i -r -e "s|ghc-pkg.*update[^ ]* |&'--force' |" register.sh
    sed -i -r -e "s|ghc-pkg.*unregister[^ ]* |&'--force' |" unregister.sh
}

package() {
    cd "${srcdir}/${_hkgname}-${pkgver}"

    install -D -m744 register.sh   "${pkgdir}/usr/share/haskell/register/${pkgname}.sh"
    install -D -m744 unregister.sh "${pkgdir}/usr/share/haskell/unregister/${pkgname}.sh"
    runhaskell Setup copy --destdir="${pkgdir}"
    install -D -m644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    rm -f "${pkgdir}/usr/share/doc/${pkgname}/LICENSE"
}
