# Maintainer: pureboys <yuyuud@yuyuud@gmail.com>

pkgname='kikoplay'
pkgver='master'
pkgrel=1
pkgdesc="linux danmaku player"
arch=('x86_64')
license=('GPL3')
url="https://github.com/Protostars/KikoPlay"
depends=('mpv' 'qt5-base' 'qhttpengine')
makedepends=('make' 'gcc' 'cmake')
source=(
    ${pkgname}-${pkgver}.zip::"https://github.com/pureboys/KikoPlay/archive/${pkgver}.zip"
)
md5sums=(
    "ae9795f53f4496320817257fb02492cf"
)


build() {
    cd ${srcdir}/KikoPlay-${pkgver}
    qmake 
    make
}

package() {
    install -dm755 "${pkgdir}/opt/${pkgname}"
	chmod -R 755 ${srcdir}/KikoPlay-${pkgver}/KikoPlay
	cp -rf ${srcdir}/KikoPlay-${pkgver}/KikoPlay "${pkgdir}/opt/kikoplay/kikoplay"
	chmod -R 755 "${pkgdir}/opt/kikoplay/kikoplay"
  	cp -rf ${srcdir}/KikoPlay-${pkgver}/web ${pkgdir}/opt/${pkgname}/web
}
