#Maintainer: KlarkKable <KlarkKable at protonmail dot com>
pkgname=dart-sdk-dev
pkgver=2.3.1_dev.0.0
pkgrel=1
pkgdesc="The official Dart sdk from dart-lang project (Development branch)"
arch=('x86_64')
url="https://www.dartlang.org/tools/sdk/archive"
license=('custom')
depends=('unzip')
conflicts=('dart')
provides=('dart=$pkgver')
source=("https://storage.googleapis.com/dart-archive/channels/dev/release/${pkgver//_/-}/sdk/dartsdk-linux-x64-release.zip")
sha256sums=('1d73ece270078dcf86ac85bcf2d4556f242f90f8be5a6bb1ddf9afe05778efac')

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
