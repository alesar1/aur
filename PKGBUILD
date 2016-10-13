# Maintainer: Michał Lisowski <lisu87@gmail.com>
pkgname=opensubtitles-uploader
pkgver=2.1.0
pkgrel=1
pkgdesc="Desktop app to upload subtitles to OpenSubtitles, using Node.JS and NWjs"
arch=('i686' 'x86_64')
url="http://blog.opensubtitles.eu/opensubtitlesorg/web/opensubtitles-uploader/"
license=('GPL3')
makedepends=('npm' 'gulp')
source=("${pkgname}::https://github.com/vankasteelj/${pkgname}/archive/${pkgver}.tar.gz"
        "${pkgname}.desktop"
        "${pkgname}.png")
md5sums=('e3d55b9f806b6ae336cd281cdf5c36bd'
         'f38a85d864e5aca6706a76adec1c5e86'
         'f8e90af7251e2c76a9d863e283aa3804')

prepare() {
  cd "$pkgname-$pkgver"
}

build() {
  cd "$pkgname-$pkgver"
  npm install
  gulp build
}

package() {
  cd "$pkgname-$pkgver"
  install -m 0755 -d ${pkgdir}/opt/${pkgname}
  install -m 0755 -d ${pkgdir}/usr/share/applications
  install -m 0755 -d ${pkgdir}/usr/share/icons
  install -m 0644 ${srcdir}/${pkgname}.desktop ${pkgdir}/usr/share/applications
  install -m 0644 ${srcdir}/${pkgname}.png ${pkgdir}/usr/share/icons
  cp -R build/${pkgname}/linux*/* ${pkgdir}/opt/${pkgname}
}
