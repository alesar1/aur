# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
pkgname='mongodb-compass-readonly-beta'
pkgver='1.18.0beta.2'
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Readonly Edition (beta version)'
arch=('x86_64')
url='https://www.mongodb.com/products/compass'
license=('custom')
depends=('nss' 'gconf' 'libxtst' 'alsa-lib' 'gtk2' 'libsecret' 'gcc-libs-multilib' 'libxss')
optdepends=('gnome-keyring' 'libgnome-keyring')
source=('https://downloads.mongodb.com/compass/beta/mongodb-compass-readonly-beta-1.18.0-beta.2.x86_64.rpm')
md5sums=('a99fe4fa82779352091d90ee536f6e1b')

package() {
	rm -r "$srcdir/usr/share/doc/"
	mkdir -p "$srcdir/usr/share/licenses/mongodb-compass-readonly-beta"
	mv "$srcdir/usr/share/mongodb-compass-readonly-beta/LICENSE"* "$srcdir/usr/share/licenses/mongodb-compass-readonly-beta"

	cp -r --preserve=mode "$srcdir/usr/" "$pkgdir/usr/"
}
