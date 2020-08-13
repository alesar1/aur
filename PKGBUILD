# Maintainer: Azael Reyes <azael.devel@gmail.com>


pkgname=octetos-version
pkgver=0.12.0
pkgrel=1
pkgdesc="A command line function for package version management."
arch=('x86_64')
license=('GPL')
url="https://github.com/azaeldevel/octetos-version.git"
depends=('octetos-coreutils')
#backup=('etc/nanorc')
md5sums=('60674baf8716ad6a4a317d71da3f004e')
source=(https://github.com/azaeldevel/octetos-version/archive/0.12.0-alpha.tar.gz)

build() {
    cd octetos-version-0.12.0-alpha
    autoreconf -fi
    ./configure --prefix=/usr --sysconfdir=/etc --with-pacman
    make
}

package() {
  cd octetos-version-0.12.0-alpha
  make DESTDIR="${pkgdir}" install
}
