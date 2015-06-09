# Maintainer: Charles Bos <charlesbos1 AT gmail>

pkgname=gnome-flashback
pkgver=3.16.1
pkgrel=3
arch=('i686' 'x86_64')
license=('GPL')
pkgdesc="GNOME Flashback session"
url="https://wiki.gnome.org/Projects/GnomeFlashback"
# Note: Dependencies from gnome-panel onwards are flashback session dependencies and are not required for building the flashback module
depends=('gnome-desktop' 'libcanberra' 'libpulse' 'gnome-panel' 'gnome-screensaver' 'gnome-session' 'metacity' 'nautilus' 'notification-daemon' 'polkit-gnome')
makedepends=('gnome-common' 'intltool')
optdepends=('compiz: required for the GNOME Flashback (Compiz) session')
install=$pkgname.install
source=(http://ftp.gnome.org/pub/gnome/sources/$pkgname/${pkgver:0:4}/$pkgname-$pkgver.tar.xz
        session-components.patch)
sha256sums=('b5424a28b2de694ae9bd170b73dfc6da62358c0e3527631b92be9dc400b52f90'
            '046121b5fbb185c4736a62b909e74985f52c0f0ff4b8a17c5a26d84576bfa4c0')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"

  # Add extra components to the Flashback sessions
  patch -Np1 -i "$srcdir/session-components.patch"
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --libexecdir=/usr/lib/"$pkgname"
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}

