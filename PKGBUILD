# Maintainer: Poscat <poscat At mail Dot poscat Dot moe>


pkgname=haskell-ide-engine-git
pkgver=r3043.38a6febb
pkgrel=3
pkgdesc="The engine for haskell ide-integration. Not an IDE"
arch=('x86_64')
url="https://github.com/haskell/haskell-ide-engine"
license=('custom:BSD3')
provides=('haskell-ide-engine')
makedepends=('git' 'stack')
source=("${pkgname}::git://github.com/haskell/haskell-ide-engine.git")
conflicts=('haskell-ide-engine')
noextract=()
md5sums=('SKIP')

# supported ghc versions: 8.4.{2,3,4} 8.6.{4,5} 8.8.{1,2}

_enabled_ghc_versions=('8.6.5' '8.8.3')

pkgver() {
  cd "${srcdir}/${pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "${srcdir}/${pkgname}"
    git submodule update --init
}

build() {
    cd "${srcdir}/${pkgname}"
    for ver in "${_enabled_ghc_versions[@]}"; do
        stack --stack-yaml=stack-${ver}.yaml build
    done
}

package() {
    cd "${srcdir}/${pkgname}"
    install -D -m 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    for ver in "${_enabled_ghc_versions[@]}"; do
        stack --stack-yaml=stack-${ver}.yaml --local-bin-path "${pkgdir}/usr/bin/" install \
        && mv "${pkgdir}/usr/bin/hie" "${pkgdir}/usr/bin/hie-${ver}"
    done
}

