# Maintainer: Simon Doppler <dopsi[at]dopsi[dot]ch>
# Contributor: Agustin Borgna <hello[at]aborgna.com.ar>
# Contributor: Marcel Korpel <marcel[dot]korpel[at]gmail>
# Contributor: Renan Birck <renan.ee.ufsm at gmail.com>

pkgname=logisim-evolution
pkgver=2.15.0
pkgrel=1
pkgdesc='An educational tool for designing and simulating digital logic circuits'
arch=('any')
url="https://github.com/reds-heig/logisim-evolution"
license=('GPL3')
depends=('java-runtime=8' 'bash' 'hicolor-icon-theme')
makedepends=('java-environment-openjdk=8' 'apache-ant')

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/reds-heig/logisim-evolution/archive/v${pkgver}.tar.gz"
    'logisim-evolution.desktop'
    'logisim-evolution.sh'
    'logisim-evolution.xml')
sha256sums=('54c55415fce36801ed668c3bed64903444b0f6f3326091d63e84c253523fc8d8'
            '086851b07012f669743080dc4f059cf7727b19200384070852b34e142533385b'
            '35b6b4da515f1c5619d35bbedc1469e5ec5b823bf486efdfbb5b705b65e10656'
            'f90c3709748af806a33c14e81c8bf91dc06c3a4f58fe00cfe14a8f1842e09dec')

build() {
    cd "$srcdir/${pkgname}-${pkgver}"

    ./gradlew --no-daemon shadowJar
}

package() {
    cd "$srcdir"

    install -Dm644 "${pkgname}-${pkgver}/build/libs/${pkgname}-${pkgver}-all.jar" \
        "${pkgdir}/usr/share/java/${pkgname}/${pkgname}.jar"
    install -Dm644 "${pkgname}.xml" \
        "${pkgdir}/usr/share/mime/packages/${pkgname}.xml"
    install -Dm644 "${pkgname}.desktop" \
        "${pkgdir}/usr/share/applications/${pkgname}logisim-evolution.desktop"
    for SIZE in 16 20 24 48 64 128; do
        install -Dm644 "${pkgname}-${pkgver}/src/main/resources/resources/logisim/img/logisim-icon-64.png" \
            "${pkgdir}/usr/share/icons/hicolor/${SIZE}x${SIZE}/apps/${pkgname}logisim-evolution.png"
    done
    install -Dm755 "${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
}

