# Maintainer: Solomon Choina <shlomochoina@gmail.com
# Maintainer: Leif Warner <abimelech@gmail.com>
pkgname=taffybar
pkgver=3.2.1
pkgrel=3
license=('BSD3')
pkgdesc="A desktop bar similar to xmobar, but with more GUI"
url="http://github.com/travitch/taffybar"
arch=('i686' 'x86_64')
depends=("gmp" "zlib" 'libxss' 'libdbusmenu-gtk3')
makedepends=('stack')
install=taffybar.install
source=("https://github.com/taffybar/taffybar/archive/v${pkgver}.tar.gz"
        "taffybar.install"
        "taffybar.service"
        "stack.yaml"
        "https://raw.githubusercontent.com/taffybar/taffybar/13b32fc2bc62129093494e939339a979d641691c/xmonad.hs.example"
        )

sha256sums=('51ca3f4dd505a9d5fb03a3150898bcd090e037ca851f04a4ce4185135bf537ca'
            '554340a052abecb78fbb959d1a05b8f4f4db947fc151e7f0f8c49f2300f1ab6d'
            'f4a08e887ba527a24f4cecc22393023bf7230172cc76f840ddfc5cfc54182a7e'
            '7a9ed0c527e2306b193f9e38bba3d740b60d6c8e17869a172daa752c79df3ad1'
            '1a8ca4f177891941960585e228d5386ea9f120a1bb12ac0a956200de839032cb')

# PKGBUILD functions

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    mv ../stack.yaml .
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    mkdir -p "taffybar/bin"
    stack --jobs "$[$(nproc)+1]" --local-bin-path "taffybar/bin/" install -- taffybar

}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"/taffybar

    install -Dm755 "bin/taffybar" "${pkgdir}/usr/bin/taffybar"

    install -Dm 644 ../LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -Dm 644 ../CHANGELOG.md -t "${pkgdir}/usr/share/doc/${pkgname}"
    install -Dm 644 ../README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
    install -Dm 644 ${srcdir}/taffybar.service -t "${pkgdir}/usr/lib/systemd/user"
    install -Dm 644 ${srcdir}/xmonad.hs.example -t "{$pkgdir}/usr/share/doc/${pkgname}"

    rm -f "${pkgdir}/usr/share/doc/${pkgname}/LICENSE"
}
