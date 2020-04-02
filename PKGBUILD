# Maintainer: Arthorius <Arthcomicando@gmail.com>

pkgname=magnus
pkgver=1.0.3
pkgrel=3
pkgdesc="A very simple screen magnifier"
arch=(x86_64)
url="https://github.com/stuartlangridge/magnus/"
license=('MIT')
depends=(python3 gobject-introspection-runtime gobject-introspection gtk3 libkeybinder3 gdk-pixbuf2)
source=("https://github.com/stuartlangridge/magnus/archive/${pkgver}.tar.gz")
md5sums=('53249667de050d930dcde097ff9ee937')

_instance=Magnus

build() {
	tar -xf "${pkgver}.tar.gz" || 1
}

package() {
	cd "${pkgname}-${pkgver}"
	
	install -D -m 0755 "magnus" "${pkgdir}/opt/${_instance}/magnus"
	install -D -m 0744 -Dt "${pkgdir}/usr/share/man/man1" "data/magnus.1"
	install -D -m 0644 "data/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${_instance}.desktop"
	install -D -m 0744 "data/logo.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
	install -D -m 0644 "LICENSE" "${pkgdir}/usr/share/licenses/${_instance}/LICENSE"
	
	# Linking sym on /usr/bin
	mkdir -p "${pkgdir}/usr/bin"
	ln -sf "/opt/${_intance}/magnus" "${pkgdir}/usr/bin/${pkgname}"
}
