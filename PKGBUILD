# Maintainer: Raphael Michel <mail@raphaelmichel.de>
_pkgname=pretixdesk
pkgname=$_pkgname-git
pkgver=r71.a61e9c1
pkgrel=1
pkgdesc="Desktop application for attendee check-in with the pretix ticketing system"
arch=('i686' 'x86_64')
license=('GPL')
url="https://pretix.eu"
depends=('jdk>=9' 'bash' 'sqlite')
makedepends=('jdk>=9' 'gradle')
source=('git+https://github.com/pretix/pretixdesk.git' 'git+https://github.com/pretix/libpretixsync.git' 'launcher')
conflicts=('pretixdesk')
provides=('pretixdesk')
sha256sums=('SKIP' 'SKIP' 'SKIP')

pkgver() {
  cd "${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "${srcdir}/${_pkgname}/pretixdesk"
	git submodule init
	JAVA_HOME=/usr/lib/jvm/java-9-jdk ./gradlew build fatJar
}


prepare() {
	cd "${srcdir}/${_pkgname}"
	git submodule init
	git config submodule.libpretixsync.url $srcdir/libpretixsync
	git submodule update
}

package() {
	install -d "${pkgdir}/usr/bin"
	install -Dm 755 launcher "${pkgdir}/usr/bin/pretixdesk"

	cd "${srcdir}/${_pkgname}/pretixdesk"
	install -Dm 644 "build/libs/pretixdesk.jar" "${pkgdir}/usr/share/java/${_pkgname}/pretixdesk.jar"
	install -Dm 644 ../LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
