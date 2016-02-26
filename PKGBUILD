# Maintainer: Tarn Burton <twburton at gmail dot com>
pkgname='pioneer'
pkgver=20160225
pkgrel=1
pkgdesc="A game of lonely space adventure"
arch=('i686' 'x86_64')
url="https://github.com/pioneerspacesim/pioneer"
license=('GPL')
provides=('pioneer')
conflicts=('pioneer-bin' 'pioneer-git')
depends=('libsigc++' 'sdl2_image' 'freetype2' 'libvorbis' 'assimp' 'hicolor-icon-theme' 'xdg-utils')
makedepends=('gcc' 'git' 'automake' 'pkg-config' 'naturaldocs')
source=("http://github.com/pioneerspacesim/pioneer/archive/$pkgver.zip" 'pioneer.desktop')
md5sums=('6beafa1b12b7994ccb0eb771b8c85f79'
         'f2301fe8850926b2d9bd89e3ab1158a8')
install=pioneer.install

build() {
  cd "$pkgname-$pkgver"
  export PIONEER_DATA_DIR=/usr/share/pioneer
  ./bootstrap
  ./configure --prefix=/usr
  make
  make codedoc
}

package() {
  cd "$pkgname-$pkgver"
  export PIONEER_DATA_DIR=/usr/share/pioneer
  make DESTDIR="$pkgdir" install
  install -Dm644 "$srcdir/pioneer.desktop" "$pkgdir/usr/share/applications/pioneer.desktop"
  for icon in application-icon/pngs/*
  do
    if [[ $icon =~ pioneer-([0-9]+x[0-9]+).png ]]; then
      install -Dm644 $icon "$pkgdir/usr/share/icons/hicolor/${BASH_REMATCH[1]}/apps/pioneer.png"
    fi
  done
  install -Dm644 "application-icon/badge-enlarged-text.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/pioneer.svg"
  mkdir -p "$pkgdir/usr/share/doc/pioneer"
  cp -R codedoc/* "$pkgdir/usr/share/doc/pioneer"
}
