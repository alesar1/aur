# Maintainer: Vadim Yanitskiy <axilirator@gmail.com>
pkgname=libfftranscode
pkgver=0.3
pkgrel=1
pkgdesc="Proprietary library for ASN.1 APER <-> BER transcoding of RUA/RANAP/HNBAP/S1AP"
arch=('x86_64')
url="http://ftp.osmocom.org/binaries/libfftranscode/"
license=('proprietary')
groups=('devel')
source=("http://ftp.osmocom.org/binaries/${pkgname}/${pkgname}-dev_${pkgver}_amd64.deb"
        "http://ftp.osmocom.org/binaries/${pkgname}/${pkgname}0_${pkgver}_amd64.deb"
	"libfftranscode.pc")
md5sums=("88c83c41fb3136b518e323a827987985"
         "22e949d93831b13d01bbe2c917aceed9"
         "8bec20223f254ba236f3821ceca718b9")

exz() {
	ar x $1
	tar xJf data.tar.xz
	rm data.tar.xz
}

package() {
	exz "${srcdir}/${pkgname}-dev_${pkgver}_amd64.deb"
	exz "${srcdir}/${pkgname}0_${pkgver}_amd64.deb"

	mkdir -p "${pkgdir}/usr/local/lib"
	mv "${srcdir}/usr/lib/x86_64-linux-gnu/libfftranscode.so.0.0.0" "${pkgdir}/usr/local/lib/"
	ln -s "${pkgdir}/usr/local/lib/libfftranscode.so.0.0.0" "${pkgdir}/usr/local/lib/libfftranscode.so.0"
	ln -s "${pkgdir}/usr/local/lib/libfftranscode.so.0.0.0" "${pkgdir}/usr/local/lib/libfftranscode.so"

	mkdir -p "${pkgdir}/usr/local/lib/pkgconfig"
	install -D "${srcdir}/libfftranscode.pc" "${pkgdir}/usr/local/lib/pkgconfig/"

	mkdir -p "${pkgdir}/usr/local/include"
	mv "${srcdir}/usr/include/fftranscode/" "${pkgdir}/usr/local/include/"
}
