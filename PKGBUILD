# Maintainer: Maurice Zhou <ja at apvc punkt uk>
pkgname=rozb3-pac
pkgver=0.3.0
pkgrel=1
pkgdesc="pacman hook for bieaz"
arch=(any)
url="https://gitlab.com/m_zhou/rozb3-pac"
license=('GPL')
depends=('bieaz>=0.2.0')
source=("${url}/-/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz")

package() {
    cd "$pkgname-$pkgver"
    make DESTDIR=$pkgdir install
}
md5sums=('d72421b3828e42cb6f60fb2195133c20')
