pkgname=songrec
_pkgname=SongRec
pkgver=0.2.0
pkgrel=2
provides=('songrec')
conflicts=('songrec-git')
pkgdesc='An open-source, unofficial Shazam client for Linux, written in Rust.'
url='https://github.com/marin-m/SongRec'
arch=('x86_64')
license=('GPL3')
makedepends=('cargo' 'rust' 'pkgconf' 'git')
depends=('gtk3' 'alsa-lib' 'openssl' 'ffmpeg')
optdepends=('libpulse')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/marin-m/songrec/archive/${pkgver}.tar.gz")
sha256sums=('46bba562dde437c623a3a7f7296ef852507cf7a1b0872bddd1398f68506781f6')

build() {
  cd "$_pkgname-$pkgver"
  cargo build --locked --release
}

package() {
  cd "$_pkgname-$pkgver"
  install -Dm755 "${CARGO_TARGET_DIR:-target}/release/songrec" "$pkgdir/usr/bin/songrec"
  install -Dm755 "packaging/rootfs/usr/share/applications/com.github.marinm.songrec.desktop" "$pkgdir/usr/share/applications/com.github.marinm.songrec.desktop"
  install -Dm755 "packaging/rootfs/usr/share/icons/hicolor/scalable/apps/com.github.marinm.songrec.svg" \
                    "$pkgdir/usr/share/icons/hicolor/scalable/apps/com.github.marinm.songrec.svg"
  install -Dm755 "packaging/rootfs/usr/share/metainfo/com.github.marinm.songrec.metainfo.xml" \
                    "$pkgdir/usr/share/metainfo/com.github.marinm.songrec.metainfo.xml"
  mkdir -p "$pkgdir/usr/share/songrec"
  cp -ra "translations" "$pkgdir/usr/share/songrec/translations"
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
