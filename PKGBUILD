# Maintainer: Daniel Maslowski <info@orangecms.org>
# Contributor: FredBezeies
# Contributor: pavbaranov
# Contributor: marcin82
# Based on original PKGBUILD created by:
# Contributor: Chad "crossroads1112" Sharp <crossroads1112@riseup.net>
pkgname=lumina-desktop
_pkgver=1.4.0-p1
pkgver=1.4.0p1
pkgrel=1
pkgfullname="${pkgname%-*}-${_pkgver}"
pkgdesc="A Lightweight QT5 Desktop for FreeBSD"
arch=('x86_64' 'i686')
url="https://github.com/trueos/lumina"
license=('BSD')
depends=('poppler-qt5' 'qt5-x11extras' 'qt5-multimedia')
optdepends=('xorg-xbacklight: required for changing screen brightness'
            'alsa-utils: required for adjusting audio volume'
            'acpi: required for monitoring battery life'
            'numlockx: required for changign state of numlock at login'
            'pavucontrol: required for detatched audio mixer'
            'fluxmod-styles: A good set of Fluxbox themes to improve the appearence of window decorations'
            'network-manager-applet: Manage network connections from panel'
            'xterm: Terminal emulator'
            'fluxbox: window manager for Lumina DE')
makedepends=('qt5-base' 'qt5-tools')
conflicts=("lumina-de-git" "lumina-desktop-git" "insight-fm")
provides=("${pkgname%-*}" "insight-fm")
install="${pkgname%-*}.install"
source=("https://github.com/trueos/lumina/archive/v${_pkgver}.tar.gz")
sha512sums=('340079832f4f6c9c9c70f11d7743b7c7db6772897f6411a966bf2bd77124bab1fbac8f5751164fb8a08a12c4443f515aaee76b117b4f959263eeaa98dbcbe41e')

build() {
    cd "${srcdir}/${pkgfullname}"
    find "${srcdir}/${pkgfullname}" -name *.desktop -exec sed -i 's/usr\/local/usr/' {} \;
    qmake QMAKE_CFLAGS_ISYSTEM= PREFIX="/usr" LIBPREFIX=/usr/lib QT5LIBDIR=/usr/lib/qt CONFIG+=WITH_I18N L_MANDIR=/usr/share/man L_ETCDIR="/etc"
    make
}

package() {
    cd "${srcdir}/${pkgfullname}"
    make INSTALL_ROOT="${pkgdir}" install
    install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
