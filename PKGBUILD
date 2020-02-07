pkgbase='python-pyowm'
pkgname=('python-pyowm')
_module='pyowm'
pkgver='2.10.0'
pkgrel=2
pkgdesc="A Python wrapper around OpenWeatherMap web APIs"
url="http://github.com/csparpa/pyowm"
depends=('python>=3.4'
         'python-requests>=2.20.0' 'python-requests<3'
         'python-geojson>=2.3.0' 'python-geojson<3')
makedepends=('python-setuptools')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('8fd41a18536f4d6c432bc6d9ea69994efb1ea9b43688cf19523659b6f4d86cf7')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
