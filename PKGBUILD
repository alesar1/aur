# Maintainer: Paul Knopf <pauldotknopf@gmail.com>
pkgname=darch
pkgver=0.18.2
pkgrel=1
epoch=
pkgdesc="A utility to that uses containerd to build stateless operating system images that can be booted bare-metal."
arch=('x86_64')
url="https://github.com/godarch/darch"
license=('MIT')
groups=()
depends=('libseccomp')
makedepends=()
checkdepends=()
optdepends=()
provides=('containerd', 'runc')
conflicts=('containerd', 'runc')
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://github.com/godarch/darch/releases/download/v$pkgver/darch-amd64-with-runtime.tar.gz")
md5sums=('05cca2534c0975500f40e9dd70a67319')
noextract=()
validpgpkeys=()
package() {
	# The tarball has all the directories setup correctly.
	cp * -r $pkgdir
}
