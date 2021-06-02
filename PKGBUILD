# Maintainer: meister1593 <leruop@gmail.com>

pkgname=xidlehook-git
_pkgname=xidlehook
pkgver=0.10.0.r3.g5c6cd2f
pkgrel=1
pkgdesc="xautolock rewrite in Rust, with a few extra features"
url="https://gitlab.com/jD91mZM2/xidlehook"
arch=("x86_64" "aarch64")
license=("MIT")
makedepends=("git" "rust" "libxss" "python")
provides=("xidlehook")
conflicts=("xidlehook")
depends=("libpulse")
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --tags --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$srcdir/$_pkgname"
    cargo build --release
}

package() {
    cd "$srcdir/$_pkgname"
    install -Dm 644 "LICENSE" "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
    install -Dm 755 -t "$pkgdir/usr/bin" "target/release/$_pkgname"{,-client}
}
