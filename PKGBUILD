# Maintainer: Helloagain <nospamming11+arch at gmail dot com>

pkgname=fakturama
pkgver=2.1.0.c
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
	# "$pkgname-$pkgver.tar.gz::https://bitbucket.org/fakturamadev/fakturama-2/downloads/Installer_Fakturama_linux_x64_${pkgver}.tar.gz"
	"$pkgname-$pkgver.tar.gz::https://bitbucket.org/fakturamadev/fakturama-2/downloads/Installer_Fakturama_linux_x64_2.1.0c.tar.gz"
	"fakturama2.desktop"
)
noextract=()
sha256sums=(
	"ab6d363e9b446111a922bd7e51a527fa649dead348a72d73cdec6da46445f769"
	"550964ece2b39f76e4985ecc2203fee63f57ef669d8b1ae170d80b3cfa5cb54c"
)

prepare() {
	cd $srcdir
	# Copied from linux PKGBUILD as an easy way to apply all *.patch files
	local src
	for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    [[ $src = *.patch ]] || continue
    echo "Applying patch $src..."
    patch -Np1 < "../$src"
	done
}

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
