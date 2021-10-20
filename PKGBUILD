# Maintainer: Your Name <youremail@domain.com>
pkgname=reposilite
pkgver=2.9.26
pkgrel=1
pkgdesc="Reposilite (formerly NanoMaven) - lightweight repository manager for Maven artifacts. It is a simple solution to replace managers like Nexus, Archiva or Artifactory."
arch=(any)
url="https://github.com/dzikoysk/$pkgname"
license=('Apache')
depends=('java-runtime')
makedepends=('java-environment' 'maven')
source=("$url/archive/$pkgver.tar.gz" "$pkgname.service" "$pkgname.sysusers" "$pkgname.tmpfiles")
sha256sums=('5b80efb38e8cdd224fb6090ac4b302338881dd0d049b145e200686da9c055fb0'
            'a90d98915a867ae8b2569d124d0f625908e490284d26005cd47c041c75ef3db4'
            '92ccfeff429aa4757ef353677dd99ad7aebe7483d4824706a27250e81efd6323'
            '9587fa49dd66d5f31dee33aa1a9da269a34666b63f62e2550a66c3bc1d397aa7')

build() {
  cd "$pkgname-$pkgver"
  mvn package
}

package() {
  install -Dm 644 $pkgname.service -t "${pkgdir}/usr/lib/systemd/system"
  install -Dm 644 $pkgname.sysusers "${pkgdir}/usr/lib/sysusers.d/$pkgname.conf"
  install -Dm 644 $pkgname.tmpfiles "${pkgdir}/usr/lib/tmpfiles.d/$pkgname.conf"
  install -Dm 644 $pkgname-$pkgver/reposilite-backend/target/$pkgname-*.jar "$pkgdir/usr/share/java/$pkgname/$pkgname.jar"
}
