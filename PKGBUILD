# Contributor: Roey Darwish Dror <roey.ghost@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=topgrade-git
pkgver=10.2.1.r1263.73888e7
pkgrel=1
pkgdesc='Invoke the upgrade procedure of multiple package managers'
arch=('x86_64' 'aarch64' 'armv7')
url=https://github.com/topgrade-rs/topgrade
license=('GPL3')
depends=('gcc-libs')
makedepends=('cargo' 'git')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  printf %s.r%s.%s $(grep ^version Cargo.toml|cut -d\" -f2) $(git rev-list --count HEAD) $(git describe --always)
}

build() {
  cd ${pkgname%-git}
  export CARGO_TARGET_DIR=target
  cargo build --release 
}

package() {
  cd ${pkgname%-git}
  
  install -Dm755 target/release/${pkgname%-git} "$pkgdir"/usr/bin/${pkgname%-git}
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
