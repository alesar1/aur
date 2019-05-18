# Maintainer: CrocoDuck <crocoduck dot oducks at gmail dot com>

pkgname=gmsh-bin
pkgver=4.3.0
pkgrel=1
pkgdesc="A free 3D finite element grid generator with a build-in CAD engine and post-processor."
arch=('i686' 'x86_64')
url="http://gmsh.info/"
license=('GPL')
depends=('libxft' 'libxinerama' 'libxcursor' 'glu')
makedepends=('wget' 'tar' 'gendesk' 'chrpath')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")

# Define Download data:
if [ $CARCH == 'x86_64' ]; then
    _archvar=64
    _downsha256sum=46d6b2d97c8dd2f76c37e4e3e6d4a3ed592b25705b5c289fa06c640913567825
else
    _archvar=32
    _downsha256sum=46d6b2d97c8dd2f76c37e4e3e6d4a3ed592b25705b5c289fa06c640913567825
fi

prepare() {
    # Download Files:
    _downfname="gmsh-${pkgver}-Linux${_archvar}.tgz"
    wget "${url}bin/Linux/$_downfname"
    # Checksum:
    echo $_downsha256sum $_downfname|sha256sum -c || { echo 'Checksum failed!'; exit 1; }
    # Extract:
    tar zxvf $_downfname
    # Set Icon and Launcher:
    cp "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/share/doc/${pkgname%-*}/tutorial/image.png" "${srcdir}/gmsh_icon.png"
    gendesk -f -n --pkgname "${pkgname}" --pkgdesc "${pkgdesc}" --name=${pkgname%-*} --exec=${pkgname%-*} --categories 'Education;Science;Math;'
    # Strip RPATH from binary:
    chrpath -d "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/bin/gmsh"
}

package() {
    # Program Files
    cd "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/bin"
    for file in *; do
        install -Dm 755 "$file" "${pkgdir}/usr/bin/$file"
    done
    # Docs:
    cd "$srcdir"
    mkdir -p "${pkgdir}/usr/share/doc"
    cp -r "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/share/doc/${pkgname%-*}" "${pkgdir}/usr/share/doc/${pkgname%-*}"
    # Man
    cd "$srcdir"
    install -D "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/share/man/man1/${pkgname%-*}.1" "${pkgdir}/usr/share/man/man1/${pkgname%-*}.1"
    # Launcher
    install -Dm 644 "${srcdir}/gmsh_icon.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    install -Dm 644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname%-*}.desktop"
}
