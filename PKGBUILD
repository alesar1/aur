# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
pkgname='mongodb-compass-community-beta'
pkgver='1.17.0beta.0'
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Community Edition (beta version)'
arch=('x86_64')
url='https://www.mongodb.com/products/compass'
license=('custom')
depends=('nss' 'gconf' 'libxtst' 'alsa-lib' 'gtk2' 'libsecret' 'gcc-libs-multilib' 'libxss')
optdepends=('gnome-keyring' 'libgnome-keyring')
source=('https://downloads.mongodb.com/compass/beta/mongodb-compass-community-beta-1.17.0-beta.0.x86_64.rpm')
md5sums=('121399e3cebb52f0b95fafaf5f948b51')

package() {
	rm -r "$srcdir/usr/share/doc/"
	mkdir -p "$srcdir/usr/share/licenses/mongodb-compass-community-beta"
	mv "$srcdir/usr/share/mongodb-compass-community-beta/LICENSE"* "$srcdir/usr/share/licenses/mongodb-compass-community-beta"

	cp -r --preserve=mode "$srcdir/usr/" "$pkgdir/usr/"
}
