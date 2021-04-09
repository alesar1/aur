# Maintainer: Adrian Perez de Castro <aperez@igalia.com>
pkgdesc=''
pkgbase=xcursor-cz-viator
pkgname=(xcursor-cz-viator-{hourglass,ring,rotor,windmill}-{white,black} xcursor-cz-hickson)
pkgver=20210407
pkgrel=1
_commit=4777dfc09de1720528170dcfbf217c28681df83b
license=(GPL3)
url=https://github.com/charakterziffer/cursor-toolbox
arch=(any)
makedepends=(git inkscape xorg-xcursorgen python2 patch)
depends=()
source=("${pkgbase}-${pkgver}::git+${url}#commit=${_commit}" build.patch)
sha512sums=('SKIP'
            'c2b8792e0a9afd639864608dc674acbc1a368d9a83cd46dd3422403961af2b001c3eb004269eb701fcd34f4cfceaca5912a751a6ecd68ad08901ec94e0afb972')

prepare () {
	cd "${pkgbase}-${pkgver}"
	patch -p1 < "${srcdir}/build.patch"
}

build () {
	cd "${pkgbase}-${pkgver}"
	local spinner color suffix

	for color in white black ; do
		if [[ ${color} = white ]] ; then
			suffix=''
		else
			suffix='-black'
		fi

		msg2 "Rendering color variant: ${color}"
		python2 render-pngs.py "svgs/template${suffix}.svg"

		for spinner in hourglass ring rotor windmill ; do
			msg2 "Rendering variant: ${spinner} ${color}"
			python2 render-pngs.py "svgs/spinner-${spinner}${suffix}.svg"

			themetitle="cz-Viator-${spinner}-${color}" ./make.sh
		done
	done

	msg2 "Rendering variant: Hickson"
	python2 render-pngs.py "more-themes/cz-Hickson/cz-Hickson.svg"
	themetitle="cz-Hickson" ./make.sh
}

_package () {
	install -dm755 "${pkgdir}/usr/share/icons"
	cp -a "${pkgbase}-${pkgver}/$1" "${pkgdir}/usr/share/icons/"
}

_package_viator_variant () {
	_package "cz-Viator-$1-$2"
}

package_xcursor-cz-viator-hourglass-white () {
	_package_viator_variant hourglass white
}

package_xcursor-cz-viator-hourglass-black () {
	_package_viator_variant hourglass black
}

package_xcursor-cz-viator-ring-white () {
	_package_viator_variant ring white
}

package_xcursor-cz-viator-ring-black () {
	_package_viator_variant ring black
}

package_xcursor-cz-viator-rotor-white () {
	_package_viator_variant rotor white
}

package_xcursor-cz-viator-rotor-black () {
	_package_viator_variant rotor black
}

package_xcursor-cz-viator-windmill-white () {
	_package_viator_variant windmill white
}

package_xcursor-cz-viator-windmill-black () {
	_package_viator_variant windmill black
}

package_xcursor-cz-hickson () {
	_package cz-Hickson
}
