# old Maintainer: twa022 <twa022 at gmail dot com>
# Maintainer:  <alcasa dot mz at gmail dot com>

pkgname=xfce4-pulseaudio-plugin
pkgver=0.2.3
pkgrel=2
pkgdesc="Pulseaudio plugin for Xfce4 panel"
arch=('i686' 'x86_64')
license=('GPL2')
url="http://goodies.xfce.org/projects/panel-plugins/xfce4-pulseaudio-plugin"
groups=('xfce4-goodies')
depends=('xfce4-panel>=4.11.0' 'libpulse' 'libkeybinder3')
optdepends=('ido: appindicator support'
            'pavucontrol: default pulseaudio mixer')
makedepends=('intltool')
install="${pkgname}.install"
source=(http://archive.xfce.org/src/panel-plugins/${pkgname}/${pkgver%.*}/${pkgname}-${pkgver}.tar.bz2)
sha256sums=('e82836bc8cf7d905b4e60d43dc630ba8e32dea785989700c71d4aeee9f583b33')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --libexecdir=/usr/lib \
    --localstatedir=/var \
    --disable-static \
    --disable-debug
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
