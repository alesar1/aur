# Maintainer: Ratan Rai Sur <ratan.r.sur@gmail.com>
pkgname=besu
pkgver=22.7.1
pkgrel=1
pkgdesc="Hyperledger Ethereum Mainnet and Permissioned Network Client"
arch=('any')
url="https://www.hyperledger.org/use/besu"
license=('Apache')
depends=('java-runtime>=11' 'jemalloc')
replaces=('pantheon')
#changelog=
source=("https://hyperledger.jfrog.io/artifactory/$pkgname-binaries/$pkgname/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('7cca4c11e1d7525c172f2af9fbf456d134ada60e970d8b6abcfcd6c623b5dd36')

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
