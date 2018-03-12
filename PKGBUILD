# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

pkgname=mpv-prescalers-git
pkgver=r117.e93d8b3
pkgrel=1
pkgdesc="User shaders for prescaling in mpv"
arch=('any')
url="https://github.com/bjin/mpv-prescalers/tree/master"
license=('LGPL3')
depends=('mpv-build-git')
source=("git+https://github.com/bjin/mpv-prescalers.git")
sha256sums=('SKIP')

pkgver() {
  cd mpv-prescalers
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  bash $srcdir/mpv-prescalers/gen.sh
}

package() {
  cd "$srcdir"
  install -Dm644 "$srcdir/mpv-prescalers/LICENSE" "$pkgdir/usr/share/licenses/mpv-prescalers/LICENSE"
  install -Dm644 "$srcdir/mpv-prescalers/README.md" "$pkgdir/usr/share/doc/mpv-prescalers/README.md"
  install -d "$pkgdir/usr/share/mpv-prescalers"
  
  for file in $(find $srcdir -type f -name "*.hook" | sed 's/.*\///'); do
    install -Dm644 $file "$pkgdir/usr/share/mpv-prescalers/$file"
  done

}

