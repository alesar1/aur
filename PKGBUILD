# Maintainer: Aaron McDaniel (mcd1992) <'aur' at the domain 'fgthou.se'>

pkgname=python-unitypack-git
pkgver=0.9.0.r0.g9c9d560
pkgrel=1
pkgdesc="Python deserialization and extraction library for Unity3D Asset formats"
url="https://github.com/HearthSim/UnityPack"
arch=('x86_64')
provides=('python-unitypack')
license=('MIT')
makedepends=('git')
depends=('python' 'python-lz4' 'python-pillow' 'python-fsb5' 'python-decrunch')
optdepends=()
backup=()
source=("${pkgname}::git+https://github.com/HearthSim/UnityPack.git")
md5sums=('SKIP')

pkgver() {
  cd ${pkgname}
  # Remove 'v' prefix on tags; prefix revision with 'r'; replace all '-' with '.'
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd ${pkgname}
  python setup.py build
}

package() {
  cd ${pkgname}
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -DTm644 LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
}
