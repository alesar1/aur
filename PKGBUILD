# Maintainer: Jikstra <jikstra@disroot.org>
# Maintainer: tercean <cg@zknt.org>
pkgname=deltachat-desktop
pkgver=1.13.1
pkgrel=3
pkgdesc="A privacy oriented chat application built on e-mail"
arch=("any")
url="https://github.com/deltachat/deltachat-desktop"
license=("GPL")
depends=('electron6')
makedepends=('npm' 'nodejs' 'git' 'rustup' 'python' 'unzip')
conflicts=("deltachat-desktop-git")
_basicwebrtc_commit=9385e26bb39e7286fc7c612500c5dd92be445e0b
source=(
    "deltachat-desktop-${pkgver}.tar.gz::https://github.com/deltachat/deltachat-desktop/archive/v${pkgver}.tar.gz"
    "deltachat-desktop.desktop"
    "deltachat-desktop.sh"
    "basicwebrtc-$_basicwebrtc_commit.zip::https://github.com/cracker0dks/basicwebrtc/archive/$_basicwebrtc_commit.zip"
    "remove_git_submodule.patch"
)

sha256sums=('25b8899b79d7701189e9bbfe71810d6bf3f1ef525046cfde8ad789d0216cc203'
            '39bae164c234b3c89e7ae2bde89753c90065df7f37fece084f7f5acccbb9f1f1'
            '5e20ea657599390e317523ae17b17aba0d26c59474a7f80282af5f2668002f59'
            'cddac0c94d78d8265a57064504890f9056a117eaca20054e2893aac83bd53473'
            '12815b12e001ffc72943eba955e7c715856b43f8e62ec4ef880893f19acef9d9')

prepare() {
    cd "$srcdir/${pkgname}-${pkgver}"
    unzip $srcdir/basicwebrtc-$_basicwebrtc_commit.zip
    rm -rf basicwebrtc-$_basicwebrtc_commit.zip
    mv basicwebrtc-$_basicwebrtc_commit basicwebrtc

    patch --forward --strip=1 --input="${srcdir}/remove_git_submodule.patch"
}

build() {
    cd "$srcdir/${pkgname}-${pkgver}"

    npm install
    npm run build

    # Delete development dependencies, we don't need them anymore
    npm prune --production
}


package() {
    cd "$srcdir/${pkgname}-${pkgver}"

    install -d "${pkgdir}/opt/DeltaChat/electron_app"
    cp -r node_modules  images tsc-dist build html-dist _locales "${pkgdir}/opt/DeltaChat/electron_app"

    rm -rf "${pkgdir}/opt/DeltaChat/electron_app/node_modules/deltachat-node/prebuilds/win32-x64"
    rm -rf "${pkgdir}/opt/DeltaChat/electron_app/node_modules/deltachat-node/prebuilds/darwin-x64"
    find "${pkgdir}/opt/DeltaChat/electron_app/node_modules/" -name *.js.map -exec rm {} \;

    cp index.js package.json "${pkgdir}/opt/DeltaChat/electron_app"

    install -Dm644 "${srcdir}/deltachat-desktop.desktop" "${pkgdir}/usr/share/applications/deltachat.desktop"
    install -Dm755 "${srcdir}/deltachat-desktop.sh" "${pkgdir}/opt/DeltaChat/deltachat"
    install -d "${pkgdir}/usr/bin"
    ln -s "${pkdir}/opt/DeltaChat/deltachat" "${pkgdir}/usr/bin/deltachat"

    install -Dm644 ./images/deltachat.png "${pkgdir}/usr/share/icons/hicolor/scalable/apps/deltachat.png"
}
