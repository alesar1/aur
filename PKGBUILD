# Maintainer: Ehsan Ghorbannezad <ehsan at disroot dot org>
_pkgname=mdpdf
pkgname=$_pkgname-git
pkgver=r9.1beff75
pkgrel=2
pkgdesc='a shell script for converting markdown to pdf using lowdown. '
url=https://github.com/soystemd/mdpdf
arch=(x86_64)
license=(GPL)
makedepends=(git)
depends=(lowdown)
optdepends=('zathura: for opening pdfs after markdown compilation')
source=("git+$url.git")
md5sums=(SKIP)

pkgver() {
    cd "$_pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "$_pkgname"
    make PREFIX=/usr DESTDIR="$pkgdir" install
    install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}
