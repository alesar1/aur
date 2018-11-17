# Maintainer: Allen Choong <allencch at hotmail dot com>
pkgname=emoji-keyboard-git
pkgver=r27.afe17aa
pkgrel=1
pkgdesc="Virtual keyboard-like emoji picker for linux"
arch=('i686' 'x86_64')
url="https://github.com/OzymandiasTheGreat/emoji-keyboard"
license=('GPL3')
depends=('python' 'python-xlib' 'libappindicator-gtk3' 'python-setuptools')
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
  sed -i -e "78i\	return False" lib/emoji_shared.py
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
