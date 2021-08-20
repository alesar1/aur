# Contributor: Zeph <zeph33@gmail.com>
# Maintainer: Librewish <librewish@gmail.com>
# https://gitlab.manjaro.org/packages/extra/pamac
ENABLE_FLATPAK=1
ENABLE_SNAPD=1
#Set this flag to 0 if you want to use pamac-tray-icon-plasma
ENABLE_APPINDICATOR=1
ENABLE_GNOME=0
_pkgname=pamac
pkgname=pamac-all-git
pkgver=10.2.0beta.r0.gefeee38
pkgrel=3
_pkgfixver=10.2.0
epoch=1

pkgdesc="A Gtk3 frontend for libalpm (everything in one package - snap, flatpak, appindicator)"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.manjaro.org/applications/pamac"
license=('GPL3')
depends=('libnotify' 'libpamac-full-dev>=11.1.0beta' 'libhandy')
optdepends=('polkit-gnome: needed for authentification in Cinnamon, Gnome')
makedepends=('gettext' 'itstool' 'vala>=0.45' 'meson' 'ninja' 'gobject-introspection' 'xorgproto' 'asciidoc')
conflicts=('pamac' 'pamac-gtk' 'pamac-cli' 'pamac-common' 'pamac-aur' 'pamac-aur-git')
provides=("pamac")
options=(!emptydirs)
install=pamac.install
source=(git+https://gitlab.manjaro.org/applications/$_pkgname.git)
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | cut -c2-48
}

define_meson=''
if [ "${ENABLE_FLATPAK}" = 1 ]; then
  define_meson+=' -Denable-flatpak=true'
  provides+=('pamac-flatpak-plugin')
  conflicts+=('pamac-flatpak-plugin')
fi

if [ "${ENABLE_SNAPD}" = 1 ]; then
  define_meson+=' -Denable-snap=true'
  provides+=('pamac-snap-plugin')
  conflicts+=('pamac-snap-plugin')
fi

if [ "${ENABLE_APPINDICATOR}" = 1 ]; then
  depends+=('libappindicator-gtk3')
  define_meson+=' -Denable-appindicator=true'
  provides+=('pamac-tray-appindicator' )
  conflicts+=('pamac-tray-appindicator' 'pamac-aur-tray-appindicator-git')
fi

if [ "${ENABLE_GNOME}" = 1 ]; then
  define_meson+=' -Denable-fake-gnome-software=true'
  provides+=("pamac-gnome-integration" 'gnome-software')
  conflicts+=("pamac-gnome-integration" 'gnome-software')
fi

prepare() {
  cd "$srcdir/$_pkgname"
  # adjust version string
  sed -i -e "s|\"$_pkgfixver\"|\"$pkgver-$pkgrel\"|g" src/version.vala
  # patches here
}

build() {
  cd "$srcdir/$_pkgname"
  mkdir -p builddir
  cd builddir
  meson --prefix=/usr --sysconfdir=/etc --buildtype=release $define_meson
  # build
  ninja
}

package() {
  cd "$srcdir/$_pkgname/builddir"

  DESTDIR="$pkgdir" ninja install
}
# vim:set ts=2 sw=2 et:
