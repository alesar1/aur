# Maintainer: JKA Network (JoseluCross, Kprkpr, Yukialba) <contacto@jkanetwork.com>
pkgname=gitdit
pkgver=1.0.4
pkgrel=1
pkgdesc="gitdit - Git DIalog inTerface"
arch=('any')
url="http://proyecto.jkanetwork.com"
license=('GPL3')
groups=('jka-toolkit')
options=(!emptydirs)
source=("https://gitlab.com/JKANetwork/jka-toolkit/raw/master/jka-toolkit/gitdit")
md5sums=('681d1d67eac59d55083dbaf20ce0e5fc')

package() {
  install -Dm755 $srcdir/gitdit "${pkgdir}/usr/bin/gitdit"
}
