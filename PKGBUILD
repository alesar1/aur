pkgname=cerebro-elasticsearch
pkgver=0.7.3
pkgrel=1
pkgdesc="cerebro is an open source elasticsearch web admin tool built using Scala, Play Framework, AngularJS and Bootstrap."
arch=('i686' 'x86_64')
url="https://github.com/lmenezes/cerebro"
license=('MIT')
depends=("java-runtime-headless>=8")
source=(https://github.com/lmenezes/cerebro/releases/download/v$pkgver/cerebro-$pkgver.tgz
       cerebro.service)
md5sums=('d41419f4b9857c13c11ae720e022199a'
         'af61c73dfa96d57c509c8a3a2c3bef97')
noextract=()

package() {
  cd "$srcdir/cerebro-$pkgver"
  install -d -m0755 "$pkgdir/opt/cerebro"
  cp -dpr --no-preserve=ownership ./ "$pkgdir/opt/cerebro"
  install -D -m644 "$srcdir/cerebro.service" "$pkgdir/usr/lib/systemd/system/cerebro.service"
}

# vim:set ts=2 sw=2 et:
