# Maintainer: Jordan Christiansen <xordspar0@gmail.com>

# To do:
# * If upstream adds a way to specify the location of the data files, move the
#   package contents to /usr/bin/ and /usr/share/.

pkgname=gearhead
pkgver=1.300
pkgrel=2
pkgdesc="A rougelike mecha role playing game"
arch=(i686 x86_64)
url="http://www.gearheadrpg.com/"
license=('LGPL')
depends=(sdl sdl_image sdl_ttf)
makedepends=(fpc)
source=("https://github.com/jwvhewitt/${pkgname}-1/archive/v${pkgver}.tar.gz"
		${pkgname}.sh
		${pkgname}.desktop
		${pkgname}.png)
md5sums=('82be0ad5093eeecbe6feea1b8fa2acd5'
         'cd699f36df6275bdb6b345cb5ac8f8f1'
         'a97a4a561783e23767e223476c0e7899'
         '19f59e008bbe3fdcf39363818d3a5cf1')

build() {
	cd "${pkgname}-1-${pkgver}"

	fpc -dSDLMODE gharena
}

package() {
	# Install the game itself.
	cd "${pkgname}-1-${pkgver}"
	install -d "${pkgdir}/opt/${pkgname}"
	cp -ar -t "${pkgdir}/opt/${pkgname}" Image Design GameData Series doc
	install -Dm755 gharena "${pkgdir}/opt/${pkgname}"

	# Install the command line and desktop runners.
	cd "${srcdir}"
	install -Dm755 ${pkgname}.sh "${pkgdir}/usr/bin/${pkgname}"
	# The .desktop file was adapted from Debian's gearhead package.
	install -Dm644 ${pkgname}.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
	install -Dm644 ${pkgname}.png "${pkgdir}/usr/share/pixmaps/${pkgname}.xpm"

	# Install the documentation
	install -d "${pkgdir}/usr/share/doc/${pkgname}"
	ln -s "/opt/${pkgname}/doc/man_chara.txt" "${pkgdir}/usr/share/doc/${pkgname}/man_chara.txt"
	ln -s "/opt/${pkgname}/doc/man_mecha.txt" "${pkgdir}/usr/share/doc/${pkgname}/man_mecha.txt"
	ln -s "/opt/${pkgname}/doc/man_umek.txt" "${pkgdir}/usr/share/doc/${pkgname}/man_umek.txt"
}
