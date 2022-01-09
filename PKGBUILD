# Maintainer: Wouter Wijsman <wwijsman@live.nl>

pkgname=dosbox-staging
pkgver=0.78.1
pkgrel=1
epoch=1
pkgdesc="DOS/x86 emulator focusing on ease of use. Based on DOSBox"
arch=('any')
url="https://github.com/dosbox-staging/dosbox-staging"
license=('GPL2')
depends=('sdl2' 'sdl2_net' 'opusfile'  'alsa-lib' 'fluidsynth' 'libpng' 'munt' 'libslirp')
optdepends=('ncurses')
makedepends=('meson' 'ninja' 'gcc' 'gzip')
provides=("dosbox")
conflicts=("dosbox")
source=(
  "https://github.com/dosbox-staging/${pkgname}/archive/v${pkgver}.tar.gz"
)
sha256sums=('dcd93ce27f5f3f31e7022288f7cbbc1f1f6eb7cc7150c2c085eeff8ba76c3690')

prepare() {
  cd "$srcdir/${pkgname}-${pkgver}"
  meson setup --prefix /usr -Dbuildtype=release build
}

build() {
  cd "$srcdir/${pkgname}-${pkgver}"
  ninja -C build
}

package() {
  cd "$srcdir/${pkgname}-${pkgver}"

  # gzip the man file
  gzip -f "docs/dosbox.1" >  "docs/dosbox.1.gz"

  # install all files
  install -Dm 755 "build/dosbox" "$pkgdir/usr/bin/dosbox"
  install -Dm 644 "docs/dosbox.1.gz" "$pkgdir/usr/share/man/man1/dosbox.1.gz"

  # desktop file and icon
  install -Dm 644 "contrib/icons/dosbox-staging.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/dosbox-staging.svg"
  install -Dm 644 "contrib/linux/dosbox-staging.desktop" "$pkgdir/usr/share/applications/dosbox-staging.desktop"

  # dosbox-staging documents
  install -Dm 644 "README.md" "$pkgdir/usr/share/doc/${pkgname}/README"
  install -Dm 644 "docs/README.video" "$pkgdir/usr/share/doc/${pkgname}/video.txt"
  install -Dm 644 "README" "$pkgdir/usr/share/doc/${pkgname}/manual.txt"
}
