# Maintainer: CleanMachine1 <cleanmachine1@duck.com>

pkgname=tldr-git
pkgver=1.4.2+7.gc5a1b0d70f
pkgrel=1
pkgdesc="C++ command line client for tldr"
arch=('i686' 'x86_64' 'armv6h')
url="https://github.com/tldr-pages/tldr-cpp-client"
license=('MIT')
depends=('curl' 'libzip')
makedepends=('git' 'make' 'clang' 'curl' 'libzip')
source=("git+$url")
md5sums=('SKIP')
conflicts=('tldr')
provides=('tldr')

pkgver() {
  cd "$(basename $url)"
  git describe --long --abbrev=10 | sed 's/^v//; s/-/+/; s/-/./'
}

build() {
  cd "$srcdir/$(basename $url)"
  make
}

package() {
  cd "$srcdir/$(basename $url)"
  install -Dm755 tldr "$pkgdir/usr/bin/tldr"
}
