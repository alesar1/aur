# Maintainer: lll2yu <lll2yu@protonmail.com>

pkgname=python-yoyo-migrations
pkgver=6.1.0
pkgrel=1
pkgdesc='Database migrations with SQL'
arch=(any)
url=https://ollycope.com/software/yoyo/latest/
license=(Apache)
depends=('python' 'python-iniherit' 'python-text-unidecode')
makedepends=('python-pip')
source=(https://files.pythonhosted.org/packages/a3/fc/5c80eb3dd9689c704db38c9a412b33cbc07f4838d11f5a2cf2bbf40d09f9/yoyo-migrations-$pkgver.tar.gz)
sha256sums=('4538dbdfe4784c30bade14275558247ec8ce8111b4948dc38f51d4172f9d513c')

package() {
	cd yoyo-migrations-$pkgver
	python setup.py install -O1 --root="$pkgdir"
}
