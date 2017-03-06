# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Kamil Cukrowski <kamil@dyzio.pl>
# Contributor: Mehmet Akif <makiftasova@gmail.com>
# picpgm author: Christian Stadler
pkgname=picpgm
pkgver=2.9.2.3
pkgrel=2
epoch=
pkgdesc="The PICPgm Development Programmer Software is a free and simple In-System-Development Programmer Software for the Microchip PIC microcontrollers."
arch=( "i686" "x86_64" )
url="picpgm.picprojects.net"
license=('custom')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source_i686=("http://picpgm.picprojects.net/download/${pkgname}-${pkgver}-linux-i386.tar.gz")
source_x86_64=("http://picpgm.picprojects.net/download/${pkgname}-${pkgver}-linux-x86_64.tar.gz")
noextract=()
sha256sums_i686=("9613df322b73374a38f06e08604d764bee0ee48c295ce28b62995f32a0ee3bf3")
sha256sums_x86_64=("d900523448b07c5002a6f7dcc0eba72431f61c82f9817e12b8293d9128283bee")
validpgpkeys=()

package() {
	install -d $pkgdir/opt/picpgm
	install -d $pkgdir/usr/bin
	install -m 755 -o root -g root ./picpgm $pkgdir/opt/picpgm
	install -m 666 -o root -g root ./pgmifcfg.xml $pkgdir/opt/picpgm
	install -m 666 -o root -g root ./disclaimer.txt $pkgdir/opt/picpgm
	ln -s /opt/picpgm/picpgm  $pkgdir/usr/bin/picpgm
}

