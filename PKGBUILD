# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Jonas 'cherti' Große Sundrup <aur@letopolis.de>
pkgname=elementary-planner
_app_id=com.github.alainm23.planner
pkgver=3.0.6
pkgrel=2
pkgdesc="Task manager with Todoist support"
arch=('x86_64')
url="https://useplanner.com"
license=('GPL3')
depends=('elementary-icon-theme' 'evolution-data-server' 'granite'
         'gtk-theme-elementary' 'libgee' 'libhandy' 'libpeas' 'libsoup' 'webkit2gtk')
makedepends=('gobject-introspection' 'meson' 'vala' )
checkdepends=('appstream')
provides=('planner')
conflicts=('planner')
source=("planner-$pkgver.tar.gz::https://github.com/alainm23/planner/archive/$pkgver.tar.gz"
        'https://patch-diff.githubusercontent.com/raw/alainm23/planner/pull/884.patch')
sha256sums=('345a9ad2220820f08f583321e874528eee9f7e009236127efacee72d071c7ea5'
            '67eb146791da6fc6eecf07278aecc102d93c42d42f33bf2ed8800990a03b54d5')

prepare() {
  cd planner-${pkgver}

  # Fix build with vala 0.56
  patch -Np1 -i ../884.patch
}

build() {
  arch-meson planner-${pkgver} build
  meson compile -C build
}

check() {

# No tests defined
#  meson test -C build --print-errorlogs

  desktop-file-validate build/data/${_app_id}.desktop
  appstreamcli validate build/data/${_app_id}.appdata.xml
}

package() {
  meson install -C build --destdir "$pkgdir"

  ln -s /usr/bin/${_app_id} "$pkgdir/usr/bin/planner"
}
