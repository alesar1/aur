# Maintainer: Daniel Maslowski <info@orangecms.org>

_gitname=conda
pkgname=python-${_gitname}-git
pkgver=4.0.5.r225.g5518a64
pkgrel=1
pkgdesc="OS-agnostic, system-level binary package manager and ecosystem"
arch=('any')
url="http://conda.pydata.org/docs/"
license=('custom')
groups=()
depends=('python' 'python-psutil' 'python-pycosat' 'python-requests' 'python-yaml')
makedepends=('git')
provides=('activate' 'conda' 'deactivate')
conflicts=()
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
  install -Dm 644 bin/conda.fish $pkgdir/usr/share/fish/functions/conda.fish
  install -Dm 644 LICENSE.txt $pkgdir/usr/share/licenses/${pkgname}/LICENSE.txt
}

# vim:set ts=2 sw=2 et:
