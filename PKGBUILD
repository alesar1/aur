# Maintainer: Sebastiaan Tammer <sebastiaantammer at gmail dot com>
# Contributor: stocki <mail at firstname lastname dot de>
# Contributor: aimileus <me at aimileus dot nl>
# Contributor: zfo <zfoofz1@gmail.com>

pkgname=gcsfuse
pkgver=0.32.0
pkgrel=1
pkgdesc="A user-space file system for interacting with Google Cloud Storage"
url="https://github.com/GoogleCloudPlatform/gcsfuse"
arch=('x86_64')
license=('APACHE')
depends=('glibc' 'fuse')
makedepends=('git' 'go')
optdepends=('google-cloud-sdk: authentication helper')
source=("$pkgname-$pkgver::https://github.com/GoogleCloudPlatform/gcsfuse/archive/v$pkgver.tar.gz")
sha256sums=('b509f55de799aba6bbc1f81d6e4c1495b09644872211e5fd8805b5e0e174ed84')
_gourl=github.com/googlecloudplatform/gcsfuse

prepare() {
  export GOPATH="$srcdir/go"  
  mkdir -p "$GOPATH/src/$(dirname $_gourl)"
  ln -sf "$srcdir/$pkgname-$pkgver" "$GOPATH/src/$_gourl"
}

build() {
  export GOPATH="$srcdir/go"  
  go build "$_gourl"
  CGO_ENABLED=1 go build -buildmode=pie -o "mount.gcsfuse" "$_gourl/tools/mount_gcsfuse"
}

package() {
  install -Dm 755 gcsfuse "${pkgdir}/usr/bin/gcsfuse"
  install -Dm 755 mount.gcsfuse "${pkgdir}/usr/bin/mount.gcsfuse"
  cd "${pkgdir}/usr/bin" && ln -s mount.gcsfuse mount.fuse.gcsfuse
}

