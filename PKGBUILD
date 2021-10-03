# Maintainer: Cody P Schafer <archlinux at codyps.com>
# Maintainer: Daniel Nagy <danielnagy at gmx de>
# Contributor: Martin Harvan <martinhrvn@gmail.com>

_hkgname=gio
pkgname=haskell-$_hkgname
pkgver=0.13.8.1
pkgrel=1
pkgdesc="Binding to the GIO."
url="http://hackage.haskell.org/package/${_hkgname}"
license=('LGPL-2.1')
arch=('i686' 'x86_64')
makedepends=('haskell-gtk2hs-buildtools')
depends=('ghc'
    'haskell-array'
    'haskell-bytestring'
    'haskell-containers'
    'haskell-glib'
    'haskell-mtl'
    'glib2'
)
options=(!emptydirs)
source=(https://hackage.haskell.org/packages/archive/$_hkgname/$pkgver/$_hkgname-$pkgver.tar.gz)
sha384sums=('6fc16a3bc9fa85d7e044546ea5e1cef049d6109606e71d897a81cd7f547cea7e0b250e29289b27d04799daf8dc45893d')

build() {
    cd ${srcdir}/${_hkgname}-${pkgver}
    runhaskell Setup configure -O --enable-shared --enable-executable-dynamic --disable-library-vanilla \
        --prefix=/usr --docdir="/usr/share/doc/${pkgname}" \
        --dynlibdir=/usr/lib --libsubdir=\$compiler/site-local/\$pkgid
    runhaskell Setup build
    runhaskell Setup haddock
    runhaskell Setup register   --gen-script
    runhaskell Setup unregister --gen-script
    sed -i -r -e "s|ghc-pkg.*update[^ ]* |&'--force' |" register.sh
    sed -i -r -e "s|ghc-pkg.*unregister[^ ]* |&'--force' |" unregister.sh
}

package() {
    cd "${srcdir}/${_hkgname}-${pkgver}"
    install -D -m744 register.sh   "${pkgdir}/usr/share/haskell/register/${pkgname}.sh"
    install -D -m744 unregister.sh "${pkgdir}/usr/share/haskell/unregister/${pkgname}.sh"
    install -d -m755 "${pkgdir}/usr/share/doc/ghc/html/libraries"
    ln -s "/usr/share/doc/${pkgname}/html" "${pkgdir}/usr/share/doc/ghc/html/libraries/${_hkgname}"
    runhaskell Setup copy "--destdir=${pkgdir}"
}
