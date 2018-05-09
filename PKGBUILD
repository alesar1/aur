# Maintainer: Adam S Levy <adam@aslevy.com>

pkgname='factom-cli'
pkgver='0.4.2.21'
pkgrel='1'
pkgdesc='Command line interface for factomd and factom-walletd'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/FactomProject/$pkgname"
license=('custom:MIT')
makedepends=('go' 'git' 'glide')
source=("git+$url#tag=v$pkgver")
sha256sums=('SKIP')
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
  cd "$GOBIN"
  install -d "$pkgdir/usr/bin/"
  install -Dsm755 $pkgname "$pkgdir/usr/bin/"

  cd "$srcdir/$pkgname"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
