# Maintainer: Lynx <wostarxi@outlook.com>
pkgname=browser360-bin
_pkgname=com.360.browser-stable
pkgver=10.4.1032.22
pkgrel=1
epoch=
pkgdesc="360 Browser stable version"
arch=("x86_64")
url="https://browser.360.cn"
license=('custom')
depends=("nss" "libxss" "alsa-lib" "libxtst" "libcups")
optdepends=()
provides=()
conflicts=()
install=
source=("https://down.360safe.com/gc/signed_${_pkgname}_${pkgver}-${pkgrel}_amd64.deb")
sha256sums=("SKIP")
package() {
	cd "$srcdir"
        tar xf "$srcdir/data.tar.xz"
        cp -r "$srcdir/opt" "$pkgdir/"
        mkdir -p "$pkgdir/usr/share"
        cp -r "$srcdir/opt/apps/${_pkgname}/entries/icons" "$pkgdir/usr/share/"
        install -Dm644 "$srcdir/opt/apps/${_pkgname}/entries/applications/com.360.browser-stable.desktop" "$pkgdir/usr/share/applications/com.360.browser-stable.desktop"
        # sign
         mkdir -p "$pkgdir/apps-data/private/${_pkgname}"
        install -Dm644 "$srcdir/sign" "$pkgdir/apps-data/private/${_pkgname}/sign"

}
