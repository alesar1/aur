# Maintainer: Pierpaolo Valerio <gondsman@techgeek.co.in>
# Contributor: Excitable Snowball <excitablesnowball@gmail.com>

pkgbase='python-bokeh'
pkgname=('python-bokeh')
pkgver=2.0.2
pkgrel=1
pkgdesc='Interactive Web Plotting for Python'
arch=('any')
url='http://bokeh.pydata.org/'
license=('BSD')
source=("https://pypi.io/packages/source/b/bokeh/bokeh-${pkgver}.tar.gz")
sha256sums=('d9248bdb0156797abf6d04b5eac581dcb121f5d1db7acbc13282b0609314893a')
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
         'python-dateutil'
         'python-typing_extensions')
  optdepends=('python-bkcharts: server'
#	 'phantomjs: svg export'
         'python-selenium: svg export'
         'geckodriver: svg export'
         'firefox: svg export'
         'nodejs: extending Bokeh'
         'python-pandas: Pandas support'
         'python-psutil: detailed memory logging'
         'python-networkx: plot directly from NetworkX data'
         'python-sphinx: support sphinx documentation')

  cd "${srcdir}"/bokeh-$pkgver
  python setup.py install --root="${pkgdir}" --optimize=1
}
