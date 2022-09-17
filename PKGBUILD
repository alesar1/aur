# Maintainer: Thaodan <AUR+me@thaodan.de>
pkgname=warcraftlogsuploader
pkgdesc='Warcraft Logs Uploader'
_electron=electron
pkgver=5.9.3
pkgrel=1
arch=('any')
url='https://github.com/RPGLogs/Uploaders-warcraftlogs'
license=('custom')
makedepends=('asar')
depends=($_electron sh)
source=("$url/releases/download/v$pkgver/Warcraft-Logs-Uploader-$pkgver.AppImage" "warcraftlogsuploader.desktop")
sha512sums=('24203a832fc5cdacec0b9f0ae78459b99751c16aa2fac0810f1f272572c94f1e94e5af36f491db874e090f782fd57d51e5fde71fbda6369b5dc1a9cb9f10547d'
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
