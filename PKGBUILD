# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

pkgname=pingo
pkgver=0.49b
pkgrel=1
pkgdesc="An experimental, visually lossless –or lossy and fast PNG/JPG optimizer (uses wine)"
arch=('i686' 'x86_64')
url="http://css-ig.net/pingo/"
license=('unknown')
depends=('wine')
options=('!strip')
source=("${pkgname}-${pkgver}.zip"::"http://css-ig.net/tools/${pkgname}.zip"
        "https://raw.githubusercontent.com/bermond/shellutils/master/image/${pkgname}")
noextract=("${pkgname}-${pkgver}.zip")
sha256sums=('73da4be1811ddd204e1f807db64239848420a18e38c7f4ffc38c9be8d69c07a4'
            '454d976b5b8fdf146f19228ddec5e532f22eabe68d825ac44a153584db2646e9')

prepare() {
	mkdir -p "${pkgname}-${pkgver}"
	cd       "${pkgname}-${pkgver}"
	bsdtar -x -f ../"${pkgname}-${pkgver}.zip"
}

package() {
	install -D -m755 "$pkgname"                            "${pkgdir}/usr/bin/${pkgname}"
	install -D -m644 "$pkgname"-"${pkgver}/${pkgname}.exe" "${pkgdir}/usr/share/${pkgname}/${pkgname}.exe"
}
