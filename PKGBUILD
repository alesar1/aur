# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
# Contributor: Kyle Fuller <inbox at kylefuller dot co dot uk>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/demizer/archzfs
#
# The build script generates and updates the pkgver and _kernel* variables.
#
pkgname="zfs-utils-lts"
pkgver=0.6.5.4_4.1.17_1
pkgrel=1
pkgdesc="Kernel module support files for the Zettabyte File System."
depends=("spl-lts")
arch=("i686" "x86_64")
url="http://zfsonlinux.org/"
source=("http://archive.zfsonlinux.org/downloads/zfsonlinux/zfs/zfs-0.6.5.4.tar.gz"
        "zfs-utils.bash-completion-r1"
        "zfs-utils.initcpio.install"
        "zfs-utils.initcpio.hook"
        )
license=("CDDL")
groups=("archzfs-lts")
provides=("zfs-utils")
conflicts=("zfs-utils" "zfs-utils-git")

build() {
    cd "${srcdir}/zfs-0.6.5.4"
    ./autogen.sh

    ./configure --prefix=/usr \
                --sysconfdir=/etc \
                --sbindir=/usr/bin \
                --with-mounthelperdir=/usr/bin \
                --libdir=/usr/lib \
                --datadir=/usr/share \
                --includedir=/usr/include \
                --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs-0.6.5.4 \
                --with-config=user
    make
}

package() {
    cd "${srcdir}/zfs-0.6.5.4"
    make DESTDIR="${pkgdir}" install

    # Remove uneeded files
    rm -r "${pkgdir}"/etc/init.d
    rm -r "${pkgdir}"/usr/lib/dracut

    # move module tree /lib -> /usr/lib
    cp -r "${pkgdir}"/{lib,usr}
    rm -r "${pkgdir}"/lib

    install -D -m644 "${srcdir}"/zfs-utils.initcpio.hook "${pkgdir}"/usr/lib/initcpio/hooks/zfs
    install -D -m644 "${srcdir}"/zfs-utils.initcpio.install "${pkgdir}"/usr/lib/initcpio/install/zfs
    install -D -m644 "${srcdir}"/zfs-utils.bash-completion-r1 "${pkgdir}"/usr/share/bash-completion/completions/zfs
}
sha256sums=('780862ec2301ccace412a324787e9df762cff6046e73e2ac0ebdce9e2bd59b0f'
            'b60214f70ffffb62ffe489cbfabd2e069d14ed2a391fac0e36f914238394b540'
            '1e20071fa61a33874505dae0f2d71bb560f43e7faaea735cbde770ea10c133df'
            '438a1399d1df5ef20eff37b4d775595fae9943d0c5c105c7bc286b2babcd759e')
