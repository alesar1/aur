# Maintainer: Sauyon Lee <me at sjl dot re>
pkgname=codeql
pkgver=2.3.3
pkgrel=1
epoch=
pkgdesc="The CLI tool for GitHub's CodeQL"
arch=('i686' 'x86_64')
url="https://github.com/codeql"
license=('custom')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname-v$pkgver.zip::https://github.com/github/codeql-cli-binaries/releases/download/v$pkgver/$pkgname-linux64.zip")
sha256sums=('3a0b6d6de1c7adee53d6d22adc49f3c49d5113449d11a4a8c7e0ebea9dd31ebd')

noextract=()

prepare() {
  cd "$srcdir"

  ln -sf "lib64trace.so" "codeql/tools/linux64/libtrace.so"
}

package() {
  cd "$srcdir"

  install -Dm644 codeql/LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  install -dm755 "$pkgdir/opt"
  cp -r "codeql" "$pkgdir/opt/$pkgname"

  install -dm755 "$pkgdir/usr/bin"
  ln -s "../../opt/$pkgname/codeql" "$pkgdir/usr/bin/codeql"
}

# vim:set ts=2 sw=2 et:
