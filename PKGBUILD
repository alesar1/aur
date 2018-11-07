# Contributor: Lari Tikkanen <lartza@wippies.com>
# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>

pkgname=teeworlds-git
pkgver=0.7.0.86.gbc481d4c
pkgrel=1
pkgdesc='Multiplayer 2D shooter'
arch=('x86_64')
url="http://teeworlds.com"
license=('custom')
depends=('alsa-lib' 'glu' 'mesa' 'gcc-libs' 'sdl2' 'freetype2')
makedepends=('python' 'git' 'bam' 'imagemagick')
provides=('teeworlds')
conflicts=('teeworlds')
source=(git+https://github.com/teeworlds/teeworlds.git
        git+https://github.com/teeworlds/teeworlds-translation.git
        git+https://github.com/teeworlds/teeworlds-maps.git)
md5sums=('SKIP'
         'SKIP'
         'SKIP')

pkgver() {
  cd teeworlds
  git describe | sed 's/-start//;s/-/./g'
}

prepare() {
  convert "teeworlds/other/icons/Teeworlds.ico" "$srcdir/teeworlds.png"

  cd teeworlds
  git submodule init
  git config submodule.data/languages.url "$srcdir/teeworlds-translation"
  git config submodule.data/maps.url "$srcdir/teeworlds-maps"
  git submodule update
}

build() {
  cd teeworlds
  bam client server
}

package() {
  cd teeworlds
  
  install -dm755 "$pkgdir"/usr/bin \
                 "$pkgdir"/usr/share/{applications,pixmaps,appdata} \
                 "$pkgdir"/usr/share/{licenses/teeworlds,teeworlds/data}
  
   # Install data files
  cp -r datasrc/* "$pkgdir"/usr/share/teeworlds/data

  install -m755 build/$CARCH/debug/teeworlds     "$pkgdir"/usr/bin/
  install -m755 build/$CARCH/debug/teeworlds_srv "$pkgdir"/usr/bin/

  install -m644 license.txt                 "$pkgdir/usr/share/licenses/teeworlds/"
  install -m644 other/teeworlds.appdata.xml "$pkgdir/usr/share/appdata/"
  install -m644 other/teeworlds.desktop     "$pkgdir/usr/share/applications/"
  install -m644 ../teeworlds-0.png          "$pkgdir/usr/share/pixmaps/teeworlds.png"

  install -Dm644 license.txt "${pkgdir}/usr/share/licenses/${pkgname}/license.txt"
}
