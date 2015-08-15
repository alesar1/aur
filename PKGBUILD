# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Maintainer: Frederic Bezies <fredbezies at gmail dot com>

pkgname=howl-editor-git
pkgver=0.2.1.518.g144f28c
pkgrel=1
pkgdesc='General purpose, light-weight customizable editor'
arch=('i686' 'x86_64')
url='http://howl.io/'
license=('MIT')
depends=('gtk3' 'desktop-file-utils' 'coffee-script')
makedepends=('git' 'wget')
provides=('howl-editor')
conflicts=('howl-editor')
install=howl-editor.install
source=(git://github.com/nilnor/howl.git)
md5sums=('SKIP')

pkgver() {
  cd howl
  git describe | tr - .
}

build() {
  cd howl/src
  make
}

package() {
  cd howl/src
  make PREFIX=/usr DESTDIR="$pkgdir" install
  cd ..
  install -Dm644 LICENSE.md $pkgdir/usr/share/licenses/$pkgname/LICENSE.md
}
