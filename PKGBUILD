# Maintainer: ipochto <ipochto@gmail.com>

pkgname=war1gus-git
pkgver=3.1.3.r817.592656a_20211117
pkgrel=1
pkgdesc="Warcraft1 Mod that allows you to play Warcraft1 with the Stratagus engine (development version)"
arch=("i686" "x86_64")
url="https://github.com/Wargus/war1gus"
license=('GPL')
depends=('stratagus-git' 'ffmpeg' 'innoextract')
makedepends=('git' 'cmake' 'imagemagick')

source=("${pkgname}::git://github.com/Wargus/war1gus.git")
md5sums=('SKIP')
provides=(${pkgname}
	  'war1gus')
conflicts=('war1gus')

pkgver() {
	cd "$srcdir/${pkgname}"
	dev_cycle=3.1.3
	printf "%s.r%s.%s_%s" "${dev_cycle}" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)" "$(date +%Y%m%d)"
}

build() {
  cd ${srcdir}

  cmake ${pkgname} -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DGAMEDIR=/usr/bin -Bbuild

  make -C build
}

package()  {
  cd $srcdir/build
  make  DESTDIR=${pkgdir} install
}
