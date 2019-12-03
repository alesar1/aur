# Maintainer: Kevin MacMartin <prurigro@gmail.com>
# Contributor: Carlos Mogas da Silva <r3pek@r3pek.org>

pkgname=ma1sd
pkgver=2.1.2
pkgrel=1
pkgdesc='Federated Matrix Identity Server Daemon'
arch=('any')
url='https://github.com/kamax-io/ma1sd'
license=('AGPL3')
depends=('java-runtime>=8')
makedepends=('gradle' 'java-environment>=8')
install="$pkgname.install"

source=(
  "https://github.com/$pkgname/$pkgname/archive/${pkgver}.tar.gz"
  "$pkgname"
  "$pkgname.tmpfiles"
)

sha512sums=(
  '8d1e9307143480bca8d26e2c5aec98cd684e0cda87995db44654bc34d7efa758fd0eabd5c5a3d75663c299a32bae1a0d6461c4111d292a584bf0150b7e3016ca'
  '750584c682fea1a4d96950eba1528abdd564ff12b73fc12e0f4755049c5b1b9b29c9efb52ded207cdd992b2804a6559a444b83b0fa92cbf5c7870734b2862704'
  '201df7ac9573191b032788d39131638913c69db3523cdf5ed11aa982518602a82b72d8e0c252e0b84c3bbb81371c279cf0515107c0ae4ab60456a2ddb312b96c'
)

build() {
  cd "$pkgname-$pkgver"
  JAVA_HOME='/usr/lib/jvm/java-8-openjdk/' MA1SD_BUILD_VERSION="$pkgver" ./gradlew build
}

package() {
  cd "$pkgname-$pkgver"

  # Binaries
  install -Dm644 "build/libs/$pkgname-$pkgver.jar" "$pkgdir/usr/lib/$pkgname/$pkgname.jar"
  install -Dm755 "$srcdir/$pkgname" "$pkgdir/usr/bin/$pkgname"

  # Configuration
  install -Dm644 "$pkgname.example.yaml" "$pkgdir"/etc/$pkgname/$pkgname.example.yaml

  # Systemd
  install -Dm644 "src/systemd/$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -Dm644 "$srcdir/ma1sd.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/ma1sd.conf"
}
