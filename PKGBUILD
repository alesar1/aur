# Maintainer: gaelic < gaelic at luchmhor dot net>
# Maintainer: Peter Reschenhofer < peterreschenhofer at gmail dot com >
pkgname=gams
pkgver=28.2.0
pkgrel=1
pkgdesc="The General Algebraic Modeling System (GAMS) is a high-level modeling system for mathematical optimization."
arch=('x86_64')
license=('custom')
url="http://www.gams.com/"
depends=()
conflicts=()
options=('!strip')

source=("https://d37drm4t2jghv5.cloudfront.net/distributions/${pkgver}/linux/linux_x64_64_sfx.exe"
        "gams-studio.desktop")

sha256sums=("766e23e5f45c991801cf6e1a267962243655cce43210994f68cc632e79113043"
            "5349929ad07ea8de5e6f1e5d03f264b2fd5afc161b4204981d30fc2ff8faed7e")

package() {
    install -d ${pkgdir}/{opt/gams,usr/bin}
    cp -r ${srcdir}/gams*_linux_x64_64_sfx/* ${pkgdir}/opt/gams/
    install -Dm644 gams-studio.desktop ${pkgdir}/usr/share/applications/gams-studio.desktop
    ln -s "/opt/gams/gams" "$pkgdir/usr/bin/gams"
    ln -s "/opt/gams/studio/studio.AppImage" "$pkgdir/usr/bin/gams-studio"
}
