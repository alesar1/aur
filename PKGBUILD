# Maintainer: wenLiangcan <boxeed at gmail dot com>

_npmver=0.1.0
pkgname=electronic-wechat-git
_pkgname=electronic-wechat
pkgver=1.0.25.gb43c562
pkgrel=1
pkgdesc="An Electron application for WeChat"
arch=('any')
url="https://github.com/geeeeeeeeek/wechat-electron/"
license=('MIT')
depends=('electron' 'xdg-utils')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=('git+https://github.com/geeeeeeeeek/electronic-wechat.git')
sha1sums=('SKIP')
_desktop="${_pkgname}.desktop"

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git describe --tags | sed 's/^v//;s/-/./g'
}

prepare() {
    cat > ${_desktop} << EOF
[Desktop Entry]
Type=Application
Name=Electronic WeChat
Comment=A better WeChat client on Mac OS X and Linux.
Exec=/usr/bin/${_pkgname}
Icon=/usr/share/${_pkgname}/assets/icon.png
Categories=Network;InstantMessaging;Application;
Terminal=false
StartupNotify=true
Version=${pkgver}
EOF

    cat > "${_pkgname}.sh" << EOF
#!/usr/bin/env sh
cd /usr/share/${_pkgname}/
electron ./src/main.js \$*
EOF
}

package() {
    cd "${_pkgname}"
    find ./{src,assets} -type f -exec install -Dm644 {} \
        "${pkgdir}/usr/share/${_pkgname}/{}" \;
    install -Dm644 LICENSE.md "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
    install -Dm644 "${srcdir}/${_desktop}" "${pkgdir}/usr/share/applications/${_desktop}"
    install -Dm755 "${srcdir}/${_pkgname}.sh" "${pkgdir}/usr/bin/${_pkgname}"
}

