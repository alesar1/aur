# Maintainer: Helloagain <nospamming11+arch at gmail dot com>

pkgname=fakturama
pkgver=2.0.5
pkgrel=1
pkgdesc="Creates invoices with ZUGFeRD support"
arch=('x86_64')
url="https://www.fakturama.info"
license=('EPL')
groups=()
depends=(
	'java-runtime=8'
	'webkit2gtk'
)
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=(
	"$pkgname-$pkgver.tar.gz::https://bitbucket.org/fakturamadev/fakturama-2/downloads/Installer_Fakturama_linux_x64_${pkgver}.tar.gz"
	"fakturama2.desktop"
)
noextract=()
sha256sums=(
	"917dfa40630849813be9a6441a2b4123fdcca7e6b4f86340c6d8f08e247ac2ab"
	"550964ece2b39f76e4985ecc2203fee63f57ef669d8b1ae170d80b3cfa5cb54c"
)

package() {
	# Get prefixed application directory
	_main_application="$pkgdir/usr/share/${pkgname}2"

	# Create entry under _main_application
	install -m 755 -d "$_main_application"

	# Copy all needed files
	cp -r "$srcdir/artifacts.xml" "$_main_application"
	cp -r "$srcdir/configuration" "$_main_application"
	cp -r "$srcdir/Fakturama" "$_main_application"
	cp -r "$srcdir/Fakturama.ini" "$_main_application"
	cp -r "$srcdir/features" "$_main_application"
	cp -r "$srcdir/p2" "$_main_application"
	cp -r "$srcdir/plugins" "$_main_application"

	# Copy other files
	install -Dm 644 "$srcdir/icon.xpm" "$pkgdir/usr/share/pixmaps/fakturama2.xpm"
	install -Dm 644 "$srcdir/fakturama2.desktop" "$pkgdir/usr/share/applications/fakturama2.desktop"
}
