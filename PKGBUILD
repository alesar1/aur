# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=goverlay-bin
_id="io.github.benjamimgois.${pkgname%-bin}"
_pkgver=0_6_3
pkgver=${_pkgver//_/.}
pkgrel=1
pkgdesc="A GUI to help manage Vulkan/OpenGL overlays"
arch=('x86_64')
url="https://github.com/benjamimgois/goverlay"
license=('GPL3')
depends=('mangohud' 'qt5pas')
optdepends=('vkbasalt: Configure vkBasalt'
            'mesa-demos: OpenGL preview'
            'vulkan-tools: Vulkan preview'
            'git: Clone reshade repository'
            'replay-sorcery: Instant replay solution')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=("$url/releases/download/$pkgver/${pkgname%-bin}_${_pkgver}.tar.xz"
        "https://github.com/benjamimgois/goverlay/raw/$pkgver/data/${pkgname%-bin}.1"
        "https://raw.githubusercontent.com/benjamimgois/goverlay/$pkgver/data/$_id.desktop"
        "https://raw.githubusercontent.com/benjamimgois/goverlay/$pkgver/data/$_id.metainfo.xml"
        "https://github.com/benjamimgois/goverlay/raw/$pkgver/data/icons/512x512/${pkgname%-bin}.png")
sha256sums=('b8cf12c5f3388065e056fc51f6b45b6edfbbbed7415701cc3433937c0cf9e869'
            'd87db8157e4ef57e14b98e4d1b001c571f5ad4bfd4a12f3bfbe686a1a5541fed'
            'a02deeb01b390a9a91e8a5646e96424e079201ddcf9116610e4fb5eb8fa0aa62'
            '7828ef36e89e5285e260c36f722838c1f89bce2cd5f21c0c31e2f7dae95cff70'
            '82baf73d583dd13f1073b2b8d6aa7edc0c558521a46d77bdf1a88cc401e7cc7f')

package() {
  install -Dm755 "${pkgname%-bin}" -t "$pkgdir/usr/bin"
  install -Dm644 "${pkgname%-bin}.1" -t "$pkgdir/usr/share/man/man1"
  install -Dm644 "$_id.desktop" -t "$pkgdir/usr/share/applications"
  install -Dm644 "$_id.metainfo.xml" -t "$pkgdir/usr/share/metainfo"
  install -Dm644 "${pkgname%-bin}.png" -t "$pkgdir/usr/share/pixmaps"
}
