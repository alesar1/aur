# Maintainer: ELmoussaoui Bilal <bil.elmoussaoui@gmail.com>

pkgname=gnome-twofactorauth-git
_gitname=TwoFactorAuth
pkgver=v0.1beta2.r1.g6be480f
pkgrel=1
pkgdesc='Two-Factor Authentication code generator for Gnome'
arch=('i686' 'x86_64')
license=('GPL3')
url="https://github.com/bil-elmoussaoui/${_gitname}"
depends=('desktop-file-utils' 'gobject-introspection' 'gtk3' 'python-gobject' 'python-cairo' 'python-pyotp')
makedepends=('git' 'gnome-common' 'intltool' 'itstool' 'python' 'yelp-tools')

options=('!emptydirs')
install=gnome-twofactorauth.install
source=("git://github.com/bil-elmoussaoui/${_gitname}.git")
md5sums=('SKIP')
conflicts=('gnome-twofactorauth')
provides=("gnome-twofactorauth=$pkgver")

pkgver() {
	cd "${_gitname}"
	git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "$srcdir/${_gitname}"
	./autogen.sh --prefix=/usr
	make
}

package() {
	cd "$srcdir/${_gitname}"
	make DESTDIR="${pkgdir}" install
}