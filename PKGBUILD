# Submitter: Doug Newgard <scimmia22 at outlook dot com>
# Contributor: Ronald vandd Haren <ronald.archlinux.org>
# Current Maintainer: chchch

_pkgname=ephoto
pkgname=$_pkgname-git
pkgver=1.0.22.ca70286
pkgrel=1
pkgdesc="A light image viewer based on EFL"
arch=('i686' 'x86_64')
url="http://www.enlightenment.org"
license=('BSD')
depends=('efl')
makedepends=('git')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
#source=("git://git.enlightenment.org/apps/$_pkgname.git")
source=("http://www.smhouston.us/stuff/ephoto-1.0.tar.gz")
sha256sums=('SKIP')

pkgver() {
#  cd $_pkgname-$pkgver
cd ephoto-1.0

  local efl_version=$(grep -m1 EFL_VERSION configure.ac | awk -F [][] '{print $2 "." $4 "." $6}')
  efl_version=$(awk -F , -v efl_version=${efl_version%.} '/^AC_INIT/ {gsub(/efl_version/, efl_version); gsub(/[\[\] -]/, ""); print $2}' configure.ac)

  printf "$efl_version.$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
#  cd $_pkgname-$pkgver
cd ephoto-1.0

  ./autogen.sh \
    --prefix=/usr \
    --disable-static

  make
}

package() {
#  cd $_pkgname-$pkgver
cd ephoto-1.0

  make DESTDIR="$pkgdir" install

# install text files
  install -Dm644 -t "$pkgdir/usr/share/doc/$_pkgname/" ChangeLog NEWS README

# install license files
  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname/" AUTHORS COPYING
}
