pkgname=netflix-git
_pkgname=Netflix-git
pkgver=1.0.3
pkgrel=4
pkgdesc="Unofficial Netflix desktop app."
arch=('x86_64')
url="https://gitlab.com/netflix-desktop"
license=('GPL')
depends=('nss' 'gtk3' 'libxss')
makedepends=('npm' 'git' 'unzip')
provides=("${pkgname%}")
conflicts=("Netflix-bin")
source=(git+https://gitlab.com/netflix-desktop/application.git)
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/application"
    node -pe "require('./package.json').version"
}

build() {
    cd "$srcdir/application"
    npm install "https://github.com/castlabs/electron-releases#v14.2.2-wvvmp" --save-dev
    npm --cache "$srcdir/npm-cache" i electron-context-menu@3.1.1
}

package() {
    cd "$srcdir/application"
    install -dm755 "$pkgdir/opt/Netflix"
    install -dm755 "$pkgdir/usr/share/pixmaps"
    cp -r ./ "$pkgdir/opt/Netflix"
    cp -r "$pkgdir/opt/Netflix/netflix.svg" "$pkgdir/usr/share/pixmaps"

    # Link to binary
    install -dm755 "$pkgdir/usr/bin"
    ln -s "/opt/Netflix/netflix" "$pkgdir/usr/bin/netflix"

    # Desktop Entry
    install -Dm644 "$srcdir/application/Netflix.desktop" \
        "$pkgdir/usr/share/applications/Netflix.desktop"
    sed -i s%/usr/share%/opt% "$pkgdir/usr/share/applications/Netflix.desktop"
}
