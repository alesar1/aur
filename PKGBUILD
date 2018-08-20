# Maintainer: Lukasz Pozarlik <lpozarlik@gmail.com>

pkgbase='python-sphinxcontrib-autoprogram'
pkgname=('python-sphinxcontrib-autoprogram'
	       'python2-sphinxcontrib-autoprogram')
pkgver='0.1.5'
pkgrel='1'
pkgdesc="This contrib extension provides an automated way to document CLI programs"
arch=('any')
url="https://bitbucket.org/birkenfeld/sphinx-contrib"
license=('BSD')
source=("https://files.pythonhosted.org/packages/93/d4/ded802ffad1fd1870d3abbb7cfa1c31b059dc46c68f6a66b73360621f6c3/sphinxcontrib-autoprogram-${pkgver}.tar.gz")
md5sums=('79ff83740db65b55c623c4ed676562a6')

package_python-sphinxcontrib-autoprogram() {
  makedepends=('python-setuptools')	
  depends=('python' 
           'python-sphinx')
  cd sphinxcontrib-autoprogram-${pkgver}
  python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-sphinxcontrib-autoprogram() {
  makedepends=('python2-setuptools')	
  depends=('python2' 
           'python2-sphinx')
  cd sphinxcontrib-autoprogram-${pkgver}
  python2 setup.py install --root="${pkgdir}" --optimize=1
}

# vim: ts=2 sw=2 et
