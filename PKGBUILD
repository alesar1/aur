pkgname=rscrevolution
_pkgname=RSCRevolution
pkgver=1.0.0
pkgrel=1
pkgdesc="The most developed, longest running, most active and the only FREE OldSchool RuneScape Classic Private Server."
arch=('any')
url="https://gitlab.com/gamerworld/application"
license=('N/A')
depends=('java-runtime>=11')
makedepends=()
provides=("${pkgname%}")
conflicts=("${pkgname%}")
source=('git+https://gitlab.com/coreybruce/rscrevolution')
sha256sums=('SKIP')

package() {
    cd "$srcdir/$pkgname"
    install -dm755 "$pkgdir/opt/$_pkgname"
    cp -r ./ "$pkgdir/opt/$_pkgname"

    # Link to binary
    install -dm755 "$pkgdir/usr/bin"
    ln -s "/opt/$_pkgname/$_pkgname" "$pkgdir/usr/bin/${pkgname%}"

    # Desktop Entry
    install -Dm644 "$srcdir/$pkgname/$_pkgname.desktop" \
        "$pkgdir/usr/share/applications/$_pkgname.desktop"
    sed -i s%/usr/share%/opt% "$pkgdir/usr/share/applications/$_pkgname.desktop"
}
