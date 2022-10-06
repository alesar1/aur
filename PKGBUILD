# Maintainer: Logan Magee <mageelog@gmail.com>
# Contributor: Randy Ramos <rramos1295@gmail.com>

_pkgname=Responder
pkgname=responder
pkgver=3.1.3.0
pkgrel=2
pkgdesc='A LLMNR, NBT-NS and MDNS poisoner, with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue authentication server supporting NTLMv1/NTLMv2/LMv2, Extended Security NTLMSSP and Basic HTTP authentication'
arch=('any')
depends=('python' 'python-netifaces')
makedepends=('git')
url='https://github.com/lgandx/responder/'
license=('GPL3')
source=("https://github.com/lgandx/Responder/archive/refs/tags/v${pkgver}.tar.gz"
        'responder.sh'
        'responder.patch')
sha256sums=('3058d1a8505eeaed93a5ff9fca222b0491a9c87e7d971d1c3455496dcbb51e02'
            '3feef53e8c408439bc518474264b91919f9a43593f3bbf656958b9a8a216bc4b'
            '609160b1f0bb45803a1fb2cc18dd2262d1956352b6adb9b2e839de232ac4183f')

prepare() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    patch -p1 -i "${srcdir}/${pkgname}.patch"
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"

    # Install directory and contents
    install -d "${pkgdir}/usr/share/${pkgname}"
    install -d "${pkgdir}/var/log/${pkgname}"
    install -d "${pkgdir}/var/lib/${pkgname}"
    cp -ar * "${pkgdir}/usr/share/${pkgname}/"

    # Docs
    install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
    install -Dm644 LICENSE "${pkgdir}/usr/share/doc/${pkgname}/LICENSE"

    # Script
    install -Dm755 "${srcdir}/responder.sh" "${pkgdir}/usr/bin/${pkgname}"
}
