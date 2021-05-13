# Maintainer: Pascal Mehnert <gargoil@posteo.de>

pkgname=nvimpager-git
pkgver=0.9.r16.g92655aa
pkgrel=1
pkgdesc="Use nvim as a pager to view manpages, diffs, etc with nvim's syntax highlighting"
arch=('any')
url='https://github.com/lucc/nvimpager'
license=('BSD')
depends=('neovim>=0.3.0' 'bash')
makedepends=('curl' 'git' 'scdoc')
conflicts=('nvimpager')
provides=('nvimpager')
source=('git+https://github.com/lucc/nvimpager.git')
sha256sums=('SKIP')

pkgver() {
    cd nvimpager/
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

package() {
    cd nvimpager/

    make PREFIX="/usr" DESTDIR="${pkgdir}" install
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/vimpager/LICENSE"
}
