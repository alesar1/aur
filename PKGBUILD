# Maintainer:  Marcin Wieczorek <marcin@marcin.co>
# Contributor: Andrejs Mivreņiks <gim at fastmail dot fm>
# Contributor: Janne Haapsaari <haaja@iki.fi>
# Contributor: maus25 <mirko378@gmail.com>

pkgname=gnome-shell-pomodoro
pkgver=0.15.1
pkgrel=2
pkgdesc='A time management utility for GNOME based on the pomodoro technique'
arch=('i686' 'x86_64')
url='https://github.com/codito/gnome-pomodoro'
license=('GPL3')
depends=('gnome-desktop' 'gstreamer' 'gobject-introspection' 'libpeas' 'appstream-glib' 'gom')
makedepends=('intltool' 'vala' 'gnome-common' 'docbook2x' 'perl-xml-sax-expat')
changelog='NEWS'
source=("$pkgname-$pkgver.tar.gz::https://github.com/codito/gnome-pomodoro/archive/$pkgver.tar.gz"
        "https://github.com/codito/gnome-pomodoro/commit/1e1d8d576d4d5e079c50a874fb8ed09da161c013.patch")
sha256sums=('67c90673ba6362fb1dea2cc72aa5a2e6a8b75f0141388cf5a48e31d078ecffb3'
            '6faaf1400d79373e1659e2a3a1df0a8d851b253726f5d786c412e7fe523e7817')

prepare() {
  cd "$srcdir/gnome-pomodoro-$pkgver"
  patch -p1 < ../1e1d8d576d4d5e079c50a874fb8ed09da161c013.patch
  ./autogen.sh --prefix=/usr --datadir=/usr/share
}

build() {
  cd "$srcdir/gnome-pomodoro-$pkgver"
  make
}

package() {
  cd "$srcdir/gnome-pomodoro-$pkgver"
  make DESTDIR="$pkgdir" install
}
