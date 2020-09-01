# Contributor: archtux <antonio dot arias99999 at gmail dot com>
# Contributor: andy123 < ajs [at] online [dot] de >
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Linus Sjögren <thelinx@unreliablepollution.net>
# Contributor: Eric Forgeot < http://anamnese.online.fr >, dreeze
# Contributor: SanskritFritz (gmail)
# Maintainer: Parker Reed <parker.l.reed@gmail.com>

pkgname=love07
pkgver=0.7.2
pkgrel=6
pkgdesc="An open-source 2D game engine which uses the versatile Lua scripting language to create dynamic gaming experiences."
arch=('i686' 'x86_64')
url="http://love2d.org/"
license=('zlib')
depends=('desktop-file-utils' 'devil' 'freetype2' 'hicolor-icon-theme' 'libmodplug' 'libvorbis' 'luajit' 'mpg123' 'openal' 'physfs' 'sdl' 'shared-mime-info' 'libgl')
install=$pkgname.install
source=("https://github.com/love2d/love/releases/download/0.7.2/love-0.7.2-linux-src.tar.gz"
        "https://raw.githubusercontent.com/love2d/love/0.7.2/license.txt"
        "https://raw.githubusercontent.com/love2d/love/0.7.2/platform/unix/app.svg"
        "https://raw.githubusercontent.com/love2d/love/0.7.2/platform/unix/game.svg"
        "love.desktop"
        "love07.patch"
        "https://raw.githubusercontent.com/love2d/love/0.7.2/platform/unix/love.xml")
sha256sums=('a57adcb0cbdc390a9bd8e2fe477bc175799b9ffd3486e01f859a36bf27f7f268'
            'c4cb43c06ab89c84349704a62849e9e66bf0c245e8a4df4f9068204124de1845'
            'b8116c4cc8d7b80adba579b582b9570d8178f93d3d9e35977d621e03500b8a7f'
            '7452bc537980d6fdd6293d8bdaedbfa68264fa9bb160503d9b1ad16c8278b6af'
            'd045b6c1aeb8fdb9ec33c75d204e0698f34e863063c274633b79e8b1b7f7a302'
            '6b63906f9dabc9c000ddce32bec7020e89f51e88425d1eb940a533dd9b9ab09b'
            '5b72ae3818ada71ec7fd69c2a27126dc5c759257e1ff203639655c389a24ccb1')

prepare() {
  cd "$srcdir/love-HEAD"

  patch -p1 < ../love07.patch

  # Fix for freetype2 and variants(ubuntu, infinality etc...)
  FILE="/usr/include/freetype2/freetype/freetype.h"
  if [ -f $FILE ];
  then
    sed -i 's|<freetype|<freetype2/freetype|' src/modules/font/freetype/{Font,TrueTypeRasterizer}.h
  else
    sed -i 's|<freetype|&2|' src/modules/font/freetype/{Font,TrueTypeRasterizer}.h
  fi
  
  # Fix mesa 10 GLee.h(thanks to ajs124)
  sed -i '70itypedef XID GLXContextID;' "src/modules/graphics/opengl/GLee.h"
  
  ./configure --prefix=/usr --enable-luajit --program-suffix=07
}

build() {
  cd "$srcdir/love-HEAD"
  make
}

package() {
  cd "$srcdir/love-HEAD"

  make DESTDIR=$pkgdir install

  cd ..
  install -Dm644 license.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 love.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
}
