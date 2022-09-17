# Maintainer: Martin Reboredo <yakoyoku@gmail.com>

pkgname=heroic-gogdl
_basever=0.3
pkgver=0.3+r13
pkgrel=2
_commit=a55e3aae0f3c8d0674be7807cc5a8f82098b6094
pkgdesc="GOG Downloading module for Heroic Games Launcher"
arch=('any')
url="https://github.com/Heroic-Games-Launcher/heroic-gogdl"
license=('GPL3')
depends=('python-requests')
makedepends=('python-setuptools' 'python-build' 'python-installer')
source=("git+$url#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  echo "$_basever+r$(git rev-list --count e80c181..$_commit)"
}

build() {
  cd "$srcdir/$pkgname"
  python -m build --wheel --skip-dependency-check --no-isolation
}

package() {
  cd "$srcdir/$pkgname"
  python -m installer --destdir="$pkgdir" dist/*.whl
}
