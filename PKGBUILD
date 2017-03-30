# Maintainer: Allen Choong <allencch at hotmail dot com>
pkgname=emoji-keyboard-git
pkgver=r2.79d6505
pkgrel=1
pkgdesc="Virtual keyboard-like emoji picker for linux"
arch=('i686' 'x86_64')
url="https://github.com/OzymandiasTheGreat/emoji-keyboard"
license=('GPL3')
depends=('python' 'python-xlib')
makedepends=('git')
provides=("emoji-keyboard")
conflicts=("emoji-keyboard")
source=("git://github.com/OzymandiasTheGreat/emoji-keyboard.git")
md5sums=('SKIP')

_gitroot='git://github.com/OzymandiasTheGreat/emoji-keyboard.git'
_gitname='emoji-keyboard'

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/${pkgname%-git}"

  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
