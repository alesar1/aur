# Contributor: Gerald Nunn <gerald dot b dot nunn at gmail dot com>
# Maintainer: Davi da Silva Böger <dsboger at gmail dot com>

pkgname=tilix-bin
_pkgname=tilix
pkgver=1.7.0
pkgrel=1
pkgdesc="A tiling terminal emulator based on GTK+ 3 (binary distribution)"
arch=('x86_64')
url="http://github.com/gnunn1/tilix"
license=('MPL')
depends=('gtk3' 'dconf' 'gsettings-desktop-schemas' 'vte3' 'hicolor-icon-theme' 'libx11')
optdepends=('python2-nautilus: for "Open Tilix Here" support in nautilus'
            'vte3-notification: for desktop notifications support'
            'vte3-tilix: for notifications, triggers and badges support'
			'libsecret: for password manager')
provides=('terminix' 'tilix')
conflicts=('terminix' 'tilix')
source_x86_64=(${_pkgname}-${pkgver}.zip::https://github.com/gnunn1/tilix/releases/download/${pkgver}/${_pkgname}.zip)
md5sums_x86_64=('637e6d65a29df83ed155c7ebb2b3f2e7')

package() {
	cp -ar $srcdir/usr $pkgdir/usr
}
