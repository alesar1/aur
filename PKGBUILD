
# Maintainer: Bilal Elmoussaoui <bil.elmoussaoui@gmail.com>

_pkgbase=hardcode-tray-git
_gitname=Hardcode-Tray
pkgname=$_pkgbase
pkgver=3.8
pkgrel=1
pkgdesc="Fixes Hardcoded Tray Icons"
arch=('i686' 'x86_64')
url="https://github.com/bil-elmoussaoui/Hardcode-Tray"
license=('GPL')
provides=("$_pkgbase")
makedepends=("git")
conflicts=("hardcode-tray-fixer-git" "hardcode-tray")
depends=('python' 'python-gobject' 'python-cairosvg' 'librsvg' 'gtk3')
optdepends=('sni-qt-patched-git: patched qt4 sni plugin to enable icon modification' 'inkscape: to convert svg to png with inkscape')
optdepends_x86_64=('lib32-sni-qt-patched-git: 32-bit patched qt4 sni plugin to enable icon modification')
source=("git://github.com/bil-elmoussaoui/Hardcode-Tray")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_gitname"
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

package() {
  install -Dm755 "$srcdir/$_gitname-$pkgver/hardcode-tray.py" "$pkgdir/opt/$_gitname/hardcode-tray.py"
  install -Dm755 "$srcdir/$_gitname-$pkgver/hardcode-tray" "$pkgdir/usr/bin/hardcode-tray"
  install -d "$pkgdir/opt/$_gitname"
  cp -r -f "$srcdir/$_gitname-$pkgver/src" "$pkgdir/opt/$_gitname"
  cp -r -f "$srcdir/$_gitname-$pkgver/data" "$pkgdir/opt/$_gitname"
}
