# Maintainer: Gabriel-Andrew Pollo-Guilbert <gabrielpolloguilbert@gmail.com>

pkgname=peak-linux-driver
pkgver=8.7.0
pkgrel=1
pkgdesc='Linux driver for PEAK CAN adapter'
arch=('x86_64')
url='https://www.peak-system.com/fileadmin/media/linux/index.htm'
license=('GPL2')
depends=('dkms')
source=(
    "https://www.peak-system.com/fileadmin/media/linux/files/${pkgname}-${pkgver}.tar.gz"
    "dkms.conf"
)
sha256sums=(
    "6d1ad9e6feb75719feb926bf1c78caeaa84663855945866e749d92cc83758b73"
    "20bffab516811f77d0f0f258c7b31939e93e10c82888b37ea2656e579052d5bc"
)

package() {
    # move source files into /usr/src
    install -d "${pkgdir}/usr/src/${pkgname}-${pkgver}"
    cp -r "${pkgname}-${pkgver}/." "${pkgdir}/usr/src/${pkgname}-${pkgver}/"

    # copy dkms.conf
    install -Dm644 dkms.conf "${pkgdir}/usr/src/${pkgname}-${pkgver}/dkms.conf"

    # set name and version and dkms.conf
    sed -e "s/@PKGNAME@/${pkgname}/" \
        -e "s/@PKGVER@/${pkgver}/" \
        -i "${pkgdir}/usr/src/${pkgname}-${pkgver}/dkms.conf"
}


