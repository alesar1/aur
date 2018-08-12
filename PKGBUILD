# Maintainer: Jean Lucas <jean@4ray.co>

pkgname=oxy-git
pkgver=3.0.0+dev1+102+g2f2abc9
pkgrel=1
pkgdesc='SSH-alike that uses the Noise protocol (git)'
arch=(i686 x86_64)
url=https://github.com/oxy-secure/oxy
license=(BSD)
makedepends=(git rust)
provides=(oxy)
conflicts=(oxy)
source=(git+$url)
sha512sums=(SKIP)

pkgver() {
  cd oxy
  echo "$(grep '^version =' Cargo.toml | head -n1 | cut -d\" -f2 | sed s/-/+/)+$(git rev-list --count HEAD)+g$(git describe --always)"
}

build() {
  cd oxy
  cargo build --locked --release
}

check() {
  cd oxy
  cargo test --locked --release || true
}

package() {
  cd oxy
  install -D target/release/oxy -t "$pkgdir"/usr/bin
  install -Dm 644 LICENSE -t "$pkgdir"/usr/share/licenses/oxy
}
