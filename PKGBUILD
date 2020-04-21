# Maintainer: Razer <razer[AT]neuf[DOT]fr>
pkgname=bubblemail-gnome-shell
pkgver=0.71
pkgrel=0
pkgdesc="New and unread mail indicator (Local, Imap, Pop3, Gmail, Yahoo mail...) for gnome shell"
pkgfolder="${pkgname}-v${pkgver}"
arch=(any)
url="https://framagit.org/razer/bubblemail-gnome-shell/"
license=('GPL2')
makedepends=('meson')
depends=('dconf' 'gnome-shell' 'bubblemail')
source=("https://framagit.org/razer/${pkgname}/-/archive/v${pkgver}/${pkgname}-v${pkgver}.tar.bz2")
sha256sums=('5637575307eff9f6c7817d977bb30fd89e7007454452e6c53bda36925f61759c')

build() {
    cd ${srcdir}/${pkgfolder}
    meson -Dprefix=/usr _build
    ninja -C _build build
}

package() {
    cp -r ${srcdir}/${pkgfolder}/_build/_package/* ${pkgdir}
}
