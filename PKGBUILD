# Maintainer: Que Quotion <quequotion@bugmenot.org>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>

pkgname=wingpanel-standalone-git
pkgver=r546.d8aeb88
pkgrel=1
pkgdesc='Stylish top panel that holds indicators and spawns an application launcher (without Gala dependencies)'
arch=('i686' 'x86_64')
url='https://github.com/elementary/wingpanel'
license=('GPL3')
groups=('pantheon-qq')
depends=(lib{gee,wnck3} 'cogl')
makedepends=('meson' 'libgranite.so' 'git' 'vala')
optdepends=("pantheon-applications-menu-git: Application launcher"
            wingpanel-indicator-{a11y,bluetooth,datetime,keyboard,network,notifications,power,session,sensors,sound}-git": Tray applet"
            wingpanel-indicator-{ayatana,namarupa}-git": Display Unity 7 tray applets"
            "indicator-powersave: On the fly power savings and performance toggles"
            "glippy-indicator: Excellent clipboard manager applet"
            "ubuntu-indicator-weather: Simple weather applet")
provides=(wingpanel{,{,-standalone}-bzr,-git} 'libwingpanel-2.0.so')
conflicts=(wingpanel{,{,-standalone}-bzr,-git} 'libwingpanel-2.0.so')
replaces=('wingpanel-standalone-bzr')
source=('git+https://github.com/elementary/wingpanel.git'
        'minus-backgroundmanager.patch'
        'minus-galaplugin.patch'
        'autohide.patch'
        'reverse-105c1d0.patch')
sha256sums=('SKIP'
            'd7104f0e32cd095e4b9564c90ca8d0f0f313e57f8a77a383c9bf5a30a6361a02'
            'aa0a27e41df60a7b15e2fd7e0d06551663b98917b7632e4067e6b9a39407de1c'
            'cbea39c2f11ecaf8f6d86f79253746575da479bdd25a166a36ee82f09f9135a0'
            '53bfa2220d14065ca848c36217abe812685c7d6e0d42251423d0faa2a0ac5394')

pkgver() {
  cd wingpanel

  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  cd wingpanel

  #Autohide
  msg2 "Autohide"
  patch -Np1 < ../autohide.patch
  #patch -Np2 < ../autohide-testing.patch

  #Reverse 105c1d0
  msg2 "Reverse commit 105c1d0"
  patch -Np1 < ../reverse-105c1d0.patch

  #Standalone patches
  msg2 "Remove Gala dependecies"
  rm -rf wingpanel-interface
  rm src/Services/BackgroundManager.vala
  patch -Np2 < ../minus-backgroundmanager.patch
  patch -Np2 < ../minus-galaplugin.patch

  [ ! -d build ] || rm -rf build
}

build() {
  cd wingpanel/
  arch-meson build
  ninja -C build
}

package() {
  cd wingpanel/
  DESTDIR="${pkgdir}" ninja -C build install
}
