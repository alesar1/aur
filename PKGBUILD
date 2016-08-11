# Maintainer: FadeMind <fademind@gmail.com>

pkgname=arc-suite-git
pkgver=20160811
pkgrel=1
pkgdesc='Arc customization for Plasma 5 (git version)'
arch=('any')
url='https://github.com/varlesh/Arc-KDE'
license=('CCPL:by-sa')
options=('!strip')
makedepends=('git' 'make')
depends=('plasma-desktop' 'imagemagick')
conflicts=('arc-suite')
optdepends=("gtk-theme-arc-git: A flat theme with transparent elements for GTK 3, GTK 2 and Gnome-Shell (git version)"
            "papirus-icon-theme-kde-git: Papirus icon theme for KDE (git version)"
            "yakuake: A drop-down terminal emulator based on KDE konsole technology"
            "konsole: Terminal"
            "qt4-style-kvantum-svn: SVG theme engine for Qt4"
            "qt5-style-kvantum-svn: SVG theme engine for Qt5" 
            "kvantum-tools-qt5-svn: Kvantum config tools build against Qt5")
source=("${pkgname}::git+${url}.git")
sha256sums=('SKIP')

pkgver(){
    cd ${pkgname}
    git log -1 --format="%cd" --date=short | tr -d '-'
}

package() {
    make -C "${pkgname}" install DESTDIR="$pkgdir"
}
