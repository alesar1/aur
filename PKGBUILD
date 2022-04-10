# Maintainer: Amish <contact at via dot aur>
# Contributor: Iacopo Isimbaldi <isiachi@rhye.it>
# Contributor: Lubomir Krajcovic <lubomir.krajcovic(AT)gmail(DOT)com>
# Contributor: Vladimir Kutyavin <vlkut(AT)bk(DOT)ru>
pkgname=xtables-addons-dkms
pkgver=3.19
pkgrel=2
pkgdesc='DKMS for additional extensions for Xtables packet filter present in the Linux kernel'
arch=('i686' 'x86_64')
license=('GPL2')
url="https://inai.de/projects/xtables-addons/"
depends=('dkms')
optdepends=('perl-text-csv-xs: required for building GeoIP database'
            'perl-net-cidr-lite: required for building GeoIP database'
            'wget: required for building GeoIP database'
            'unzip: required for building GeoIP database')
conflicts=(xtables-addons xtables-addons-git xtables-addons-multikernel)
replaces=(xtables-addons xtables-addons-git xtables-addons-multikernel)
source=(https://inai.de/files/${pkgname%-dkms}/${pkgname%-dkms}-${pkgver}.tar.xz
        pde_data.patch
        dkms.conf)
sha256sums=('5e36ea027ab15a84d9af1f3f8e84a78b80a617093657f08089bd44657722f661'
            'e8faa20d7f2a082246e651c7f7194e84e1722cc0c40db7a9300e8f2ecae42e92'
            '87546f6d100a33271086d3bc990a2a1e4de83e25fb4a048774c520f4c36729e6')

prepare() {
    # go to builddir
    cd "${srcdir}/xtables-addons-${pkgver}"

    # disable install-exec-hook (avoids useless calling of depmod -a at 'make install' stage)
    sed -i 's/^install-exec-hook:$/dont-run:/' Makefile.am
    # disable building of xt_ECHO (it's an example module, and it breaks the build)
    sed -i 's/^build_ECHO=.*$/build_ECHO=n/' mconfig

    patch -p1 < "${srcdir}/pde_data.patch"
}

build() {
    cd "${srcdir}/xtables-addons-${pkgver}"

    # build userspace parts
    ./autogen.sh
    ./configure \
        --prefix=/usr \
        --sysconfdir=/etc \
        --bindir=/usr/bin \
        --sbindir=/usr/bin \
        --libdir=/usr/lib \
        --mandir=/usr/share/man \
        --docdir=/usr/share/doc \
        --libexecdir=/usr/lib/xtables \
        --with-xtlibdir=/usr/lib/xtables \
        --without-kbuild
    make
}

package() {
    cd "${srcdir}/xtables-addons-${pkgver}"

    # prepare dkms build tree
    dkmsDst="${pkgdir}/usr/src/xtables-addons-${pkgver}"
    mkdir -p "${dkmsDst}/"
    cp -R . "${dkmsDst}/"

    # prepare dkms config
    cp "${srcdir}/dkms.conf" "${dkmsDst}/"
    sed -i -e "s/@VERSION@/${pkgver}/" "${dkmsDst}/dkms.conf"

    make DESTDIR="${pkgdir}" install
}
