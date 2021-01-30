# Maintainer: Sergio Tridente <tioduke (at) gmail (dot) com>

pkgname=oracle-datamodeler
_pkgver=20.4.0.374
_pkgrel=0801
pkgver=${_pkgver}.${_pkgrel}
pkgrel=1
pkgdesc="A data modeling and database design tool that provides an environment for capturing, modeling, managing, and exploiting metadata"
arch=('any')
url="http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html"
license=('custom:OTN')
depends=('java-environment>=8' 'java-environment<=11' 'bash')
optdepends=(
  "java8-openjfx: Required to run the application with JDK8"
  "java11-openjfx: Required to run the application with JDK11"
)
install=$pkgname.install
source=(manual://datamodeler-${_pkgver}.${_pkgrel}-no-jre.zip
        $pkgname.desktop
        $pkgname.sh
        LICENSE-OTN
        java_home.patch)
DLAGENTS+=('manual::/usr/bin/echo The source file for this package need to be downloaded manually, since it requires a login and is not redistributable.;/usr/bin/echo Please visit https://www.oracle.com/tools/downloads/sql-data-modeler-downloads.html; exit 1;')
sha256sums=('5f040c0d51249970608a422280b34c81d68a110f48da57fcb895a432f457e399'
            '9618cf10af64c767c7ca3f90f54522e93f10c9766312b4a06fc9384a9e3c6cc8'
            'd61ad1cd5f6f6e665471c2b6537654beda625f24a50e19156c4fbbccebc16a24'
            '5919502a2b23a78fff277b642c8b2b989d415dd6de6fb6089424d888809a9257'
            '9e77e1d87f0b8eff9e3637d7b865e4ec4a72451b9218bdd93a14e654651b2ea1')

prepare() {
  cd "$srcdir"/datamodeler

  patch -Np1 < "$srcdir/java_home.patch"
  find . \( -iname "*.exe" -o -iname "*.dll" \) -exec rm -f "{}" +
}

package() {
  cd "$srcdir"/datamodeler

  find . -type f -exec install -Dm644 "{}" "$pkgdir/opt/$pkgname/{}" \;
  chmod +x "$pkgdir/opt/$pkgname/datamodeler.sh"
  chmod +x "$pkgdir/opt/$pkgname/datamodeler/bin/datamodeler"
  chmod +x "$pkgdir/opt/$pkgname/ide/bin/launcher.sh"
  chmod a+w -R "$pkgdir/opt/$pkgname/datamodeler/types"

  install -Dm755 "$srcdir/$pkgname.sh"      "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 "$srcdir/LICENSE-OTN" "$pkgdir/usr/share/licenses/$pkgname/LICENSE-OTN"
}
