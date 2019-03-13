# Maintainer: Reihar <reihar@necronomicon.fr>
# Contributor: Nick Hu <nickhu00@gmail.com>
# Contributor: Fernando Carmona Varo <ferkiwi @t gmail dot com>
pkgname=cataclysm-dda-ncurses
pkgver=0.D
pkgrel=1
pkgdesc="Cataclysm: Dark Days Ahead is an actively maintained roguelike set in a post-apocalyptic world, forked from the original. (ncurses only)"
arch=('i686' 'x86_64')
url="http://www.cataclysmdda.com/"
license=('CCPL:by-sa')

depends=('ncurses' 'lua' 'ncurses')
makedepends=('gettext')
optdepends=('lua51')
conflicts=('cataclysm-dda' 'cataclysm-dda-git' 'cataclysm-dda-ncurses-bin')

install='cataclysm-dda-ncurses.install'
source=("https://github.com/CleverRaven/Cataclysm-DDA/archive/${pkgver}.tar.gz")
sha256sums=('6cc97b3e1e466b8585e8433a6d6010931e9a073f6ec060113161b38052d82882')

prepare() {
  cd "$srcdir/Cataclysm-DDA-${pkgver}"

  #0.C cannot compile without warnings anymore
  sed -i s/-Werror// Makefile
  
  #Ncurses update yay
  sed -i s/ncursesw5-config/ncursesw6-config/ Makefile
}

build() {
  cd "$srcdir/Cataclysm-DDA-${pkgver}"

  make USE_HOME_DIR=1 RELEASE=1 ZLEVELS=1 LUA=1 LOCALIZE=1
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
