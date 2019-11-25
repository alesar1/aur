# Maintainer: Pierpaolo Valerio <gondsman@techgeek.co.in>
# Contributor: Excitable Snowball <excitablesnowball@gmail.com>

pkgbase='python-bokeh'
pkgname=('python-bokeh')
pkgver=1.4.0
pkgrel=1
pkgdesc='Interactive Web Plotting for Python'
arch=('any')
url='http://bokeh.pydata.org/'
license=('BSD')
source=("https://pypi.io/packages/source/b/bokeh/bokeh-${pkgver}.tar.gz")
sha256sums=('c60d38a41a777b8147ee4134e6142cea8026b5eebf48149e370c44689869dce7')
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
         'python-tornado')
  optdepends=('python-bkcharts: server'
	 'phantomjs: svg export'
         'nodejs: extending Bokeh'
         'python-pandas: Pandas support'
         'python-psutil: detailed memory logging'
         'python-networkx: plot directly from NetworkX data'
         'python-sphinx: support sphinx documentation')

  cd "${srcdir}"/bokeh-$pkgver
  python setup.py install --root="${pkgdir}" --optimize=1
}
