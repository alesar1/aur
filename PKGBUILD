# Maintainer: Gabriele Musco <gabmus@disroot.org>
# Upstream URL: https://gitlab.com/gabmus/gnome-feeds

pkgname=gfeeds-git
pkgver=0.16.2.r167.g807ceb0
pkgrel=1
pkgdesc='News reader for GNOME'
arch=('any')
url='https://gitlab.com/gabmus/gnome-feeds'
license=('GPL3')
depends=(
  'gtk4'
  'python'
  'python-pytz'
  'python-dateutil'
  'python-pillow'
  'libadwaita-git'
  'python-requests'
  'python-lxml'
  'webkit2gtk-5.0'
  'python-html5lib'
  'python-gobject'
  'gobject-introspection'
  'python-readability-lxml'
  'python-pygments'
  'python-beautifulsoup4'
  'python-syndom-git'
)
replaces=(gnome-feeds gnome-feeds-git)
makedepends=('git' 'meson')
provides=('gfeeds' 'gnome-feeds')
conflicts=('gnome-feeds' 'gnome-feeds-git' 'gfeeds')
source=("gfeeds::git+https://gitlab.gnome.org/World/gfeeds")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  git describe --long --tags --always | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  arch-meson "${pkgname%-git}" build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  meson install -C build --destdir "$pkgdir"
}
