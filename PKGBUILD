# Maintainer: William Gathoye <william + aur at gathoye dot be>
# Maintainer: Hyacinthe Cartiaux <hyacinthe dot cartiaux at free dot fr>
# Contributor: <gilrain +  libre dot arch at castelmo dot re>

pkgname=libreoffice-extension-grammalecte-fr
pkgver=1.3.2
pkgrel=1
pkgdesc="French grammar checker extension for LibreOffice."
arch=('any')

url="https://grammalecte.net/"
license=('GPL3')

depends=('libreoffice')
makedepends=('unzip')
groups=('libreoffice-extensions')

conflicts=('libreoffice-extension-languagetool')
provides=('libreoffice-extension-dictionaries-fr')
source=("https://grammalecte.net/grammalecte/oxt/Grammalecte-fr-v${pkgver}.oxt")
sha512sums=('52c66e7ba51e946b4a2c5c0d77ccb30af06589d94761804e10933b6031fe377a3f9d0ed065f0a223c1db36f11bf2b82d27f14382771278a3e27aef2c375c1037')

package() {
    install -dm755 ${pkgdir}/usr/lib/libreoffice/share/extensions
    unzip -q ${srcdir}/Grammalecte-fr-v${pkgver}.oxt -d ${pkgdir}/usr/lib/libreoffice/share/extensions/grammalecte

    # fix world writable bit
    find "${pkgdir}/usr/lib/libreoffice/share/extensions/grammalecte/" \( -type d -exec chmod 755 {} \; \) -o \( -type f -exec chmod 644 {} \; \)
}
