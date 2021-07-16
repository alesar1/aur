# Maintainer: Xandar Null <xandar.null@gmail.com>

pkgname=freezer-bin
_pkgname_=freezer
pkgver=1.1.22
pkgrel=1
pkgdesc="Free HQ music streaming app (Official)"
arch=(x86_64)
url="https://git.rip/freezer/freezerpc/"
license=('GPL')
provides=(freezer-bin)
depends=(openssl libnotify libappindicator-gtk3 libxtst nss)
conflicts=(freezer-git freezer-appimage)
source=(
	"$_pkgname_.desktop"
	"$_pkgname_.sh"
	https://git.freezer.life/exttex/freezerpc/raw/branch/master/app/assets/icon.png
)
source_x86_64=("https://files.freezer.life/0:/PC/1.1.22/freezer_1.1.22_amd64.deb")

build() {
	
	# Extraction
	mkdir -p "${srcdir}/output"
	tar -xvf "${srcdir}/data.tar.xz" -C "${srcdir}/output"
}

package() {

	# Installation
	cp -r "${srcdir}/output/"* "${pkgdir}"
	
	# Install to /usr/bin
	install -Dm755 "$srcdir/$_pkgname_.sh" "$pkgdir/usr/bin/$_pkgname_"

	# Desktop launcher
	install -dm755 "$pkgdir/usr/share/pixmaps/"
	install -dm755 "$pkgdir/usr/share/applications/"
	install -Dm644 "$srcdir/icon.png" "$pkgdir/usr/share/pixmaps/freezer.png"
	install -Dm644 "$srcdir/$_pkgname_.desktop" "$pkgdir/usr/share/applications/$_pkgname_.desktop"
}
sha256sums=('8afebea319b8699f2cede44d17a9db910f63be981d263ca1f9766bd9c74e1178'
            '780e71d3423d5d1838f144a1954216324f833673d8b48365535ad8e31da1ea98'
            '5431bc4b525071e0d53c971eff9fa7c3a906bfe1823a7598f82df79bbfe981d7')
sha256sums_x86_64=('a899381e71dd9fd533a4b775a7b46f3f2f13a48b092ca486d4ef3fb38e68099c')
