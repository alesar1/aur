# Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>
# Contributor: Lenovsky <lenovsky at pm dot me>
# Contributor: aimileus <me at aimileus dot nl>

pkgname=protonmail-bridge-bin
pkgver=1.3.3
pkgrel=1
_pkgrel=1
pkgdesc="Integrate ProtonMail paid account with any program that supports IMAP and SMTP"
arch=('x86_64')
url="https://www.protonmail.com/bridge"
license=('GPL3')
depends=('hicolor-icon-theme' 'libsecret' 'qt5-multimedia' 'ttf-dejavu')
optdepends=(
    'gnome-keyring: supported password manager (password manager is required)'
    'pass: supported password manager (password manager is required)'
)
conflicts=('protonmail-bridge')
options=('!emptydirs' '!strip')
source=("https://protonmail.com/download/protonmail-bridge_${pkgver}-${_pkgrel}_amd64.deb"
        "https://raw.githubusercontent.com/ProtonMail/proton-bridge/master/LICENSE")
sha256sums=('5265f10ec78a1051ed816910f55aa8b1ebfca53f747df38dc8af27f214105ca0'
            '1b3782ccad7b8614100cda30d3faf42fc39f2e97932908c543005053b654ca68')

prepare() {
    tar xf data.tar.xz
}

package() {
    mv usr/ "${pkgdir}"

    install -D -m644 "${srcdir}"/LICENSE -t "${pkgdir}"/usr/share/licenses/"${pkgname}"
}

