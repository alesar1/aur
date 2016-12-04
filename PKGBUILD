# Maintainer: Icaro Perseo <icaroperseo[at]protonmail[dot]com>
# Contributor: FadeMind <fademind@gmail.com>

pkgname=papirus-libreoffice-theme
_commit=57c2298
pkgver=20161127
pkgrel=1
pkgdesc="Papirus theme for LibreOffice"
url="https://github.com/PapirusDevelopmentTeam/${pkgname}"
arch=('any')
license=('GPL')
depends=('plasma-desktop')
makedepends=('git' 'make')
conflicts=('papirus-libreoffice-theme-git' 'libreoffice-papirus-theme' 'libreoffice-papirus-theme-git')
optdepends=('libreoffice' 'libreoffice-fresh-rpm')
options=('!strip')
source=("${pkgname}::git+${url}.git#commit=${_commit}")
sha256sums=('SKIP')

pkgver() {
    cd ${pkgname}
    git log -1 --format="%cd" --date=short | tr -d '-'
}

package() {
    cd ${pkgname}
    make install DESTDIR="$pkgdir"
}

# vim:set ts=2 sw=2 cc=80 et:
