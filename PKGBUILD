# Maintainer: Robin H. <robin@blckct.io>
pkgname=alfaview
pkgver=8.56.0
pkgrel=1
pkgdesc='High quality audio video conferencing for professional online meetings and live classes'
arch=('x86_64')
url='https://alfaview.com/'
license=('unknown')
# not sure about the deps, copy-pasted from debian package (feedback required)
depends=('ttf-roboto' 'libsecret' 'xdg-utils' 'freetype2' 'fontconfig' 'gst-plugins-bad' 'libxfixes' 'alsa-lib' 'libxkbcommon' 'dbus' 'libpulse')
options=('!strip')
conflicts=('alfaview-beta')
provides=("alfaview=${pkgver}")
install="$pkgname.install"
source=("https://production-alfaview-assets.alfaview.com/stable/linux/${pkgname}_${pkgver}.deb")
noextract=("${pkgname}_${pkgver}.deb")
sha256sums=('f15f1c2404fe4a86758cfed68ab857c59d741e30dc84b13cb3b82cb4a49d2dfa')


prepare() {
    mkdir -p deb-data
    bsdtar -O -xf "${pkgname}_${pkgver}.deb" data.tar.xz | bsdtar -C ./deb-data -xJf -
}

package() {
    mv deb-data/* "${pkgdir}/"
    mkdir -p "${pkgdir}/usr/bin"
    ln -sf /opt/alfaview/alfaview "${pkgdir}/usr/bin/alfaview"
}
