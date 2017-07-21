# Maintainer: rafaelff <rafaelff@gnome.org>

_name=teeworlds-ddnet
pkgname=${_name}-git
pkgver=10.6.7.r17.b8e997f99
pkgrel=1
pkgdesc="A customized version by DDRaceNetwork of this 2D shooting game"
arch=('i686' 'x86_64')
url="https://ddnet.tw"
license=('custom')
depends=('alsa-lib' 'glu' 'sdl2' 'freetype2' 'opusfile' 'curl')
makedepends=('git' 'bam' 'imagemagick' 'gendesk')
optdepends=('teeworlds-ddnet-skins: more skins for your tee'
            'teeworlds-ddnet-maps-git: mainly important for DDNet Server')
provides=('teeworlds')
conflicts=('teeworlds')
source=("$pkgname::git+https://github.com/ddnet/ddnet"
        "git+https://github.com/ddnet/ddnet-libs")
source_i686=("https://ddnet.tw/downloads/GraphicsTools-linux_x86.tar.gz")
source_x86_64=("https://ddnet.tw/downloads/GraphicsTools-linux_x86_64.tar.gz")
md5sums=('SKIP' 'SKIP')
md5sums_x86_64=('fc32ca52ae9be02f68b6c257153dbd37')
md5sums_x86_64=('fc32ca52ae9be02f68b6c257153dbd37')

pkgver() {
  cd $pkgname
  v=$(grep GAME_RELEASE_VERSION src/game/version.h | cut -d\" -f2)
  _commit=$(git log --pretty=oneline | grep "Version $v" | cut -d' ' -f1)
  r=$(git log $_commit..HEAD --pretty=oneline | wc -l)
  h=$(git rev-parse --short HEAD)
  printf $v.r$r.$h
}

prepare() {
      # Client
    convert "$pkgname/other/icons/DDNet.ico" "$srcdir/$_name.png"
    gendesk -f -n --pkgname "$_name" --pkgdesc "$pkgdesc" \
        --name 'Teeworlds' --categories 'Game;ArcadeGame'
    
      # Server
    convert "$pkgname/other/icons/DDNet-Server.ico" "$srcdir/${_name}_srv.png"
      # This desktop file, combined with 'teeworlds-ddnet-maps-git' pkg will
      # run DDNet Server with all votes, maps etc. -- no score/ranking, though
    gendesk -f -n --pkgname "${_name}_srv" --pkgdesc "DDNet Server"          \
        --name 'DDNet Server' --categories 'Game;ArcadeGame' --terminal=true \
        --exec='sh -c "cd /usr/share/teeworlds/data && teeworlds-ddnet_srv"'
     
    cd $pkgname
    git submodule init
    git config submodule.ddnet-libs.url "$srcdir/ddnet-libs"
    git submodule update
}

build() {
  cd $pkgname
  bam release
}

package() {
  cd $pkgname
    
    # Install DDNet client/server binaries
  install -Dm755 DDNet           "$pkgdir/usr/bin/teeworlds-ddnet"
  install -Dm755 DDNet-Server    "$pkgdir/usr/bin/teeworlds-ddnet_srv"
  install -Dm755 config_store    "$pkgdir/usr/bin/ddnet-config_store"
  install -Dm755 config_retrieve "$pkgdir/usr/bin/ddnet-config_retrieve"
    # Install Graphic Tools binaries
  install -Dm755 ../dilate            "$pkgdir/usr/bin/dilate"
  install -Dm755 ../tileset_borderadd "$pkgdir/usr/bin/tileset_borderadd"
  install -Dm755 ../tileset_borderfix "$pkgdir/usr/bin/tileset_borderfix"
  install -Dm755 ../tileset_borderrem "$pkgdir/usr/bin/tileset_borderrem"
  install -Dm755 ../tileset_borderset "$pkgdir/usr/bin/tileset_borderset"
  
    # Install data files
  mkdir -p "$pkgdir/usr/share/teeworlds/data"
  cp -r data/* "$pkgdir/usr/share/teeworlds/data"
  
    # Install desktop and icon files
  install -Dm644 ../teeworlds-ddnet.desktop     "$pkgdir/usr/share/applications/teeworlds-ddnet.desktop"
  install -Dm644 ../teeworlds-ddnet_srv.desktop "$pkgdir/usr/share/applications/teeworlds-ddnet_srv.desktop"
  install -Dm644 ../teeworlds-ddnet-5.png       "$pkgdir/usr/share/pixmaps/teeworlds-ddnet.png"
  install -Dm644 ../teeworlds-ddnet_srv-8.png   "$pkgdir/usr/share/pixmaps/teeworlds-ddnet_srv.png"
  
    # Install license files
  install -Dm644 license.txt "$pkgdir/usr/share/licenses/$pkgname/license.txt"
}
