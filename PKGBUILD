# Maintainer: bmgtjonas <linuxus@mail.de>

pkgname=gqthres
pkgver=1.1.1
pkgrel=0
pkgdesc="Resolver for Callsigns and Locators"
arch=(any)
url="https://github.com/BaumGuard/gqthres"
license=(GPL)
makedepends=(git)
depends=(jre-openjdk)
source=("https://github.com/BaumGuard/${pkgname}/archive/refs/tags/${pkgver}.tar.gz")

build() {
   cd ${pkgname}-${pkgver}/src

   javac -cp jsoup-1.13.1.jar gqthres.java
   jar cfm gqthres.jar manifest *.class
}

package() {
   cd ${srcdir}/${pkgname}-${pkgver}

   install -Dm755 gqthres ${pkgdir}/usr/bin/gqthres
   install -Dm755 src/gqthres.jar ${pkgdir}/usr/lib/gqthres/gqthres.jar
   install -Dm755 gqthres.conf ${pkgdir}/etc/gqthres.conf
   install -Dm755 gqthres.desktop ${pkgdir}/usr/share/applications/gqthres.desktop
   install -Dm755 gqthres.png ${pkgdir}/usr/share/pixmaps/gqthres.png
}  
sha256sums=('aad104c763ae6ab3fa808f3e2a54965774963dd9b13ba1169ec1400cdcf0175d')
