# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=just-git
pkgver=0.3.3.1.gfcc27a9.335
pkgrel=2
pkgdesc="Just a command runner, like make."
arch=('x86_64' 'i686')
url="https://github.com/casey/just"
license=('custom:WTFPL' 'custom:MIT' 'APACHE')
depends=('gcc-libs')
makedepends=('cargo')
provides=('just')
conflicts=('just')
source=(git+https://github.com/casey/just.git)
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  echo $(git describe --tags|tr - .|tr -d v).$(git rev-list --count HEAD)
}

build() {
  cd ${pkgname%-git}
  cargo build --release
}

package() {
  cd ${pkgname%-git}
  install -Dm755 "$srcdir"/${pkgname%-git}/target/release/just "$pkgdir"/usr/bin/just
  install -Dm644 "$srcdir"/${pkgname%-git}/LICENSE.md "$pkgdir"/usr/share/licenses/$pkgname/LICENSE.md
}
