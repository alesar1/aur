pkgname=twitch
_pkgname=Twitch
pkgver=1.0.2
pkgrel=1
pkgdesc="Unofficial Twitch desktop application."
arch=('any')
url="https://gitlab.com/coreybruce/twitch-desktop"
license=('GPL')
depends=('nss' 'gtk3' 'libxss')
makedepends=('npm' 'git' 'unzip')
provides=("${pkgname%}")
conflicts=("${pkgname%}")
source=('git+https://gitlab.com/coreybruce/twitch-desktop.git')
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname-desktop"
    node -pe "require('./package.json').version"
}

build() {
    cd "$srcdir/application"
    npm --cache "$srcdir/npm-cache" i electron electron-packager
    ./node_modules/.bin/electron-packager .
    for dir in $_pkgname-linux-*/ ; do mv "${dir}" "$_pkgname" ;done
    rm -rf "$srcdir/$pkgname/$_pkgname/resources/app/node_modules"
}

package() {
    cd "$srcdir/application/$_pkgname"
    install -dm755 "$pkgdir/opt/$_pkgname"
    cp -r ./ "$pkgdir/opt/$_pkgname"

    # Link to binary
    install -dm755 "$pkgdir/usr/bin"
    ln -s "/opt/$_pkgname/$_pkgname" "$pkgdir/usr/bin/${pkgname%}"

    # Desktop Entry
    install -Dm644 "$srcdir/$pkgname-desktop/$_pkgname.desktop" \
        "$pkgdir/usr/share/applications/$_pkgname.desktop"
    sed -i s%/usr/share%/opt% "$pkgdir/usr/share/applications/$_pkgname.desktop"
}
