# Maintainer: Svitozar Cherepii <razotivs@gmail.com>
pkgname=rvgl-skins
pkgver=20.0120
pkgrel=1
pkgdesc="Additional RVGL skins for default and pack cars."
url='https://rvgl.re-volt.io'
arch=('any')
license=('custom')
depends=('rvgl-bin')
optdepends=('rvgl-cars: additional cars skins provided for'
            'rvgl-cars-bonus: additional cars skins provided for')
source=("$pkgname-$pkgver.zip::https://distribute.re-volt.io/packs/io_skins.zip")
sha256sums=('b867b2f54e81dbce022a7390af577441f10320d0a505feb47119b278bc4bfc10')

package() {
    find cars -type f -exec \
        install -Dm644 {} "$pkgdir/opt/rvgl/{}" \;
}
