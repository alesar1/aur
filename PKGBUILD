# Contributor: redtide <redtid3 at gmail com>
# Contributor: dllud <dllud riseup net>
# Contributor: David McInnis <dave@dave3.xyz>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Angel 'angvp' Velasquez <angvp[at]archlinux.com.ve>
# Contributor: djgera
# Contributor: Patrick Melo <patrick@patrickmelo.eti.br>

pkgname=geany-plugin-markdown
_downloadname=geany-plugins
pkgver=1.34
pkgrel=2
pkgdesc='Markdown plugin for Geany'
arch=('x86_64' 'i686')
url='https://plugins.geany.org/'
license=('GPL')
depends=("geany>=$pkgver" 'discount' 'webkit2gtk')
makedepends=('intltool' 'vala' 'gdb' 'cppcheck')
source=("https://plugins.geany.org/$_downloadname/$_downloadname-$pkgver.tar.bz2")
sha256sums=('244417c681636e82a63cf6f9901b5b7f3889168f7d9b5ba9b45601767a589c3b')

build() {
  cd "$_downloadname-$pkgver"

  ./configure --prefix=/usr --libexecdir=/usr/lib \
              --disable-all-plugins --enable-markdown
  make
}

package() {
  make -C "$_downloadname-$pkgver" DESTDIR="$pkgdir" install
  rm -r "$pkgdir/usr/share/locale"
}

# getver: plugins.geany.org/downloads.html
# vim:set ts=2 sw=2 et:
