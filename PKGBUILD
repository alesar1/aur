# Maintainer: riey <creeper844@gmail.com>
pkgname=kime
pkgver=1.0.3
pkgrel=2
pkgdesc="Korean IME"
url="https://github.com/Riey/kime"
conflicts=('kime')
provides=('kime')
optdepends=('libappindicator-gtk3: indicator support'
            'gtk2: gtk2 support'
            'gtk3: gtk3 support'
            'gtk4: gtk4 support'
            'qt5-base: qt5 support'
            'qt6-base: qt6 support'
            'libxcb: xim support'
            'cairo: xim support')
makedepends=('cargo' 'clang' 'llvm' 'cmake' 'ninja' 'cairo' 'libxcb' 'libappindicator-gtk3')
arch=('any')
source=(
    ${pkgname}-${pkgver}.tar.gz::"${url}/archive/v${pkgver}.tar.gz"
)
md5sums=('eeac061312204949e9bd1e694647708c')

build() {
    cd "${pkgname}-${pkgver}"
    # Clean cache
    rm -rf build || true
    scripts/build.sh -ar
}

package() {
    cd "${pkgname}-${pkgver}"

    scripts/install.sh "${pkgdir}"
    install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

