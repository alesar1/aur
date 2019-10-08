# Maintainer: icasdri <icasdri@gmail.com>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: tobias <tobias funnychar archlinux.org>

_pkgname=xfce4-notifyd-layer-shell
pkgname=xfce4-notifyd-layer-shell-git
pkgver=0.4.4.r42.g87281dd
pkgrel=2
pkgdesc="xfce4-notifyd (Xfce's notification daemon) with Wayland layer shell support"
arch=('x86_64')
url='https://github.com/icasdri/xfce4-notifyd-layer-shell'
license=('GPL2')
conflicts=('xfce4-notifyd')
depends=('libxfce4ui' 'libnotify' 'hicolor-icon-theme' 'gtk-layer-shell-git')
makedepends=('intltool' 'python' 'xfce4-panel')
provides=('notification-daemon')
source=('git+https://github.com/icasdri/xfce4-notifyd-layer-shell.git')
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --long --tags | cut -c 15- | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/${_pkgname}"

  ./configure \
    --prefix=/usr \
    --disable-static \
    --disable-debug
  make
}

package() {
  cd "${srcdir}/${_pkgname}"
  make DESTDIR="$pkgdir" install
}
