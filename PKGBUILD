# Maintainer: BrainDamage <>

pkgname=konfyt
pkgver=1.1.7
pkgrel=1
pkgdesc="Konfyt is a digital keyboard workstation for Linux which allows you to set up patches, each with multiple layers, and instantly switch between these patches for live keyboard playing."
arch=('x86_64')
url='http://www.noedig.co.za/konfyt'
license=('GPL3')
depends=('fluidsynth' 'carla' 'liblscp' 'qt5-base')
source=("https://github.com/noedigcode/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('e8a13d021cabcc8a75fc041d2b447b6d0615b325c0d63c841182f06d075c5772')

prepare() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	sed --in-place s@/home/gideon/bin/@@g desktopentry/konfyt.desktop
}

# template start; name=qmake; version=1;
build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	qmake PREFIX=/usr \
		QMAKE_CFLAGS="${CFLAGS}" \
		QMAKE_CXXFLAGS="${CXXFLAGS}" \
		QMAKE_LFLAGS="${LDFLAGS}"
	make
}

# template start; name=make_install; version=1;
package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	install -Dm 755 ${pkgname} "${pkgdir}/usr/bin/${pkgname}"
	install -Dm 644 "desktopentry/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
	for icon in icons/konfyt\ *.png; do
		size=$(echo "${icon}" | cut -d ' ' -f 2 | cut -d '.' -f 1)
		if [[ "$size" != 'yellow' ]]; then
			install -Dm 644 "${icon}" "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/${pkgname}.png"
		fi
	done
}
