# Maintainer: Tim Yang <protonmail = timdyang>

pkgname=gnome-shell-extension-x11gestures
_uuid=x11gestures@joseexposito.github.io
pkgver=8
pkgrel=1
pkgdesc="Enable GNOME Shell multi-touch gestures on X11"
arch=(any)
url=https://github.com/JoseExposito/$pkgname
license=(GPL)
depends=(gnome-shell touchegg)
install=$pkgname.install
source=($_uuid-$pkgver.zip::https://github.com/JoseExposito/$pkgname/releases/download/$pkgver/$_uuid.zip)
noextract=($_uuid-$pkgver.zip)
sha256sums=(e77f46b30e9b4cc2f8bec3e1c28fd4d02db7252f46f66ddacf991cb33e99c558)

package() {
    bsdtar -xf "$srcdir"/$_uuid-$pkgver.zip \
        -C "$pkgdir" \
        -s ":^:usr/share/gnome-shell/extensions/$_uuid/:"

    rm -f "$pkgdir"/usr/share/gnome-shell/extensions/$_uuid/COPY*
    find "$pkgdir" -type d -exec chmod 755 '{}' +
    find "$pkgdir" -type f -exec chmod 644 '{}' +
}
