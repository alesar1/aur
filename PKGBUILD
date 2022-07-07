pkgname='rumtricks'
pkgver=0.4.0
pkgrel=1
pkgdesc='Winetricks alternative'
arch=('x86_64')
url='https://github.com/jc141x/rumtricks'
license=('GPL3')
depends=(curl zstd wine xz)
conflicts=('rumtricks-git')
source=(
    "rumtricks-${pkgver}::https://github.com/jc141x/${pkgname}/releases/download/${pkgver}/rumtricks.sh"
    "wha-${pkgver}::https://github.com/jc141x/${pkgname}/releases/download/${pkgver}/wha.sh"
 )
md5sums=('e4b727189b39073c10f332311764cad9'
         '2c07197e1acf892482ba1f4567c7abb3')

package() {
    install -Dm755 "$srcdir/rumtricks-${pkgver}" "$pkgdir/usr/bin/rumtricks"
    install -Dm755 "$srcdir/wha-${pkgver}" "$pkgdir/usr/bin/wha"
}
