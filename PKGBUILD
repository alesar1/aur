# Maintainer: v01d <phreakuencies@gmail.com>
pkgname=python2-catkin-tools
_pkgname=catkin_tools
pkgver=0.3.0
pkgrel=1
pkgdesc="Command line tools for working with catkin"
arch=(any)
url="https://github.com/catkin/catkin_tools"
license=('Apache')
depends=('python2' 'python2-yaml')
options=(!emptydirs)
source=(https://github.com/catkin/${_pkgname}/archive/${pkgver}.tar.gz)

package() {
  cd "$srcdir/${_pkgname}-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
md5sums=('21e9b0b80157d853296abcb2c791c64e')
