# Maintainer: Jason Stryker <public at jasonstryker dot com>

pkgname=runelite
pkgver=1.5.38
pkgrel=1
epoch=1
pkgdesc="Open source Old School RuneScape client."
arch=(any)
license=('BSD')
url="https://github.com/runelite/runelite"
depends=('java-environment' 'ttf-font')
optdepends=('gvfs: enable links')
makedepends=('maven')
provides=("runelite")
conflicts=('runelite-git')
source=("${url}/archive/runelite-parent-${pkgver}.tar.gz"
        runelite.desktop
        runelite.png)
sha512sums=('e30ff549fca4d43c8a4da1d190445947b0bd6ba0459eb27c679e2d3ac56683d09608aa246970a1d7d7fbed5fc5804682383579173a7d1040a6b0df3f0d8fd9b1'
            'e00339514623c2f683118f1cdba93cebbc0761fd72f31e2d139ed467b8c41a6738fd0f27ac2beba4d2caa2a365ef4cc49a43af54b13ca5a908e5fd11d03f4bc1'
            '73e0c42f4eaf2e0adc249e471bd241e8328da7f867177535f1da206acce14801b60e69fffdbb2a10bc105f1de37b6eaaad23d5e67147b53a108b6e5bf55c586b')

build() {
    cd ${srcdir}/${pkgname}-runelite-parent-${pkgver}/runelite-client/

    mvn clean package -DskipTests=true
}

package() {
    client_jar=$(find ${srcdir}/${pkgname}-runelite-parent-${pkgver}/runelite-client/target -type f -name client-*-shaded.jar)

    install -D -m644 \
        "${client_jar}" \
        "${pkgdir}/usr/share/runelite/RuneLite.jar"

    install -D -m644 \
        "${srcdir}/runelite.desktop" \
        "${pkgdir}/usr/share/applications/runelite.desktop"

    install -D -m644 \
        "${srcdir}/runelite.png" \
        "${pkgdir}/usr/share/pixmaps/runelite.png"

    install -D -m644 \
        "${srcdir}/${pkgname}-runelite-parent-${pkgver}/LICENSE" \
        "${pkgdir}/usr/share/licenses/${pkgname}"

    install -D -m755 \
        "/dev/null" \
        "${pkgdir}/usr/bin/runelite"

    echo '#!/bin/sh' > "${pkgdir}/usr/bin/runelite"
    echo 'exec java -Dhttps.protocols=TLSv1.2 -jar /usr/share/runelite/RuneLite.jar "$@"' >> "${pkgdir}/usr/bin/runelite"
}
