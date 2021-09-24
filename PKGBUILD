# Maintainer: Max Weber <abex at runelite dot net>
# Contributor: Jason Stryker <public at jasonstryker dot com>

pkgname=runelite
pkgver=2.1.3
pkgrel=1
epoch=1
pkgdesc="Open source Old School RuneScape client."
url='https://runelite.net/'
arch=(any)
license=('BSD')
depends=(
    'java-runtime>=11'
    'ttf-font')
optdepends=(
    'gvfs: enable links'
    'libnotify: native tray notifications')
makedepends=()
source=("https://github.com/runelite/launcher/releases/download/${pkgver}/RuneLite.jar"
    "https://raw.githubusercontent.com/runelite/launcher/${pkgver}/LICENSE"
    "https://raw.githubusercontent.com/runelite/launcher/${pkgver}/appimage/runelite.png"
    runelite.desktop)
noextract=('RuneLite.jar')
sha256sums=('92269b5e3f6bbb64c3a38131faf9c560947354dbd3f789b02c2f7713dae2ea04'
    '1487fb5a1804002fd63fe8c01c75258c148fbfa0e2c5d9e97056f9fcd607c0ad'
    '81cb6ce7d8c4b9154e9840ab9d2938d0e6234f227049f004cacf90724f95cc11'
    'SKIP')

package() {
    install -D -m644 \
        "${srcdir}/RuneLite.jar" \
        "${pkgdir}/usr/share/runelite/RuneLite.jar"

    install -D -m644 \
        "${srcdir}/runelite.desktop" \
        "${pkgdir}/usr/share/applications/runelite.desktop"

    install -D -m644 \
        "${srcdir}/runelite.png" \
        "${pkgdir}/usr/share/pixmaps/runelite.png"

    install -D -m644 \
        "${srcdir}/LICENSE" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    install -D -m755 \
        "/dev/null" \
        "${pkgdir}/usr/bin/runelite"

    echo '#!/bin/sh' > "${pkgdir}/usr/bin/runelite"
    echo 'exec java -Dhttps.protocols=TLSv1.2 -jar /usr/share/runelite/RuneLite.jar "$@"' >> "${pkgdir}/usr/bin/runelite"
}
