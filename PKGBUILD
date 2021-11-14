# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

_pkgname=FishFight
pkgname=fishfight-git
pkgver=r317.b913f25
pkgrel=1
pkgdesc="A tactical 2D shooter game"
arch=('x86_64')
url="https://github.com/fishfight/FishFight"
license=('MIT' 'Apache')
depends=('pkg-config' 'libx11' 'libxi' 'mesa-libgl' 'alsa-lib')
makedepends=('rust' 'git' 'cmake')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+${url}"
        "${pkgname%-git}.sh")
sha256sums=('SKIP'
            'e10f28372998d4863ad4ef511daac8930d5e8cf66fdda3c9acecd2caf33202b0')

pkgver() {
  cd "$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$_pkgname"
  cargo fetch --locked
}

build() {
  cd "$_pkgname"
  cargo build --release --frozen
}

check() {
  cd "$_pkgname"
  cargo test --frozen
}

package() {
  cd "$_pkgname"
  install -Dm 755 "target/release/${pkgname%-git}" -t "$pkgdir/usr/lib"
  install -Dm 755 "$srcdir/${pkgname%-git}.sh" "$pkgdir/usr/bin/${pkgname%-git}"

  mkdir -p "$pkgdir/opt/${pkgname%-git}"
  cp -r "assets" "$pkgdir/opt/${pkgname%-git}/"
  find "$pkgdir/opt/${pkgname%-git}/assets/sounds/" -type f -exec chmod 444 {} \;

  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
  install -Dm 644 docs/LICENSE-MIT -t "$pkgdir/usr/share/licenses/$pkgname"
}
