# Maintainer: desbma
pkgname=debmirror
pkgver=2.31
pkgrel=1
pkgdesc='Debian partial mirror script, with ftp and package pool support'
url="https://salsa.debian.org/debian/${pkgname}"
arch=('any')
license=('GPL')
# see https://packages.debian.org/fr/sid/debmirror
depends=('bzip2' 'perl-lockfile-simple' 'perl-libwww' 'rsync')
optdepends=('diffutils' 'ed' 'gnupg' 'patch')
source=("https://mirrors.edge.kernel.org/debian/pool/main/d/${pkgname}/${pkgname}_${pkgver}.tar.xz")
sha512sums=('17a6ac0c92abe748d17610b99d927cd4e05ef767fb9469d191937b42a58057b7a259996a2165de12889f92800d9724664042d2f87058037f8396533b0d0c53aa')

build() {
    cd "${srcdir}/${pkgname}"
    make all
}

check() {
    cd "${srcdir}/${pkgname}"
    make check
}

package() {
    cd "${srcdir}/${pkgname}"

    # see https://packages.debian.org/fr/sid/all/debmirror/filelist
    install -Dm 755 debmirror ${pkgdir}/usr/bin/debmirror
    install -Dm 644 TODO ${pkgdir}/usr/share/doc/${pkgname}/TODO
    install -Dm 644 examples/debmirror.conf ${pkgdir}/usr/share/doc/${pkgname}/examples/debmirror.conf
    install -Dm 755 mirror-size ${pkgdir}/usr/lib/${pkgname}/mirror-size
    install -Dm 644 debmirror.1 ${pkgdir}/usr/share/man/man1/debmirror.1
}
