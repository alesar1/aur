# Maintainer: Frederic Bezies <fredbezies at gmail dot com >
# Based on corebird-non-streaming-git PKGBUILD

pkgname=cawbird-git
_pkgname=cawbird
pkgver=1.2.0.2.r1.gfae8135f
pkgrel=1
pkgdesc="A fork of the Corebird GTK Twitter client that continues to work with Twitter "
arch=('i686' 'x86_64')
license=('GPL')
url="https://github.com/ibboard/cawbird/"
depends=('gspell' 'gstreamer')
optdepends=('noto-fonts-emoji: Emoji support')
makedepends=('vala' 'git' 'meson' 'intltool')
provides=('corebird')
conflicts=('corebird' 'corebird-git' 'corebird-non-streaming-git')
source=("${pkgname}::git+https://github.com/IBBoard/cawbird.git")
sha1sums=('SKIP')

pkgver() {
  cd ${pkgname}
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | cut -c2-48

}

build() {
  cd ${pkgname}

  meson builddir --prefix=/usr -D VIDEO=yes -D SPELLCHECK=yes
  ninja -C builddir
}

package() {
  cd ${pkgname}

  DESTDIR="${pkgdir}" ninja -C builddir install
}
