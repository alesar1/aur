# Maintainer: Zach Hoffman <zach@zrhoffman.net>

pkgname=(flashplugin-debug pepper-flash-debug)
pkgver=32.0.0.330
pkgrel=1
pkgdesc="Adobe Flash Player debugger"
arch=('x86_64')
url="https://www.adobe.com/support/flashplayer/debug_downloads.html"
license=('custom' 'LGPL')
options=('!strip')
source=(flash_player_npapi_linux_debug_$pkgver.x86_64.tar.gz::https://fpdownload.macromedia.com/pub/flashplayer/updaters/32/flash_player_npapi_linux_debug.x86_64.tar.gz
        flash_player_ppapi_linux_debug_$pkgver.x86_64.tar.gz::https://fpdownload.macromedia.com/pub/flashplayer/updaters/32/flash_player_ppapi_linux_debug.x86_64.tar.gz)
noextract=(${source[@]%::*})
sha256sums=('2b4c140a2e105003ab6dc02671c0554cf526d130c80619c636c9edf0cc0df0cc'
            '47a75e06d13231f7b8d264308bd8474854b116517bdeada9eb421300e847a7a5')

prepare() {
  local _dir
  for f in ${noextract[@]}; do
    _dir=$(grep -Eo '([np]papi)' <<< $f)
    mkdir -p $_dir
    tar xfC $f $_dir
  done
}

package_flashplugin-debug() {
  pkgdesc+=" NPAPI"
  depends=('libxt' 'gtk2' 'nss' 'curl' 'hicolor-icon-theme')
  optdepends=('libvdpau: GPU acceleration on Nvidia cards')
  provides=("flashplugin=${pkgver}")
  conflicts=('flashplugin')

  cd npapi
  install -Dm644 libflashplayer.so "$pkgdir/usr/lib/mozilla/plugins/libflashplayer.so"
  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" license.pdf LGPL/notice.txt

  install -D -t "$pkgdir/usr/bin" usr/bin/flash-player-properties
  cp -a usr/share/{applications,icons} "$pkgdir/usr/share/"

}

package_pepper-flash-debug() {
  pkgdesc+=" PPAPI"
  depends=('gcc-libs')
  optdepends=('flashplugin-debug: settings utility')
  provides=("pepper-flash=${pkgver}")
  conflicts=('pepper-flash')

  cd ppapi
  install -Dm644 -t "$pkgdir/usr/lib/PepperFlash" manifest.json libpepflashplayer.so
  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" license.pdf LGPL/notice.txt
}

# vim:set ts=2 sw=2 et:
