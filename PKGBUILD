# Maintainer: Lucki <Lucki at holarse-linuxgaming dot de>
# Contributor: Carl Reinke <mindless2112 gmail com>

pkgname=lix-git
_pkgname=lix
pkgver=2016.01.09.r4.ga61fcfd
pkgrel=1
pkgdesc="An action-puzzle game in the IRS (Interactive Rodent Simulation) genre inspired by Lemmings"
arch=('i686' 'x86_64')
url="http://asdfasdf.ethz.ch/~simon/index.php"
license=('custom:CC0')
changelog=.CHANGELOG
install=${pkgname}.install
depends=('allegro4' 'enet' 'libpng')
makedepends=('gendesk')
provides=('lix')
conflicts=('lix')
source=(${pkgname}::git://github.com/SimonN/Lix.git
	${_pkgname}-logo.png::http://asdfasdf.ethz.ch/~simon/bitmap/lix_with_lem.png
	${_pkgname}.sh
	${_pkgname}-server.sh)
sha512sums=('SKIP'
            'f116accf767391710ccc44d8fc41b3bdf67b1af2e81c9f08175973f4fa3aa59ef8af460bc1ebf9e9f0b50a44f67628085994348708c6c9db96da8c97551ee33f'
            '82fdaa227c9a86a55a02e6f0409f39c9f72e26e956d55b593df3d7fd4c5368ce904868b1603acb1a17ea502c0d5a26586ccbae7c67bb377b204b5b0d3f5455be'
            '081d6bddf6256f3d641ead7cf934ad5e88f220b8f9f7f6aa8ee85d4cce42858c6f60ba14111823834d7925e93d46b5838ca98d3b985a501a8ad757632b8e6e88')

pkgver()
{
	cd "${srcdir}/${pkgname}"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare()
{
	# generate .desktop-file
	gendesk -n -f --categories "Game"

	# update .CHANGELOG
	git -C "${srcdir}/${pkgname}" log --graph -10 > "${startdir}/.CHANGELOG"
}

build()
{
	cd "${srcdir}/${pkgname}"
	make
}

package()
{
	install -Dm644 "${srcdir}/${pkgname}/doc/copying.txt" "${pkgdir}/usr/share/licenses/${_pkgname}/COPYING"
	install -Dm755 "${srcdir}/${_pkgname}.sh" "${pkgdir}/usr/bin/${_pkgname}"
	install -Dm755 "${srcdir}/${_pkgname}-server.sh" "${pkgdir}/usr/bin/${_pkgname}-server"
	install -Dm755 "${srcdir}/${pkgname}/bin/${_pkgname}" "${pkgdir}/opt/${_pkgname}/bin/${_pkgname}"
	install -Dm755 "${srcdir}/${pkgname}/bin/lixd" "${pkgdir}/opt/${_pkgname}/bin/lixd"
	install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
	install -Dm644 "${srcdir}/${_pkgname}-logo.png" "${pkgdir}/usr/share/pixmaps/${_pkgname}.png"

	cp -R "${srcdir}/${pkgname}/data/" "${srcdir}/${pkgname}/doc/" "${srcdir}/${pkgname}/levels/" "${srcdir}/${pkgname}/images/" "${pkgdir}/opt/${_pkgname}/"
	mkdir "${pkgdir}/opt/${_pkgname}/replays"
	chown :games "${pkgdir}/opt/${_pkgname}/data" "${pkgdir}/opt/${_pkgname}/replays" "${pkgdir}/opt/${_pkgname}/levels" "${pkgdir}/opt/${_pkgname}/images" "${pkgdir}/opt/${_pkgname}/data/user"
	chmod 775 "${pkgdir}/opt/${_pkgname}/data" "${pkgdir}/opt/${_pkgname}/replays" "${pkgdir}/opt/${_pkgname}/levels" "${pkgdir}/opt/${_pkgname}/images" "${pkgdir}/opt/${_pkgname}/data/user"
}
