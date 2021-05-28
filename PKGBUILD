# Maintainer: zandemax <hi (at) zdmx (dot) me>

pkgname=mestrenova-12
pkgver=12.0.4
pkgrel=1
pkgdesc="Widely used commercial NMR interpreter in Version 12.x"
arch=('x86_64')
url="https://www.mestrelab.com"
install=mestrenova.install
license=('custom:mestrelab')
depends=('libxi' 'glu' 'openssl-1.0')
conflicts=('mestrenova')
source=("https://mestrelab.com/downloads/mnova/linux/Ubuntu/18.04/mestrenova_12.0.4-22023_amd64.deb")

package() {
    tar -xvf data.tar.gz
    cp -R opt ${pkgdir}/opt

    install -D -m0644 ${pkgdir}/opt/MestReNova/license.txt "${pkgdir}/usr/share/licenses/mestrenova/LICENSE"
}
