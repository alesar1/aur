# Maintainer: NicoHood <archlinux {cat} nicohood {dog} de>
# PGP ID: 97312D5EB9D7AE7D0BD4307351DAE9B7C1AE9161

pkgname=gpgit
pkgver=1.3.1
pkgrel=1
epoch=1
pkgdesc="A shell script that automates the process of signing Git sources via GPG"
arch=('any')
url="https://github.com/NicoHood/gpgit"
license=('MIT')
depends=('bash' 'gnupg' 'git' 'xz')
optdepends=('jq: Github API upload'
            'curl: Github API upload'
            'lzip: Compression option')
source=("${pkgname}-${pkgver}.tar.xz::https://github.com/NicoHood/${pkgname}/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.xz"
        "${pkgname}-${pkgver}.tar.xz.asc::https://github.com/NicoHood/${pkgname}/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.xz.asc")
sha512sums=('f7e5add7e0e7203088e99367c457e36a85c03d882f84785a2886ce59127352ebe9395e29754c9ba13789bac1f5f6b4eac7b9458972ab4d40b3ac391bdb4c665c'
            'SKIP')
# NicoHood <archlinux {cat} nicohood {dog} de>
validpgpkeys=('97312D5EB9D7AE7D0BD4307351DAE9B7C1AE9161')

package() {
    make -C "${pkgname}-${pkgver}" DESTDIR="${pkgdir}" install
    install -Dm 644 "${pkgname}-${pkgver}/LICENSE" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
