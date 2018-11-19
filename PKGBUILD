# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: push2001sla@gmail.com
# Developer: andrewcrew@rambler.ru

pkgname=xneur-devel-git
pkgver=0.20.0
pkgrel=1
epoch=
pkgdesc="X Neural Switcher detects the input language and corrects keyboard layout. Git version"
arch=('any')
url="https://github.com/AndrewCrewKuznetsov/xneur-devel"
license=('GPL')
groups=()
depends=('xosd')
makedepends=('git')
checkdepends=()
optdepends=()
provides=('xneur')
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/AndrewCrewKuznetsov/xneur-devel")
noextract=()
md5sums=('6d34f431d79aa1951cb139bb28108b25')
validpgpkeys=()

prepare() {
	rm -rf "$pkgname-$pkgver"
	git clone https://github.com/AndrewCrewKuznetsov/xneur-devel "$pkgname-$pkgver"
}

build() {
	cd "$pkgname-$pkgver/xneur"
	./autogen.sh --prefix=/opt/xneur
	make
}

#check() {
#	cd "$pkgname-$pkgver/xneur"
#	make -k check
#}

package() {
	cd "$pkgname-$pkgver/xneur"
	make DESTDIR="$pkgdir/" install
	mkdir -p "$pkgdir/usr/bin"
	echo -e "#!/bin/bash\n/opt/xneur/bin/xneur $@" > "$pkgdir/usr/bin/xneur"
	chmod +x "$pkgdir/usr/bin/xneur"
}
