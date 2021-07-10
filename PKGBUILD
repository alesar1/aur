# Maintainer: Wouter Wijsman <wwijsman@live.nl>

pkgname=dosbox-staging
pkgver=0.77.0
pkgrel=3
epoch=1
pkgdesc="DOS/x86 emulator focusing on ease of use. Based on DOSBox"
arch=('any')
url="https://github.com/dosbox-staging/dosbox-staging"
license=('GPL2')
depends=('sdl2' 'sdl2_net' 'opusfile'  'alsa-lib' 'fluidsynth')
optdepends=('libpng' 'ncurses' 'munt: mt32 support')
makedepends=('meson' 'ninja' 'gcc' 'gzip')
provides=("dosbox")
conflicts=("dosbox")
source=(
  "https://github.com/dosbox-staging/${pkgname}/archive/v${pkgver}.tar.gz"
)
sha256sums=(
	'85e1739f5dfd7d96b752b2b0e12aad6f95c7770b47fcdaf978d4128d7890d986'
)

prepare() {
  cd "$srcdir/${pkgname}-${pkgver}"
  meson setup --prefix /usr -Dbuildtype=release -Ddefault_library=static build
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
