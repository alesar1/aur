# Maintainer: Anthony Wang <ta180m@pm.me>

pkgname=woodpecker
pkgver=0.15.0_rc1
_pkgver=${pkgver/_/-}
pkgrel=3
pkgdesc="Woodpecker is a community fork of the Drone CI system."
arch=(any)
url="https://woodpecker-ci.org/"
license=('Apache')
makedepends=('git' 'go')
depends=('glibc')
optdepends=('docker: Docker backend')
backup=(etc/woodpecker.conf etc/woodpecker-agent.conf)
source=(
  "$pkgname-$_pkgver.tar.gz::https://github.com/woodpecker-ci/$pkgname/archive/v$_pkgver.tar.gz"
  'woodpecker.service'
  'woodpecker-agent.service'
  'tmpfiles.conf'
  'sysusers.conf'
  'woodpecker.conf'
  'woodpecker-agent.conf'
)
sha256sums=('39769d543dddd1cc2afaaff6af8ad145447ff4c220a9969e7fb24e780bd30704'
            '18bb1cc48b42fdb9df711a73a5c1753489ff68c2790b6f24811050f1ab353ac0'
            '77d03cc1faec8ad0f313e3965b272545d3c4067c640f7cb30d80cbfcfc49720c'
            'eb2d8ee56073527b3373721f0693a7c1331ce994d1843a6d8396268face86963'
            'bb9e8df7ddd14a329f3b9f06a72fc89b14f78581da14c22b6a7cc6e49f7b80ae'
            '1513eb61bacffa643c02ccb9e4132aa49640abb9943eba7fcf96712eda463fdf'
            'dc91524c6976eb4515607bfdd08e58a3c18867cd26c623146475054a2adb0f3f')

prepare() {
  cd "$pkgname-$_pkgver"

  sed -i 's/-extldflags \"-static\"//' Makefile
}

build() {
  cd "$pkgname-$_pkgver"

  GOFLAGS=-trimpath make build
}

package() {
  install -vDm644 woodpecker.service "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -vDm644 woodpecker-agent.service "$pkgdir/usr/lib/systemd/system/$pkgname-agent.service"
  install -vDm644 sysusers.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -vDm644 tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
  install -vDm600 woodpecker.conf "$pkgdir/etc/$pkgname.conf"
  install -vDm600 woodpecker-agent.conf "$pkgdir/etc/$pkgname-agent.conf"

  cd "$pkgname-$_pkgver"

  install -vDm755 -t "$pkgdir/usr/bin" dist/*
}
