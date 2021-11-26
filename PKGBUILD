# Maintainer: Gaoyang Zhang <gy@blurgy.xyz>
pkgname=dt-cli-bin
pkgver=0.5.0
pkgrel=1
epoch=
pkgdesc="Syncing dotfiles and more"
arch=("x86_64")
url="https://github.com/blurgyy/dt"
license=('MIT OR Apache 2.0')
groups=()
depends=()
makedepends=(
    curl
)
checkdepends=()
optdepends=()
provides=("dt-cli")
conflicts=("dt-cli" "dt-cli-git")
replaces=()
backup=()
options=()
install=
changelog=
source=(
    "https://github.com/blurgyy/dt/releases/download/v$pkgver/dt-cli-v$pkgver"
    "https://raw.githubusercontent.com/blurgyy/dt/v$pkgver/LICENSE-APACHE"
    "https://raw.githubusercontent.com/blurgyy/dt/v$pkgver/LICENSE-MIT"
)
sha256sums=(
    "26d67d08d1365d5e1f30d36725fb51861fddabee7057dde4945b6c2b100a00da"
    "c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c"
    "1aac13b1e305a9a4f6a8a5a7123f3abd092c59b2696d1bde3df32eac0b934322"
)
noextract=()
validpgpkeys=()

package() {
    install -Dm755 "dt-cli-v$pkgver" "$pkgdir/usr/bin/dt-cli"
    install -Dm644 "LICENSE-APACHE" "$pkgdir/usr/share/licenses/dt/LICENSE-APACHE"
    install -Dm644 "LICENSE-MIT" "$pkgdir/usr/share/licenses/dt/LICENSE-MIT"
}
