# Maintainer: Matt Bray <mattjbray@gmail.com>
pkgname=elm-format-0.17-bin
_source_pkgname=elm-format-0.17
pkgver=0.3.0_alpha
pkgrel=1
epoch=
pkgdesc="Format Elm source code according to a standard set of rules based on the official Elm Style Guide."
arch=('i686' 'x86_64')
url="https://github.com/avh4/elm-format"
license=('unknown')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=(elm-format)
conflicts=(elm-format-0.16-bin)
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/avh4/elm-format/releases/download/${pkgver//_/-}/$_source_pkgname-${pkgver//_/-}-linux-x64.tgz")
noextract=()
md5sums=(14c3848e8f8a524066f8ec9452a84294)
validpgpkeys=()

# prepare() {
# }
# 
# build() {
# }
# 
# check() {
# }

package() {
  install -Dm755 "elm-format" "$pkgdir/usr/bin/elm-format"
}
