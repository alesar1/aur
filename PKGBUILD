# Maintainer: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>
# Contributor: İlker Kesen <ikesen92@gmail.com>

pkgname=django-taggit
pkgver=0.11.1
pkgrel=1
pkgdesc="Simple tagging application for Django"
arch=('any')
url="http://github.com/alex/django-taggit/"
license=('BSD')
depends=('python2-django')
source=(http://pypi.python.org/packages/source/d/$pkgname/$pkgname-$pkgver.tar.gz)
md5sums=('b8f77660c6b401e86ae986acecef46a1')

package() { 
  cd "${srcdir}"/$pkgname-$pkgver

  python2 setup.py install --root="${pkgdir}"
}
