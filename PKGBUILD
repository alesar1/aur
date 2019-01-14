# Maintainer: Metal A-wing <1 at 233 dot email>
# Contributor: Rocka <i at Rocka dot me>

pkgname=electron-netease-cloud-music
pkgver=0.7.2
pkgrel=2
pkgdesc="UNOFFICAL client for music.163.com . Powered by Electron, Vue, and Muse-UI."
arch=('x86_64')
url="https://github.com/Rocket1184/electron-netease-cloud-music"
license=('GPL3')
depends=('electron' 'dbus')
makedepends=('imagemagick' 'npm' 'yarn')

source=("git+https://github.com/Rocket1184/electron-netease-cloud-music.git#tag=v${pkgver}"
        'electron-netease-cloud-music.desktop'
        'electron-netease-cloud-music.sh'
)

md5sums=('SKIP'
         '7f35c2dbfc5cd0fd63cd0be16cf35f3c'
         '155178854f344b3d56283beb739c8730'
)

build() {
    cd "$srcdir/$pkgname"
    YARN_CACHE_FOLDER="$srcdir/yarn_cache" yarn install --ignore-scripts
    npm_config_devdir="$srcdir/node_gyp_dir" npm rebuild dbus
    yarn dist
}

package() {
    mkdir -p "$pkgdir/usr/lib"
    cp -r "$srcdir/$pkgname/dist" "$pkgdir/usr/lib/$pkgname"

    install -Dm755 "$srcdir/electron-netease-cloud-music.sh" "$pkgdir/usr/bin/electron-netease-cloud-music"
    install -Dm644 "$srcdir/electron-netease-cloud-music.desktop" -t "$pkgdir/usr/share/applications/"

    ICON="$srcdir/$pkgname/assets/icons/icon.png"
    install -Dm644 "$ICON" "$pkgdir/usr/share/icons/hicolor/512x512/apps/${pkgname}.png"
    for size in 16 24 32 48 64 72 128 256; do
        target="$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/"
        mkdir -p $target
        convert "$ICON" -resize ${size}x${size} "$target/$pkgname.png"
    done

    install -Dm644 "$srcdir/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

md5sums=('SKIP'
         '7f35c2dbfc5cd0fd63cd0be16cf35f3c'
         '5f24b3f9edf901294a8b0e98ec6667a2')
