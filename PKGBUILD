# Maintainer: Joaquin (Pato) Decima <https://patojad.com.ar/>

_pkgname=lynx-desktop
pkgname=${_pkgname,}
pkgver=0.2.2
pkgrel=1
pkgdesc="Lynx Desktop Environment - Desktop for LynxOS"
url="https://gitlab.com/LynxOS/$pkgname"
depends=(
        'lynx-nw'
        'lynx-desktop-service'
        'lynx-dock'
        'gnome-menus'
        'python-dbus'
        'python-gobject'
        'lynx-desktop-settings'
        'libxkbcommon-x11'
        )
license=('GPL')
arch=('any')
md5sums=('12a0ade261195334e0357937ec52d4c4')
source=("$url/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")

package() {
    cd $pkgname-$pkgver
    install -dm755 $pkgdir/usr/share/Lynx/$pkgname/
    cp -r $srcdir/$pkgname-$pkgver/* $pkgdir/usr/share/Lynx/$pkgname/
    chmod a+x $pkgdir/usr/share/Lynx/$pkgname/$pkgname
    sudo ln -sf /usr/share/Lynx/$pkgname/$pkgname /bin/$pkgname 
}
