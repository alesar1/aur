# Maintainer: j.r <j.r@jugendhacker.de>
_pkgname="among-sus"
pkgname="${_pkgname}-git"
pkgver=r68.fb2bd86
pkgrel=1
pkgdesc="Among Us, but it's a text adventure"
arch=('i686' 'x86_64')
url="https://sr.ht/~martijnbraam/${_pkgname}/"
license=('GPL3')
depends=('glibc')
makedepends=('git')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://git.sr.ht/~martijnbraam/among-sus"
	'0001-Add-ldflags-to-Makefile.patch')
md5sums=('SKIP'
         '249ccb050e1dd57cdf713aae53b95938')

pkgver() {
	cd "$srcdir/${_pkgname}"
	
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare(){
	cd "$srcdir/${_pkgname}"

	patch -p1 -i ${srcdir}/0001-Add-ldflags-to-Makefile.patch
}

build() {
	cd "$srcdir/${_pkgname}"
	make
}

package() {
	cd "$srcdir/${_pkgname}"
	install -Dm755 among-sus ${pkgdir}/usr/bin/among-sus
}
