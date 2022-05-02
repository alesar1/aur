# Maintainer: Alexander Sulfrian <asulfrian@zedat.fu-berlin.de>

_pkgbase=pivccu-modules
pkgname=${_pkgbase}-dkms
pkgver=1.0.68
pkgrel=2
pkgdesc="Kernel modules needed for Homematic"
arch=('x86_64' 'arm' 'armv6h' 'armv7h')
url="https://github.com/alexreinert/piVCCU/"
license=('GPL')
depends=('dkms')
makedepends=('dtc')
conflicts=("${_pkgbase}")
source=('pivccu::git+https://github.com/alexreinert/piVCCU#commit=04a72ced0287938c926dbecdc2eb6b506aa3dd50'
        'kernel-5-17.patch'
        'dkms.conf')
sha256sums=('SKIP'
            'bd0db7653c8c073449db2fcab02a08247301c281135a5945765ce6a35b35657e'
            '3f821472f7ea0d7e41f7182beb545312da6b03fbade7f00e44f376fdec98580b')

prepare() {
    cd pivccu
    patch --forward --strip=1 --input="${srcdir}/kernel-5-17.patch"
}

package() {
    install -Dm644 -t "${pkgdir}"/usr/src/${_pkgbase}-${pkgver}/ \
        pivccu/kernel/* dkms.conf

    # This is in the eq3_char_loop-dkms package
    sed -i '/eq3_char_loop/d' "${pkgdir}"/usr/src/${_pkgbase}-${pkgver}/Makefile

    # Set name and version in dkms.conf
    sed -e "s/@_PKGBASE@/${_pkgbase}/" \
        -e "s/@PKGVER@/${pkgver}/" \
        -i "${pkgdir}"/usr/src/${_pkgbase}-${pkgver}/dkms.conf
}

# vim:set sw=4 sts=4 et:
