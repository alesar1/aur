# Maintainer: Rigo Reddig <rigo.reddig@gmail.com>
pkgname=textshot-git
_pkgname=textshot
pkgver=r40.fabf700
pkgrel=1
pkgdesc="Python tool for grabbing text via screenshot"
arch=('any')
url="https://github.com/ianzhao05/textshot"
license=('MIT')
makedepends=()
depends=('tesseract' 'python-entrypoint2' 'python-easyprocess' 'python-mss' 'python-pillow' 'python-pyperclip' 'python-pyqt5' 'python-pyqt5-sip' 'python-pyscreenshot' 'python-pytesseract' )
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+https://github.com/ianzhao05/textshot.git")
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/$_pkgname"
	install -Dm755 "textshot.py" "$pkgdir/usr/bin/textshot"
}
