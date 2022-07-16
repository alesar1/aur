# Maintainer: Mikhail Velichko  <efklid@gmail.com>



_pkgname=browser-stable
pkgname=yandex-browser
pkgver=22.5.3.673_1
_pkgver=22.5.3.673-1
pkgrel=2
#epoch=1

pkgdesc="The web browser from Yandex.
 Yandex Browser is a browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier."
arch=("x86_64")
url='https://browser.yandex.com/'
license=("custom:yandex-browser")
categories=("network")
provides=(yandex-browser)
conflicts=('yandex-browser' 'yandex-browser-stable')
options=(!strip)

depends=( "binutils" "curl" "ttf-liberation" "jq" "alsa-lib" "libcurl-compat" "libcurl-gnutls" "gtk2" "gtk3" "gtk4" "snappy" "opus" "flac" "harfbuzz-icu" "nss"
"libxss" "libxkbfile" "wget" "xdg-utils" "polkit" "dbus-glib" "python" )
optdepends=(
    "speech-dispatcher"
    "vulkan-driver"
    "vulkan-icd-loader"
    "ttf-font"
    "cryptopro-csp-k1"
    "yandex-browser-ffmpeg-update-hook"
)

source=("${pkgname}-${pkgver}.deb::https://repo.yandex.ru/yandex-browser/deb/pool/main/y/yandex-${_pkgname}/yandex-${_pkgname}_${_pkgver}_amd64.deb")
sha256sums=("3792b5bca194877cabe5616251ad90deb39a22d09a1e514949f3b51ddfb793fa")
install=yandex-browser.install

prepare() {
    tar -xf data.tar.xz
}

package() {
    cp -dr --no-preserve=ownership opt usr "${pkgdir}"/
# The stable version uses the "browser" folder in /opt/yandex. ${_pkgname} cannot be used in this section for the stable branch 
    install -D -m0644 "${pkgdir}"/opt/yandex/browser/product_logo_128.png "${pkgdir}"/usr/share/pixmaps/${pkgname}.png
    chmod 4755 "${pkgdir}"/opt/yandex/browser/yandex_browser-sandbox
}
