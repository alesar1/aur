# Maintainer: Erikas Rudinskas <erikmnkl@gmail.com>

pkgname=nbfc-git
pkgver=1.6.3.r9.g4699d17
pkgrel=1
pkgdesc='Cross-platform fan control service for notebooks (Development version)'
arch=('i686' 'x86_64')
url='https://github.com/hirschmann/nbfc'
conflicts=('nbfc-beta' 'nbfc')
license=("GPL3")
install=${pkgname}.install
depends=("mono")
makedepends=('ncurses<=6.0-4')
provides=('nbfc' 'ec-probe')
makedepends=('nuget')
source=("${pkgname}::git+https://github.com/hirschmann/nbfc.git"
        "nbfc"
        "ec-probe")  
md5sums=("SKIP"
         "2dc636f29fa935ea427e6e67bdb9f65d"
         "81686043a7fc44d620a00a171c917936")

pkgver() {
	cd "${srcdir}/${pkgname}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | sed 's/.beta//g'
}

build() {
	cd "${srcdir}/${pkgname}"
	nuget restore NoteBookFanControl.sln
	xbuild /t:Build /p:Configuration=ReleaseLinux NoteBookFanControl.sln
}

package() {
	# Files installation:
	mkdir -p "${pkgdir}/opt/nbfc"
	cp -R "${srcdir}/${pkgname}/Linux/bin/Release/"* "${pkgdir}/opt/nbfc/"

	# Systemd services:
	install -D -m644 "${srcdir}/${pkgname}/Linux/nbfc.service" "${pkgdir}/etc/systemd/system/nbfc.service"
	install -D -m644 "${srcdir}/${pkgname}/Linux/nbfc-sleep.service" "${pkgdir}/etc/systemd/system/nbfc-sleep.service"
	
	# Executables:
	install -Dm755 "${srcdir}/nbfc" "${pkgdir}/usr/bin/nbfc"
	install -Dm755 "${srcdir}/ec-probe" "${pkgdir}/usr/bin/ec-probe"

	# License:
	mkdir -p "${pkgdir}/usr/share/licenses/nbfc"
	install -D -m755 "${srcdir}/${pkgname}/LICENSE.md" "${pkgdir}/usr/share/licenses/nbfc/LICENSE"
}
