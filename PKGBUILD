# Maintainer: kleintux <reg-archlinux AT klein DOT tuxli DOT ch> 

_pkgname=sline
pkgname="${_pkgname}-git"
pkgver=r86.378862e
pkgrel=1
pkgdesc='Simple line-editing and command history library.'
arch=('x86_64' 'aarch64')
url="https://sr.ht/~arivigo/${_pkgname}"
license=('MIT')
depends=('glibc')
source=("git+https://git.sr.ht/~arivigo/${_pkgname}")
sha256sums=('SKIP')
conflicts=(${_pkgname})

pkgver() {
	cd "${_pkgname}"
 	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${_pkgname}"
  sed -i "s/LDFLAGS.*$/&,-z,now/" config.mk
}

build() {
	cd "${_pkgname}"
	make
}

package() {
	cd "${_pkgname}"
	make DESTDIR="${pkgdir}" PREFIX='/usr' MANPREFIX=/usr/share/man install
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
