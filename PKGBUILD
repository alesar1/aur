# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=goverlay-bin
_id="io.github.benjamimgois.${pkgname%-bin}"
_pkgver=0_8_1
pkgver=${_pkgver//_/.}
pkgrel=1
pkgdesc="A GUI to help manage Vulkan/OpenGL overlays"
arch=('x86_64')
url="https://github.com/benjamimgois/goverlay"
license=('GPL3')
depends=('mangohud' 'qt5pas')
optdepends=('vkbasalt: Configure vkBasalt'
            'glxgears: OpenGL preview'
            'vulkan-tools: Vulkan preview'
            'git: Clone reshade repository'
            'replay-sorcery: Instant replay solution'
            'ttf-dejavu: recommended font'
            'ttf-ubuntu-font-family: recommended font'
            'breeze: for Breeze style')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=("$url/releases/download/$pkgver/${pkgname%-bin}_${_pkgver}.tar.xz"
        "https://github.com/benjamimgois/goverlay/raw/$pkgver/data/${pkgname%-bin}.1"
        "https://github.com/benjamimgois/goverlay/raw/$pkgver/data/$_id.desktop"
        "https://github.com/benjamimgois/goverlay/raw/$pkgver/data/$_id.metainfo.xml"
        "https://github.com/benjamimgois/goverlay/raw/$pkgver/data/icons/512x512/${pkgname%-bin}.png")
sha256sums=('e5b6d0a4deca2c4609aa46a87b00b901eac58272b05f82f618d61f50ba5fb2c9'
            'd87db8157e4ef57e14b98e4d1b001c571f5ad4bfd4a12f3bfbe686a1a5541fed'
            '4d3493dc383ee336f4451ab09604632214e0be6562df69ee30a2721bc08df989'
            'a83b788c6ed87e6a33531eb51b967cfb4db610a1f8546fba38321fa2ba101166'
            '82baf73d583dd13f1073b2b8d6aa7edc0c558521a46d77bdf1a88cc401e7cc7f')

prepare() {
  sed -i "s|./${pkgname%-bin}|/usr/lib/${pkgname%-bin}|g" "start_${pkgname%-bin}.sh"
}

package() {
  install -Dm755 "start_${pkgname%-bin}.sh" "$pkgdir/usr/bin/${pkgname%-bin}"
  install -Dm755 "${pkgname%-bin}" -t "$pkgdir/usr/lib/"
  install -Dm644 "${pkgname%-bin}.1" -t "$pkgdir/usr/share/man/man1/"
  install -Dm644 "$_id.desktop" -t "$pkgdir/usr/share/applications/"
  install -Dm644 "$_id.metainfo.xml" -t "$pkgdir/usr/share/metainfo/"
  install -Dm644 "${pkgname%-bin}.png" -t "$pkgdir/usr/share/pixmaps/"
}
