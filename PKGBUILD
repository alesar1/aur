# Maintainer: Paul Davis <paul@dangersalad.com>
pkgname=mekhq
pkgver=0.44.0
_pkgver=
pkgrel=1
epoch=
pkgdesc="MekHQ is a java helper program for the MegaMek game that allows users to load a list of entities from an XML file, perform repairs and customizations, and then save the new entities to another XML file that can be loaded into MegaMek."

arch=('x86_64')
url="https://github.com/MegaMek/mekhq"
license=('GPL')
groups=()
depends=('jdk10-openjdk')
provides=('megamek')
conflicts=('megamek')

source=("https://github.com/MegaMek/mekhq/releases/download/v${pkgver}/${pkgname}-${pkgver}${_pkgver}.tar.gz"
        "mekhq.desktop"
        "megamek.desktop"
        "mm-startup.patch"
        "mm-server.patch"
        "mekhq.sh"
        "megamek.sh")

sha256sums=('2e51546d94e58532fcfaf1481f15da862b8d70c741687cb4a149f171cca6f08a'
            'a6c0cc72c6f3ad773bdcec24c8036ae7d09dcaea4908f5b6d4e5ac6091cff772'
            'caf5bf3e7294029c7b6dec974eed0253d6caf3804a6a9fcc953edc3c9be98b16'
            '113d6fe539108d172db238abd6a316be55d6d1af92cf0bcb4555b7cb70427908'
            'b964aa25672d5311b98f51ae7e895f32501092bcd5382979a4af45ba3436b5ba'
            '056b528fb478966d32eaa36354335f667a73776975ebf57794f4f992e72f41c3'
            '7c1988808f166dca21732a6d5679acdeb55520e3bb4babcc0b0b7c1e8b671f52')

package() {

    install -D "${pkgname}-${pkgver}${_pkgver}/MegaMek.jar" \
            "${pkgdir}/usr/lib/${pkgname}/MegaMek.jar"

    install -D "${pkgname}-${pkgver}${_pkgver}/MegaMekLab.jar" \
            "${pkgdir}/usr/lib/${pkgname}/MegaMekLab.jar"

    install -D "${pkgname}-${pkgver}${_pkgver}/MekHQ.jar" \
            "${pkgdir}/usr/lib/${pkgname}/MekHQ.jar"

    patch "${pkgname}-${pkgver}${_pkgver}/mm-startup.sh" mm-startup.patch
    patch "${pkgname}-${pkgver}${_pkgver}/mm-server.sh" mm-server.patch
    
    install -Dm755 "${pkgname}-${pkgver}${_pkgver}/mm-startup.sh" \
            "${pkgdir}/usr/lib/${pkgname}/mm-startup.sh"
    install -Dm755 "${pkgname}-${pkgver}${_pkgver}/mm-server.sh" \
            "${pkgdir}/usr/lib/${pkgname}/mm-server.sh"
    install -Dm755 "${pkgname}-${pkgver}${_pkgver}/hq.sh" \
            "${pkgdir}/usr/lib/${pkgname}/hq.sh"
    install -Dm755 "${pkgname}-${pkgver}${_pkgver}/lab.sh" \
            "${pkgdir}/usr/lib/${pkgname}/lab.sh"

    cp -r "${pkgname}-${pkgver}${_pkgver}/campaigns" "${pkgdir}/usr/lib/${pkgname}"

    cp -r "${pkgname}-${pkgver}${_pkgver}/data" "${pkgdir}/usr/lib/${pkgname}"

    cp -r "${pkgname}-${pkgver}${_pkgver}/docs" "${pkgdir}/usr/lib/${pkgname}"

    cp -r "${pkgname}-${pkgver}${_pkgver}/lib" "${pkgdir}/usr/lib/${pkgname}"

    cp -r "${pkgname}-${pkgver}${_pkgver}/logs" "${pkgdir}/usr/lib/${pkgname}"

    cp -r "${pkgname}-${pkgver}${_pkgver}/mmconf" "${pkgdir}/usr/lib/${pkgname}"

    
    install -D mekhq.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -D megamek.desktop "${pkgdir}/usr/share/applications/megamek.desktop"
    
    install -Dm755 mekhq.sh "${pkgdir}/usr/bin/${pkgname}"
    install -Dm755 megamek.sh "${pkgdir}/usr/bin/megamek"

}
