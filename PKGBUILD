# Maintainer: Ruben De Smet <rdesmeta at etrovub dot be>
# Based on wingide (pro) by: Grey Christoforo <first name [at] last name [dot] net>

pkgname=wingide-101
pkgver=6.1.5
pkgrel=1
pkgdesc="Wing 101 is a very simple free Python IDE designed for teaching beginning programmers. It omits most features found in Wing Pro."
arch=(x86_64)
url="https://wingware.com/downloads/wingide-101"
license=('custom')
depends=('python')
install=${pkgname}.install

source=(https://wingware.com/pub/wingide-101/$pkgver/wingide-101-$pkgver-$pkgrel-x86_64-linux.tar.bz2)

sha256sums=('813393827ee59f90c021ac61e076f77a4b4ed0318d1f26cb72f2edc79e2ec331')

# prepare() {
# }

package() {
    cd $srcdir/$pkgname-$pkgver-$pkgrel-x86_64-linux/
    python wing-install.py \
        --install-binary \
        --winghome "${pkgdir}/opt/${pkgname}" \
        --bin-dir "${pkgdir}/usr/bin"

    # Correct the WINGHOME environment variable
    sed -i "s|${pkgdir}||" ${pkgdir}/opt/${pkgname}/wingdbstub.py
    sed -i "s|${pkgdir}||" ${pkgdir}/opt/${pkgname}/wing-101

    chown -R root:root "${pkgdir}/opt/${pkgname}"
    chmod +x ${pkgdir}/opt/${pkgname}/resources/linux/desktop/install-linux-desktop.sh
    # Correct the WINGHOME environment variable
    chown -R root:root "${pkgdir}/opt/${pkgname}"
}
