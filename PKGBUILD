# Maintainer: Akatsuki Rui <akiirui@outlook.com>

_pkgname="mpv-handler"
pkgname="mpv-handler-git"
pkgver=0.2.13.r0.g1ef30ab
pkgrel=2
pkgdesc="Play website videos and songs with mpv & youtube-dl."
arch=("x86_64")
depends=("mpv")
optdepends=(
  "youtube-dl: ytdl-hook support"
  "yt-dlp: alternatives ytdl-hook support"
)
makedepends=("cargo" "git")
install="mpv-handler.install"
url="https://github.com/akiirui/mpv-handler/"
license=("MIT")
provides=("mpv-handler")
conflicts=("mpv-handler")
source=("git+https://github.com/akiirui/mpv-handler.git")
b2sums=('SKIP')
epoch=1

pkgver() {
  cd "$srcdir/$_pkgname"

  git describe --long --tags | sed "s/^v//;s/\([^-]*-g\)/r\1/;s/-/./g"
}

build() {
  cd "$srcdir/$_pkgname"

  RUSTUP_TOOLCHAIN=stable MPV_HANDLER_VERSION=$pkgver cargo build --locked --release --target-dir target
}

package() {
  cd "$srcdir/$_pkgname"

  install -Dm755 "target/release/mpv-handler" "$pkgdir/usr/bin/mpv-handler"
  install -Dm644 "share/config.toml" "$pkgdir/etc/mpv-handler/config.toml"
  install -Dm644 "share/linux/mpv-handler.desktop" "$pkgdir/usr/share/applications/mpv-handler.desktop"

  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
