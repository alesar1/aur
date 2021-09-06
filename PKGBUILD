# Maintainer: Thaodan <AUR+me@thaodan.de>
pkgname=warcraftlogsuploader
pkgdesc='Warcraft Logs Uploader'
_electron=electron11
pkgver=5.5.1
pkgrel=1
arch=('any')
url='https://github.com/RPGLogs/Uploaders-warcraftlogs'
license=('custom')
makedepends=('asar')
depends=($_electron sh)
source=("$url/releases/download/v$pkgver/Warcraft-Logs-Uploader-$pkgver.AppImage" "warcraftlogsuploader.desktop")
sha512sums=('f446af1fab5436dffffdc122242dd272d6656c46267b9b92356ab82e15a7d97c040e5e20c40ca7cb7c673999479dc28d37b55e7ca22951708b27b30b1e01093f'
            '2362bd563e08e20a75d7c8942574d43fe08ae04d68ddc4f20b64d6e6fc315c6b106b78cb3fb07e2361930584353e3a23b69322939c94edef075af8a74ba26086')


prepare() {
  :
}

build() {
  local _source0=${source[0]##*/}
  chmod +x $_source0
  ./$_source0 --appimage-extract
  asar extract squashfs-root/resources/app.asar $pkgname


  sed -e 's/showDevTools: true/showDevTools: false/' -i $pkgname/main.js

  cat > warcraftlogsuploader.sh <<EOF
#!/bin/sh
exec $_electron /usr/lib/$pkgname "\$@"x
EOF
chmod +x warcraftlogsuploader.sh
}

package() {
  install -dm 755 "$pkgdir"/usr/lib/$pkgname
  cp --archive --no-preserve=ownership\
     $pkgname "$pkgdir"/usr/lib
  install -Dm644 $pkgname/LICENSE.md "$pkgdir"/usr/share/licenses/$appname/LICENSE.md
  rm "$pkgdir"/usr/lib/$pkgname/LICENSE.md
  install -dm755 "$pkgdir"/usr/share/icons/hicolor
  install -Dm755 warcraftlogsuploader.sh "$pkgdir"/usr/bin/warcraftlogsuploader
  cp --archive \
     --no-preserve=ownership \
     squashfs-root/usr/share/icons/hicolor/* "$pkgdir"/usr/share/icons/hicolor
  find "$pkgdir"/usr/share/icons/hicolor -type d -exec chmod 755 {} \;

  install -Dm644 warcraftlogsuploader.desktop "$pkgdir"/usr/share/applications/warcraftlogsuploader.desktop
}
