# Maintainer: Que Quotion <quequotion@bugmenot.org>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>

pkgname=wingpanel-standalone-git
pkgver=r355.69a0e08
pkgrel=1
pkgdesc='Stylish top panel that holds indicators and spawns an application launcher (without Gala dependencies)'
arch=('i686' 'x86_64')
url='https://github.com/elementary/wingpanel'
license=('GPL3')
groups=('pantheon-unstable' 'pantheon-qq')
depends=('glib2' 'glibc' 'gtk3' 'libgee' 'mutter'
         'libgranite.so')
makedepends=('cmake' 'git' 'granite-git' 'vala')
optdepends=("pantheon-applications-menu-git: Application launcher"
            wingpanel-indicator-{a11y,bluetooth,datetime,keyboard,network,notifications,power,session,sound}-git": Tray applet"
            "wingpanel-indicator-ayatana-git: Unity 7 Tray applets"
            "indicator-powersave: On the fly power savings and performance toggles"
            "glippy-indicator: Excellent clipboard manager applet"
            "indicator-sensors: Sensors readout applet"
            "ubuntu-indicator-weather: Simple weather applet")
provides=(wingpanel{,{,-standalone}-bzr,-git} 'libwingpanel-2.0.so')
conflicts=('wingpanel')
replaces=('wingpanel-standalone-bzr')
source=('git+https://github.com/elementary/wingpanel.git'
        'minus-backgroundmanager.patch'
        'minus-galaplugin.patch'
        'minus-gala.patch'
        'y-is-broken-cogl.patch'
        'autohide.patch')
sha256sums=('SKIP'
            'b8bfc357158efb84113e234f9d0efa108cea460a3d160c2db25d966c93412875'
            'a1c6e3a9c1553abdf1f676b1861531c3eacb2c32923bff51ca9d96872646636a'
            '47934e9aff119cedcfe7d184078ad60d3d715e07f1ca7cb1715e50b2e0c517e8'
            'b1902c1d44ac546df63cd0224a7d2ef2cb6394ca556512c30c370d387db7bbab'
            'da77ed83459b7d49056f35b9de1dd8b487b3c51234911f43b2fa401a38b6dd4a')

pkgver() {
  cd wingpanel

  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  cd wingpanel

  #Autohide
  msg2 "Autohide"
  patch -Np2 < ../autohide.patch
  #patch -Np2 < ../autohide-testing.patch

  #Standalone patches
  msg2 "Remove Gala dependecies"
  rm -rf wingpanel-interface
  patch -Np2 < ../minus-backgroundmanager.patch
  patch -Np2 < ../minus-galaplugin.patch
  patch -Np2 < ../minus-gala.patch

  #Cogl can't be found when not using gala's cmake package; wtf?
  msg2 "Remove CoglFixes (broken)"
  patch -Np2 < ../y-is-broken-cogl.patch

  if [[ -d build ]]; then
    rm -rf build
  fi
  mkdir build
}

build() {
  cd wingpanel/build

  cmake .. \
    -DCMAKE_BUILD_TYPE='Release' \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -DCMAKE_INSTALL_LIBDIR='lib' \
    -DGSETTINGS_COMPILE='FALSE'
  make
}

package() {
  cd wingpanel/build

  make DESTDIR="${pkgdir}" install
}

# vim: ts=2 sw=2 et:
