# Maintainer: Robin H. <robin@blckct.io>
pkgname=alfaview
pkgver=8.36.0
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
sha256sums=('bd3c5d6d355b861893a5663380d8b17c908b8a8aca6722a849135a5a13d11394')


prepare() {
    mkdir -p deb-data
    bsdtar -O -xf "${pkgname}_${pkgver}.deb" data.tar.xz | bsdtar -C ./deb-data -xJf -
}

package() {
    mv deb-data/* "${pkgdir}/"
    mkdir -p "${pkgdir}/usr/bin"
    ln -sf /opt/alfaview/alfaview "${pkgdir}/usr/bin/alfaview"
}
