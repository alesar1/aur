# Maintainer: Svitozar Cherepii <razotivs@gmail.com>
pkgname=rvgl-superpros
pkgver=19.0414
pkgrel=1
pkgdesc="Overpowered cars for RVGL special events."
url='https://rvgl.re-volt.io'
arch=('any')
license=('custom')
depends=('rvgl-bin')
source=("https://distribute.re-volt.io/packs/io_superpros.zip"
        "https://distribute.re-volt.io/releases/io_superpros.txt")
sha256sums=('a9abb68045597053ee5368f2ad894e56fed10928a8c098e5ec6193d6c0d99797'
            'SKIP')

pkgver() {
    cat io_superpros.txt
}

package() {
    find cars -type f -exec \
        install -Dm644 {} "$pkgdir/opt/rvgl/{}" \;
}
