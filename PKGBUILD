# Maintainer: Jake <aur@ja-ke.tech>
# Contributor: Ian MacKay <immackay0@gmail.com>

_pkgname='github-desktop'
pkgname="${_pkgname}-bin"
pkgver=2.9.0
_pkgver="${pkgver}-linux1"
gitname="release-${_pkgver}"
pkgrel=1
pkgdesc="GUI for managing Git and GitHub."
arch=('x86_64')
url="https://desktop.github.com"
license=('MIT')
depends=('gnome-keyring' 'libsecret' 'git' 'curl' 'libxss' 'nss' 'nspr' 'unzip')
optdepends=('hub: CLI interface for GitHub.')
provides=(${_pkgname})
conflicts=(${_pkgname})
source=(
    https://github.com/shiftkey/desktop/releases/download/${gitname}/GitHubDesktop-linux-${_pkgver}.deb
    ${_pkgname}.desktop
)
sha256sums=('dbfce1a5eae8fcbfd0929edd5a4b075adad209bc96e1c7f471278b546686ee84'
            '932e4c456e8c6db03d27172cf0daa37806bf025bb560d8b3d758c0997d1a618c')
package() {
    tar xf data.tar.xz -C "${pkgdir}"
    install -d "${pkgdir}/opt/${_pkgname}"
    mv "${pkgdir}/usr/lib/github-desktop" "${pkgdir}/opt/"

    rm "${pkgdir}/usr/share/applications/github-desktop.desktop"
    install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

    ln -sf "/opt/$_pkgname/$_pkgname" "${pkgdir}/usr/bin/$_pkgname"
}
