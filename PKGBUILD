pkgname=webcord
pkgver=3.9.1
pkgrel=1
pkgdesc="A Discord and Fosscord client made with the Electron API."
arch=('any')
_repo='WebCord'
url="https://github.com/SpacingBat3/${_repo}"
license=('MIT')
depends=('electron20')
makedepends=('npm' 'typescript' 'git')
options=('!strip' '!emptydirs')

_srcname="${_repo}-${pkgver}"

source=(
    "${_srcname}.tar.gz::${url}/archive/v${pkgver}.tar.gz"
    "run.sh"
    "buildInfo.json"
    "app.desktop"
)

sha256sums=(
    'e09059453f498220e63f9f6dbfa583f0384eff62b46a6c649ab34640f58a1a8d'
    '09fdd4b51af5c87480dceb52fe67e5666720f56e1f98c1aa567b5ca6699e261f'
    'c803c7227982fad22390a8d6d11f3707171d5e9b1a394731a6a07773eab75b1f'
    '43ccf5216bb029deb2af2792218b35793f930200117f5bf8201a2406f66af583'
)

prepare() {
    npm i --ignore-scripts --prefix=. \
        "@tsconfig/node16-strictest@^1.0.0" \
        "@types/dompurify@^2.3.3" \
        "@types/marked@^4.0.2" \
        "@types/node@^18.6.4" \
        "@types/pkgjs__parseargs@^0.10.0" \
        "@types/semver@^7.3.9" \
        "@types/source-map-support@^0.5.4" \
        "@types/spdx-expression-parse@^3.0.1" \
        "@types/ws@^8.5.1" \
        "electron@>=13.0.0 <22.0.0"

    rm -r "node_modules/electron/node_modules/@types/node"

    cd "${_srcname}"
    npm ci --omit=dev --ignore-scripts --prefix=.
    rm -r "sources/code/build"
}

build() {
    cd "${_srcname}"
    tsc --sourceMap false --outDir "${srcdir}/app"
}

package() {
    local lib="${pkgdir}/usr/lib/${pkgname}"
    local bin="${pkgdir}/usr/bin"
    local sources="${lib}/sources"
    local icons="${pkgdir}/usr/share/icons/hicolor/512x512/apps"

    install -dm755 "${bin}" "${sources}" "${icons}"
    install -Dm755 -t "${lib}" "${source[1]}"
    install -Dm644 -t "${lib}" "${source[2]}"
    install -Dm644 "${source[3]}" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    cp -rdt "${lib}" "app"
    ln -s "${lib#"${pkgdir}"}/${source[1]}" "${bin}/webcord"

    cd "${_srcname}"
    install -Dm644 -t "${lib}" "package.json"
    cp -rdt "${lib}" "node_modules"
    cp -rdt "${sources}" "sources/assets" "sources/translations"
    rm "${sources}/assets/icons/app.ic"*
    ln -s "${sources#"${pkgdir}"}/assets/icons/app.png" "${icons}/${pkgname}.png"
    install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "LICENSE"
}
