# Maintainer: Alexis "Horgix" Chotard <alexis.horgix.chotard@gmail.com>
# Contributor: carstene1ns <arch carsten-teibes de> - http://git.io/ctPKG

pkgname=py3status
pkgver=3.8
pkgrel=1
pkgdesc="An extensible i3status replacement/wrapper written in python"
url="http://www.ultrabug.fr/tag/py3status/"
arch=('any')
license=('custom: Simplified BSD')
depends=('python' 'python-setuptools')
optdepends=('i3status: for some of the functionality'
            'acpi: for some of the battery related modules')
source=($pkgname-$pkgver.tar.gz::"https://github.com/ultrabug/py3status/archive/$pkgver.tar.gz")
sha256sums=('3e19625f2f63910cb96e232331a57379ba0401f2b3cfcf00bd2d4e45da90f462')

package() {
  cd $pkgname-$pkgver

  python setup.py install --root="$pkgdir/" --optimize=1
  # doc
  install -d "$pkgdir"/usr/share/doc/$pkgname
  install -m644 doc/* README.rst CHANGELOG "$pkgdir"/usr/share/doc/$pkgname
  # license
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
