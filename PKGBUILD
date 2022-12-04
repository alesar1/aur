# Maintainer: Pierpaolo Valerio <gondsman@techgeek.co.in>
# Contributor: Excitable Snowball <excitablesnowball@gmail.com>

pkgbase='python-bokeh'
pkgname=('python-bokeh')
pkgver=3.0.1
pkgrel=1
pkgdesc='Interactive Web Plotting for Python'
arch=('any')
url='http://bokeh.pydata.org/'
license=('BSD')
source=("https://pypi.io/packages/source/b/bokeh/bokeh-${pkgver}.tar.gz")
sha256sums=('aa044829f66f08e9aeb74e33d538bc719270406124ea128bd7616e09e1561815')
makedepends=('python-setuptools')

build() {
#  cp -r "${srcdir}"/bokeh-$pkgver "${srcdir}"/bokeh-$pkgver-py2

  cd "${srcdir}"/bokeh-$pkgver
  python setup.py build

#  cd "${srcdir}"/bokeh-$pkgver-py2
#  python2 setup.py build
} 

package_python-bokeh() {
  depends=('python-numpy'
         'python-six'
         'python-flask'
         'python-jinja'
         'python-requests'
	 'python-pillow'
         'python-yaml'
         'python-tornado'
         'python-packaging'
#        'python-dateutil'
	 'python-xyzservices'
	 'python-pandas'
         'python-typing_extensions')
  optdepends=('python-selenium: svg export'
         'geckodriver: svg export'
         'firefox: svg export'
         'nodejs: extending Bokeh'
         'python-psutil: detailed memory logging'
         'python-networkx: plot directly from NetworkX data'
         'python-sphinx: support sphinx documentation')

  cd "${srcdir}"/bokeh-$pkgver
  python setup.py install --root="${pkgdir}" --optimize=1
}