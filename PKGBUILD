# Maintainer: filips <projects at filips dot si>

# This file is automatically updated/generated on every package release
# Any changes made directly to the AUR repository will be overwritten
# Please contribute changes to the main GitHub repository instead
# See: https://github.com/filips123/PWAsForFirefox/blob/main/native/packages/aur/firefox-pwa-bin/PKGBUILD

_pkgname="FirefoxPWA"
pkgname="firefox-pwa-bin"
pkgdesc="A tool to install, manage and use Progressive Web Apps (PWAs) in Mozilla Firefox (native component)"
pkgver="1.3.0"
pkgrel=1
url="https://github.com/filips123/PWAsForFirefox"
arch=("x86_64" "i686")
license=("MPL2")

depends=("glibc>=2.18")
optdepends=("firefox: Support for browser extension")
provides=("firefox-pwa")
conflicts=("firefox-pwa")
install=package.install

source_x86_64=("https://github.com/filips123/PWAsForFirefox/releases/download/v${pkgver}/firefoxpwa_${pkgver}_amd64.deb")
source_i686=("https://github.com/filips123/PWAsForFirefox/releases/download/v${pkgver}/firefoxpwa_${pkgver}_i386.deb")
sha256sums_x86_64=('fcd9f39fc88fd112df08fee3db3fa160dc541425a91bca865d69785746f83fae')
sha256sums_i686=('fdfbe37ae266bca4270ba684d7773fce3b1313c0548f97f0053e1639ef72fa8a')
b2sums_x86_64=('d3245c4560aaa5a9af29808537bedba75e7a758d993548c0d07e4574793f8c44b43315067317f499cf15f7e0c7b759223b6a029b9f39e3cf6aed047691bda5ae')
b2sums_i686=('16260cb7a59f4e12815fa52f2c8507a06f6c6f941a14e27c8a0907d9e436accaf299e821319dfa0263d9bfdb2668dcbb999627895fd213d9f5ca8d0350acae03')

prepare() {
    # Extract data from DEB archive
    mkdir -p $srcdir/data/
    tar xf ${srcdir}/data.tar.xz -C $srcdir/data/

    # We don't use libexec on Arch
    sed -i "s@/usr/libexec/firefoxpwa-connector@/usr/lib/firefoxpwa/firefoxpwa-connector@g" $srcdir/data/usr/lib/mozilla/native-messaging-hosts/firefoxpwa.json
    mkdir -p $srcdir/data/usr/lib/firefoxpwa/
    mv $srcdir/data/usr/libexec/firefoxpwa-connector $srcdir/data/usr/lib/firefoxpwa/

    # Remove unnecessary directories
    rm -rf $srcdir/data/usr/libexec/
    rm -rf $srcdir/data/usr/lib64/
}

check() {
    cd $srcdir/data/
    [ "$(./usr/bin/firefoxpwa --version)" == "firefoxpwa $pkgver" ]
}

package() {
    cp -r $srcdir/data/* $pkgdir
}
