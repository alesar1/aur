# Maintainer: Lukasz Pozarlik <lpozarlik@gmail.com>

pkgbase='python-sphinxcontrib-youtube'
pkgname=('python-sphinxcontrib-youtube'
         'python2-sphinxcontrib-youtube')
pkgver='1.1.0'
pkgrel='1'
pkgdesc="Sphinx extension to defines the directives, “youtube” and “vimeo”, for embedding YouTube and Vimeo videos, respectively"
arch=('any')
url="https://github.com/sphinx-contrib/youtube"
makedepends=('python-setuptools'
             'python2-setuptools')
license=('GPL')
source=("https://github.com/sphinx-contrib/youtube/archive/refs/tags/${pkgver}.tar.gz")
md5sums=('54c571fcf88773ac2422517ffb2f5e3d')

package_python-sphinxcontrib-youtube(){
  depends=('python' 
           'python-sphinx')
  cd youtube-${pkgver}
  python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-sphinxcontrib-youtube(){
  depends=('python2' 
           'python2-sphinx')
  cd youtube-${pkgver}
  PYTHONPATH=/usr/lib/python2.7/site-packages
  python2 setup.py install --root="${pkgdir}" --optimize=1
}

# vim: ts=2 sw=2 et
