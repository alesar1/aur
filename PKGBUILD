# Maintainer: Robin H. <robin at blckct dot io>
pkgname=alfaview-beta
pkgver=8.37.0
pkgrel=1
pkgdesc='High quality audio video conferencing for professional online meetings and live classes'
arch=('x86_64')
url='https://alfaview.com/'
license=('unknown')
# not sure about the deps, copy-pasted from debian package (feedback required)
depends=('ttf-roboto' 'libsecret' 'xdg-utils' 'freetype2' 'fontconfig' 'gst-plugins-bad' 'libxfixes' 'alsa-lib' 'libxkbcommon' 'dbus' 'libpulse')
conflicts=('alfaview')
provides=("alfaview=${pkgver}")
options=('!strip')
install="$pkgname.install"
source=("https://production-alfaview-assets.alfaview.com/beta/linux/alfaview_${pkgver}.deb")
noextract=("alfaview_${pkgver}.deb")
sha256sums=('854e2da83bbde5e8fc0a189626add93e1130c417264d0900fe7ffffe93d56b95')


prepare() {
    mkdir -p deb-data
    bsdtar -O -xf "alfaview_${pkgver}.deb" data.tar.xz | bsdtar -C ./deb-data -xJf -
    # Adding beta update chennel to settings to avoid update notification on startup
    mkdir -p ~/.local/share/alfaview/settings
    echo $'[General]\nDeployChannel=beta' > ~/.local/share/alfaview/settings/core_settings_local.ini
}

package() {
    mv deb-data/* "${pkgdir}/"
    mkdir -p "${pkgdir}/usr/bin"
    ln -sf /opt/alfaview/alfaview "${pkgdir}/usr/bin/alfaview"
}
