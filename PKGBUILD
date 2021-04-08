# Maintainer: Ido Perlmuter <ido@ido50.net>
pkgname=sqlar-fossil
pkgver=c4e365a36a
pkgrel=2
pkgdesc="Compressed archives in SQLite databases, including a fuse filesystem"
arch=('any')
url="https://sqlite.org/sqlar/doc/trunk/README.md"
license=('Public Domain')
groups=()
depends=()
makedepends=('fossil' 'gcc' 'make' 'glibc')
optdepends=('fuse3: mount SQLite Archives as filesystems')
provides=("${pkgname%-fossil}")
conflicts=("${pkgname%-fossil}")
replaces=()
backup=()
options=()
install=
noextract=()

pkgver() {
	cd "$srcdir/${pkgname%-fossil}"
    printf "%s" "$(fossil timeline --format %h -n 1 | head -n 1)"
}

prepare() {
    cd "$srcdir"
    fossil clone --no-open https://sqlite.org/sqlar/src "${pkgname%-fossil}.fossil"
    mkdir "${pkgname%-fossil}"
    cd "${pkgname%-fossil}"
    fossil open "../${pkgname%-fossil}.fossil"
}

build() {
	cd "$srcdir/${pkgname%-fossil}"
	CFLAGS= make all
}

package() {
	cd "$srcdir/${pkgname%-fossil}"
    mkdir -p "${pkgdir}/usr/bin"
    install sqlar sqlarfs "${pkgdir}/usr/bin/"
}
