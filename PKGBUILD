# Maintainer: BlackIkeEagle <ike DOT devolder AT gmail DOT com>
# Contributor: TZ86

pkgname=vivaldi-snapshot
_rpmversion=3.5.2131.8-1
pkgver=3.5.2131.8
pkgrel=1
pkgdesc='An advanced browser made with the power user in mind. Snapshot'
url="https://vivaldi.com"
options=(!strip !zipman)
license=('custom')
arch=('x86_64')
depends=('gtk3' 'libcups' 'nss' 'alsa-lib' 'libxss' 'ttf-font' 'desktop-file-utils' 'shared-mime-info' 'hicolor-icon-theme')
makedepends=('imagemagick')
optdepends=(
    'vivaldi-snapshot-ffmpeg-codecs: playback of proprietary video/audio'
    'pepper-flash: flash support'
    'libnotify: native notifications'
)
source=("https://downloads.vivaldi.com/snapshot/vivaldi-snapshot-${_rpmversion}.x86_64.rpm"
        "eula.txt")
sha512sums=('b7eaa049d06c0bb99412dc3586d23290b92c72e11dfdb3d7c601747ef178bc5efbb6525f2fe08cd48d1edd11de3a490008a94758e21d68ac8d3f40a0a9e26dad'
            '7cbfc3258a92ee05eeb67c5b65a92aab27f34146fd097007de5eb8e2703610c03bfa52f7ee1d6055735f927b4dcc919a79b7caf6fb5a5a9596cac11cc083e874')

package() {
    cp --parents -a {opt,usr/bin,usr/share} "$pkgdir"

    # suid sandbox
    chmod 4755 "$pkgdir/opt/$pkgname/vivaldi-sandbox"

    # make /usr/bin/vivaldi-snapshot available
    binf="$pkgdir/usr/bin/$pkgname"
    if [[ ! -e "$binf" ]] && [[ ! -f "$binf" ]] && [[ ! -L "$binf" ]]; then
        install -dm755 "$pkgdir/usr/bin"
        ln -s /opt/$pkgname/$pkgname "$binf"
    fi

    # 256 and 24 are proper colored icons
    for res in 128 64 48 32; do
        convert "$pkgdir/opt/$pkgname/product_logo_256.png" \
            -resize ${res}x${res} \
            "$pkgdir/opt/$pkgname/product_logo_$res.png"
    done
    for res in 22 16; do
        convert "$pkgdir/opt/$pkgname/product_logo_24.png" \
            -resize ${res}x${res} \
            "$pkgdir/opt/$pkgname/product_logo_$res.png"
    done

    # install icons
    for res in 16 22 24 32 48 64 128 256; do
        install -Dm644 "$pkgdir/opt/$pkgname/product_logo_${res}.png" \
            "$pkgdir/usr/share/icons/hicolor/${res}x${res}/apps/$pkgname.png"
    done

    # license
    install -Dm644 "$srcdir/eula.txt" \
        "$pkgdir/usr/share/licenses/$pkgname/eula.txt"
}

