# Maintainer: Daniel Escoz <darkhogg+aur.nosqlbooster-mongodb@gmail.com>
pkgname=nosqlbooster-mongodb
pkgver=6.1.8
_majorver="$(echo $pkgver | sed -E 's/\..+$//')"
pkgrel=1
pkgdesc="Shell-centric GUI tool for MongoDB"
arch=('x86_64')
url="https://nosqlbooster.com"
license=('custom')
depends=(gconf libnotify libxss libxtst)
makedepends=()
optdepends=()
source=(nsqlb4m-${pkgver}.AppImage::https://nosqlbooster.com/s3/download/releasesv${_majorver}/nosqlbooster4mongo-${pkgver}.AppImage
        LICENSE)
noextract=(nsqlb4m-${pkgver}.AppImage)
md5sums=('22bd17adfffec7a1693538b0436d8d7f'
         'fab008e596133037239e4a206bba3ccf')
sha1sums=('336dc4e7b769c45ea27a1e2cb671d502abf19853'
          'de718440354eb3c4844eda1b90bf092dcec4cf87')
sha256sums=('3f2626f1125275fe1d87ec0edba0ad38d096229ba3e1a208f4ade4c57457bdb7'
            '1640d17baeee24279f7d998719e37a331c8e12627c755b4b250f1c95b16f032f')

build() {
  cd "$srcdir"

  chmod +x nsqlb4m-${pkgver}.AppImage
  ./nsqlb4m-${pkgver}.AppImage --appimage-extract

  chmod +x 'squashfs-root/nosqlbooster4mongo'

  sed -E \
    -e '/X-/d' \
    -e 's#^Exec=.*$#Exec=/opt/nosqlbooster-mongodb/nosqlbooster4mongo#' \
    -i 'squashfs-root/nosqlbooster4mongo.desktop'
}

package() {
  cd "$srcdir"

  install -d "${pkgdir}/opt"
  cp -r "squashfs-root/." "${pkgdir}/opt/nosqlbooster-mongodb/"
  rm -rf "${pkgdir}/opt/nosqlbooster-mongodb/usr/share"

  install -d "${pkgdir}/usr"
  cp -r "squashfs-root/usr/share/." "${pkgdir}/usr/share/"

  install -D 'squashfs-root/nosqlbooster4mongo.desktop' "${pkgdir}/usr/share/applications/nosqlbooster4mongo.desktop"
  find "$pkgdir" -type d -exec chmod 755 {} +

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
