# Maintainer: Lukasz Pozarlik <lpozarlik@gmail.com>

_name="workalendar"
_module="$_name"

pkgname=("python-$_module")
pkgdesc="Worldwide holidays and working days helper and toolkit"
pkgver="16.2.0"
pkgrel=1
url="https://github.com/novafloss/workalendar"
license=('MIT')
arch=('any')
makedepends=("python-pbr>=1.9")
source=("https://github.com/novafloss/workalendar/archive/${pkgver}.tar.gz")
sha256sums=('a7a6867c30f2e61989a02c1f9c81f097a3c31dcea78c144b98bacdde70f9b51f')

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

package_python-workalendar(){
  depends=('python-lunardate'
           'python-pycalverter'
           'python-pytz'
           'python-dateutil'
           'python-pyephem')

  cd "$_name-$pkgver"
  python setup.py install --root="${pkgdir}/" --optimize=1
  install -D --mode 644 --target-directory "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}

# vim: ts=2 sw=2 et
