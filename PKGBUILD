# Maintainer: Michael Hansen <zrax0111 gmail com>

pkgname=visual-studio-code-oss
pkgdesc='Visual Studio Code for Linux, Open Source version'
pkgver=0.10.10
pkgrel=3
arch=('i686' 'x86_64')
url='https://code.visualstudio.com/'
license=('MIT')
makedepends=('npm' 'gulp' 'python2')
depends=('gtk2' 'gconf')
conflicts=('vscode-oss')
provides=('vscode-oss')

source=("https://github.com/Microsoft/vscode/archive/${pkgver}.tar.gz"
        "${pkgname}.desktop"
        'product_json.patch')
sha1sums=('00d50d275d01500f0394662472e78e56a4156046'
          '4a54b85304f6957947a140079b4667f2909201ab'
          '38e605f5491687d670c071ed3fab3eaf9adf05a9')

case "$CARCH" in
    i686)
        _vscode_arch=ia32
        ;;
    x86_64)
        _vscode_arch=x64
        ;;
    *)
        # Needed for mksrcinfo
        _vscode_arch=DUMMY
        ;;
esac

prepare() {
    cd "${srcdir}/vscode-${pkgver}"

    patch -p1 -i "${srcdir}/product_json.patch"
}

build() {
    cd "${srcdir}/vscode-${pkgver}"

    ./scripts/npm.sh install
    gulp vscode-linux-${_vscode_arch}
}

package() {
    install -m 0755 -d "${pkgdir}/opt/VSCode-OSS"
    cp -r "${srcdir}/VSCode-linux-${_vscode_arch}"/* "${pkgdir}/opt/VSCode-OSS"

    # Include symlink in system bin directory
    install -m 0755 -d "${pkgdir}/usr/bin"
    ln -s '/opt/VSCode-OSS/code-oss' "${pkgdir}/usr/bin/${pkgname}"

    # Add .desktop file
    install -D -m644 "${srcdir}/${pkgname}.desktop" \
            "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    # Install license file
    install -D -m644 "${srcdir}/VSCode-linux-${_vscode_arch}/resources/app/LICENSE.txt" \
            "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
