# Contributor: Excitable Snowball <excitablesnowball@gmail.com>

pkgbase='python-bokeh'
pkgname=('python-bokeh' 'python2-bokeh')
pkgver=0.12.3
pkgrel=1
pkgdesc='Interactive Web Plotting for Python'
arch=('any')
url='http://bokeh.pydata.org/'
license=('BSD')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://pypi.python.org/packages/d4/2e/6fff9f6dd869127592a2d9f2d678aaa60bfe8cfcd57f132c0d2228d4cd6a/bokeh-0.12.3.tar.gz")
md5sums=('8e3433e2d964c50e70e74880922bd3eb')

build() {
  cp -r "${srcdir}"/bokeh-$pkgver "${srcdir}"/bokeh-$pkgver-py2

  cd "${srcdir}"/bokeh-$pkgver
  python setup.py build --build_js

  cd "${srcdir}"/bokeh-$pkgver-py2
  python2 setup.py build --build_js
} 

package_python-bokeh() {
  depends=('python-numpy'
         'python-six'
         'python-flask'
         'python-jinja'
         'python-requests'
         'python-pandas'
         'python-yaml'
         'python-tornado')

  cd "${srcdir}"/bokeh-$pkgver
  python setup.py install --root="${pkgdir}" --optimize=1 --install_js
}

package_python2-bokeh() {
  depends=('python2-numpy'
         'python2-six'
         'python2-flask'
         'python2-jinja'
         'python2-requests'
         'python2-pandas'
         'python2-yaml'
         'python2-tornado')

  cd "${srcdir}"/bokeh-$pkgver-py2
  python2 setup.py install --root="${pkgdir}" --optimize=1 --install_js
  sed -i "s|python|python2|g" "${pkgdir}"/usr/bin/bokeh
  mv "${pkgdir}"/usr/bin/bokeh "${pkgdir}"/usr/bin/bokeh2
  mv "${pkgdir}"/usr/bin/bokeh-server "${pkgdir}"/usr/bin/bokeh-server2
}


