# Maintainer: Paul Makles <paulmakles@gmail.com>
pkgname=revolt-desktop-git
pkgver=25.0d49135
pkgrel=1
pkgdesc="User-first, privacy focused chat platform."
arch=("x86_64")
url="https://revolt.chat"
license=("AGPL3")
depends=("electron")
makedepends=("git" "npm")
provides=("${pkgname%-git}")
source=("git+https://github.com/revoltchat/desktop.git")
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/desktop"
    echo "$(git rev-list HEAD --count).$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/desktop"
    
    electronDist=/usr/lib/electron
    electronVer=$(electron --version | tail -c +2)

    sed -i '/		"electron": /d' ./package.json
    HOME="$srcdir/.electron-gyp" npm install --cache "${srcdir}/npm-cache"
	npm run build:bundle

    ./node_modules/.bin/electron-builder -l dir -c.electronDist=$electronDist -c.electronVersion=$electronVer
}

package() {
	cd "$srcdir/desktop"
    
    install -dm755 "${pkgdir}/usr/lib/${pkgname%-git}"
    cp -dr --no-preserve=ownership dist/linux-unpacked/resources/* "${pkgdir}/usr/lib/${pkgname%-git}/"
    
    install -Dm644 build/icons/icon.png "$pkgdir/usr/share/pixmaps/${pkgname%-git}.png"
    
    install -dm755 "${pkgdir}/usr/bin" "revolt-desktop"
    
    install -Dm755 "revolt-desktop.sh" "$pkgdir/usr/bin/${pkgname%-git}"
    install -Dm644 "revolt-desktop.desktop" -t "$pkgdir/usr/share/applications"
}
