# Contributor: Lex Black <autumn-wind@web.de>
# Contributor: Alex Gentilucci <alexander.gentilucci@gmail.com>

pkgname=ft2-clone
pkgver=1.48
pkgrel=1
pkgdesc="portable Fasttracker II clone written in C"
arch=('x86_64')
url="https://16-bits.org/ft2.php"
license=("BSD")
makedepends=("libicns")
depends=("alsa-lib" "sdl2")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/8bitbubsy/ft2-clone/archive/v${pkgver}.tar.gz"
        "ft2-clone.desktop")
sha256sums=('cfc847b04f108303021faa562fb5cc1f2c4e5154dae054bdec0426888dbc195f'
            '6b0ff91766a04043ba6da99c88e1d529ecca9a9e296db4876df1a216136c489a')


prepare() {
  cd "$pkgname-$pkgver"
  icns2png -x "release/macos/ft2-clone-macos.app/Contents/Resources/ft2-clone-macos.icns"
  chmod +x "make-linux.sh"
}

build() {
  cd "$pkgname-$pkgver"
  ./make-linux.sh
}

package() {
  install -D -m 755 "$pkgname-$pkgver/release/other/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "$pkgname-$pkgver/src/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "ft2-clone.desktop" "$pkgdir/usr/share/applications/ft2-clone.desktop"
  install -Dm644 "$pkgname-$pkgver/ft2-clone-macos_256x256x32.png" "$pkgdir/usr/share/pixmaps/ft2-clone.png"
}
