# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
# Contributor: Kyle Fuller <inbox at kylefuller dot co dot uk>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/demizer/archzfs
#
# The build script generates and updates the pkgver and _kernel* variables.
#
pkgname="spl-lts"
pkgver=0.6.5.3_4.1.13_1
pkgrel=1

# Used incase the i686 and x86_64 linux packages get out of sync with the
# PKGREL. This occurred on January 31, 2014 where i686 was versioned at
# 3.12.9-1 and x86_64 was versioned at 3.12.9-2.
_kernel_version_x32="4.1.13-1"
_kernel_version_x32_full="4.1.13-1"
_kernel_version_x64="4.1.13-1"
_kernel_version_x64_full="4.1.13-1"

if [[ $CARCH == "i686" ]]; then
    _kernel_version=${_kernel_version_x32}
    _kernel_version_full=${_kernel_version_x32_full}
else
    _kernel_version=${_kernel_version_x64}
    _kernel_version_full=${_kernel_version_x64_full}
fi

pkgdesc="Solaris Porting Layer kernel modules."
depends=("spl-utils-lts" "linux-lts=${_kernel_version}")
makedepends=("linux-lts-headers=${_kernel_version}")
arch=("i686" "x86_64")
url="http://zfsonlinux.org/"
source=("http://archive.zfsonlinux.org/downloads/zfsonlinux/spl/spl-0.6.5.3.tar.gz")
groups=("archzfs-lts")
license=("GPL")
install=spl.install
provides=("spl")
conflicts=("spl" "spl-git")

build() {
    cd "${srcdir}/spl-0.6.5.3"
    ./autogen.sh

    _at_enable=""
    [ "${CARCH}" == "i686" ] && _at_enable="--enable-atomic-spinlocks"

    ./configure --prefix=/usr \
                --libdir=/usr/lib \
                --sbindir=/usr/bin \
                --with-linux=/usr/lib/modules/${_kernel_version_full}-lts/build \
                --with-config=kernel \
                ${_at_enable}

    make
}

package() {
    cd "${srcdir}/spl-0.6.5.3"
    make DESTDIR="${pkgdir}" install

    mv "${pkgdir}/lib" "${pkgdir}/usr/"
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/spl-*/${_kernel_version_full}-lts/Module.symvers
}
sha256sums=('637c1eccd721f5d3bb1570621d2cd6646ec0488608482c0dbeb2838cf4bb310c')
