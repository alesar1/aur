# Maintainer: Kevin Brodsky <corax26 at gmail dot com>
# Contributor: Anton Jongsma <anton@felrood.nl>
pkgname=libbobcat
pkgver=4.01.04
pkgrel=1
pkgdesc="Bobcat (Brokken's Own Base Classes And Templates) library"
arch=('i686' 'x86_64')
url="https://fbb-git.github.io/bobcat/"
license=('GPL')
# Versions taken from the 'required' file in sources
depends=('openssl' 'libx11>=1.6.2')
# TODO: yodl should be >=3.06.00, waiting for the corresponding AUR package to
# be updated
makedepends=('icmake>=8.00.04' 'openssl' 'readline' 'libmilter>=8.14.4' 
             'libx11>=1.6.2' 'yodl>=3.05.00')
optdepends=()
source=("https://github.com/fbb-git/bobcat/archive/${pkgver}.tar.gz")
md5sums=('ae09e52f832a25bcf7214922627b07f8')

build() {
  cd "$srcdir/bobcat-${pkgver}/bobcat"
  CXXFLAGS="$CXXFLAGS --std=c++11 -pthread"
  LDFLAGS="$LDFLAGS -pthread"
  # Add the -P option not to use precompiled headers, which can be useful since
  # they require a lot of free space, compared to a normal compilation:
  ./build libraries all
  ./build man
}

package() {
  cd "$srcdir/bobcat-${pkgver}/bobcat"

  # Since 4.01.02, first argument to install is <what to install> (x = all),
  # and second is the base directory (absolute path, unlike 4.01.00)
  ./build install x "$pkgdir"
}

