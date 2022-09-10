# Maintainer: Lex Childs <lexchilds@gmail.com>
# Maintainer: hertg <aur@her.tg>
pkgname=leftwm-git
pkgver=0.3.0.r31.g0986691
pkgrel=0
epoch=0
pkgdesc="Leftwm - A tiling window manager for the adventurer"
arch=('i686' 'x86_64')
url="https://github.com/leftwm/leftwm"
license=('MIT')
makedepends=('cargo' 'git')
optdepends=('dmenu: default launcher'
            'feh: used to set background images'
            'lemonbar: light weight bar'
            'polybar: light weight bar')
provides=('leftwm')
conflicts=('leftwm')
source=("${pkgname}::git+https://github.com/leftwm/leftwm.git")
md5sums=('SKIP')

build() {
  cd $pkgname
  cargo build --release
}

pkgver() {
  cd "$pkgname"
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

package() {
  cd $pkgname/target/release
  install -Dm755 leftwm leftwm-worker lefthk-worker leftwm-state leftwm-check leftwm-command -t "$pkgdir"/usr/bin

  install -d "$pkgdir"/usr/share/leftwm
  cp -R "$srcdir"/$pkgname/themes "$pkgdir"/usr/share/leftwm

  install -Dm644 "$srcdir"/$pkgname/leftwm.desktop "$pkgdir"/usr/share/xsessions/leftwm.desktop
}
