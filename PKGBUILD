# Maintainer: BadAtNames <badatnames@tutanota.com>

pkgname=x86-manpages-git
_pkgname="${pkgname%%-git}"
pkgver=v1.0.0
pkgrel=2
pkgdesc="Man page documentation for x86-64 ISA"
arch=('any')
url="https://github.com/ttmo-O/x86-manpages"
source=("git://github.com/ttmo-O/x86-manpages")
sha256sums=('SKIP')
depends=('man-db')

package()
{
	mkdir -p "${pkgdir}/usr/share/man/man7"
	cd "${srcdir}/${_pkgname}"
	install -m 644 -C man7/* "${pkgdir}/usr/share/man/man7/"
}
