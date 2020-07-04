# Maintainer: Antoine POPINEAU <antoine at popineau dot eu>

pkgname=greetd-tuigreet-git
pkgver=0.0.0.r39.b3d6df5
pkgrel=1

pkgdesc='A console UI greeter for greetd'
url='https://github.com/apognu/tuigreet'
license=(GPL3)

arch=(x86_64)
depends=()
makedepends=(git rust)

source=("git+${url}")
sha256sums=('SKIP')

pkgver() {
  cd tuigreet
  printf "0.0.0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd tuigreet
  cargo build --release
}

package() {
  install -Dm755 "${srcdir}/tuigreet/target/release/tuigreet" "${pkgdir}/usr/bin/tuigreet"
  install -Dm644 "${srcdir}/tuigreet/LICENSE" "${pkgdir}/usr/share/licenses/tuigreet/LICENSE"
}
