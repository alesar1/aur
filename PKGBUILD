# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/archzfs/archzfs
#
# ! WARNING !
#
# The archzfs packages are kernel modules, so these PKGBUILDS will only work with the kernel package they target. In this
# case, the archzfs-linux-lts packages will only work with the default linux-lts package! To have a single PKGBUILD target
# many kernels would make for a cluttered PKGBUILD!
#
# If you have a custom kernel, you will need to change things in the PKGBUILDS. If you would like to have AUR or archzfs repo
# packages for your favorite kernel package built using the archzfs build tools, submit a request in the Issue tracker on the
# archzfs github page.
#
#
pkgbase="zfs-linux-lts-git"
pkgname=("zfs-linux-lts-git" "zfs-linux-lts-git-headers")

pkgver=0.7.0.r191.gd4a72f238.4.9.62.1
pkgrel=1
makedepends=("linux-lts-headers=4.9.62-1" "libelf" "git" "spl-linux-lts-git-headers")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("git+https://github.com/zfsonlinux/zfs.git")
sha256sums=("SKIP")
license=("CDDL")
depends=("kmod" "spl-linux-lts-git" "zfs-utils-common-git>=0.7.0.r191.gd4a72f238" "linux-lts=4.9.62-1")

pkgver() {
    cd "${srcdir}/zfs"
    echo $(git describe --long | sed 's/^zfs-//;s/\([^-]*-g\)/r\1/;s/-/./g').4.9.62.1
}

build() {
    cd "${srcdir}/zfs"
    ./autogen.sh
    ./configure --prefix=/usr --sysconfdir=/etc --sbindir=/usr/bin --libdir=/usr/lib \
                --datadir=/usr/share --includedir=/usr/include --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs-0.7.3 --with-config=kernel \
                --with-linux=/usr/lib/modules/4.9.62-1-lts/build \
                --with-linux-obj=/usr/lib/modules/4.9.62-1-lts/build
    make
}

package_zfs-linux-lts-git() {
    pkgdesc="Kernel modules for the Zettabyte File System."
    install=zfs.install
    provides=("zfs")
    groups=("archzfs-linux-lts-git")
    conflicts=('zfs-linux-lts')
    cd "${srcdir}/zfs"
    make DESTDIR="${pkgdir}" install
    cp -r "${pkgdir}"/{lib,usr}
    rm -r "${pkgdir}"/lib
    # Remove src dir
    rm -r "${pkgdir}"/usr/src
}

package_zfs-linux-lts-git-headers() {
    pkgdesc="Kernel headers for the Zettabyte File System."
    conflicts=('zfs-archiso-linux-headers' 'zfs-linux-hardened-headers' 'zfs-linux-hardened-git-headers' 'zfs-linux-lts-headers'  'zfs-linux-headers' 'zfs-linux-git-headers' 'zfs-linux-zen-headers' 'zfs-linux-zen-git-headers' )
    cd "${srcdir}/zfs"
    make DESTDIR="${pkgdir}" install
    rm -r "${pkgdir}/lib"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/zfs-*/4.9.62-1-lts/Module.symvers
}
