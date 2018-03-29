# Maintainer: Adam S Levy <adam@aslevy.com>

pkgname='factom-walletd'
pkgver='0.4.2.21'
pkgrel='3'
pkgdesc='Server for the factom wallet web service api'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/FactomProject/$pkgname"
license=('custom:MIT')
makedepends=('go' 'git' 'glide')
options=('emptydirs')
install="$pkgname.install"
source=("git+$url#tag=v$pkgver" "$pkgname.service" "sysusers-$pkgname.conf")
md5sums=('SKIP'
         '74887afdb49a01c60291d3ad9f046f7b'
         '7bc465a1d5594ba5bd25c237d2920255')
build()
{
  cd "$srcdir"
  export GOPATH="$srcdir"
  export GOBIN="$GOPATH/bin"
  export PATH="$GOBIN:$PATH"
  local gosrcdir="$GOPATH/src/github.com/FactomProject"
  mkdir -p "$gosrcdir"
  ln -sf "$srcdir"/$pkgname "$gosrcdir"

  cd "$gosrcdir/$pkgname"

  echo "Downloading dependencies"
  glide install -v

  echo "Building $pkgname version=$pkgver commit=$revision"
  go install -ldflags "-X github.com/FactomProject/factom-walletd/vendor/github.com/FactomProject/factom/wallet.WalletVersion=$pkgver"
}


package()
{
  cd "$srcdir"
  install -Dm644 $pkgname.service       "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -Dm644 sysusers-$pkgname.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"

  cd "$srcdir/bin"
  install -Dsm755 $pkgname "$pkgdir/usr/bin/$pkgname"

  cd "$srcdir/$pkgname"
  install -dm755           "$pkgdir/var/lib/$pkgname/"
  ln -s /var/lib/$pkgname  "$pkgdir/var/lib/$pkgname/.factom"
  install -Dm644 LICENSE   "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
