# Maintainer: Johannes Wienke <languitar@semipol.de>

_npmname=yaml-language-server
pkgname=yaml-language-server-bin
pkgver=0.0.15
pkgrel=1
pkgdesc="Language server implementation for YAML files and optional schema support"
arch=('any')
url="https://www.npmjs.com/package/vscode-html-languageserver-bin"
license=('MIT')
depends=('nodejs' 'npm')
source=("https://registry.npmjs.org/${_npmname}/-/${_npmname}-${pkgver}.tgz"
        "yaml-language-server")
noextract=("${_npmname}-${pkgver}.tgz")
sha1sums=('2c51dd21bb3c4bf71476c59dc1ea4e0f05b0ad58'
          'a0cb0fb3b5a8835196f28d3e20d5a8da4f682ba1')

package() {
    cd "${srcdir}"
    local _npmdir="${pkgdir}/usr/lib/node_modules/"
    mkdir -p "${_npmdir}"
    cd "${_npmdir}"
    npm install --user root -g --prefix "${pkgdir}/usr" "${_npmname}@${_npmver}"
    mkdir -p "${pkgdir}/usr/bin"
    cp "${srcdir}/yaml-language-server" "${pkgdir}/usr/bin"
}
