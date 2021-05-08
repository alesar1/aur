# Maintainer: dranion <mail at dranion@pm.me>
# Maintainer: MarkusG <mail at mark.gross2001 gmail com>
# Contributer: kausban <mail at kausban com> 
pkgname=polar-bookshelf-bin
pkgver=2.0.103
pkgrel=1
pkgdesc="Polar Bookshelf"
arch=('x86_64')
url="https://github.com/burtonator/polar-bookshelf"
license=('GPL3')
depends=('gtk3' 'libxss' 'nss' 'nodejs')
source_x86_64=("https://github.com/burtonator/polar-bookshelf/releases/download/v"$pkgver"/polar-desktop-app-"$pkgver"-x64.tar.gz"
"polar-bookshelf.desktop"
"polar-bookshelf.svg")
sha512sums_x86_64=('6e1ccc169605bb01150af4934fd7e20ec0eed050435321ce050414e5783c67c3e8a02c09f2dce3c039331dfad48cc12beaa3720b332f348123ef3199539d07df'
                   '245196d23eb0c724bba1ba09e8234cc8dfdd230fcd02e8083c84d65d4721886977a111e19511d5afee9b8b61458ab851e6263dad31be9bbe0f4f5a3607f00690'
                   '2f1c91308fa6fc30496501894f5c9454799e26437000843f00cf0ab4b94713a1500a734c0f5590f86dae8bab7e34107670571ea2fde18981669a17ede61d1829')

package(){
	# place files
    install -d "${pkgdir}/usr/lib/polar-bookshelf"
    cp -a ${srcdir}/polar-desktop-app-"$pkgver"-x64/* "${pkgdir}/usr/lib/polar-bookshelf"

    # symlink main binary
    install -d "${pkgdir}/usr/bin"
    ln -s "/usr/lib/polar-bookshelf/polar-desktop-app" "${pkgdir}/usr/bin/polar-bookshelf"

    # desktop entry and icons
    install -Dm644 "${srcdir}/polar-bookshelf.svg" "$pkgdir/usr/share/pixmaps/polar-bookshelf.svg"
    desktop-file-install -m 644 --dir "${pkgdir}/usr/share/applications/" "${srcdir}/polar-bookshelf.desktop"

    # Place license files
    for license in "LICENSE.electron.txt" "LICENSES.chromium.html"; do
        install -Dm644 "${pkgdir}/usr/lib/polar-bookshelf/${license}" "${pkgdir}/usr/share/licenses/polar-bookshelf/${license}"
        rm "${pkgdir}/usr/lib/polar-bookshelf/${license}"
    done
}
