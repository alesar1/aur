# Maintainer: David Parrish <daveparrish@tutanota.com>
# URL: https://github.com/lightningnetwork/lnd
# Upstream: https://github.com/lightningnetwork/lnd

#shellcheck disable=SC2034

pkgname='lnd'
pkgver=0.9.1_beta
_pkgver="${pkgver//_/-}"
pkgrel=1
pkgdesc='The Lightning Network Daemon, for secure off-chain bitcoin transactions.'
arch=('i686' 'x86_64')
url='https://github.com/lightningnetwork/lnd'
license=('MIT')
depends=('glibc')
makedepends=('go')
provides=('lnd' 'lncli')
conflicts=('lnd-git')
source_x86_64=("$pkgname-$pkgver.tar.gz::https://github.com/lightningnetwork/lnd/archive/v${_pkgver}.tar.gz")
sha512sums_x86_64=('00d8e1512b93b36f091b16d76d8ca2a604854213f8a7e91b778767438571ad98bfb492b63c8c535a59dc95325dfa026cc631a60e79e7a944bfe7a96b2c1bbe61')

# create a fake go path directory and pushd into it
# $1 real directory
# $2 gopath directory
_fake_gopath_pushd() {
    mkdir -p "$GOPATH/src/${2%/*}"
    rm -f "$GOPATH/src/$2"
    ln -rsT "$1" "$GOPATH/src/$2"
    pushd "$GOPATH/src/$2" >/dev/null || exit
}

_fake_gopath_popd() {
    popd >/dev/null || exit
}

prepare() {
  # Create GOPATH
  mkdir -p "${srcdir:?}/GOPATH"
  mv "$srcdir/$pkgname-$_pkgver" "$srcdir/lnd"
}

build() {
  export GOPATH="$srcdir/GOPATH"
  _fake_gopath_pushd "$pkgname" github.com/lightningnetwork/lnd
  make && make install
  _fake_gopath_popd
}

package() {
  for _bin in lnd lncli; do
    install -Dm 755 "$srcdir/GOPATH/bin/$_bin" -t "${pkgdir:?}/usr/bin";
  done

  install -D -m644 "$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
