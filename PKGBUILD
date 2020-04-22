# Maintainer: Max Strübing <mxstrbng@gmail.com>
pkgname=dotenv-linter-bin
pkgver=1.1.2.1
pkgrel=1
pkgdesc="Linter for .env files. Written in Rust"
arch=('x86_64')
url="https://github.com/mgrachev/dotenv-linter"
license=('MIT')
provides=('dotenv-linter')
conflicts=('dotenv-linter-git')
makedepends=('curl')
md5sums=('SKIP')

source=("https://github.com/mgrachev/dotenv-linter/releases/download/v${pkgver}/dotenv-linter-linux-x86_64.tar.gz")

package() {
  # Extract binary
  tar xzf dotenv-linter-linux-x86_64.tar.gz
  # Install binary
  install -Dm 755 "dotenv-linter" "${pkgdir}/usr/bin/dotenv-linter"
}
