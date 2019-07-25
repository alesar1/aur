# Maintainer: Kaio Augusto de Camargo <kaioaugusto.8@gmail.com>
# Contributor: Matthew Gamble <git@matthewgamble.net>

pkgname=python-dictobject
pkgver=1.0.5
pkgrel=1
pkgdesc="Python DictObject allows attribute access on dicts."
arch=("any")
url="https://pypi.org/project/DictObject/"
license=("GPL3")
depends=("python" "python-luckydonald-utils")
makedepends=("python-setuptools")
source=("https://files.pythonhosted.org/packages/d9/0e/4878dfc2688bc60bdbdcb6b1bbdb6f8d8ec08e34a2115cebf1a777242bf4/DictObject-1.0.5.tar.gz")
sha256sums=("acc1d75068131a73cd0a629eca0385100ff131e325412d8d3c7ac261ba306d33")

package() {
    cd "DictObject-${pkgver}"
    python setup.py install --root="${pkgdir}"
}
