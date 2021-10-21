# Maintainer: Nicolas Bizzozzéro <nicolas.bizzozzero@protonmail.com>
pkgname="python-river-git"
pkgver=0.8.0
pkgrel=1
pkgdesc="Online machine learning in Python"
arch=("x86_64")
url="https://riverml.xyz"
license=('BSD')
depends=("python-numpy" "python-scipy" "python-pandas")
makedepends=("git" "cython")
source=("git://github.com/online-ml/river.git")
sha512sums=("SKIP")

package() {
  cd "${srcdir}/river"
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1
  
  install -m755 -d "${pkgdir}/usr/share/licenses/python-river-git"
  install -m644 LICENSE "${pkgdir}/usr/share/licenses/python-river-git/" 
}

