# $Id$
# Maintainer:  Radu Potop <radu at wooptoo dot com>

pkgname=zoho-cliq
pkgver=1.5.3
pkgrel=1
pkgdesc='Zoho Cliq communication software'
arch=('x86_64')
url="https://www.zoho.com/cliq/desktop/linux.html"
license=('Proprietary')
depends=('alsa-lib' 'gtk3' 'libsecret' 'libxss' 'libxtst' 'nss' 'xdg-utils')
optdepends=('libappindicator-gtk3: Systray indicator support'
            'org.freedesktop.secrets: Keyring password store support')
source=(
    "https://downloads.zohocdn.com/chat-desktop/linux/cliq_${pkgver}_amd64.deb"
)

package() {
    install -d "${pkgdir}/opt"
    install -d "${pkgdir}/usr/share"
    cd ${srcdir}/
    tar xf data.tar.xz
    cp -r opt/Cliq "${pkgdir}/opt/Cliq"
    cp -r usr/share/* "${pkgdir}/usr/share/"
}

sha256sums=('6f7704bce3bf38ef8a8acd1177afb470a810e42ca8f67b5d17c7920c3c162132')
