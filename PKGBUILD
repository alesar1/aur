# Maintainer: mark.blakeney at bullet-systems dot net
_pkgname=vermin
pkgname=python-$_pkgname
pkgver=1.0.1
pkgrel=1
pkgdesc="Concurrently detect the minimum Python versions needed to run code"
url="https://github.com/netromdk/$_pkgname"
license=("MIT")
arch=("any")
depends=("python>=2.7")
makedepends=("python-setuptools")
_pkgtag="$_pkgname-$pkgver"
_pkgtar="$_pkgtag.tar.gz"
source=("$_pkgtar::$url/archive/v$pkgver.tar.gz")
replaces=($_pkgname)
conflicts=($_pkgname)
noextract=("$_pkgtar")
md5sums=('4ad852012931887e14eb5db5355f1ea0')

prepare() {
  mkdir -p "$_pkgtag"
  tar xf "$_pkgtar" -C "$_pkgtag" --strip-components 1
}

package() {
  cd "$_pkgtag"
  python setup.py install --root "${pkgdir}"
}

# vim:set ts=2 sw=2 et:
