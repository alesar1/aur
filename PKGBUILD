# Maintainer:  Rod Kay              <charlie5 on #ada at freenode.net>
# Contributor: Sietse van der Molen <sietse@vdmolen.eu>

pkgname=florist
pkgver=2021
pkgrel=1
pkgdesc="An open-source implementation of IEEE Standard 1003.5b-1996, the POSIX Ada binding."

arch=('any')
url="https://github.com/Blady-Com/florist"
license=('GPL3')

depends=('gcc-ada')
options=(staticlibs !strip)

source=('git+https://github.com/Blady-Com/florist.git')
sha1sums=(SKIP)


build() 
{
  cd "$srcdir/$pkgname"

  ./configure --prefix=$pkgdir/usr
  PROCESSORS="$(nproc)" make
}


package() 
{
  cd "$srcdir/$pkgname"

  make DESTDIR="$pkgdir/" install
}
