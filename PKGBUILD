# Maintainer: Lubomir 'Kuci' Kucera <kuci24-at-gmail-dot-com>

pkgname=oclhashcat
_pkgname=oclHashcat
pkgver=1.37
pkgrel=1
pkgdesc="Worlds fastest password cracker with dictionary mutation engine"
url=('http://hashcat.net/oclhashcat/')
arch=('i686' 'x86_64')
license=('custom')
depends=('catalyst-utils=14.9' 'opencl-catalyst=14.9')
source=("http://hashcat.net/files/${_pkgname}-${pkgver}.7z")
sha512sums=('74d5ef5be20357e706bfbff496a60e8c2d90b33e93981bca398d04099645bef0ec8df9b77f179bb770312966f788a2fe7a486abdf9a3e7bee7b0204d2d900902')
options=('!strip')
replaces=('oclhashcat-amd')
conflicts=('oclhashcat-amd')

package() {
    find "${srcdir}/${_pkgname}-${pkgver}" \( -name "*.cmd" -o -name "*.exe" \) -print | xargs -i rm {}
    mkdir -p "${pkgdir}/opt" "${pkgdir}/usr/bin"
    if [ "${CARCH}" = "x86_64" ]; then
        rm "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}32.bin"
        mv "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}64.bin" "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}"
    else
        rm "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}64.bin"
        mv "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}32.bin" "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}"
    fi
    echo -e "#!/bin/bash\n/opt/${_pkgname}/${_pkgname} \$@" > "$pkgdir/usr/bin/${_pkgname}"
    chmod a+x "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}" "$pkgdir/usr/bin/${_pkgname}"
    cp -r "${srcdir}/${_pkgname}-${pkgver}" "${pkgdir}/opt/${_pkgname}"
    chmod 666 ${pkgdir}/opt/${_pkgname}/kernels/*/*
    install -d -m777 "${pkgdir}/opt/${_pkgname}"
}
