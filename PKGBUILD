# Maintainer: Solomon Choina <shlomochoina@gmail.com
# Maintainer: Leif Warner <abimelech@gmail.com>
pkgname=taffybar
pkgver=2.1.1
pkgrel=7
license=('BSD3')
pkgdesc="A desktop bar similar to xmobar, but with more GUI"
url="http://github.com/travitch/taffybar"
arch=('i686' 'x86_64')
depends=("ghc-libs"
         "haskell-alsa-mixer"
         "haskell-configfile"
         "haskell-either"
         "haskell-hstringtemplate"
         "haskell-http"
         "haskell-x11"
         "haskell-dyre"
         "haskell-gtk"
         "haskell-gtk-traymanager"
         "haskell-enclosed-exceptions"
         "haskell-dbus"
         "haskell-mtl"
         "haskell-multimap"
         "haskell-network"
         "haskell-network-uri"
         "haskell-old-locale"
         "haskell-parsec"
         "haskell-rate-limit"
         "haskell-safe"
         "haskell-split"
         "haskell-stm"
         "haskell-text"
         "haskell-time-locale-compat"
         "haskell-tuple"
         "haskell-gi-cairo"
         "haskell-gi"
         "haskell-gi-base"
         "haskell-utf8-string"
         "haskell-xdg-basedir"
         "haskell-dbus-hslogger"
         "haskell-xml-helpers"
         "haskell-status-notifier-item"
         "haskell-gi-gobject"
         "haskell-gi-gdkx11"
         "haskell-gi-gtk"
         "haskell-gtk-strut"
         "gtk-sni-tray"
         "haskell-gi-gtk-hs"
         "xmonad"
         "xmonad-contrib")
makedepends=('ghc')
install=taffybar.install
source=("http://hackage.haskell.org/packages/archive/${pkgname}/${pkgver}/${pkgname}-${pkgver}.tar.gz"
        "dynamic-compilation.patch"
        "taffybar.install"
        "taffybar.service"
        "https://raw.githubusercontent.com/taffybar/taffybar/13b32fc2bc62129093494e939339a979d641691c/xmonad.hs.example")

sha256sums=('1352a3d2937a4694010e55fbb353779d53223c3ec4b2e18847d388c59b07778d'
            'ff90b6e3d05b3bb94cfc2365708bbabbb96fd9a9a4919c0face6f8d2b69037e7'
            'e1a1c820057c64fab4521de3c9b153e4d54e7df9a96d94679dbffc9cec245076'
            'f4a08e887ba527a24f4cecc22393023bf7230172cc76f840ddfc5cfc54182a7e'
            '1a8ca4f177891941960585e228d5386ea9f120a1bb12ac0a956200de839032cb')

# PKGBUILD functions

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"

    # See https://github.com/willdonnelly/dyre/issues/5
    patch -p1 -i ../dynamic-compilation.patch
    #sed -i -e 's/Dyre.ghcOpts = \["-threaded", "-rtsopts"\]/Dyre.ghcOpts = \["-threaded", "-rtsopts", "-dynamic"\]/'  src/System/Taffybar.hs
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    
    runhaskell Setup configure -O --enable-shared --disable-library-vanilla \
        --enable-executable-dynamic \
        --prefix=/usr --docdir="/usr/share/doc/${pkgname}" \
        --libsubdir=\$compiler/site-local/\$pkgid \
        -fnetwork-uri
    runhaskell Setup build
    runhaskell Setup register --gen-script
    runhaskell Setup unregister --gen-script
    sed -i -r -e "s|ghc-pkg.*update[^ ]* |&'--force' |" register.sh
    sed -i -r -e "s|ghc-pkg.*unregister[^ ]* |&'--force' |" unregister.sh
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    
    install -Dm 744 register.sh   "${pkgdir}/usr/share/haskell/register/${pkgname}.sh"
    install -Dm 744 unregister.sh "${pkgdir}/usr/share/haskell/unregister/${pkgname}.sh"

    runhaskell Setup copy --destdir="${pkgdir}"

    install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -Dm 644 CHANGELOG.md -t "${pkgdir}/usr/share/doc/${pkgname}"
    install -Dm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
    install -Dm 644 taffybar.hs.example -t "${pkgdir}/usr/share/doc/${pkgname}"
    install -Dm 644 ${srcdir}/taffybar.service -t "${pkgdir}/usr/lib/systemd/user"
    install -Dm 644 ${srcdir}/xmonad.hs.example -t "{$pkgdir}/usr/share/doc/${pkgname}"

    rm -f "${pkgdir}/usr/share/doc/${pkgname}/LICENSE"
}
