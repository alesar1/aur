# Maintainer: Brad Erhart <brae dot 04 plus aur at gmail dot com>

pkgname=saml2aws-bin
_pkgname="${pkgname%-bin}"
pkgver=2.26.0
pkgrel=1
pkgdesc='CLI tool to login and retrieve AWS temporary credentials using a SAML IDP'
arch=('x86_64')
_goos='linux'
_goarch='amd64'
url='https://github.com/Versent/saml2aws'
license=('MIT')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("https://github.com/versent/$_pkgname/releases/download/v$pkgver/saml2aws_${pkgver}_${_goos}_${_goarch}.tar.gz")
sha256sums=(7ff7a05f2a7ca624b6a7c83c12d866a3652fe5c2dd861c654f60ad5fcd7a114c)

package() {
	install -Dm 755 "$_pkgname" -t "$pkgdir/usr/bin"
}
