#Maintainer: Liam Timms <timms5000@gmail.com>

_pkgname=neurdflib
pkgname=python-$_pkgname
_name=${pkgname#python-}
pkgver=5.0.0.post1
pkgrel=1
pkgdesc="Temporary conveince package from Nipype waiting for merge into the primary rdflib repo"
url="https://github.com/RDFLib/rdflib/pull/649"
arch=('any')
license=('GPL3')
depends=('python')
conflicts=("python2-bdflib" "bdflib-git")
provides=("neurdflib")
options=(!emptydirs)
source=('https://files.pythonhosted.org/packages/fb/ab/a2b0b79bd532b93acc8012fc032c0b56cbbc2fdba02816d82fa8c6fccf2e/neurdflib-5.0.0.post1.tar.gz')
sha256sums=('65ef138f7a20f646b5257d312e14c624a83abdac4df234e5edcc77dc63bef5e1')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

