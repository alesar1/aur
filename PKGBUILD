# Maintainer: Charles Bos <charlesbos1 AT gmail>

pkgname=gnome-flashback
pkgver=3.16.1
pkgrel=7
arch=('i686' 'x86_64')
license=('GPL')
pkgdesc="GNOME Flashback session"
url="https://wiki.gnome.org/Projects/GnomeFlashback"
# Note: Dependencies from gnome-panel onwards are flashback session dependencies and are not required for building the flashback module
depends=('gnome-desktop' 'libcanberra' 'libpulse' 'upower' 'gnome-panel' 'gnome-screensaver' 'gnome-session' 'gnome-settings-daemon' 'metacity' 'nautilus' 'notification-daemon' 'polkit-gnome')
makedepends=('gnome-common' 'intltool')
optdepends=('compiz: required for the GNOME Flashback (Compiz) session')
install=$pkgname.install
source=(http://ftp.gnome.org/pub/gnome/sources/$pkgname/${pkgver:0:4}/$pkgname-$pkgver.tar.xz
        session-components.patch
        workarounds.patch
        gnome-screensaver-autostart.desktop)
sha256sums=('b5424a28b2de694ae9bd170b73dfc6da62358c0e3527631b92be9dc400b52f90'
            '046121b5fbb185c4736a62b909e74985f52c0f0ff4b8a17c5a26d84576bfa4c0'
            '985186169be8bd55e98fd710b353791a63759087ddc6eb50ff98dd3dcc5af7e9'
            'f180a7372eeced8c892c59e2cc91af68cbd1ed06b1382d8ee50da7999a424e5c')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"

  # Add extra components to the Flashback sessions
  patch -Np1 -i "$srcdir/session-components.patch"

  # Add workarounds flashback component from 3.17 (fixes missing appmenu button)
  patch -Np1 -i "$srcdir/workarounds.patch"

  autoreconf -vfi
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --libexecdir=/usr/lib/"$pkgname"
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install

  # Add gnome-screensaver as it was removed from 3.6.1-12
  # This is a temporary measure, autostart file will be in flashback 3.18
  mkdir -p "$pkgdir/etc/xdg/autostart"
  install -m644 "$srcdir/gnome-screensaver-autostart.desktop" "$pkgdir/etc/xdg/autostart"
}

