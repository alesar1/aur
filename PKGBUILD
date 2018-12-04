# Maintainer: J. Scheurich <mufti11@web.de>
pkgname=white_dune
pkgver=0.99pl1202
pkgrel=1
epoch=
pkgdesc="white_dune X3D/VRML97 tool"
arch=('86_64')
url="ftp://ftp.ourproject.org/pub/wdune/$pkgname-$pkgver.tar.bz2"
license=('GPL')
groups=()
depends=()
makedepends=(gcc
             fakeroot
             glu 
             mesa 
             libx11 
             libxt 
             libxmu 
             libxext
             libxi
             libxp
             openmotif
             libpng 
             libjpeg-turbo
             zlib
             expat
             gcc
             flex
             bison
             gawk
             m4
             make
             rcs
             firefox
             lxterminal
             gimp
             audacity
             cinelerra-cv
             kolourpaint
             imagemagick
             netpbm
             freeglut
             jdk8-openjdk
             cgal
             boost
             curl
             freetype2
             ttf-bitstream-vera             
)
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$url")
noextract=()
md5sums=('0db3c16d83b0b4f76bf0261731799e07')
validpgpkeys=()

prepare() {
	cd "$pkgname-$pkgver"
#	patch -p1 -i "$srcdir/$pkgname-$pkgver.patch"
}

build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr --without-devil --with-uninstallcomment="pacman -R wdune" --with-optimization --with-helpurl="/usr/share/doc/$name/docs" --with-protobaseurl="/usr/share/doc/$name/docs" --with-checkincommand="ci" 
        make
}

check() {
	cd "$pkgname-$pkgver"
}

package() {
	cd "$pkgname-$pkgver"
        install -Dm755 bin/dune $pkgdir/usr/bin/dune 
        mkdir -p "$pkgdir/usr/share/doc/$name/docs"
        cp -r "docs" "$pkgdir/usr/share/doc/$name/docs"
        install -Dm644 desktop/kde/dune.desktop $pkgdir/usr/share/applications/dune.desktop
	install -Dm644 desktop/kde/dune.png $pkgdir/usr/share/pixmaps/dune.png
	install -Dm644 desktop/kde/dune4kids.desktop $pkgdir/usr/share/applications/dune4kids.desktop
	install -Dm644 desktop/kde/dune4kids.png $pkgdir/usr/share/pixmaps/dune4kids.png
}
