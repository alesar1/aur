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
pkgbase="zfs-linux-lts"
pkgname=("zfs-linux-lts" "zfs-linux-lts-headers")

pkgver=0.7.2.4.9.52.1
pkgrel=1
makedepends=("linux-lts-headers=4.9.52" "libelf" "spl-linux-lts-headers")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("https://github.com/zfsonlinux/zfs/releases/download/zfs-0.7.2/zfs-0.7.2.tar.gz")
sha256sums=("f75f4d8bbb8241e3d06321b53914e53fa22d1ccc8be89819b578b46e5d3e5cf4")
license=("CDDL")
depends=("kmod" "spl-linux-lts" "zfs-utils-common>=0.7.2" "linux-lts=4.9.52")

build() {
    cd "${srcdir}/zfs-0.7.2"
    ./autogen.sh
    ./configure --prefix=/usr --sysconfdir=/etc --sbindir=/usr/bin --libdir=/usr/lib \
                --datadir=/usr/share --includedir=/usr/include --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs-0.7.2 --with-config=kernel \
                --with-linux=/usr/lib/modules/4.9.52-1-lts/build \
                --with-linux-obj=/usr/lib/modules/4.9.52-1-lts/build
    make
}

package_zfs-linux-lts() {
    pkgdesc="Kernel modules for the Zettabyte File System."
    install=zfs.install
    provides=("zfs")
    groups=("archzfs-linux-lts")
    conflicts=('zfs-linux-lts-git')
    cd "${srcdir}/zfs-0.7.2"
    make DESTDIR="${pkgdir}" install
    cp -r "${pkgdir}"/{lib,usr}
    rm -r "${pkgdir}"/lib
    # Remove src dir
    rm -r "${pkgdir}"/usr/src
}

package_zfs-linux-lts-headers() {
    pkgdesc="Kernel headers for the Zettabyte File System."
    conflicts=('zfs-archiso-linux-headers' 'zfs-linux-hardened-headers' 'zfs-linux-hardened-git-headers'  'zfs-linux-lts-git-headers' 'zfs-linux-headers' 'zfs-linux-git-headers' 'zfs-linux-zen-headers' 'zfs-linux-zen-git-headers' )
    cd "${srcdir}/zfs-0.7.2"
    make DESTDIR="${pkgdir}" install
    rm -r "${pkgdir}/lib"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/zfs-*/4.9.52-1-lts/Module.symvers
}
