# Maintainer: Ramana Kumar <ramana@member.fsf.org>
pkgname=teku
pkgver=22.8.1
pkgrel=1
pkgdesc="ConsenSys Ethereum Beacon Chain Client"
arch=('any')
url="https://docs.teku.consensys.net"
license=('Apache')
depends=('java-runtime>=11')
source=("https://artifacts.consensys.net/public/$pkgname/raw/names/$pkgname.tar.gz/versions/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('3582cad5394179ce0304ed8869147f7ec15e5790e422bb0fa9187aa1131efc0a')

check() {
  "$pkgname-$pkgver/bin/$pkgname" --version
}

package() {
  install -dD -m757 "$pkgdir/opt/$pkgname"
  install -dD -m755 "$pkgdir/usr/bin"
  cd "$pkgname-$pkgver"
  rm bin/$pkgname.bat
  cp -p -r * "$pkgdir/opt/$pkgname"
  ln -rs "$pkgdir/opt/$pkgname/bin/$pkgname" "$pkgdir/usr/bin/$pkgname"
}
