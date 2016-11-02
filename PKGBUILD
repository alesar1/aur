# Maintainer:  Michael DeGuzis <mdeguzis@gmail.com>
# Contributor: Andre Klitzing <andre AT incubo DOT de>
# Contributor: max-k <max-k AT post DOT com>

pkgname=reprepro-git
pkgver=reprepro.debian.4.17.1.1.r0.g0c9f0f4
pkgrel=1
pkgdesc="A tool to handle local repositories of Debian packages (Git latest)"
arch=('i686' 'x86_64')
url="http://mirrorer.alioth.debian.org"
license=('GPL')
depends=('db' 'gpgme' 'git' 'zlib' 'bzip2' 'libarchive')
optdepends=('apt: Importing from other sources')
conflicts=('reprepro')
provides=('reprepro')
source=('reprepro-git::git+git://git.debian.org/mirrorer/reprepro.git')
sha256sums=('SKIP')

pkgver() {

  cd "$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'

}

build() {

  cd "$srcdir/$pkgname"
  ./configure --prefix=/usr
  make

}

package() {

  cd "$srcdir/$pkgname"
  make DESTDIR="$pkgdir" install

}
