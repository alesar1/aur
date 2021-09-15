pkgname=fheroes2
pkgver=0.9.7
pkgrel=1
pkgdesc="Free remake of Heroes of Might and Magic II game engine"
arch=('i686' 'x86_64' 'armv7h')
url="https://ihhub.github.io/fheroes2/"
license=('GPL2')
depends=('sdl2' 'sdl2_image' 'sdl2_mixer')
optdepends=('curl: download demo version files'
            'wget: download demo version files'
            'unzip: unpack demo version files')
makedepends=('gettext')
conflicts=('fheroes2-git' 'fheroes2-svn')
source=(
  $pkgname-$pkgver.tar.gz::https://github.com/ihhub/$pkgname/archive/$pkgver.tar.gz
)
md5sums=(
  '75e26d10199bed15b9e7d02014f58df2'
)

build() {
  cd "$srcdir/$pkgname-$pkgver"
  export CFLAGS+=' -DCONFIGURE_FHEROES2_DATA=\"/usr/share/fheroes2\"'
  export CXXFLAGS+=' -DCONFIGURE_FHEROES2_DATA=\"/usr/share/fheroes2\"'
  make RELEASE=1 FHEROES2_IMAGE_SUPPORT=1
  make -C files/lang
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -Dm755 "src/dist/fheroes2" "$pkgdir/usr/bin/fheroes2"
  install -Dm644 "script/packaging/common/fheroes2.desktop" "$pkgdir/usr/share/applications/fheroes2.desktop"
  install -dm755 "$pkgdir/usr/share/fheroes2/files/lang"
  install -Dm644 files/lang/*.mo "$pkgdir/usr/share/fheroes2/files/lang"
  install -Dm755 "script/demo/demo_unix.sh" "$pkgdir/usr/share/fheroes2/demo_unix.sh"
  install -Dm644 "fheroes2.key" "$pkgdir/usr/share/fheroes2/fheroes2.key"
  install -dm755 "$pkgdir/usr/share/fheroes2/data"
  install -dm755 "$pkgdir/usr/share/fheroes2/maps"
  install -Dm644 src/resources/fheroes2.png "$pkgdir/usr/share/pixmaps/fheroes2.png"
}

# vim:set ts=2 sw=2 et:
