# Maintainer: Ilias Stamatis <stamatis.iliass at gmail dot com>
# Contributor: Andrey Mivrenik <gim at fastmail dot fm>
# Contributor: Chaiwat Suttipongsakul <cwt at bashell dot com>
# Contributor: Chris Down <chris at chrisdown dot name>

pkgname=django-registration
pkgver=1.8
pkgrel=1
pkgdesc="A simple, generic user-registration application for Django"
arch=('any')
url='https://github.com/macropin/django-registration'
license=('BSD')
depends=('python-django')
source=("https://github.com/macropin/django-registration/archive/v${pkgver}.tar.gz")
sha256sums=('a17a1cb50c0272bd0ee2a92f27c4902772a2512c4be3a36809cd9188f83de8ca')

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  python setup.py install --root="${pkgdir}/" --optimize=1
}
