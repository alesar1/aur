# Maintainer: Daniel Maslowski <info@orangecms.org>

_gitname=conda
pkgname=python-${_gitname}-git
pkgver=4.2.11.r251.gd5af6bb
pkgrel=1
pkgdesc="OS-agnostic, system-level binary package manager and ecosystem"
arch=('any')
url="http://conda.pydata.org/docs/"
license=('custom')
groups=()
depends=('python' 'python-psutil' 'python-pycosat' 'python-requests' 'python-ruamel.yaml-hg')
optdepends=(
  'python-conda-env: to use the conda env command'
  'python-conda-build: to use the conda build command'
)
makedepends=('git')
provides=('activate' 'conda' 'deactivate')
conflicts=('python-conda')
replaces=()
backup=()
options=(!emptydirs)
install=
source=("git+https://github.com/$_gitname/$_gitname")
md5sums=('SKIP')

pkgver() {
  cd "${_gitname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir/${_gitname}"
  python setup.py install --root="$pkgdir/" --optimize=1
  install -Dm 644 LICENSE.txt $pkgdir/usr/share/licenses/${pkgname}/LICENSE.txt
}

# vim:set ts=2 sw=2 et:
