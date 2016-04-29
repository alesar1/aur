pkgname=krudio-git
pkgver=20160429
_git=578e6161e87dd58aec1617a1b63968869b38696f
_repo=krudio
pkgrel=1
pkgdesc="Simple Qt5 radio player"
arch=('i686' 'x86_64')
url="https://github.com/loast/${_repo}"
license=('MIT')
makedepends=('git' 'qt5-multimedia')
depends=('git' 'libnotify' 'qt5-multimedia' 'hicolor-icon-theme')
source=("${_repo}-${pkgver}.tar.gz::${url}/archive/${_git}.tar.gz")
install=$pkgname.install
md5sums=('SKIP')

package() {
    # Compiling
    cd "$srcdir/${_repo}-${_git}"
    make all
    # Build
    mkdir -p $pkgdir/usr/share/krudio/icons
    install -Dm644 $srcdir/${_repo}-${_git}/src/data/icons/* $pkgdir/usr/share/krudio/icons
    install -Dm755 $srcdir/${_repo}-${_git}/src/data/krudio.desktop $pkgdir/usr/share/applications/krudio.desktop
    install -Dm755 $srcdir/${_repo}-${_git}/src/krudio $pkgdir/usr/bin/krudio
}
