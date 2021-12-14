# Maintainer: Yauhen Kirylau <actionless DOT loveless PLUS aur AT gmail MF com>

_name=gaphor
pkgname=python-${_name}
pkgver=2.7.1
pkgrel=2
pkgdesc="Simple and easy to use modeling tool for UML using GTK3"
arch=('any')
url="https://github.com/gaphor/${_name}"
license=('Apache')
depends=(
	'python-gaphas'
	'python-typing_extensions'
	'python-generic'
	'python-tinycss2'
)
makedepends=(
	'python-pip'
	'gendesk'
)
_wheelname="${_name/-/_}-$pkgver-py3-none-any.whl"
source=(
	"https://files.pythonhosted.org/packages/py3/${_name::1}/$_name/${_wheelname}"
	"https://raw.githubusercontent.com/gaphor/${_name}/master/logos/org.gaphor.Gaphor.svg"
)
sha256sums=('fc61918df54d1aa5b0ae2399030dea737b8f2a8a2ff546cd8884ae744a1fbdf5'
            'c4bbe4a67662d52c04cbd283b33f3ff3a97697e158c56c4b776c1c4ef527dd62')

prepare() {
	gendesk -f --pkgname="$_name" --pkgdesc="$pkgdesc" --categories=Development PKGBUILD
}

package() {
	PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps --no-warn-script-location "${_wheelname}"
	rm "${pkgdir}"/usr/lib/python*/site-packages/gaphor-*.dist-info/direct_url.json
	install -Dm644 "$srcdir/${_name}.desktop" -t "$pkgdir"/usr/share/applications
	install -Dm644 "$srcdir/org.gaphor.Gaphor.svg" "$pkgdir"/usr/share/pixmaps/org.gaphor.Gaphor.svg
}

