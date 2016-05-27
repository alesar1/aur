# Maintainer: Pablo Couto <pablo at 0x221e dot net>
# Contributor: Alan Young <harleypig at gmail dot com>
# Contributor: Phil Pirozhkov <pirjsuka at gmail dot com>
#
# This PKGBUILD is based on the one written by Alan Young <harleypig at gmail
# dot com> (https://github.com/harleypig/abs/tree/463a8ac/aur/taskd-git)

pkgname=taskd-git
pkgver=1.2.0
pkgrel=1
_branch=1.2.0
pkgdesc="A lightweight secure server providing multi-user, multi-client
 access to task data"
url='http://tasktools.org/projects/taskd.html'
license=('MIT')

install=taskd.install

source=("${pkgname}::git+https://git.tasktools.org/scm/tm/taskd.git#branch=${_branch}"
        'taskd.conf'
        'taskd.notes')

sha256sums=('SKIP'
            '5e518f8dda08c8b8d564f2a52452227924ebb15ec8182e7af83cc1f82cfa4cf1'
            '61911b0af9bbdfd4aca5f462823e46951328ef2e8a0f21428ac52d164d2ebf38')

arch=('i686' 'x86_64' 'armv6h' 'armv7h')
backup=('etc/conf.d/taskd')
depends=('libutil-linux' 'gnutls')
makedepends=('git' 'cmake')
provides=('taskd')

pkgver() {
    cd "${pkgname}"
    git describe --long origin/$_branch | sed 's/^s//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}/${pkgname}"

    cmake_opts="${cmake_opts} -Wno-devs"
    cmake_opts="${cmake_opts} -DCMAKE_INSTALL_PREFIX=/usr"

    cmake $cmake_opts .
    make
}

check() {
    cd "${srcdir}/${pkgname}"
    make test
    cd test
    make
    ./run_all
}

package() {
    cd "${srcdir}/${pkgname}"

    make DESTDIR="${pkgdir}" install

    install -Dm644 LICENSE \
            "${pkgdir}/usr/share/licenses/taskd-git/LICENSE"
    install -Dm644 ../taskd.conf \
            "${pkgdir}/etc/conf.d/taskd"
    install -Dm644 ../taskd.notes \
            "${pkgdir}/usr/lib/taskd/taskd.notes"
    install -Dm755 pki/generate.ca \
            "${pkgdir}/usr/lib/taskd/pki/generate.ca"
    install -Dm755 pki/generate.client \
            "${pkgdir}/usr/lib/taskd/pki/generate.client"
    install -Dm755 pki/generate.crl \
            "${pkgdir}/usr/lib/taskd/pki/generate.crl"
    install -Dm755 pki/generate \
            "${pkgdir}/usr/lib/taskd/pki/generate"
    install -Dm755 pki/generate.server \
            "${pkgdir}/usr/lib/taskd/pki/generate.server"
    install -Dm644 pki/vars \
            "${pkgdir}/usr/lib/taskd/pki/vars"
    install -Dm644 pki/README \
            "${pkgdir}/usr/lib/taskd/pki/README"
    install -Dm644 scripts/systemd/taskd.service \
            "${pkgdir}/usr/lib/systemd/system/taskd.service"
}
