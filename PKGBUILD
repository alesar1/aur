# Maintainer: HMH <henry@freedesk.net>

pkgname=weylus
pkgver=0.11.1
pkgrel=1
pkgdesc="Use your tablet as graphic tablet/touch screen on your computer."
arch=('x86_64')
url="https://github.com/H-M-H/Weylus"
license=('AGPL3')
conflicts=('weylus-bin')
source=("$pkgname-$pkgver.zip::https://github.com/H-M-H/Weylus/archive/v$pkgver.zip")
sha256sums=('a12f83f82f671d771a40e0dec1cbdf6fc93a4456e9d7b3125c67fdf78f2730a1')

makedepends=(rust typescript gcc libx11 pkg-config git make cmake)

build() {
    cd "Weylus-$pkgver"
    cargo build --release --features="ffmpeg-system"
}

package() {
    cd "Weylus-$pkgver"
    install -vDm755 "target/release/weylus" "$pkgdir/usr/bin/weylus"
    install -vDm755 "weylus.desktop" "${pkgdir}/usr/share/applications/weylus.desktop"
}

depends=(libxtst libxcursor libxinerama libxft libxrandr libxcomposite libdrm libva ffmpeg dbus gst-plugins-base-libs)
