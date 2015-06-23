# Maintainer: Eli Schwartz <eschwartz93@gmail.com>

pkgname=vim-sensible-git
pkgver=1.1.r4.gd0beb8a
pkgrel=1
pkgdesc="vim defaults everyone can agree on"
arch=('any')
url="https://github.com/tpope/${pkgname%-git}"
license=('custom:vim')
groups=('vim-plugins')
depends=('vim')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git://github.com/tpope/${pkgname%-git}.git")
sha512sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname%-git}"
    git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | cut -c2-
}

package() {
    cd "${srcdir}/${pkgname%-git}"
    install -dm755 "${pkgdir}/usr/share/vim/vimfiles"
    find * -maxdepth 0 -type d -exec cp -rt "${pkgdir}/usr/share/vim/vimfiles" '{}' \+
}
