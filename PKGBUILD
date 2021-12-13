# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>

pkgname=markdown2ctags
pkgver=0.3.3
pkgrel=2
pkgdesc='Generate ctags-compatible tags files for Markdown documents'
arch=(any)
license=(BSD3)
url="https://github.com/jszakmeister/$pkgname"
depends=(python)
makedepends=(python-setuptools)
_archive="$pkgname-$pkgver"
source=("$_archive.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('e633f6d9baebdfc97349707825543958aead128b6385def2a0f011ee32b0c29d')

build() {
	cd "$_archive"
	python setup.py build
}

package() {
	cd "$_archive"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
	install -Dm0644 -t "$pkgdir/usr/share/licenses/$pkgname/" LICENSE.txt
	install -Dm0644 -t "$pkgdir/usr/share/doc/$pkgname/" README.rst
}
