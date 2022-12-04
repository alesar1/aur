# Maintainer: Shiroko <hhx.xxm at gmail.com>
# Maintainer: Johnpoint <me at lvcshu.com>
pkgname=clash-for-windows-bin
pkgver=0.20.9
pkgrel=1
pkgdesc="A Windows/macOS/Linux GUI based on Clash and Electron."
arch=("x86_64" "aarch64")
url="https://github.com/Fndroid/clash_for_windows_pkg"
# logo_url="https://raw.githubusercontent.com/Dreamacro/clash/master/docs/logo.png"
logo_url="https://cdn.jsdelivr.net/gh/Dreamacro/clash@master/docs/logo.png"
install=clash-for-windows-bin.install

depends=('libxss' 'gtk3')

optdepends=(
    'nftables: TUN mode required.'
    'iproute2: TUN mode required.'
)

source=(
    "clash.png::${logo_url}"
    "clash-for-windows.desktop"
    "cfw"
    )

source_x86_64=(
    "${pkgname}-${pkgver}-x86_64-linux.tar.gz::${url}/releases/download/${pkgver}/Clash.for.Windows-${pkgver}-x64-linux.tar.gz"
    )

source_aarch64=(
    "${pkgname}-${pkgver}-aarch64-linux.tar.gz::${url}/releases/download/${pkgver}/Clash.for.Windows-${pkgver}-arm64-linux.tar.gz"
    )

sha256sums=('0d48a2ea1ee05ad4579b6e6996889548fa8a61a5ff6c85a32f7622cddfcb5782'
            'a2997f604a486e264f6fc5344164ae9e1a9a01282006a41784dd181f7d1a2913'
            '4c0a9de624905e3717b0dd4effa24fbf5c79ad28221b3b3b15a4a0aca4d47e03')
sha256sums_x86_64=('adaf7a0e3e3ba7e92d2c7fba92bf8b7208bd3acb4f1f82fe10a275e794622d65')
sha256sums_aarch64=('2d8139d943facdaee6c1a841d8765c379242ae4bcb4d5dc86a0c8547c12ba1d0')

package() {
    local parch=$(echo ${CARCH} | sed "s/x86_64/x64/;s/aarch64/arm64/")
    cd "Clash for Windows-${pkgver}-${parch}-linux"
    echo "packaging resource files as 644"
    find . -type f -not \( -name "cfw" -or -name "clash-linux" -or -name "clash-core-service" -or -name "chrome-sandbox" -or -name "*.sh" \) \
        -exec install -Dm 644 {} "${pkgdir}/opt/${pkgname}"/{} \;
    echo "packaging executable files as 755"
    find . -type f \( -name "cfw" -or -name "clash-linux" -or -name "clash-core-service" -or -name "chrome-sandbox" -or -name "*.sh" \) \
       -exec install -Dm 755 {} "${pkgdir}/opt/${pkgname}"/{} \;
    install -Dm 755 ../cfw ${pkgdir}/usr/bin/cfw 
    install -Dm 644 ../clash.png ${pkgdir}/usr/share/pixmaps/clash.png
    install -Dm 644 ../clash-for-windows.desktop ${pkgdir}/usr/share/applications/clash-for-windows.desktop
}
