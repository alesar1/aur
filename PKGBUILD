# Maintainer: Limao Luo <luolimao+AUR@gmail.com>

pkgname=humanity-icon-theme
pkgver=0.6.12
pkgrel=1
pkgdesc="Humanity icons from Ubuntu without modification"
arch=(any)
url=https://launchpad.net/humanity
license=(GPL2)
conflicts=(humanity-icons)
options=(!emptydirs)
source=(https://launchpad.net/ubuntu/+archive/primary/+files/${pkgname}_$pkgver.tar.xz)
sha256sums=('d83ce01cd8cbf1f5d1d8b37044132934ef0e911b6b37612d4d4b51d66cbc9d70')
sha512sums=('8c1fbc009c153b54702e7d463d0d7087e6207274ac09b7973d063c797984eaba5b01c6ff5b4e6b1394ae509f25d4024e47014b3abecd24036a542e42785510df')

package() {
    install -d "$pkgdir"/usr/share/icons/
    cp -r $pkgname-$pkgver/Humanity{,-Dark} "$pkgdir"/usr/share/icons/
}
