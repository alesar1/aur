# Maintainer: Jared Johnson <jaredj@gmx.com>
pkgname=fvim
pkgver=0.2_100_g520d8b8
_pkgver=$(echo "${pkgver}" | sed -e "s/_/-/g")
pkgrel=1
pkgdesc="Cross platform Neovim front-end UI, built with F# + Avalonia"
arch=('x86_64')
url="https://github.com/yatli/fvim"
license=('MIT')
groups=()
depends=('neovim' 'ttf-dejavu')
makedepends=('dotnet-sdk-preview')
optdepends=()
provides=('fvim')
conflicts=('fvim')
source=("https://github.com/yatli/fvim/archive/v0.2-100-g520d8b8.tar.gz")
md5sums=('SKIP')
options=('staticlibs')

build() {
    cd "${srcdir}/${pkgname}-${_pkgver}"
    dotnet publish \
        -f netcoreapp3.0 \
        -c Release \
        -r linux-x64 \
        --self-contained
}

package() {
    cd "${srcdir}/${pkgname}-${_pkgver}"

    install -dm755 "${pkgdir}/usr/bin"
    install -dm755 "${pkgdir}/usr/share/${pkgname}"
    install -dm755 "${pkgdir}/usr/share/applications"
    install -dm755 "${pkgdir}/usr/share/icons/hicolor/48x48/apps"

    install Assets/fvim.png "${pkgdir}/usr/share/icons/hicolor/48x48/apps/fvim.png"
    install lib/fvim.desktop "${pkgdir}/usr/share/applications/fvim.desktop"
    cp -dpr bin/Release/netcoreapp3.0/linux-x64/* "${pkgdir}/usr/share/fvim"
    chmod 755 "${pkgdir}/usr/share/fvim/FVim"
    ln -sf "${pkgdir}/usr/share/fvim/FVim" "${pkgdir}/usr/bin/fvim"
}
