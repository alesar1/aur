# Maintainer: Anthony Wang <ta180m@pm.me>
# Maintainer: Ersei <samb at disroot dot org>

pkgname=woodpecker
pkgver=0.15.0
pkgrel=8
pkgdesc="A community fork of the Drone CI system. Frontend server."
arch=(x86_64 armv7h aarch64)
url="https://woodpecker-ci.org/"
license=('Apache')
makedepends=('git' 'go' 'yarn')
depends=('glibc')
optdepends=()
backup=(etc/woodpecker.conf)
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/woodpecker-ci/$pkgname/archive/v$pkgver.tar.gz"
  'systemd.service'
  'tmpfiles.conf'
  'sysusers.conf'
  'woodpecker.conf'
)
sha256sums=('b1a64d5e47f003ce8bc785375663239b45532d80d6e17b358344b7e3cba930c4'
            '18bb1cc48b42fdb9df711a73a5c1753489ff68c2790b6f24811050f1ab353ac0'
            '1bf038355c6ec78adb9e8ae194c9df1c4a47fc7195fe97c68d8c44af3ef72f60'
            '878466f384b124353a7247bcc26f374a8c174874afc47c227eefaf38b9905e5a'
            'fd4844875321cc6ab9481f04427b3d8d825f331e80d752f00d15c661f2f801a6')

prepare() {
  cd "$pkgname-$pkgver"

  sed -i 's/ -extldflags \"-static\"//' Makefile
}

build() {
  cd "$pkgname-$pkgver"

  # This package's Makefile uses the TARGETARCH variable's value to determine
  # what is the current architecture. TARGETARCH defaults to `amd64`, which is
  # fine for x86_64. Other possible values are `arm64` and `arm`. Currently
  # tested values are :
  #  - TARGETARCH amd64 when CARCH is x86_64
  #  - TARGETARCH arm when CARCH is armv7h
  case $CARCH in
    x86_64) export TARGETARCH=amd64;;
    aarch64) export TARGETARCH=arm64;;
    armv7h) export TARGETARCH=arm;;
    *)
      warn "untested architecture - if needed update PKGBUILD to build on arch $CARCH";;
  esac

  GOFLAGS=-trimpath make build-server
}

package() {
  install -vDm644 systemd.service "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -vDm644 sysusers.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -vDm644 tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
  install -vDm600 woodpecker.conf "$pkgdir/etc/$pkgname.conf"

  cd "$pkgname-$pkgver"

  install -vDm755 -t "$pkgdir/usr/bin" dist/*
}

