# Maintainer: Mario Cianciolo <mr.udda at gmail dot com>
# Contributor: Michael Kogan <michael.kogan at gmx dot net>

# This file is automatically generated from multiload-ng source.

pkgname='mate-multiload-ng-applet-gtk3'
pkgdesc='Modern graphical system monitor, MATE panel applet'
pkgver=1.4.2
pkgrel=1

makedepends=('intltool')
depends=('gtk3' 'cairo' 'mate-panel-gtk3>=1.7.0')

conflicts=('mate-multiload-ng-applet-gtk2' 'mate-multiload-ng-applet-gtk2-git' 'mate-multiload-ng-applet-gtk3-git')

source=("https://github.com/udda/multiload-ng/archive/v$pkgver.tar.gz")
md5sums=('3c17d8483bc874b20c877a7d7897ab5e')

arch=('i686' 'x86_64')
url='https://udda.github.io/multiload-ng/'
license=('GPL2')

build() {
    cd "multiload-ng-$pkgver"
    ./autogen.sh
    ./configure --prefix=/usr --with-gtk=3.0 --disable-deprecations --without-awn --without-indicator --without-lxpanel --with-mate --without-standalone --without-systray --without-xfce4
    make
} 

package() {
    cd "multiload-ng-$pkgver"
    make -C "mate" DESTDIR="$pkgdir" install
}
