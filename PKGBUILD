# Maintainer: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=geotoad
pkgver=3.26.0
pkgrel=1
pkgdesc="A tool to simplify geocaching"
arch=('any')
url="https://github.com/steve8x8/geotoad"
license=('custom')
depends=('ruby')
#see https://github.com/steve8x8/geotoad/issues/325
source=($pkgname-$pkgver.tar.gz::https://github.com/steve8x8/geotoad/archive/$pkgver.tar.gz)
sha256sums=('0eb11cb622db36bb6789dc40780a994257ce0bb7b027472c04fef074f5ca44e1')

package() {
  cd "${srcdir}"/${pkgname}-${pkgver}

  install -d "${pkgdir}"/usr/{bin,share/${pkgname}}
  cp -R * "${pkgdir}"/usr/share/${pkgname}

  echo -e "#!/bin/bash\n\n/usr/share/${pkgname}/geotoad.rb" > "${pkgdir}"/usr/bin/${pkgname}
  chmod 755 "${pkgdir}"/usr/bin/${pkgname}

#license and man file
  install -Dm644 COPYRIGHT.txt "${pkgdir}"/usr/share/licenses/${pkgname}/COPYRIGHT.txt
  install -Dm644 $pkgname.1 "${pkgdir}"/usr/share/man/man1/$pkgname.1

#removing Debian specific files
  rm -rf "${pkgdir}"/usr/share/$pkgname/debian
}
