# Maintainer: Papajoker <papajoke [at] manjaro [dot] fr>
pkgname=pkcreate
pkgver=0.8.0
pkgrel=1
pkgdesc="create actions for polkit"
arch=('any')
license=('GPL')
depends=('polkit')
source=("https://github.com/papajoker/pkcreate/archive/0.8.0.tar.gz")
sha512sums=('183c00b2c7f89bb76256dc4852d77abe899a4cc7c98544071e453b7ad6e1ed4aa2c1e5bc526cb5943dbb392dadf0446f1fbe3aff1894e4c04522845941651bc7')


package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm755 ${pkgname} ${pkgdir}/usr/bin/${pkgname}
}

