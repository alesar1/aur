# vim: ft=PKGBUILD
# Maintainer: Jack Frost <fbt@fleshless.org>

pkgname=watchman-sm
pkgdesc='A service manager for linux written in bash'
license=( 'custom:ISC' )
pkgver=1.9.1
pkgrel=1
arch=( 'any' )
url='https://github.com/fbt/watchman'

conflicts=( 'watchman-sm' )

optdepends=( 'watchman-sm-services-git: example scripts that mostly work out of the box on arch' )

source=( "https://github.com/fbt/watchman/archive/${pkgver}.zip" )

build() {
	cd "watchman-${pkgver}"
	./make.sh
}

package() {
	install_prefix='/usr'

	cd "watchman-${pkgver}"
	DESTDIR="$pkgdir" USR="$install_prefix" ./make.sh install
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

	# a link to provide a system-wide 'service' script
	cd "${pkgdir}${install_prefix}/bin"; ln -s watchman-service service

}

sha1sums=('bfe8c6dc882622443c629250c22cf38a95a8d396')
