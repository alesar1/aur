# Maintainer: Luke Street <luke@street.dev>

_pkgname=Ghidra-GameCube-Loader
pkgname=ghidra-extension-gamecube-loader-git
pkgver=1.1.2_1.r2.g52573c9
pkgrel=1
pkgdesc="A Nintendo GameCube binary loader for Ghidra"
arch=('x86_64')
url=https://github.com/Cuyler36/${_pkgname}
license=('Apache 2.0')
provides=()
conflicts=()
depends=('ghidra')
makedepends=('git' 'unzip')
optdepends=()
source=("$_pkgname::git+${url}")
sha512sums=('SKIP')

pkgver() {
  cd $srcdir/${_pkgname}
  git describe --tags --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd $srcdir/${_pkgname}
  rm -rf dist
  chmod +x gradlew
  ./gradlew -PGHIDRA_INSTALL_DIR=/opt/ghidra
}

package() {
  cd $srcdir/${_pkgname}
  install -d $pkgdir/opt/ghidra/Ghidra/Extensions
  # Extract built archive into destination folder
  unzip -u dist/*.zip -d $pkgdir/opt/ghidra/Ghidra/Extensions/
  install -Dm 644 LICENSE -t $pkgdir/usr/share/licenses/$pkgname
}
