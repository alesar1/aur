# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Caltlgin Stsodaat <contact@fossdaily.xyz>

pkgname=authpass-bin
_pkgname="${pkgname%-bin}"
pkgver=1.9.4
_rev=1872
pkgrel=2
pkgdesc='Keepass compatible password manager based on Flutter'
arch=('x86_64')
url='https://authpass.app'
license=('GPL3')
depends=('gtk3' 'libsecret' 'libkeybinder3')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/authpass/authpass/releases/download/v$pkgver/$_pkgname-linux-${pkgver}_${_rev}.tar.gz"
  "$_pkgname-$pkgver.svg::https://raw.githubusercontent.com/authpass/authpass/v$pkgver/_docs/authpass-logo.svg"
  "${_pkgname}.desktop")
sha256sums=('a4139c7a9ddb8b6061f52bba2a7362be8d322afb27779613705590febda77f9e'
            '1bfe9685c9399976a872bfcafbe19c16b26063530cdc9184570270d52fe7851b'
            '8260ede1bb38264aa92227dee1b3edd0d66b1f963872d4254549c08c7ca409dd')

package() {
  install -Dm644 "$_pkgname.desktop" -t "$pkgdir/usr/share/applications"
  install -Dm644 "$_pkgname-$pkgver.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/$_pkgname.svg"
  install -d "$pkgdir/opt/$_pkgname/"
  install -d "$pkgdir/usr/bin/"
  cp -a --no-preserve=ownership authpass/* "$pkgdir/opt/$_pkgname/"
  ln -s "/opt/$_pkgname/$_pkgname" -t "$pkgdir/usr/bin/"
  chown -R root:root "$pkgdir/"
}

# vim: ts=2 sw=2 et:
