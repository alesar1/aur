# Maintainer: Petr Špaček <petr.spacek@nic.cz>
# Contributor: Bruno Pagani <archange@archlinux.org>
# Contributor: Ondřej Surý <ondrej@sury.org>
# Contributor: Julian Brost <julian@0x4a42.net>
# Contributor: Oleander Reis <oleander@oleander.cc>
# Contributor: Otto Sabart <seberm[at]gmail[dot]com>

pkgname=knot-git
pkgver=2.8.dev.1551283912.4015475b0
pkgrel=1
pkgdesc="High-performance authoritative-only DNS server, development build"
arch=('x86_64')
url="https://www.knot-dns.cz/"
license=('GPL3')
depends=('libedit' 'gnutls' 'liburcu' 'lmdb'
         'libidn2' 'systemd' 'libcap-ng'
         'fstrm' 'protobuf-c' 'libmaxminddb')
makedepends=('git' 'automake' 'autoconf' 'make' 'libtool' 'pkg-config')
provides=("${pkgname%-git}=${pkgver}")
conflicts=("${pkgname%-git}")
backup=('etc/knot/knot.conf')
source=("git+https://gitlab.labs.nic.cz/knot/knot-dns.git")
sha256sums=('SKIP')
options=(!strip debug)
_gitname='knot-dns'

pkgver() {
    cd "${_gitname}"
    ./autogen.sh &>/dev/null
    ./configure \
        --prefix=/usr \
        --sbindir=/usr/bin \
        --sysconfdir=/etc \
        --localstatedir=/var/lib \
        --libexecdir=/usr/lib/knot \
        --with-rundir=/run/knot \
        --with-storage=/var/lib/knot \
        --enable-recvmmsg \
        --enable-dnstap \
        --enable-systemd \
        --enable-reuseport \
        --disable-silent-rules &>/dev/null
    grep 'PACKAGE_VERSION' src/config.h | sed 's/.*"\(.*\)"/\1/'
}

build() {
    cd "${_gitname}"

    make
}

check() {
    cd "${_gitname}"
    make check
}

package() {
    cd "${_gitname}"

    make DESTDIR="${pkgdir}" install

    # Don’t keep those empty dir, manage them with systemd-tmpfiles instead
    rmdir "${pkgdir}"/{var/{lib/{knot/,},},run/{knot/,}}

    rm "${pkgdir}"/etc/knot/example.com.zone
    mv "${pkgdir}"/etc/knot/{knot.sample.conf,knot.conf}

    install -Dm644 distro/common/knot.service -t "${pkgdir}"/usr/lib/systemd/system/
    install -Dm644 distro/arch/knot.tmpfiles.arch "${pkgdir}"/usr/lib/tmpfiles.d/${pkgname}.conf
    install -Dm644 distro/arch/knot.sysusers "${pkgdir}"/usr/lib/sysusers.d/${pkgname}.conf
}
