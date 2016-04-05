# Maintainer: Meir Kriheli <mkriheli@gmail.com>
# Contributor:

pkgname=python-cookiecutter
_pkgname=cookiecutter
pkgver=1.4.0
pkgrel=1
pkgdesc="A command-line utility that creates projects from project templates"
arch=('any')
url="https://github.com/audreyr/cookiecutter"
license=('BSD')
groups=('devel')
depends=('python-jinja>=2.7'
         'python-jinja-time>=0.1.0'
         'python-poyo>=0.1.0'
         'python-binaryornot>=0.2.0'
         'python-click>=5.0'
         'python-future>=0.15.2'
         'python-whichcraft>=0.1.1')
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
source=("https://github.com/audreyr/${_pkgname}/archive/${pkgver}.tar.gz")
md5sums=('def59c6bac5b663259b7054e1f71fbfe')

package() {
  cd "$srcdir/${_pkgname}-${pkgver}"
  python setup.py install --root="$pkgdir/"
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
