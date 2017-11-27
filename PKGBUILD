# Maintainer: twa022 <twa022 at gmail dot com>

_pkgname=thunar
pkgname=${_pkgname}-devel
pkgver=1.7.0
pkgrel=1
pkgdesc='file manager for xfce'
arch=('i686' 'x86_64')
license=('GPL')
url='http://thunar.xfce.org'
groups=('xfce4-devel')
depends=('desktop-file-utils' 'exo' 'gtk3' 'hicolor-icon-theme' 'libgudev'
         'libexif' 'libnotify' 'libpng' 'libxfce4ui' 'libxfce4util')
makedepends=('intltool' 'xfce4-panel' 'gtk-doc' 'gobject-introspection') # 'xfce4-dev-tools')
optdepends=('gvfs: trash support, mounting with udisks, and remote filesystems'
	        'xfce4-panel: trash applet'
	        'tumbler: for thumbnail previews'
	        'thunar-volman: manages removable devices'
	        'thunar-archive-plugin-git: create and deflate archives'
	        'thunar-media-tags-plugin-git: view/edit id3/ogg tags')
provides=("${_pkgname}=${pkgver}" 'libthunarx-3.so')
conflicts=("${_pkgname}")
install="${_pkgname}.install"
source=("http://archive.xfce.org/src/xfce/${_pkgname}/${pkgver%.*}/${_pkgname^}-${pkgver}.tar.bz2")
sha256sums=('36ecbe6d5a406a02f186118c8192b3587121172d9eebb1cb2df6a3bc06272400')

prepare() {
    cd "${_pkgname^}-${pkgver}"
    ./configure \
        --prefix=/usr \
        --sysconfdir=/etc \
        --libexecdir=/usr/lib \
        --localstatedir=/var \
        --disable-static \
        --enable-gio-unix \
        --enable-gudev \
        --enable-exif \
        --enable-pcre \
        --enable-gtk-doc \
        --disable-debug
}

build() {
    cd "${_pkgname^}-${pkgver}"
    make
}

package() {
    cd "${_pkgname^}-${pkgver}"
    make DESTDIR="$pkgdir" install
}
