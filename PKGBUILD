# Maintainer: Tim Yang <protonmail = timdyang>

pkgname=gnome-shell-extension-x11gestures
_uuid=x11gestures@joseexposito.github.io
pkgver=14
pkgrel=1
pkgdesc="Enable GNOME Shell multi-touch gestures on X11"
arch=(any)
url=https://github.com/JoseExposito/$pkgname
license=(GPL)
depends=(gnome-shell touchegg)
install=$pkgname.install
source=($_uuid-$pkgver.zip::https://github.com/JoseExposito/$pkgname/releases/download/$pkgver/$_uuid.zip)
noextract=($_uuid-$pkgver.zip)
sha256sums=(860941664cfcff4a0fa6953bc4efdc34354b6ffa48f5b32a2a5034eb4a63132e)

package() {
    bsdtar -xf "$srcdir"/$_uuid-$pkgver.zip \
        -C "$pkgdir" \
        -s ":^:usr/share/gnome-shell/extensions/$_uuid/:"

    rm -f "$pkgdir"/usr/share/gnome-shell/extensions/$_uuid/COPY*
    find "$pkgdir" -type d -exec chmod 755 '{}' +
    find "$pkgdir" -type f -exec chmod 644 '{}' +
}
