# $Id: PKGBUILD 57440 2011-10-27 20:16:15Z lcarlier $
# Contributor: Hector <hsearaDOTatDOTgmailDOTcom>


pkgbase=python-msmbuilder
pkgname=('python2-msmbuilder' 'python-msmbuilder')
pkgver=3.3.1
pkgrel=3
pkgdesc='A python package which implements a series of statistical models for high-dimensional time-series'
url='http://msmbuilder.org/'
license=("LGPL")
arch=('i686' 'x86_64')
depends=()
makedepends=('python-mdtraj' 'python2-mdtraj' 'python2-setuptools' 'python-setuptools')
options=('!libtool')
source=("https://github.com/msmbuilder/msmbuilder/archive/${pkgver}.tar.gz"
        "patch.i0.c")
sha1sums=('fcb5ad6fabb5aead4c78d3fed782665d090c0caa'
          'f0129777e7f9fb28074b86d47d6bb8b94f763063') 

prepare() {
  cd "$srcdir"
  cp patch.i0.c msmbuilder-3.3.1/msmbuilder/hmm/cephes/
  cd  msmbuilder-3.3.1/msmbuilder/hmm/cephes/
  patch i0.c < patch.i0.c
  cd "$srcdir"
  cp -a msmbuilder-${pkgver} msmbuilder-py2-${pkgver}
}

package_python-msmbuilder() {
  depends=('python-mdtraj' 'python-cvxopt' 'python-scikit-learn' 'python-numpydoc')
  makedepends=('python-setuptools')
  optdepends=()

  cd "${srcdir}/msmbuilder-${pkgver}"
  msg2 "Building msmbuilder - Python3"
  python setup.py build

  msg2 "Installing msmbuilder python3"
  python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build

  # Remove left over directories from distribute utils.
  find ${pkgdir} -type d -name "__pycache__" -exec rm -r {} \; -prune
}

package_python2-msmbuilder() {
  depends=('python2-mdtraj' 'python2-cvxopt' 'python2-scikit-learn' 'python2-numpydoc')
  makedepends=('python2-setuptools')
  optdepends=()

  cd "${srcdir}/msmbuilder-py2-${pkgver}"
  msg2 "Building msmbuilder - Python2"
  python2 setup.py build

  msg2 "Installing msmbuilder python2"
  python2 setup.py install --root="${pkgdir}/" --optimize=1 --skip-build

  # Remove left over directories from distribute utils.
  find ${pkgdir} -type d -name "__pycache__" -exec rm -r {} \; -prune
  
  #Rename msmb executable to avoid problems with python3 version
  cd ${pkgdir}/usr/bin
  mv msmb msmb_py2
}

