# Maintainer: Giusy Margarita <kurmikon at libero dot it>

pkgname=korla-icon-theme
pkgver=1.0.1
pkgrel=1
pkgdesc="Korla icon theme suitable for every desktop environment, dark and light versions"
arch=("any")
url="https://github.com/bikass/korla"
license=("GPL3")
depends=("gtk-update-icon-cache")
makedepends=("git")
optdepends=("hicolor-icon-theme: fallback Freedesktop.org Hicolor icon theme"
    "breeze-icons: fallback Breeze icon theme"
    "gnome-icon-theme: fallback Gnome icon theme")
source=("https://github.com/bikass/korla/archive/$pkgver.tar.gz")
md5sums=("5214edef5a599c1cf3bb445a81251b78")

package() {
    mkdir -p "$pkgdir/usr/share/icons/"

    cp -drf --no-preserve=mode,ownership "$srcdir/korla-$pkgver/korla" "$pkgdir/usr/share/icons/korla"
    cp -drf --no-preserve=mode,ownership "$srcdir/korla-$pkgver/korla-light" "$pkgdir/usr/share/icons/korla-light"
} 

post_install() {
    gtk-update-icon-cache -f -t "/usr/share/icons/korla/"
    gtk-update-icon-cache -f -t "/usr/share/icons/korla-light/"
}
