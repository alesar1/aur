# Maintainer: neeshy <neeshy@tfwno.gf>
# Contributor: maz-1 <ohmygod19993 at gmail dot com>
_pkgname=rlvm
pkgname="$_pkgname-git"
pkgver=latest
pkgrel=1
pkgdesc="RealLive clone for Linux and OSX. Git version."
arch=('x86_64')
url="http://www.rlvm.net/"
license=('GPL')
depends=('boost-libs>=1.46' 'glew' 'libmad' 'libogg' 'libvorbis' 'libpng'
         'sdl_mixer' 'sdl_image' 'sdl_ttf' 'guichan' 'gtk2')
makedepends=('git' 'scons' 'boost')
provides=('rlvm')
conflicts=('rlvm')
source=("git+https://github.com/eglaysher/rlvm.git"
        "memory.patch")
sha256sums=('SKIP'
            '05b4c17fe4132b3877b53ba34076c4f21b0982d40ec134400697a51f7ea52226')

pkgver() {
  cd "$srcdir/$_pkgname"
  printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/$_pkgname"
  patch -Np1 -i "$srcdir/memory.patch"
}

build() {
  cd "$srcdir/$_pkgname"
  scons --release
}

package() {
  cd "$srcdir/$_pkgname"

  install -Dm755 build/release/rlvm "$pkgdir/usr/bin/rlvm"
  install -Dm644 src/platforms/gtk/rlvm.desktop "$pkgdir/usr/share/applications/rlvm.desktop"

  local _i
  for _i in 16 24 32 48 128 256; do
    install -Dm644 "resources/$_i/rlvm.png" "$pkgdir/usr/share/icons/hicolor/${_i}x${_i}/apps/rlvm.png"
  done
}
