# Maintainer: Michael Straube <straubem@gmx.de>
# Contributor: Robert Knauer <robert@privatdemail.net>

pkgname=freedoko-git
pkgver=0.7.16.r190.gb44d3e1d
pkgrel=1
pkgdesc="Free version of the german card game Doppelkopf - git version"
arch=('i686' 'x86_64')
url="http://free-doko.sourceforge.net/en/FreeDoko.html"
license=('GPL')
depends=('gtkmm3' 'gnet' 'freealut')
makedepends=('git' 'asciidoc' 'texlive-latexextra' 'w3m' 'dos2unix')
conflicts=('freedoko')
provides=('freedoko')
source=("git+https://gitlab.com/dknof/FreeDoko.git"
        "freedoko-git-archlinux.patch")
sha256sums=('SKIP'
            '70019b53b80ff01d666259c0d995a27a5bcca23d433337a887a6e9e7e6ce2df3')

pkgver() {
  cd FreeDoko
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd FreeDoko

  # patch Makefiles
  patch -p1 -i ../freedoko-git-archlinux.patch
}

build() {
  cd FreeDoko

  make compile
  make documentation
}

package() {
  cd FreeDoko

  make DESTDIR="$pkgdir" install

  install -Dm644 bin/FreeDoko.desktop \
    "$pkgdir"/usr/share/applications/freedoko.desktop

  tar -c --exclude={*.sh,Makefile} manual |
    tar -x -C "$pkgdir"/usr/share/doc/freedoko

  find "$pkgdir"/usr/share/doc/freedoko/manual -type f -exec chmod 644 {} \;
  rm "$pkgdir"/usr/share/doc/freedoko/{de/Windows.txt,de/SuSE,en/Windows,hpux*}
}
