# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/archzfs/archzfs
#
# ! WARNING !
#
# The archzfs packages are kernel modules, so these PKGBUILDS will only work with the kernel package they target. In this
# case, the archzfs-linux packages will only work with the default linux package! To have a single PKGBUILD target many
# kernels would make for a cluttered PKGBUILD!
#
# If you have a custom kernel, you will need to change things in the PKGBUILDS. If you would like to have AUR or archzfs repo
# packages for your favorite kernel package built using the archzfs build tools, submit a request in the Issue tracker on the
# archzfs github page.
#
pkgname="zfs-linux"
pkgver=0.6.5.9_4.10.13_1
pkgrel=1
pkgdesc="Kernel modules for the Zettabyte File System."
depends=("kmod" "spl-linux" "zfs-utils-linux" "linux=4.10.13-1")
makedepends=("linux-headers=4.10.13-1")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("https://github.com/zfsonlinux/zfs/releases/download/zfs-0.6.5.9/zfs-0.6.5.9.tar.gz")
sha256sums=("b724b57dbddae59246fdc15f88f1224061c712945bb36412a2087e0c7760d77f")
groups=("archzfs-linux")
license=("CDDL")
install=zfs.install
provides=("zfs")
conflicts=('zfs-linux-git' 'zfs-linux-lts')
replaces=("zfs-git")

build() {
    cd "${srcdir}/zfs-0.6.5.9"
    ./autogen.sh
    ./configure --prefix=/usr --sysconfdir=/etc --sbindir=/usr/bin --libdir=/usr/lib \
                --datadir=/usr/share --includedir=/usr/include --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs-0.6.5.9 --with-config=kernel \
                --with-linux=/usr/lib/modules/4.10.13-1-ARCH/build \
                --with-linux-obj=/usr/lib/modules/4.10.13-1-ARCH/build
    make
}

package() {
    cd "${srcdir}/zfs-0.6.5.9"
    make DESTDIR="${pkgdir}" install
    cp -r "${pkgdir}"/{lib,usr}
    rm -r "${pkgdir}"/lib
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/zfs-*/4.10.13-1-ARCH/Module.symvers
}
