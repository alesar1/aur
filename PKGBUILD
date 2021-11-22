# Maintainer: j.r <j.r@jugendhacker.de>
# Contributor: Jonathan Chasteen <jonathan dot chasteen at live dot com>
# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
# Contributor: aimileus <me at aimileus dot nl>
# Contributor: spider-mario <spidermario@free.fr>

pkgname=('qgnomeplatform' 'qgnomeplatform-qt6')
pkgbase=qgnomeplatform
_pkgname=QGnomePlatform
pkgver=0.8.3
pkgrel=1
pkgdesc="QPlatformTheme for a better Qt application inclusion in GNOME"
arch=('x86_64')
url="https://github.com/FedoraQt/QGnomePlatform"
license=('LGPL2.1')
makedepends=('cmake' 'gtk3' 'qt5-wayland' 'qt6-wayland' 'adwaita-qt6>=1.4.1' 'adwaita-qt>=1.4.1')
source=("$pkgname-$pkgver.tar.gz::https://github.com/FedoraQt/QGnomePlatform/archive/$pkgver.tar.gz")
sha256sums=('d80aa10723805bf67234b8d30a89bce2aee801c5a3c3752b6399b4f921d8bebf')

build() {
	cd "$srcdir"
  cmake -B build-qt5 -S "$_pkgname-$pkgver" -DCMAKE_BUILD_TYPE=None -DCMAKE_INSTALL_PREFIX=/usr -DUSE_QT6=false -Wno-dev
	make -C build-qt5

  cmake -B build-qt6 -S "$_pkgname-$pkgver" -DCMAKE_BUILD_TYPE=None -DCMAKE_INSTALL_PREFIX=/usr -DUSE_QT6=true -Wno-dev
	make -C build-qt6
}

package_qgnomeplatform() {
  pkgdesc="QPlatformTheme for a better Qt5 application inclusion in GNOME"
  depends=('gtk3' 'qt5-wayland' 'adwaita-qt>=1.4.1')

	cd "$srcdir"
	make -C build-qt5 DESTDIR="$pkgdir" install
}

package_qgnomeplatform-qt6() {
  pkgdesc="QPlatformTheme for a better Qt6 application inclusion in GNOME"
  depends=('gtk3' 'qt6-wayland' 'adwaita-qt6>=1.4.1')

	cd "$srcdir"
	make -C build-qt6 DESTDIR="$pkgdir" install
}
# vim:set ts=2 sw=2 et:
