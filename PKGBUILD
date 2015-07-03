# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
# Contributor: Kyle Fuller <inbox at kylefuller dot co dot uk>
# See http://github.com/demizer/archzfs for build scripts.
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/demizer/archzfs
#
# The build script generates and updates the pkgver and _kernel* variables.
#
pkgname="zfs-lts"
pkgver=0.6.4.2_3.14.45_1
pkgrel=2

# Used incase the i686 and x86_64 linux packages get out of sync with the
# PKGREL. This occurred on January 31, 2014 where i686 was versioned at
# 3.12.9-1 and x86_64 was versioned at 3.12.9-2.
_kernel_version_x32="3.14.45-1"
_kernel_version_x32_full="3.14.45-1"
_kernel_version_x64="3.14.45-1"
_kernel_version_x64_full="3.14.45-1"

if [[ $CARCH == "i686" ]]; then
    _kernel_version=${_kernel_version_x32}
    _kernel_version_full=${_kernel_version_x32_full}
else
    _kernel_version=${_kernel_version_x64}
    _kernel_version_full=${_kernel_version_x64_full}
fi

pkgdesc="Kernel modules for the Zettabyte File System."
depends=("spl-lts" "zfs-utils-lts" "linux-lts=${_kernel_version}")
makedepends=("linux-lts-headers=${_kernel_version}")
arch=("i686" "x86_64")
url="http://zfsonlinux.org/"
source=("http://archive.zfsonlinux.org/downloads/zfsonlinux/zfs/zfs-0.6.4.2.tar.gz")
groups=("archzfs-lts")
license=("CDDL")
install=zfs.install
provides=("zfs")
conflicts=("zfs" "zfs-git")

build() {
    cd "${srcdir}/zfs-0.6.4.2"
    ./autogen.sh

    ./configure --prefix=/usr \
                --sysconfdir=/etc \
                --sbindir=/usr/bin \
                --libdir=/usr/lib \
                --datadir=/usr/share \
                --includedir=/usr/include \
                --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs-0.6.4.2 \
                --with-config=kernel \
                --with-linux=/usr/lib/modules/${_kernel_version_full}-lts/build

    make
}

package() {
    cd "${srcdir}/zfs-0.6.4.2"
    make DESTDIR="${pkgdir}" install

    cp -r "$pkgdir"/{lib,usr}
    rm -r "$pkgdir"/lib

    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/zfs-*/${_kernel_version_full}-lts/Module.symvers
}
sha256sums=('1da5e7b56f31f01d30fcf1c9f0ef2ab6276c3ffe5f8d72fc79627f6acc72d03d')
