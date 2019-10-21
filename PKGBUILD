#!/usr/bin/bash
# shellcheck disable=SC2034,SC2154,SC2164

# Maintainer: Nyameko Lisa <lisa dot nyameko at gmail dot com>

pkgname=('beegfs-meta')
_srcname='meta'
pkgdesc='Distributed, fault-tolerant cluster storage platfom formally known as FhGFS'
pkgver=7.1.3
_tag="$pkgver"
_ver='v7'
pkgrel=1
arch=('x86_64' 'i686')
url="https://git.beegfs.io/pub"
license=('BeeGFS END-USER LICENE AGREEMENT')

depends=('libutil-linux' 'attr' 'acl' 'openssl' 'zlib' 'sqlite' 'curl' 'elfutils' 'fuse-common' 'ld-lsb' 'lsb-release' 'rdma-core')
optdepends=('beegfs-utils' 'xfsprogs' 'btrfs-progs')
makedepends=('git' 'gcc' 'libsystemd' 'systemd' 'pkg-config' 'bash' 'boost-libs')
provides=('beegfs-meta')
provides=("${_provides[@]}")
conflicts=("${_provides[@]}")
replaces=("${_provides[@]}")

source=("$pkgname-$pkgver::git+${url}/${_ver}.git#tag=${_tag}")
sha512sums=('SKIP')

prepare() {
    cd "$srcdir/$pkgname-$pkgver/${_srcname}/build"

    find dist -type f -exec sed --in-place \
        --expression='s|/usr/libexec|/usr/lib/beegfs|g' \
        --expression='s|/usr/sbin|/usr/bin|g' \
        --expression='s|/sbin|/usr/bin|g' \
        --expression='s|/opt/beegfs/usr/bin|/usr/bin|g' \
        '{}' '+'

    cd "$srcdir/$pkgname-$pkgver/${_srcname}/source/"

    find storage -type f -exec sed --in-place \
        --expression='s|attr/xattr.h|sys/xattr.h|g' \
        --expression='s|ENOATTR|ENODATA|g' \
        '{}' '+'

    find toolkit -type f -exec sed --in-place \
        --expression='s|attr/xattr.h|sys/xattr.h|g' \
        --expression='s|ENOATTR|ENODATA|g' \
        '{}' '+'
}

build() {
    cd "$srcdir/$pkgname-$pkgver"

    make meta-all
}

package() {
    cd "$srcdir/$pkgname-$pkgver/$_srcname/build/"
    install -D --mode=0644 dist/etc/beegfs-meta.conf "${pkgdir}/etc/beegfs/beegfs-meta.conf"
    install -D --mode=0755 dist/sbin/beegfs-setup-meta "${pkgdir}/usr/bin/beegfs-setup-meta"
    install -D --mode=0644 dist/usr/lib/systemd/system/beegfs-meta.service "${pkgdir}/usr/lib/systemd/system/beegfs-meta.service"
    install -D --mode=0644 dist/usr/lib/systemd/system/beegfs-meta@.service "${pkgdir}/usr/lib/systemd/system/beegfs-meta@.service"
    install -D --mode=0644 libMeta.a "${pkgdir}/usr/lib/beegfs/libMeta.a"
    install -D --mode=0755 beegfs-meta "${pkgdir}/usr/bin/beegfs-meta"

    cd "$srcdir/$pkgname-$pkgver"
    install -D --mode=0644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}
