# Maintainer: Shaumyadeep Chaudhuri <shaumya at gmail.com>

pkgname=advanced-rest-client
pkgver=13.0.7
pkgrel=1
pkgdesc='A developer tool to test a HTTP request. The Advanced REST Client desktop application.'
arch=('x86_64')
url='https://advancedrestclient.com/'
license=('Apache')
options=('!strip')
depends=(
	'gconf'
	'libnotify'
	'libappindicator-gtk3'
	'libxtst'
	'nss'
	'libxss')
install=advanced-rest-client.install
source_x86_64=("https://github.com/advanced-rest-client/arc-electron/releases/download/v${pkgver}/arc-linux-${pkgver}-amd64.deb")
sha256sums_x86_64=('1d04238e5f993b2bb1ebb2451cca52e5a9eb713b3de9e771b261061233fa0f64')

prepare() {
	tar -xf data.tar.xz
}

package() {
	# Install
	cp -dr --no-preserve=ownership {opt,usr} "${pkgdir}"/
}

