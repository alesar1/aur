# Maintainer: kitsunyan <kitsunyan@inbox.ru>

pkgname=pakku
pkgver=0.9
pkgrel=1
pkgdesc='Pacman wrapper with AUR support'
arch=('x86_64')
url="https://github.com/kitsunyan/$pkgname"
license=('GPL3')
depends=('libcurl.so' 'git')
makedepends=('nim')
backup=('etc/pakku.conf')
source=("$url/releases/download/v$pkgver/$pkgname-$pkgver.tar.xz")
sha256sums=('7776faac7b2856c81d60ea09f9a431d5f62faf8d22bb3e2f604e8bd612baab39')

build() {
  local addargs=()
  grep -Fxq debug <<< "`printf '%s\n' "${options[@]}"`" &&
  addargs=(NIM_TARGET='debug' NIM_OPTIMIZE='none')

  cd "$srcdir/$pkgname-$pkgver"
  make "${addargs[@]}" NIM_CACHE_DIR='../nimcache' PREFIX='/usr'
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make PREFIX='/usr' DESTDIR="$pkgdir" install
}
