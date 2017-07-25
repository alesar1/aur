# Contributor: Lex Black <autumn-wind at web dot de>
# Contributor: xnitropl <xnitropl at gmail dot com>
# Contributor: Anton Larionov <diffident dot cat at gmail dot com>

pkgname=7kaa
pkgver=2.14.7
pkgrel=1
pkgdesc='Seven Kingdoms: Ancient Adversaries is a real-time strategy (RTS) computer game developed by Trevor Chan'
url='http://7kfans.com/'
arch=('i686' 'x86_64')
license=('GPL2')
depends=('openal' 'desktop-file-utils' 'enet' 'gcc-libs' 'sdl2')
optdepends=('7kaa-music')
conflicts=('7kaa-data')
provides=('7kaa-data')
source=("http://downloads.sourceforge.net/project/skfans/7KAA%20${pkgver}/${pkgname}-${pkgver}.tar.xz"
        "${pkgname}.sh"
        "${pkgname}.desktop"
        "${pkgname}.ico")
md5sums=('f044d7bd57e636b8b9ac33b728581a43'
         '8d0634b0962ad621a7608378d7172e02'
         '3fd08eeb86036fa9b18b91a91c62cb99'
         '996b0cdc8e4448ee456603c6640bb19b')


build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure
  make
}

package() {
  # install data files
  install -dm755 "${pkgdir}/opt/7kaa/"
  cd "${srcdir}/$pkgname-$pkgver/data/"
  cp -r {encyc,encyc2,image,resource,scenari2,scenario,sound,sprite,tutorial} "${pkgdir}/opt/7kaa/"

  # fix permissions
  cd "${pkgdir}/opt/7kaa/"
  find . -type d -exec chmod 755 {} \;

  # copy readme
  install -D -m644 "${srcdir}/$pkgname-$pkgver/README" "${pkgdir}/usr/share/doc/7kaa/README"

  # main file
  install -dm755 "${pkgdir}/opt/${pkgname}/"
  install -D -m755 "${srcdir}/${pkgname}-${pkgver}/src/client/${pkgname}" "${pkgdir}/opt/${pkgname}/${pkgname}"

  # bash script
  install -D -m755 "$srcdir/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"

  # desktop entry
  install -D -m644 "$srcdir/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D -m644 "${srcdir}/${pkgname}.ico" "${pkgdir}/usr/share/pixmaps/${pkgname}.ico"
}

# vim:set ts=2 sw=2 et:
