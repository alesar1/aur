# Maintainer : Kevin MacMartin <prurigro@gmail.com>

_binname=stdiscosrv
_pkgname=syncthing
pkgname=$_pkgname-discosrv
epoch=1
pkgver=0.14.6
pkgrel=1
pkgdesc='Discover server for the syncthing P2P synchronization utility'
url='http://syncthing.net'
license=('MIT')
install=$pkgname.install
depends=('glibc')
makedepends=('git' 'go' 'godep' 'mercurial')
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h')

source=(
  "https://github.com/$_pkgname/$_pkgname/archive/v$pkgver.tar.gz"
  "$pkgname.service"
  "$pkgname.tmpfiles.conf"
)
sha512sums=('2a6d7dda6f014b1fce75d3199afdde517344524356e3881bb3cac035adc53dae3401260f072099a60d31394279e386c1d0e661fe21a5df0f1bf6b9808017ba34'
            'b2a8daa48be57ad47542569473128c8590d4bbe124de0912ce5b3de7deb1b54dd0d3ed66e925fc11addded075d24d6a1fe822d71338d128b7ca03fd43c082d8c'
            '28b0bb6a6f2fa536ec8cb887cfebf4706be25af5e29da39e2e3776daeeeb48f75fb5be255472920355948d8905830342866e89299facd626ddf8a658d84faf27')

build() {
  cd $_pkgname-$pkgver/cmd/$_binname
  export GOPATH="$srcdir"
  go get -d -tags purego
  go build -i -v -ldflags -w
}

package() {
  # Install systemd service and tmpfiles config
  install -Dm644 $pkgname.service "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -Dm644 $pkgname.tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"

  # Install license and list of authors
  cd $_pkgname-$pkgver
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 AUTHORS "$pkgdir/usr/share/licenses/$pkgname/AUTHORS"

  # Install the man page
  install -Dm644 man/$_binname.1 "$pkgdir/usr/share/man/man1/$pkgname.1"

  # Install the binary
  install -Dm755 cmd/$_binname/$_binname "$pkgdir/usr/bin/$pkgname"
}
