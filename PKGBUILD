# Maintainer: CorvetteCole <aur@corvettecole.com>

pkgbase=gnome-control-center-vrr
pkgname=(gnome-control-center-vrr)
pkgver=42.2
pkgrel=1
pkgdesc="A window manager for GNOME (with VRR)"
url="https://gitlab.gnome.org/GNOME/gnome-control-center"
arch=(x86_64)
license=(GPL)
depends=(accountsservice cups-pk-helper gnome-bluetooth gnome-desktop
         gnome-online-accounts gnome-settings-daemon gsettings-desktop-schemas gtk3
         libgtop libnma nm-connection-editor sound-theme-freedesktop upower libpwquality
         gnome-color-manager smbclient libmm-glib libgnomekbd libibus libcheese
         libgudev bolt udisks2 libhandy gsound colord-gtk4)
makedepends=(docbook-xsl modemmanager git python meson)
_commit=6b93b355bd45170d7367eb680e4d622385582c99  # tags/42.2^0
source=("$pkgname::git+https://gitlab.gnome.org/GNOME/gnome-control-center.git#commit=$_commit"
        "git+https://gitlab.gnome.org/GNOME/libgnome-volume-control.git"
        'mr734.patch')

sha256sums=('SKIP'
            'SKIP'
            '6afc213f165056eb180692d65baf2fe3b5ec9f7397e1511e515790294aa4aa61')

pkgver() {
  cd $pkgname
  git describe --tags | sed 's/[^-]*-g/r&/;s/-/+/g'
}

prepare() {
  cd "$srcdir/$pkgname"
  patch -p1 < "$srcdir/mr734.patch"
  
  # Install bare logos into pixmaps, not icons
  sed -i "/install_dir/s/'icons'/'pixmaps'/" panels/info-overview/meson.build

  git submodule init subprojects/gvc
  git submodule set-url subprojects/gvc "$srcdir/libgnome-volume-control"
  git submodule update
}

build() {
  arch-meson "$pkgname" build -D documentation=true
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package_gnome-control-center-vrr() {
  conflicts=(gnome-control-center)
  provides=(gnome-control-center)
  groups=(gnome)

  meson install -C build --destdir "$pkgdir"
  install -d -o root -g 102 -m 750 "$pkgdir/usr/share/polkit-1/rules.d"
}
