# Maintainer:  M.Reynolds <blackboxnetworkproject@gmail.com>
# Contributor: speps <speps at aur dot archlinux dot org>
# Contributor: Anton Bazhenov <anton.bazhenov at gmail>
# Contributor: Tuan Nguyen 
# Contributor: Farid <farid at archlinux-br dot org>

pkgname=pdfshuffler-git
pkgver=r100.caec35f
pkgrel=3
pkgdesc="Merge or split pdf documents and rotate, crop and rearrange their pages"
arch=('any')
url="http://sourceforge.net/projects/pdfshuffler/"
license=('GPL')
depends=('gtk3' 'python-gobject' 'python-cairo' 'poppler-glib' 'python-pypdf2' 'ghostscript')
makedepends=('git')
conflicts=('pdfshuffler')
source=('pdfshuffler-git::git+https://github.com/jeromerobert/pdfshuffler')
md5sums=('SKIP')

pkgver () {
	cd "$srcdir/$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build () {
	cd "$srcdir/$pkgname"
	python setup.py build
}

package () {
	cd "$srcdir/$pkgname"
	python setup.py install --prefix=/usr --root="$pkgdir/"
	
	install -d "$pkgdir/usr/share/icons"
	cp -r "data/hicolor" "$pkgdir/usr/share/icons/"
}
