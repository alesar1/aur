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
pkgname="spl-linux-lts"
pkgver=0.6.5.6_4.4.8_1
pkgrel=1
pkgdesc="Solaris Porting Layer kernel modules."
depends=("spl-utils-linux-lts" "kmod"
         "linux-lts>=4.4.8" "linux-lts<4.5"
         "linux-lts-headers>=4.4.8" "linux-lts-headers<4.5")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("http://archive.zfsonlinux.org/downloads/zfsonlinux/spl/spl-0.6.5.6.tar.gz")
sha256sums=("167595fe76eb5497c3a1ffe396b6300155d0cbe46d06824a710099ca1ae1b8bd")
groups=("archzfs-linux-lts")
license=("GPL")
install=spl.install
provides=("spl-linux-lts")


build() {
    cd "${srcdir}/spl-0.6.5.6"
    ./autogen.sh
    ./configure --prefix=/usr --libdir=/usr/lib --sbindir=/usr/bin \
                --with-linux=/usr/lib/modules/4.4.8-1-lts/build \
                --with-config=kernel
    make
}

package() {
    cd "${srcdir}/spl-0.6.5.6"
    make DESTDIR="${pkgdir}" install
    mv "${pkgdir}/lib" "${pkgdir}/usr/"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/spl-*/4.4.8-1-lts/Module.symvers
}
