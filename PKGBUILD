#Maintainer: KlarkKable <KlarkKable at protonmail dot com>
pkgname=dart-sdk-dev
pkgver=2.8.0_dev.9.0
pkgrel=1
pkgdesc="The official Dart sdk from dart-lang project (Development branch)"
arch=('x86_64')
url="https://www.dartlang.org/tools/sdk/archive"
license=('custom')
depends=('unzip')
conflicts=('dart')
provides=('dart=$pkgver')
source=("https://storage.googleapis.com/dart-archive/channels/dev/release/${pkgver//_/-}/sdk/dartsdk-linux-x64-release.zip")
sha256sums=('f2b3a0aa35fbedbea2ee96d41cb23f2f9761c298c23104f907aa496a6bad32c4')

package() {
  # Uncompressed name is "dart-sdk" not "dart-sdk-dev"
  cd $srcdir/dart-sdk

  # Install Application
  install -d $pkgdir/{opt/$pkgname,usr/bin}
  cp -a . $pkgdir/opt/$pkgname
  for f in "$pkgdir"/opt/$pkgname/bin/*; do 
    ln -s /opt/$pkgname/bin/${f##*/} "$pkgdir"/usr/bin/
  done

  chmod -R ugo+rX $pkgdir/opt
}
