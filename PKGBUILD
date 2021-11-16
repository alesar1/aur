# Maintainer: monosans

pkgname=python-pygismeteo
_pkgname=pygismeteo
pkgver=2.0.0
pkgrel=1
pkgdesc='Wrapper for Gismeteo.ru'
url=https://github.com/monosans/pygismeteo
arch=(any)
license=(MIT)
makedepends=(python-setuptools)
depends=(python python-lxml python-requests)
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('7625fd52bc24d55ba22e6c1ae9c85b6f92cb950628d954988e2f1fbf217fa5fd')

package() {
	cd "$srcdir/$_pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
# vim:set ts=4 sw=4 noet:
