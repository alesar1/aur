# Maintainer: Gaoyang Zhang <gy@blurgy.xyz>
pkgname=dt-cli-bin
pkgver=0.7.0
pkgrel=1
epoch=
pkgdesc="\$HOME, \$HOME everywhere"
arch=("x86_64" "aarch64" "armv7l" "armv7h")
url="https://dt.cli.rs"
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

## Sources
_license_base="https://raw.githubusercontent.com/blurgyy/dt/v$pkgver/LICENSE"
source_x86_64=(
    "dt-cli-$pkgver::https://github.com/blurgyy/dt/releases/download/v$pkgver/dt-cli-v$pkgver-x86_64"
    "${_license_base}-APACHE"
    "${_license_base}-MIT"
)
source_aarch64=(
    "dt-cli-$pkgver::https://github.com/blurgyy/dt/releases/download/v$pkgver/dt-cli-v$pkgver-aarch64"
    "${_license_base}-APACHE"
    "${_license_base}-MIT"
)
source_armv7=(
    "dt-cli-$pkgver::https://github.com/blurgyy/dt/releases/download/v$pkgver/dt-cli-v$pkgver-armv7"
    "${_license_base}-APACHE"
    "${_license_base}-MIT"
)
# Sources are the same for armv7l and armv7h
source_armv7l=("${source_armv7[@]}")
source_armv7h=("${source_armv7[@]}")

## Checksums
sha256sums_aarch64=(
    "76c19c96e4a936407091e621b56b8ff5a3c575ebf458756d0c693e77a1d55641"
    "c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c"
    "1aac13b1e305a9a4f6a8a5a7123f3abd092c59b2696d1bde3df32eac0b934322"
)
sha256sums_armv7=(
    "3bcb0f463aff105bdf4228c614b6bc6828f5a5ed238e1e463f9fcdc220e35956"
    "c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c"
    "1aac13b1e305a9a4f6a8a5a7123f3abd092c59b2696d1bde3df32eac0b934322"
)
sha256sums_x86_64=(
    "d5a0bf736739da579ae68f98fc69d870a7ffb3ff28915a29f1bd9f384291e372"
    "c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c"
    "1aac13b1e305a9a4f6a8a5a7123f3abd092c59b2696d1bde3df32eac0b934322"
)
# Checksums are the same for armv7l and armv7h
sha256sums_armv7l=("${sha256sums_armv7[@]}")
sha256sums_armv7h=("${sha256sums_armv7[@]}")

noextract=()
validpgpkeys=()

## Packaging
package() {
    install -Dm755 dt-cli-$pkgver "$pkgdir/usr/bin/dt-cli"
    install -Dm644 "LICENSE-APACHE" "$pkgdir/usr/share/licenses/dt/LICENSE-APACHE"
    install -Dm644 "LICENSE-MIT" "$pkgdir/usr/share/licenses/dt/LICENSE-MIT"
}
