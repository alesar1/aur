# Maintainer: brent s. <bts[at]square-r00t[dot]net>
validpgpkeys=('748231EBCBD808A14F5E85D28C004C2F93481F6B')
# Bug reports can be filed at https://bugs.square-r00t.net/index.php?project=3
# News updates for packages can be followed at https://devblog.square-r00t.net
pkgname=python-vaultier
pkgver=0.7.5
pkgrel=1
pkgdesc="Password manager/vault designed for sharing amongst a team"
arch=('i686' 'x86_64')
url="https://www.vaultier.org/"
license=('BSD')
depends=('')
optdepends=('')
makedepends=('')
_pkgname=python-vaultier
provides=("python-vaultier")
#conflicts=("python-vaultier")
install=
changelog=
noextract=()
source=("https://pypi.python.org/packages/b9/69/17c7ec447d05f70c6ef1da5159cb2966261d588714a2661ae7bf44ade889/Vaultier-0.7.5.tar.gz#md5=6a026bb2d833c532d4e0a1283f858c6d"
        "Vaultier-0.7.5.tar.gz#md5=6a026bb2d833c532d4e0a1283f858c6d.sig")
sha512sums=('cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'
            'SKIP')
build() {
        cd "${srcdir}/${_pkgname}/src"
        make prefix=${pkgdir}/usr
}
package() {
        install -D -m755 ${srcdir}/${_pkgname}/src/${_pkgname} ${pkgdir}/usr/bin/${_pkgname}
        install -D -m644 ${srcdir}/${_pkgname}/docs/README.html.en ${pkgdir}/usr/share/doc/${_pkgname}/README.html
}
