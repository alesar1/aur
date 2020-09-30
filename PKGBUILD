# Maintainer:	Tomas Krizek <tomas.krizek@nic.cz>
# Contributor:	Ondřej Surý <ondrej@sury.org>

pkgname=knot-resolver
pkgver=5.1.3
pkgrel=2
pkgdesc='full caching DNS resolver implementation'
url='https://www.knot-resolver.cz/'
arch=('x86_64' 'armv7h')
license=('GPL3')
backup=('etc/knot-resolver/kresd.conf')
options=(debug strip)
install=install
depends=(
    'dnssec-anchors'
    'gnutls'
    'knot>=2.8'
    'libedit'
    'libuv'
    'lmdb'
    'luajit'
    'systemd'
    'libcap-ng'
)
optdepends=(
    'lua51-basexx: experimental_dot_auth module',
    'lua51-cqueues: http and dns64 module, policy.rpz() function',
    'lua51-http: http and prefill modules, trust_anchors bootstrap',
    'lua51-psl: policy.slice_randomize_psl() function',
)
makedepends=(
    'cmocka'
    'meson'
    'systemd-libs'
)

source=("https://secure.nic.cz/files/${pkgname}/${pkgname}-${pkgver}.tar.xz")

sha256sums=('20cd829027e39a9f7d993894e3640e886825b492d9ac1a744ac5616cc101458b')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    meson build_arch \
        --buildtype=release \
        --prefix=/usr \
        --sbindir=bin \
        -Dkeyfile_default=/etc/trusted-key.key \
        -Dsystemd_files=enabled \
        -Dclient=enabled \
        -Dinstall_kresd_conf=enabled \
        -Dunit_tests=enabled
    ninja -C build_arch
}

check() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    meson test -C build_arch
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    DESTDIR=${pkgdir} ninja -C build_arch install

    # add kresd.target to multi-user.target.wants to support enabling kresd services
    install -d -m 0755 "${pkgdir}/usr/lib/systemd/system/multi-user.target.wants"
    ln -s ../kresd.target "${pkgdir}/usr/lib/systemd/system/multi-user.target.wants/kresd.target"

    # remove modules with missing dependencies
    rm "${pkgdir}/usr/lib/knot-resolver/kres_modules/etcd.lua"
}
