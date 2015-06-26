# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>

pkgname=freetype2-git
pkgver=2.6+17+g649f2e5-1
pkgrel=1
pkgdesc="TrueType font rendering library (from git)"
arch=(i686 x86_64)
license=('GPL')
url="http://freetype.sourceforge.net"
# adding harfbuzz for improved OpenType features auto-hinting 
# introduces a cycle dep to harfbuzz depending on freetype wanted by upstream
depends=('zlib' 'bzip2' 'sh' 'libpng' 'harfbuzz')
makedepends=('git')
source=(git://git.sv.gnu.org/freetype/freetype2.git
        0001-Enable-table-validation-modules.patch
        0002-Enable-subpixel-rendering.patch
        0003-Enable-subpixel-hinting.patch
        0004-Add-env-var-to-turn-off-subpixel-hinting.patch)
sha1sums=('SKIP'
          '731fe15f4db20127ed457b0d164f4ff57597c813'
          'c0ec37c3b332f09dbafeff874fe658306510b3c1'
          '69caf19093a272e7c780ad8ae91dcd965de7a846'
          '0a75db92c93c7a1576052348174fa510740d079f')

provides=("freetype2=$pkgver" libfreetype.so)
conflicts=("freetype2")

pkgver() {
  local _tag _count

  cd "${srcdir}/freetype2"
  _tag=$(git describe --abbrev=0 )
  _count=$(git rev-list --count ${_tag}..HEAD)
  _tag=${_tag#VER-}
  echo ${_tag//-/.}+$_count+g$(git rev-parse --short HEAD)
}

prepare() {
  cd "${srcdir}/freetype2"
  patch -Np1 -i ../0001-Enable-table-validation-modules.patch
  patch -Np1 -i ../0002-Enable-subpixel-rendering.patch
  patch -Np1 -i ../0003-Enable-subpixel-hinting.patch
  patch -Np1 -i ../0004-Add-env-var-to-turn-off-subpixel-hinting.patch
}

build() {
  cd "${srcdir}/freetype2"
  ./autogen.sh
  ./configure --prefix=/usr --disable-static
  make
}

check() {
  cd "${srcdir}/freetype2"
  make -k check
}

package() {
  cd "${srcdir}/freetype2"
  make DESTDIR="${pkgdir}" install
}
