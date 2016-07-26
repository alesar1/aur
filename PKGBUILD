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
pkgname="spl-utils-linux-lts"
pkgver=0.6.5.7_4.4.15_2
pkgrel=1
pkgdesc="Solaris Porting Layer kernel module support files."
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("http://archive.zfsonlinux.org/downloads/zfsonlinux/spl/spl-0.6.5.7.tar.gz"
        "spl-utils.hostid")
sha256sums=("dc8690e407183eeb7a6af0e7692d6e0a1cd323d51dd1aa492522c421b1924ea0"
            "ad95131bc0b799c0b1af477fb14fcf26a6a9f76079e48bf090acb7e8367bfd0e")
groups=("archzfs-linux-lts")
license=("GPL")
provides=("spl-utils")
makedepends=("linux-lts-headers=4.4.15")

build() {
    cd "${srcdir}/spl-0.6.5.7"
    ./autogen.sh
    ./configure --prefix=/usr --libdir=/usr/lib --sbindir=/usr/bin --with-config=user
    make
}

package() {
    cd "${srcdir}/spl-0.6.5.7"
    make DESTDIR="${pkgdir}" install
    install -D -m644 "${srcdir}"/spl-utils.hostid "${pkgdir}"/etc/hostid
}
