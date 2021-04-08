# Maintainer: Jarod G. <skid+aur@tuto-craft.com>
# Contributor: leonekmi <me+git@leonekmi.fr>
pkgname=kolossus-launcher
pkgver="152_44"
pkgrel=1
pkgdesc="Kolossus Launcher, to download the latest version of the IFSCL."
arch=(x86_64)
url="https://en.codelyoko.fr/ifscl/"
license=('custom')
groups=()
provides=()
depends=()
optdepends=()
makedepends=('zip' 'unzip')
conflicts=()
replaces=()
backup=()
source=(https://ifscl.b-cdn.net/kolossus/Kolossus_${pkgver}_Linux.zip Kolossus-Launcher.desktop)
noextract=(Kolossus_${pkgver}_Linux.zip)
md5sums=('6afe5dd20923f807400708047b118635'
         '73239120e9509b86484fb1b5c0e44f34')
 
prepare() {
	mkdir -p "$pkgname-$pkgver/app"
	chmod 755 -R "$pkgname-$pkgver"
	cd "$pkgname-$pkgver"
	chmod 777 app
	unzip "$srcdir/Kolossus_${pkgver}_Linux.zip"
}

package() {
	mkdir -p "$pkgdir/opt" "$pkgdir/usr/share/applications"
	mv "$pkgname-$pkgver" "$pkgdir/opt/Kolossus-Launcher"
	install "$srcdir/Kolossus-Launcher.desktop" "$pkgdir/usr/share/applications/"
}
