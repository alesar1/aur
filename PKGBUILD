# Maintainer: K900 <me@0upti.me>
# Patch by notfound4 <https://github.com/notfound4/Duelyst-Launcher>
pkgname="duelyst"
pkgver="1.75.0"
pkgrel=1

pkgdesc="A collectible card game played on a grid-like board"
url="https://duelyst.com/"
license=("custom")

arch=("any")

depends=("electron")
makedepends=("imagemagick")

# we don't have any ELF files
options=("!strip")

source=(
	"http://downloads.counterplay.co/duelyst/v${pkgver}/duelyst-v${pkgver}-win32-x64.zip"
	"LICENSE.html::https://duelyst.com/tos"
	"duelyst_linux.diff"
	"duelyst.sh"
	"duelyst.desktop"
)

sha512sums=(
	"007e31a2b228b9ce97c95fd5202f3afe527ee3cb643d0aeea0ffcec896fd5ef5cf0d87ef81a88eda34337373a71d5d58f4f1f9f63def2f7b461a4cbbf1f6e58e"
	"9bb012e75b0702d3321c9677921014932500549b9cbff1cc3f9698987c1b22ba804cb094fe498050e2300681cab4639b6818a05241ce3425704c60bb0a2f57ca"
	"a12e18b4ea8d61ea9002cc030dac648632a238ff4d411d1f201ffcb25fbec4ef292db03bbda408cbb397ea8a5fe5c425ae219ddfcaa43f8eae78e4b547283bd1"
	"7999607a9aff7476c6dc2111e170bbcaa9d57c0c659afea27fa736e44904d5500047ecff6b1d3ff2dd2236dbd9c839732cb3da611d23df9861900417906e7261"
	"b5ec6a5a4f4bb7b3cb5707758a9061e23014b271a353e2239554b8b1e9448d650e84171381213b6b29ed70b91d30109107aeadc4608ef8a5eac047ada29d7bf3"
)

prepare() {
	cd "${srcdir}/resources/app"
	patch -i "${srcdir}/duelyst_linux.diff" "desktop.js"
}

package() {
	mkdir -p "${pkgdir}/opt/duelyst"
	cd "${srcdir}/resources/app"

	# clear out some libs
	find -name "*.dylib" -delete
	find -name "*.dll" -delete

	# remove Steamworks libs
	rm steam/greenworks*

	install -Dm755 "${srcdir}/duelyst.sh" "${pkgdir}/usr/bin/duelyst"

	for size in 16 24 32 48 64 128 256 512 1024; do
		icon_dir="${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps"
		mkdir -p "${icon_dir}"
		convert "icon.png" -resize "${size}x${size}" "${icon_dir}/duelyst.png"
	done

	install -Dm644 "${srcdir}/duelyst.desktop" "${pkgdir}/usr/share/applications/duelyst.desktop"

	install -Dm644 "${srcdir}/LICENSE.html" "${pkgdir}/usr/share/licenses/$pkgname/LICENSE.html"

	cp -rv --no-preserve=ownership -- * "${pkgdir}/opt/duelyst"
}
