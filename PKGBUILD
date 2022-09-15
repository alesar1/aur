# Maintainer: Christian Hesse <mail@eworm.de>

pkgbase=lua-libmagic
pkgname=('lua-libmagic' 'lua51-libmagic' 'lua52-libmagic' 'lua53-libmagic')
pkgver=5.41
pkgrel=3
pkgdesc='libmagic binding for lua'
arch=('i686' 'x86_64')
url='https://github.com/mah0x211/lua-libmagic'
license=('MIT')
makedepends=('lua' 'lua51' 'lua52' 'lua53')
source=("${pkgbase}-${pkgver}.tar.gz::https://github.com/mah0x211/${pkgbase}/archive/refs/tags/v${pkgver}.tar.gz")
sha256sums=('e6bc0eb1ea7b430b9a337139f2f425e1808bb23be413dd022943f86f0a7ff497')

build() {
	cd ${pkgbase}-${pkgver}/

	echo '#define DEFAULT_LUA_MAGIC_FILE "/usr/share/file/misc/magic.mgc"' > src/config.h

	gcc -fPIC -shared -I/usr/include/lua5.1/ -llua5.1 -lmagic -o magic51.so src/magic.c
	gcc -fPIC -shared -I/usr/include/lua5.2/ -llua5.2 -lmagic -o magic52.so src/magic.c
	gcc -fPIC -shared -I/usr/include/lua5.3/ -llua5.3 -lmagic -o magic53.so src/magic.c
	gcc -fPIC -shared -llua -lmagic -o magic54.so src/magic.c
}

package_lua-libmagic() {
	depends=('file' 'lua')
	provides=('lua-magic')
	replaces=('lua-magic')

	install -D -m0755 ${pkgbase}-${pkgver}/magic54.so ${pkgdir}/usr/lib/lua/5.4/magic.so
}

package_lua51-libmagic() {
	depends=('file' 'lua51')
	provides=('lua52-magic')
	replaces=('lua52-magic')

	install -D -m0755 ${pkgbase}-${pkgver}/magic51.so ${pkgdir}/usr/lib/lua/5.1/magic.so
}

package_lua52-libmagic() {
	depends=('file' 'lua52')
	provides=('lua51-magic')
	replaces=('lua51-magic')

	install -D -m0755 ${pkgbase}-${pkgver}/magic52.so ${pkgdir}/usr/lib/lua/5.2/magic.so
}

package_lua53-libmagic() {
	depends=('file' 'lua53')
	provides=('lua51-magic')
	replaces=('lua51-magic')

	install -D -m0755 ${pkgbase}-${pkgver}/magic53.so ${pkgdir}/usr/lib/lua/5.3/magic.so
}

