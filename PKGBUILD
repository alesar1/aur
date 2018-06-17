# Maintainer: Jonni Westphalen <jonny.westphalen@googlemail.com>
pkgname=aurman
pkgver=2.12
pkgrel=1
pkgdesc="aurman AUR helper with almost pacman syntax"
arch=('any')
url="https://github.com/polygamma/aurman"
license=('MIT')
depends=('python' 'expac-git' 'python-requests' 'git' 'python-regex' 'pacman>=5.1')
source=("aurman_sources::git+https://github.com/polygamma/aurman.git?signed#tag=${pkgver}")
md5sums=('SKIP')
validpgpkeys=('4C3CE98F9579981C21CA1EC3465022E743D71E39') # Jonni Westphalen

package() {
    cd "$srcdir/aurman_sources"
    /usr/bin/python3 setup.py install --root="$pkgdir/" --optimize=1
    install -Dm644 ./bash.completion "$pkgdir/usr/share/bash-completion/completions/aurman"
    install -Dm644 ./aurman.fish "$pkgdir/usr/share/fish/vendor_completions.d/aurman.fish"
}
