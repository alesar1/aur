# Maintainer: Eli Schwartz <eschwartz@archlinux.org>
# Contributor: Iacopo Isimbaldi <isiachi@rhye.it>

# All my PKGBUILDs are managed at https://github.com/eli-schwartz/pkgbuilds

pkgname=zfs-dkms
pkgver=2.0.4
pkgrel=2
pkgdesc="Kernel modules for the Zettabyte File System."
arch=('any')
url="https://zfsonlinux.org/"
license=('CDDL')
conflicts=('spl-dkms')
provides=("ZFS-MODULE=${pkgver}" "SPL-MODULE=${pkgver}" 'spl-dkms')
# ambiguous, provided for backwards compat, pls don't use
provides+=('zfs')
replaces=('spl-dkms')
source=("https://github.com/zfsonlinux/zfs/releases/download/zfs-${pkgver}/zfs-${pkgver}.tar.gz"{,.asc}
        "https://github.com/openzfs/zfs/pull/12009/commits/938a7a375b2c18fef621fb30d71bec0c19e94142.patch"
        "https://github.com/openzfs/zfs/pull/12009/commits/8122746cc52741e2d010aa0ad8e0f15ab24bbf28.patch"
        "0001-only-build-the-module-in-dkms.conf.patch")
sha256sums=('7d1344c5433b91823f02c2e40b33d181fa6faf286bea5591f4b1965f23d45f6c'
            'SKIP'
            '6650bcaf8c1ebe23a0f749feeaf316b75148a76549129deba5f65d4555b2b874'
            '61595dd8b1e3fa4c7ca61a67a6960135ee11710d80f9fe6bec7071acece84028'
            '780e590383fb00389c5e02ac15709b7a476d9e07d3c4935ed9eb67c951a88409')
b2sums=('7e4780092c0a87d5d187cd5734ddc736574db80b500f155287640ef2230e09335cc9b6b26ec1b7d8ab1b7942673ea49a3007a81da372a6d2ac36f3908913045c'
        'SKIP'
        '195fe600d859ac6832891b5c938b2d55e22cfbbf8da56772e884d436ace9b48c8571015d1440884efc1e531294e8ef95ce45d69a22a93ef62e1016e497856a3f'
        'd6e67e037375dc99a3caacec257901c5678b08e42fa2158ce8d8bd0b93d47b9bd69b95042bac7a58bf987c155107fe80c93b57c0cd38e4065dbac24ac409cc54'
        '1fdae935043d979b9241f07f8baa25a9a0367c24c31c84a59dfe8d6b468a523d8f49b68da3c7fd3194db6638f9d7bef046fc5e2669ce25d73c65009c16bf6c50')
validpgpkeys=('4F3BA9AB6D1F8D683DC2DFB56AD860EED4598027'  # Tony Hutter (GPG key for signing ZFS releases) <hutter2@llnl.gov>
              'C33DF142657ED1F7C328A2960AB9E991C6AF658B') # Brian Behlendorf <behlendorf1@llnl.gov>

prepare() {
    cd "${srcdir}"/${pkgname%-dkms}-${pkgver}

    patch -p1 -i ../0001-only-build-the-module-in-dkms.conf.patch

    # Kernel 5.12 compat, https://github.com/openzfs/zfs/pull/12009
    patch -p1 -i ../938a7a375b2c18fef621fb30d71bec0c19e94142.patch
    patch -p1 -i ../8122746cc52741e2d010aa0ad8e0f15ab24bbf28.patch

    # remove unneeded sections from module build
    sed -ri "/AC_CONFIG_FILES/,/]\)/{
/AC_CONFIG_FILES/n
/]\)/n
/^\s*(module\/.*|${pkgname%-dkms}.release|Makefile)/!d
}" configure.ac

    autoreconf -fi
}

build() {
    cd "${srcdir}"/${pkgname%-dkms}-${pkgver}

    ./scripts/dkms.mkconf -n ${pkgname%-dkms} -v ${pkgver} -f dkms.conf
}

package() {
    depends=("zfs-utils=${pkgver}" 'dkms')

    cd "${srcdir}"/${pkgname%-dkms}-${pkgver}

    dkmsdir="${pkgdir}/usr/src/${pkgname%-dkms}-${pkgver}"
    install -d "${dkmsdir}"/{config,scripts}
    cp -a configure dkms.conf Makefile.in META ${pkgname%-dkms}_config.h.in ${pkgname%-dkms}.release.in include/ module/ "${dkmsdir}"/
    cp config/compile config/config.* config/missing config/*sh "${dkmsdir}"/config/
    cp scripts/enum-extract.pl scripts/dkms.postbuild "${dkmsdir}"/scripts/
}
