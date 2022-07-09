# Maintainer: EXtremeExploit <pedro.montes.alcalde@gmail.com>
# Contributor: Severin Kaderli <severin@kaderli.dev>
# Contributor: aimileus < $(echo YWltaWxpdXNAcHJvdG9ubWFpbC5jb20K | base64 -d)
_pkgname="vita3k"
pkgname="${_pkgname}-git"
pkgver=r2686.27e0c030
pkgrel=1
pkgdesc="Experimental PlayStation Vita emulator"
arch=('x86_64')
url="https://vita3k.org/"
license=('GPL2')
makedepends=(
	'boost'
	'cmake'
	'git'
	'vulkan-headers'
	'clang'
	'ninja'
	'python'
)
depends=(
	'gtk3'
	'sdl2'
	'unzip'
)
provides=('vita3k')
conflicts=('vita3k')
source=(
	"${pkgname}::git+https://github.com/Vita3K/Vita3K.git"
	"vita3k.desktop"
)
b2sums=(
	'SKIP'
	'6331bd061fe93fea5fb9ae57667cdb7ff081efa27681e25b94c54da748809e52d933afa96465b7d14ca0d286b0c47e66328a5080acef6760a88a39c65bf2321c'
)

pkgver() {
	cd "${srcdir}/${pkgname}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${srcdir}/${pkgname}"


	git submodule update --init --recursive
}

build() {
	cd "${srcdir}/${pkgname}"

	export CC="/usr/bin/clang"
	export CXX="/usr/bin/clang++"
	export CMAKE_MAKE_PROGRAM=ninja

	export BUILDPRESET=linux-ninja-clang

	# Configure
	cmake --preset ${BUILDPRESET} -DCI=ON -DUSE_VULKAN=ON -DUSE_DISCORD_RICH_PRESENCE=OFF
	# Build
	cmake --build build/${BUILDPRESET} --config Release
}

package() {
	cd "${srcdir}/${pkgname}"

	mkdir -p "${pkgdir}/usr/bin/" "${pkgdir}/opt/vita3k/"

	cp -r "build/${BUILDPRESET}/bin/Release/"* "${pkgdir}/opt/vita3k/"
	ln -s "/opt/vita3k/Vita3K" "${pkgdir}/usr/bin/vita3k"

	# These folders needs 777 permissions because vita3k creates files in them
	chmod 777 "${pkgdir}/opt/vita3k/"
	chmod 777 "${pkgdir}/opt/vita3k/data"

	install -Dm644 "README.md" "${pkgdir}/usr/share/doc/${_pkgname}/README.md"
	install -Dm644 "data/image/icon.png" "${pkgdir}/usr/share/icons/hicolor/128x128/apps/${_pkgname}.png"
	install -Dm644 "${srcdir}/vita3k.desktop" "${pkgdir}/usr/share/applications/vita3k.desktop"
}
