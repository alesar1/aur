# Maintainer:  twa022 <twa022 at gmail dot com>
# Contributor: Sascha Appel <sascha.appel@gmail.com>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Tobias Kieslich <tobias funnychar archlinux.org>
# Contributor: Andrea De Angelis <andrea.deangelis93@gmail.com>

_pkgname=xfce4-power-manager
pkgname=${_pkgname}-devel
pkgver=4.17.0
pkgrel=1
pkgdesc="Power manager for Xfce desktop"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="http://www.xfce.org/"
license=('GPL2')
groups=('xfce4-devel')
depends=('upower' 'libnotify' 'libxfce4ui' 'hicolor-icon-theme' 'networkmanager')
makedepends=('pkgconfig' 'intltool' 'xfce4-panel' 'polkit')
optdepends=('xfce4-panel:	    Xfce panel plugin support')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
options=('!libtool')
source=("https://archive.xfce.org/src/xfce/xfce4-power-manager/${pkgver%.*}/xfce4-power-manager-${pkgver}.tar.bz2")
sha256sums=('2deca68f816705de5c4f11aad48b1157ce715da467bd3eaba723299df861615b')

build() {
  cd "$srcdir/${_pkgname}-$pkgver"

  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib \
    --localstatedir=/var \
    --enable-network-manager \
    --enable-polkit \
    --disable-debug
  make
}

package() {
  cd "$srcdir/${_pkgname}-$pkgver"
  make DESTDIR="$pkgdir" install
}
