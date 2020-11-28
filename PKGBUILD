# Maintainer: Joaquin (Pato) Decima <https://patojad.com.ar/>

_pkgname=lynx-desktop
pkgname=${_pkgname,}
pkgver=0.0.2
pkgrel=1
pkgdesc="LynxOS Desktop Environment"
url="https://gitlab.com/LynxOS/lde"
depends=('lynx-ldk' 'gnome-menus' 'python-dbus' 'python-gobject' 'lynx-desktop-settings')
license=('GPL')
arch=('any')
md5sums=('ff8fa60a4a286ea356a8996bcd837dce')
source=("$url/-/archive/$pkgver/lde-$pkgver.tar.gz")

package() {
    cd $_pkgname-$pkgver
    install -dm755 $pkgdir/usr
    cp -r usr/* $pkgdir/usr
    install -dm755 $pkgdir/usr/share/Lynx/lde/
    cp -r src/* $pkgdir/usr/share/Lynx/lde/
    chmod a+x $pkgdir/usr/share/Lynx/lde/lynx-desktop
    chmod a+x $pkgdir/usr/share/Lynx/lde/exit-menu
}
