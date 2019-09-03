# Maintainer: Donald Webster <fryfrog@gmail.com>

pkgname=ipmiview
pkgver=2.16.0
_pkghash=190528
pkgrel=1
pkgdesc="Supermicro IPMI tool"
makedepends=('tar')
depends=("glibc" "java-runtime=8")
arch=('x86_64')
license=('custom:"Super Micro Computer"')
url="http://www.supermicro.com/products/nfo/ipmi.cfm"

backup=('account.properties'
        'email.properties'
        'IPMIView.properties'
        'timeout.properties')

source=("ipmiview.desktop")
source_x86_64=("https://www.supermicro.com/wftp/utility/IPMIView/Linux/IPMIView_${pkgver}_build.${_pkghash}_bundleJRE_Linux_x64.tar.gz")

sha256sums=('6a923aab3561e28e5d3f59acc7897bb51a2051f066dd925500498126c7fdf555')
sha256sums_x86_64=('8203bcdc56ca631421a93b71c37a954d3f26d818a32ae3e3c5dc6cab37c2e45f')

package() {
    cd ${srcdir}/IPMIView_${pkgver}_build.${_pkghash}_bundleJRE_Linux_x64

    # Remove bundled jre
    rm -rf jre/

    mkdir -p ${pkgdir}/opt/${pkgname}
    mkdir -p ${pkgdir}/usr/bin
    mkdir -p ${pkgdir}/usr/share/applications

    cp -rf . ${pkgdir}/opt/${pkgname}

    touch ${pkgdir}/opt/${pkgname}/timeout.properties
    touch ${pkgdir}/opt/${pkgname}/account.properties
    touch ${pkgdir}/opt/${pkgname}/email.properties
    touch ${pkgdir}/opt/${pkgname}/IPMIView.properties
    chmod a+rw ${pkgdir}/opt/${pkgname}/timeout.properties
    chmod a+rw ${pkgdir}/opt/${pkgname}/account.properties
    chmod a+rw ${pkgdir}/opt/${pkgname}/email.properties
    chmod a+rw ${pkgdir}/opt/${pkgname}/IPMIView.properties

    ln -s /opt/${pkgname}/IPMIView20 ${pkgdir}/usr/bin/${pkgname}
    install -m 0644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/"
}
