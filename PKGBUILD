# Maintainer: Lenovsky <lenovsky@pm.me>
# Contributor: aimileus <me at aimileus dot nl>

pkgname=protonmail-bridge
pkgver=1.1.3
pkgrel=1
pkgdesc="Integrate ProtonMail paid account with any program that supports IMAP and SMTP"
arch=('x86_64')
url="https://www.protonmail.com/bridge"
license=('MIT')
depends=('hicolor-icon-theme' 'libsecret' 'qt5-multimedia' 'ttf-dejavu')
optdepends=(
    'gnome-keyring: supported password manager (password manager is required)'
    'pass: supported password manager (password manager is required)'
)
options=('!emptydirs' '!strip')
source=("https://protonmail.com/download/protonmail-bridge_${pkgver}-${pkgrel}_amd64.deb")
sha256sums=('b630419b79ff79a126964f5b59ee18e71dde7bc6eb60feb1166b911dba877e96')

prepare() {
    tar xf data.tar.xz

    mkdir -p usr/share/icons/hicolor/scalable/apps
    mv usr/share/icons/protonmail/ProtonMail_Bridge.svg \
        usr/share/icons/hicolor/scalable/apps/"${pkgname}".svg

    mv usr/share/applications/ProtonMail_Bridge.desktop \
        usr/share/applications/"${pkgname}".desktop
    sed -i "s|Icon=.*|Icon=protonmail-bridge|" \
        usr/share/applications/"${pkgname}".desktop
}

package() {
    mv usr/ "${pkgdir}"

    install -D -m644 "${pkgdir}"/usr/lib/protonmail/bridge/{eula.txt,LICENSE} \
        -t "${pkgdir}"/usr/share/licenses/"${pkgname}"
}
