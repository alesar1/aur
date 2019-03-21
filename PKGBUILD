# Maintainer: Jason Stryker <public at jasonstryker dot com>
pkgname=runelite
pkgver=1.5.17.1
pkgrel=1
epoch=1
pkgdesc="Open source Old School RuneScape client."
arch=(any)
license=('BSD')
url="https://github.com/runelite/runelite"
depends=('java-runtime>=8' 'ttf-font')
optdepends=('gvfs: enable links')
makedepends=('maven')
provides=("runelite")
conflicts=('runelite-git')
source=("${url}/archive/runelite-parent-${pkgver}.tar.gz"
        runelite        
        runelite.desktop
        runelite.png)
sha512sums=('2681030faf07bfaa65e718b35a7d582463f5465c47171904d6f86cd9f4010b390275c7aa5c6a857a2ef2ce67b89ac954891289fbe5951a352142e771fde655bf'
            'f5fc911244eaceffb2a1e1016ce49ad2f76ee730bac2fb773753afc63e6cac5bcf01f942da081ffb4ee8585eccacec436069b009275a2a8fc13f07e1cb63c26a'
            'e00339514623c2f683118f1cdba93cebbc0761fd72f31e2d139ed467b8c41a6738fd0f27ac2beba4d2caa2a365ef4cc49a43af54b13ca5a908e5fd11d03f4bc1'
            'fe73d666eec61a8ac0059a56a417d3a22ccdc0d09eb567a613469af513318f4284ee70079a4d18d74cd3423c4d75ce5bb0a3c6df9f9f4532f8d5833ffe4a34ce')

build() {
    cd ${srcdir}/${pkgname}-runelite-parent-${pkgver}/runelite-client/

    mvn clean package \
        -Dmaven.repo.local="${srcdir}/repo" \
        -DskipTests=true
        
}

package() {
        
    install -D -m644 \
        "${srcdir}/${pkgname}-runelite-parent-${pkgver}/runelite-client/target/client-${pkgver}-shaded.jar" \
        "${pkgdir}/usr/share/runelite/RuneLite.jar"

    install -D -m755 \
        "${srcdir}/runelite" \
        "${pkgdir}/usr/bin/runelite"

    install -D -m644 \
        "${srcdir}/runelite.desktop" \
        "${pkgdir}/usr/share/applications/runelite.desktop"

    install -D -m644 \
        "${srcdir}/runelite.png" \
        "${pkgdir}/usr/share/pixmaps/runelite.png"

    install -D -m644 \
        "${srcdir}/${pkgname}-runelite-parent-${pkgver}/LICENSE" \
        "${pkgdir}/usr/share/licenses/${pkgname}"
}
