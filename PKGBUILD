# Maintainer: Sam Burgos < santiago dot burgos1089 at gmail dot com >

pkgname=gnome-calendar-linuxmint
_pkgname=gnome-calendar
pkgver=41.1
pkgrel=1
pkgdesc='Simple and beautiful calendar application designed to perfectly fit the GNOME desktop. With Linux Mint patches'
arch=(x86_64)
url=https://wiki.gnome.org/Apps/Calendar
license=(GPL)
depends=(
    cinnamon
    cinnamon-control-center
    evolution-data-server
    geoclue
    gnome-online-accounts
    gsettings-desktop-schemas
    libdazzle
    libgweather
    libhandy
    libical
)
optdepends=(
    'evolution: ICS file import'
)
makedepends=(
    appstream-glib
    git
    meson
)
provides=(${_pkgname})
conflicts=(${_pkgname})
groups=(gnome)
_commit=59ad10ba3aaed69c96c5e7f710b3f2c6b35131ae  # tags/41.1^0
source=(
    "git+https://gitlab.gnome.org/GNOME/gnome-calendar.git#commit=$_commit"
    "linuxmint_gcal_window.patch"
    "linuxmint_gcal_new_calendar_page.patch"
)
sha256sums=('SKIP'
            '8ee8805a0d185b9458016c7855f789f849982c68f9c42407504d3144696d825c'
            'c935e126d9201c37f4b33460ae834c6c4a18c71fd06c2d768480b559a8a92e5f')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd $_pkgname

  # Replace GNOME Control Center internal call with Cinnamon Settings (cinnamon-settings online-accounts)
  # Set window icon name
  patch -Np0 -i ../linuxmint_gcal_window.patch

  # Replace GNOME Web Description link label with cinnamon-settings online-accounts
  patch -Np0 -i ../linuxmint_gcal_new_calendar_page.patch
}

build() {
  arch-meson $_pkgname build
  ninja -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}
