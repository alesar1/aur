# Maintainer: Kevin MacMartin <prurigro@gmail.com>

pkgname=responsively
pkgver=0.19.1
pkgrel=1
pkgdesc='A modified browser built using Electron that helps in responsive web development'
url='https://github.com/responsively-org/responsively-app'
license=('AGPL3')
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
depends=('zlib')
makedepends=('yarn')
options=('!strip')

source=(
  "https://github.com/responsively-org/responsively-app/archive/v$pkgver.tar.gz"
  "$pkgname.desktop"
  'fix-build.patch'
)

sha512sums=(
  '3eb8d65af7ed22662e8055ca549812c39489e8a862830983783c37792a0143dd6dea171f9526d30048b08b8d6d0f7461bcfa821b209d63ebd1c56d41dd924c56'
  'eebe6acbb675d8804d87e34f6a005f55268ef8927e7bb1c7199791dfdbd4c3839ffe61ba2e59c23359dc9cbbfd74bed9d9610d0cd71e9961666b8167b3a04c33'
  'fcdbf9bcd0b3ad34b43bd16dc1445939f996b2d40a747398ce9a07b03a9129baf788053138b93a47d6c2bfe8623d32e2c325b9f5397da5d28cdfdfaed958e49b'
)

prepare() {
  cd $pkgname-app-$pkgver
  patch -p1 < ../fix-build.patch
}

build() {
  cd $pkgname-app-$pkgver/desktop-app
  yarn install
  yarn package-linux
}

package() {
  install -Dm644 $pkgname.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
  cd $pkgname-app-$pkgver/desktop-app
  install -Dm644 resources/icon.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
  install -Dm755 release/ResponsivelyApp-${pkgver}.AppImage "$pkgdir/usr/bin/$pkgname"
}
