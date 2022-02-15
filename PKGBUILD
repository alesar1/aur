# Maintainer: Ashwin Vishnu <ashwinvis+arch at pr0t0nm4il dot com>
# Co-Maintainer: Specter119 <specter119 AT gmail DOT com>
# Contributor: xantares

pkgname=python-ipyparallel
pkgbase=ipython-ipyparallel
_name=${pkgname#python-}
pkgver=8.2.0
pkgrel=1
pkgdesc="Interactive Parallel Computing in Python"
url=https://pypi.org/project/ipyparallel/
arch=(any)
license=('BSD')
makedepends=('python-setuptools')
optdepends=('openmpi: to use the MPI Launchers in ipcluster command')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('0fd9f64a5120980a89b64299806c12bb8df8ceea155e5200b705301eb2401e19')
depends=('python>3.6'
	'python-setuptools'
	'python-entrypoints'
	'python-decorator'
	'python-pyzmq>=18'
	'python-traitlets>=4.3'
	'ipython>=4'
	'python-jupyter_client'
	'python-ipykernel>=4.4'
	'python-tornado>=5.1'
	'python-psutil'
	'python-dateutil>=2.1'
	'python-tqdm')
conflicts=('ipython2-ipyparallel')
replaces=('ipython-ipyparallel')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=${pkgdir} --optimize=1 --skip-build
  install -Dm644 COPYING.md $pkgdir/usr/share/licenses/$pkgname/LICENSE
  mv $pkgdir/usr/etc $pkgdir/etc
}
