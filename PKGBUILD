# Maintainer: Jikstra <jikstra@disroot.org>
pkgname=deltachat-desktop-git
pkgver=v1.28.0.r7.g098e20e1
pkgrel=1
pkgdesc="A privacy oriented chat application built on e-mail"
arch=("any")
url="https://github.com/deltachat/deltachat-desktop"
license=("GPL")
depends=('electron')
makedepends=('npm' 'nodejs' 'git' 'rustup' 'python')
source=(
    "deltachat-desktop-git::git+https://git@github.com/deltachat/deltachat-desktop.git"
    "deltachat-desktop.desktop"
    "deltachat-desktop.sh"
)

sha256sums=(
    "SKIP"
    "bd118380fdfea9f47de6e23445cc995a1a1fa30fe87fcb37ac2981365adadcea"
    "c7d2c3675faa09bb568b7f7c10779971783b1a4f11a225db8b2846fc1a6b4e14"
)


pkgver() {
    cd "$srcdir/${pkgname}"

    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}


build() {
    cd "$srcdir/${pkgname}"

    npm install --verbose
    npm run build

    # Delete development dependencies, we don't need them anymore
    npm prune --production 
}


package() {
    cd "$srcdir/${pkgname}"
    
    install -d "${pkgdir}/opt/DeltaChat/electron_app"
    cp -r node_modules  images tsc-dist build html-dist _locales themes "${pkgdir}/opt/DeltaChat/electron_app"

    rm -rf "${pkgdir}/opt/DeltaChat/electron_app/node_modules/deltachat-node/prebuilds/win32-x64"
    rm -rf "${pkgdir}/opt/DeltaChat/electron_app/node_modules/deltachat-node/prebuilds/darwin-x64"
    find "${pkgdir}/opt/DeltaChat/electron_app/node_modules/" -name "*.js.map" -exec rm {} \;

    cp index.js package.json "${pkgdir}/opt/DeltaChat/electron_app"

    
    install -Dm644 "${srcdir}/deltachat-desktop.desktop" "${pkgdir}/usr/share/applications/deltachat.desktop"
    install -Dm755 "${srcdir}/deltachat-desktop.sh" "${pkgdir}/opt/DeltaChat/deltachat"
    install -d "${pkgdir}/usr/bin"
    ln -s "/opt/DeltaChat/deltachat" "${pkgdir}/usr/bin/deltachat"
    
    install -Dm644 ./images/deltachat.png "${pkgdir}/usr/share/icons/hicolor/scalable/apps/deltachat.png"
}
 
