# Maintainer: Adam S Levy <adam@aslevy.com>

pkgname='factomd'
pkgver='5.0.0'
pkgrel='6'
pkgdesc='Factom Daemon'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/FactomProject/$pkgname"
license=('custom:MIT')
makedepends=('go' 'git' 'glide')
install="$pkgname.install"
source=("git+$url#tag=v$pkgver" "$pkgname.service" "sysusers-$pkgname.conf")
backup=('var/lib/factomd/m2/factomd.conf')
md5sums=('SKIP'
         '439b3abc0c8f0de23a44d16ae49837b7'
         '98af8ab7eabb9fa344f574b9182f34e2')
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

  revision=$(git rev-parse HEAD)
  echo "Building $pkgname version=$pkgver commit=$revision"
  go install -ldflags "-X github.com/FactomProject/factomd/engine.Build=$revision -X github.com/FactomProject/factomd/engine.FactomdVersion=$pkgver"
}

package()
{
  cd "$srcdir"
  install -Dm644 $pkgname.service       "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -Dm644 sysusers-$pkgname.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"

  cd "$srcdir/bin"
  install -Dsm755 $pkgname     "$pkgdir/usr/bin/$pkgname"

  cd "$srcdir/$pkgname"
  install -Dm644 $pkgname.conf "$pkgdir/var/lib/$pkgname/m2/$pkgname.conf"
  ln -s          ./            "$pkgdir/var/lib/$pkgname/.factom"
  install -Dm644 LICENSE       "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
