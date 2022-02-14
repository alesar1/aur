# Maintainer: Xyne <xyne at archlinux dot org>
_name=setuptools-git-versioning
_pkgname=python-${_name,,}
pkgname=$_pkgname-git
pkgver=1.8.1.r4.g17315dd
pkgrel=1
pkgdesc='Use Git repo data for building a version number according to PEP 440.'
url='https://github.com/dolfinus/setuptools-git-versioning'
arch=('any')
license=('MIT')
depends=('python' 'python-setuptools' 'python-six' 'python-toml')
makedepends=('git')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=(${_name}::git+https://github.com/dolfinus/${_name})
sha512sums=('SKIP')

pkgver() {
  cd "$_name"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package ()
{
  cd "$_name"
  python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
}

# vim: ts=2 sw=2 et:
