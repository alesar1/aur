# Maintainer: Sebastian Krzyszkowiak <dos@dosowisko.net>
# Contributor: Alexander F. Rødseth <xyproto@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: arjan <arjan@archlinux.org>

pkgname=allegro-git
pkgver=r11492.96c3d24c8
pkgrel=1
pkgdesc='Portable library mainly aimed at video game and multimedia programming'
arch=(x86_64)
url='https://liballeg.org/'
license=('ZLIB')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
makedepends=(cmake git glu libtheora mesa-libgl ninja opusfile pandoc)
depends=(dumb gtk2 jack libgl libpulse libtheora libwebp libxpm libxxf86dga opusfile physfs)
source=("git+https://github.com/liballeg/allegro5.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/allegro5"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  mkdir -p build
  cd build
  cmake "../allegro5" \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DWANT_DOCS_HTML=OFF \
    -G Ninja
  ninja
}

package() {
  DESTDIR="$pkgdir" ninja -C build install
  install -Dm644 "allegro5/LICENSE.txt" \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  # Fix man path
  mv -v -f "$pkgdir/usr/man" "$pkgdir/usr/share/man"
}

# getver: liballeg.org/a5docs/trunk
# vim: ts=2 sw=2 et:
