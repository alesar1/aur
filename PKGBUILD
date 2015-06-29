# Contributor: xia0er <xia0er@gmail.com> 
pkgname=python2-pymc
pkgver=2.3.4
pkgrel=1
pkgdesc="Markov chain Monte Carlo for Python"
arch=('i686' 'x86_64')
url="https://github.com/pymc-devs/pymc"
license=('MIT')
source=("https://pypi.python.org/packages/source/p/pymc/pymc-${pkgver}.tar.gz")
makedepends=("gcc-fortran")
md5sums=('b9bb3eb4f81df6c7d49c0a9a0cee81bc')

package() {
  depends=('python2-numpy')
  optdepends=('python2-scipy' 'python2-matplotlib' 'python2-pytables' 'ipython2' 'pydot' 'python2-nose')

  cd $srcdir/pymc-$pkgver
  export LDFLAGS="$LDFLAGS -shared"
  python2 setup.py config_fc --fcompiler=gnu95 build
  python2 setup.py install --prefix=/usr --root=$pkgdir || return 1
}

package_python-pymc() {
  depends=('python-numpy')
  optdepends=('python-scipy' 'python-matplotlib' 'python-pytables' 'ipython' 'pydot' 'python-nose')

  cd $srcdir/pymc-$pkgver
  export LDFLAGS="$LDFLAGS -shared"
  python setup.py config_fc --fcompiler=gnu95 build
  python setup.py install --prefix=/usr --root=$pkgdir || return 1
}


