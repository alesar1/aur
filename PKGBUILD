# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=faktory-bin
pkgver=1.0.1
pkgrel=1
pkgdesc="High-performance job processing for the polyglot enterprise"
arch=("x86_64")
url="https://github.com/contribsys/faktory"
license=("GPL3")
depends=("redis")
provides=("faktory")
conflicts=("faktory" "faktory-git")
source=("$pkgname-$pkgver.deb::$url/releases/download/v$pkgver-1/faktory_$pkgver-1_amd64.deb")
sha256sums=("9383024b6e3e3d18e4a892755e4fe3a7c7ad2e74af1c16b22da5d86e85b85e95")

prepare() {
  bsdtar xf data.tar.bz2
}

package() {
  mv usr "$pkgdir"
}
