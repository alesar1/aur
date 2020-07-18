pkgname=youtubemusic
_pkgname=YoutubeMusic
pkgver=1.0.1
pkgrel=1
pkgdesc="Youtube Music is a unofficial client to play your music."
arch=('any')
url="https://gitlab.com/youtube-music/application"
license=('GPL')
depends=('nss' 'gtk3' 'libxss')
makedepends=('npm' 'git' 'unzip')
provides=("${pkgname%}")
conflicts=("${pkgname%}")
source=('git+https://gitlab.com/youtube-music/application.git')
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/application"
    node -pe "require('./package.json').version"
}

build() {
    cd "$srcdir/application"
    npm --cache "$srcdir/npm-cache" i electron electron-packager
    ./node_modules/.bin/electron-packager . --overwrite
    rm -rf "$srcdir/$pkgname/$_pkgname-linux-x64/resources/app/node_modules"    
}

package() {
    cd "$srcdir/application/$_pkgname-linux-x64"
    install -dm755 "$pkgdir/opt/$_pkgname"
    cp -r ./ "$pkgdir/opt/$_pkgname"

    # Link to binary
    install -dm755 "$pkgdir/usr/bin"
    ln -s "/opt/$_pkgname/$_pkgname" "$pkgdir/usr/bin/${pkgname%}"

    # Desktop Entry
    install -Dm644 "$srcdir/application/$_pkgname.desktop" \
        "$pkgdir/usr/share/applications/$_pkgname.desktop"
    sed -i s%/usr/share%/opt% "$pkgdir/usr/share/applications/$_pkgname.desktop"
}
