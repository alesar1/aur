# Maintainer: sife <wyattgoettsch@gmx.us>

pkgname=dmenu_bw-git
pkgver=r29.0eb6e7d
pkgrel=1
pkgdesc="dmenu wrapper for bitwarden-cli written in POSIX shellscript."
arch=('x86_64')
url="https://github.com/Sife-ops/dmenu_bw"
license=('GPL3')
depends=('jq' 'yad' 'xclip')
optdepends=('notify-send' 'dmenu')
provides=('dmenu_bw')
conflicts=('dmenu_bw')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/dmenu_bw"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "$srcdir/dmenu_bw"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
    install -Dm755 dmenu_bw "$pkgdir/usr/bin/dmenu_bw"
}
