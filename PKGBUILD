# Contributor: Antony Lee <anntzer dot lee at gmail dot com>
# Maintainer: Eric Anderson <ejona86@gmail.com>

pkgname=python-vmprof
_reponame=vmprof-python
pkgver=0.4.12
pkgrel=1
pkgdesc="A statistical Python program profiler"
url="https://github.com/vmprof/vmprof-python"
depends=('libdwarf' 'libelf' 'libunwind'
         'python-pytz' 'python-requests' 'python-colorama' 'python-six')
makedepends=('python-setuptools')
checkdepends=('python-pytest' 'python-cffi' 'python-hypothesis')
license=('MIT')
arch=('i686' 'x86_64')
# Use github archive instead of pypi because it contains tests
source=("https://github.com/vmprof/$_reponame/archive/$pkgver.tar.gz"
        "pep-479.patch")
sha256sums=('64c62cd737c88573447d1f90f29978fc3178a1663ddbdb60cdcb3f2c15e427da'
            '6df41198c903a4b6575e2bfdce9a1548909b318ab06f715c442a6608668815ec')

prepare() {
  cd "$_reponame-$pkgver"
  patch -Np1 -i "${srcdir}/pep-479.patch"
  sed -i 's/-Werror/-w/g' vmprof/test/*
}

build() {
  cd "$_reponame-$pkgver"
  python setup.py build
}

check() {
  cd "$_reponame-$pkgver"
  PYTHONPATH="$PWD/build/lib.linux-$CARCH-3.7" pytest
}

package() {
  cd "$_reponame-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
