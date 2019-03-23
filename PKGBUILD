# Maintainer: Brenton Horne <brentonhorne77 at gmail dot com>

pkgname=openra-d2-git
_pkgname=openra-d2
pkgver=134.git.69a4aa7
pkgrel=1
pkgdesc="A Dune II-inspired mod of OpenRA"
arch=('any')
url="https://github.com/OpenRA/d2"
license=('GPL3')
install=openra-d2.install
depends=('mono' 'ttf-dejavu' 'openal' 'libgl' 'freetype2' 'sdl2' 'lua51' 'hicolor-icon-theme' 'gtk-update-icon-cache'
         'desktop-file-utils' 'xdg-utils' 'zenity')
makedepends=('dos2unix' 'git' 'unzip')
provides=('openra-d2')
options=(!strip)
source=("git+${url}.git"
"openra-d2"
"openra-d2.appdata.xml"
"openra-d2.desktop")
md5sums=('SKIP'
         'f883c23d492f8c930aca5ad2c3624cc2'
         'e6c82533bf669122fd26f2d60ed97a6f'
         'ad2adc9f6f5f756492371b38c996d44c')

pkgver() {
    cd $srcdir/d2
    no=$(git rev-list --count HEAD)
    hash=$(git log | head -n 1 | cut -d ' ' -f 2 | head -c 7)
    printf "${no}.git.${hash}"
}

prepare() {
    cd $srcdir/d2
    dos2unix *.md
    chmod +x *.sh
    make version VERSION="${pkgver}"
}

build() {
    cd $srcdir/d2
    make
}

package() {
    cd $srcdir/d2
    mkdir -p $pkgdir/usr/{lib/${_pkgname}/mods,bin,share/pixmaps,share/doc/packages/openra-d2,share/applications,share/appdata}
    install -dm775 $pkgdir/var/games/openra-d2
    cp -r engine/{glsl,lua,AUTHORS,COPYING,Eluant.dll*,FuzzyLogicLibrary.dll,GeoLite2-Country.mmdb.gz,'global mix database.dat',ICSharpCode.SharpZipLib.dll,launch-dedicated.sh,launch-game.sh,MaxMind.Db.dll,OpenAL-CS.dll,OpenAL-CS.dll.config,Open.Nat.dll,OpenRA.Game.exe,OpenRA.Platforms.Default.dll,OpenRA.Server.exe,OpenRA.Utility.exe,rix0rrr.BeaconLib.dll,SDL2-CS.dll,SDL2-CS.dll.config,SharpFont.dll,SharpFont.dll.config,VERSION} $pkgdir/usr/lib/openra-d2
    cp -r mods/d2 $pkgdir/usr/lib/${_pkgname}/mods
    cp -r engine/mods/{common,modcontent,d2k,cnc,ra} $pkgdir/usr/lib/${_pkgname}/mods
    install -Dm755 $srcdir/openra-d2 $pkgdir/usr/bin/openra-d2
    cp -r $srcdir/openra-d2.appdata.xml $pkgdir/usr/share/appdata/openra-d2.appdata.xml
    cp -r README.md $pkgdir/usr/share/doc/packages/${_pkgname}/README.md
    ln -sf /usr/lib/${_pkgname}/mods/d2/icon.png ${pkgdir}/usr/share/pixmaps/${_pkgname}.png
    install -Dm644 $srcdir/openra-d2.desktop $pkgdir/usr/share/applications/openra-d2.desktop
#    mkdir -p $pkgdir/usr/share/icons/hicolor/{16x16,32x32,48x48,64x64,134x134,256x256}/apps
#    for size in 16 32 48 64 134 256; do
#      size="${size}x${size}"
#      cp packaging/linux/mod_${size}.png "$pkgdir/usr/share/icons/hicolor/${size}/apps/openra-d2.png"
#    done
    rm $pkgdir/usr/lib/${_pkgname}/*.sh
}
