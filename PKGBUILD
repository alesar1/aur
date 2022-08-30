# Maintainer: Kevin MacMartin <prurigro@gmail.com>

pkgname=riftshare
pkgver=0.1.9
pkgrel=1
pkgdesc='Easy, Secure, and Free file sharing for everyone'
url='https://riftshare.app'
license=('GPL3')
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
depends=('webkit2gtk')
makedepends=('go')

source=(
  "https://github.com/achhabra2/$pkgname/archive/refs/tags/v${pkgver}.tar.gz"
  'settings-config.patch'
  "$pkgname.desktop"
  "$pkgname.png"
)

sha512sums=(
  'a391b25dabf166bf44a58415c37be4f7aa4ef10ff2e38caafc185af4b1af9e31d208152dd3fa84369c2aaaf108123a9d20f7a84eb6a882e78a7f9c34065ee5a7'
  '5ce8dfc4adbfcb548e43778449b3ca2c2b6b70a23981f3bd55ed47a4b7ce79e2f42041cccfa3f2a36cb2664f0952598ee49ee003741883bf1be6b2fce467ca4d'
  '714e50355d19ee7d46c3f5d0db2d128e6c8df14465d8fc614d687ab02c01d534f92c406fb8bd520bfb45bab7f73179d222d526bb13b1b04ac37900f894db195c'
  '18b748db7b08bfeb301fc973119deb67aa118fd632f5c0297c0daff0c678700cc935801af9ca71e178b65d45c531e2b41891119502290e849d9e9ace8b9fd3c7'
)

prepare() {
  rm -rf pkg
  cd $pkgname-$pkgver
  patch -p1 < ../settings-config.patch
}

build() {
  export GOPATH="$srcdir"
  cd $pkgname-$pkgver

  go build \
    -trimpath \
    -buildmode=pie \
    -buildvcs=false \
    -mod=readonly \
    -modcacherw \
    -tags desktop,production \
    -ldflags "-linkmode external -extldflags \"${LDFLAGS}\"" \
    .
}

package() {
  install -Dm644 $pkgname.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 $pkgname.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
  cd $pkgname-$pkgver
  install -Dm755 $pkgname "$pkgdir/usr/bin/$pkgname"
}
