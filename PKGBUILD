# Maintainer: Nemo <archlinux at captnemo dot in>
pkgname=screen-desktop-bin
pkgver=4.0.10
pkgrel=1
pkgdesc="Low latency videoconferencing & screen sharing with multiplayer drawing & control. Screen is a multiplayer screen sharing app that lets you work together like you’re in the same room."
arch=('x86_64')
url="https://screen.so"
depends=('alsa-lib' 'atk' 'at-spi2-atk' 'at-spi2-core' 'cairo' 'dbus' 'desktop-file-utils' 'expat' 'gcc-libs' 'gdk-pixbuf2' 'glib2' 'glibc' 'gtk3' 'hicolor-icon-theme'  'libcups' 'libnotify' 'libutil-linux' 'libx11' 'libxcb' 'libxcomposite' 'libxcursor' 'libxdamage' 'libxext' 'libxfixes' 'libxi' 'libxrandr' 'libxrender' 'libxss' 'libxtst' 'nspr' 'nss' 'pango'  'xpra')
optdepends=('apparmor'
            'libgnome-keyring'
            'pulseaudio'
            'kde-cli-tools'
            'trash-cli'
            'xdg-utils'
            'libappindicator-gtk3')
license=('custom')
options=('!strip' '!emptydirs')
source=("https://download.screen.so/desktop-app/linux/${pkgver}/screen-desktop_${pkgver}_amd64.deb")
sha512sums=('d182f8e4b2035c7932433ea4b28e7ffcbb8d4155f0cc4fd0e99e9698689b3c574c015b8a4a01d5f31217605a367af67e44b93f6a35903f93ec8b81968682a7d2')

package(){
    mkdir -p "${pkgdir}/opt/${pkgname}"
    tar xf data.tar.xz
    cp -r usr/lib/screen-desktop/* "${pkgdir}/opt/${pkgname}"

    install -dm755 "$pkgdir"/usr/bin
    ln -s /opt/"$pkgname"/Screen "$pkgdir/usr/bin/screen-desktop"

    install -D -m644 "usr/share/applications/screen-desktop.desktop" "${pkgdir}/usr/share/applications/screen-desktop.desktop"
    install -D -m644 "usr/share/pixmaps/screen-desktop.png" "${pkgdir}/usr/share/pixmaps/screen-desktop.png"
    install -D -m644 "usr/share/doc/screen-desktop/copyright" "${pkgdir}/usr/share/doc/${pkgname}/COPYRIGHT"
    install -D -m644 "usr/lib/screen-desktop/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/chromium.LICENSE"
}
