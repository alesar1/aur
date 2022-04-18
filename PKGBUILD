# Maintainer: Mazhar Hussain <mmazharhussainkgb1145@gmail.com>
pkgname=nautilus-code
__pkgver='0.1'
pkgver=${__pkgver/-/+}
pkgrel=1
pkgdesc="Adds right-click menu items to open current folder in VSCode or GNOME Builder"
arch=(any)
url="https://github.com/realmazharhussain/nautilus-code"
license=('AGPL3')
depends=('libnautilus-extension')
makedepends=('git' 'meson')
optdepends=("code: for 'Open in VSCode' menu item"
            "gnome-builder: for 'Open in Builder' menu item")
backup=()
source=("${pkgname}-${__pkgver}.tar.gz"::"$url/archive/refs/tags/v${__pkgver}.tar.gz")
md5sums=('dcaed238763737c11835fadc76ab6f30')

prepare() {
  cd "$srcdir/$pkgname-${__pkgver}"
}
build() {
   arch-meson --buildtype=release "${srcdir}/${pkgname}-${__pkgver}" build
}
check() {
  meson test -C build --print-errorlogs
}
package() {
  meson install -C build --destdir="$pkgdir"
}
