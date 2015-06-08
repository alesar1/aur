# Maintainer: Reihar <reihar@necronomicon.fr>
# Contributor: Nick Hu <nickhu00@gmail.com>
# Contributor: Fernando Carmona Varo <ferkiwi @t gmail dot com>
pkgname=cataclysm-dda-ncurses
pkgver=0.C
pkgrel=3
pkgdesc="Cataclysm: Dark Days Ahead is an actively maintained roguelike set in a post-apocalyptic world, forked from the original. (ncurses only)"
arch=('i686' 'x86_64')
url="http://www.cataclysmdda.com/"
license=('CCPL:by-sa')

depends=('glibc' 'gcc-libs' 'sh' 'ncurses')
makedepends=('gettext' 'clang')
optdepends=('lua51')
conflicts=('cataclysm-dda' 'cataclysm-dda-git' 'cataclysm-dda-ncurses-bin')

install='cataclysm-dda-ncurses.install'
source=("https://github.com/CleverRaven/Cataclysm-DDA/archive/${pkgver}.tar.gz"
       'clang36.patch::https://github.com/narc0tiq/Cataclysm-DDA/commit/2e12a15fdbb32b5941d597e3cc774030445d483a.patch')
md5sums=('805132ab7651ba93e5247ced7fe1fc97'
         '4b57e948da3daae3753a23200482c497')

prepare() {
  #We need to "patch" cataclysm for it to build with clang>=3.6.
  #This will be corrected in the next release version.
  #See https://github.com/CleverRaven/Cataclysm-DDA/issues/11805 for details.
  cd "$srcdir/Cataclysm-DDA-${pkgver}"
  patch -Np1 -i $srcdir/clang36.patch
}

build() {

  #Due to build problems with gcc, we'll be using clang for a while
  cd "$srcdir/Cataclysm-DDA-${pkgver}"
  make USE_HOME_DIR=1 CLANG=1 RELEASE=1
}

package() {
  cd "$srcdir/Cataclysm-DDA-${pkgver}"

  local instdir=/usr/share/cataclysm-dda

  install -dm755 "$pkgdir/${instdir}/"{data,gfx}
  cp -r --no-preserve=ownership data gfx "$pkgdir/${instdir}/"


  local instdir="/usr/share/cataclysm-dda"

  install -dm755 "$pkgdir/${instdir}/"
  install -Dm755 cataclysm cataclysm-launcher "$pkgdir/${instdir}/"
  install -dm755 data "$pkgdir/${instdir}/"

  #The doc goes in /usr/share/doc  
  install -dm755 "$pkgdir/usr/share/doc/cataclysm-dda"
  unlink doc/JSON_LOADING_ORDER.md
  cp -T data/json/LOADING_ORDER.md doc/JSON_LOADING_ORDER.md
  cp -r *.txt doc/* "$pkgdir/usr/share/doc/cataclysm-dda/"
  
  # License file
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"

  #Launcher symlinks
  install -dm755  "$pkgdir/usr/bin/"
  ln -s "${instdir}/cataclysm-launcher" "$pkgdir/usr/bin/cataclysm"

  # Localization
  install -dm755 "$pkgdir/usr/share/locale"
  LOCALE_DIR="$pkgdir/usr/share/locale" lang/compile_mo.sh
}
