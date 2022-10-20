# Maintainer: wszqkzqk <wszqkzqk@qq.com>
pkgname=oh-my-posh
pkgver=12.6.5
pkgrel=1
pkgdesc="A prompt theme engine for any shell."
arch=('x86_64' 'armv7h' 'aarch64')
url="https://github.com/JanDeDobbeleer/oh-my-posh"
license=('MIT')
makedepends=('curl' 'grep' 'sed' 'unzip' 'git' 'go')
sha256sums=('c7d4633d443d1fa2ea5a9d5efcad784bba123c6a6d94da3b2330b51be94bcbf7'
            'fb7a3a9b5480177438d2b1be15cfa8da6d3d4c7471c46c892e43fd5d2df97183'
            'a5308c4e51268229a039ec4ec9a251a4cdb89d9380383e6e13aeba64a74f19ad')
#
source=(
    https://github.com/JanDeDobbeleer/oh-my-posh/archive/refs/tags/v${pkgver}.tar.gz
    "themes-${sha256sums[0]}.zip::https://github.com/JanDeDobbeleer/oh-my-posh/releases/download/v$pkgver/themes.zip"
    "LICENSE-${sha256sums[1]}::https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/v${pkgver}/COPYING"
)
noextract=('themes.zip')

package() {
    install -Dm 644 "LICENSE-${sha256sums[1]}" -t "${pkgdir}/usr/share/licenses/${pkgname}/"

    cd "${srcdir}/oh-my-posh-${pkgver}/src"
    go build
    install -Dm 755 ./oh-my-posh -t "${pkgdir}/usr/bin/"

    mkdir -p "${pkgdir}/usr/share/oh-my-posh/themes"
    unzip "${srcdir}/themes-${sha256sums}.zip" -d "${pkgdir}/usr/share/oh-my-posh/themes"
    find "${pkgdir}/usr/share/oh-my-posh/themes" -type f -exec chmod 644 "{}" \;
}
