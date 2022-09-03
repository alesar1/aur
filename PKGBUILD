# Maintainer: <me at auoeke dot net>
_get() {
    curl https://api.github.com/repos/lapce/lapce/releases/tags/nightly -s | awk -F '"' '/"'"$1"'":/{print $4}'
}

pkgname=lapce-nightly-bin
pkgver=20220903
pkgrel=3
pkgdesc='Lightning-fast and powerful code editor'
arch=(x86_64)
url=https://lapce.dev
license=(Apache)
depends=(
    expat
    fontconfig
    freetype2
    gcc-libs
    gtk3
    libxcb
    libxkbcommon
)
options=('!lto')
source=(
    lapce-$pkgver.tar.gz::https://github.com/lapce/lapce/releases/download/nightly/Lapce-linux.tar.gz
    https://raw.githubusercontent.com/lapce/lapce/$(_get target_commitish)/extra/{images/logo.png,linux/dev.lapce.lapce.{desktop,metainfo.xml}}
)
sha256sums=(
    'SKIP'
    'SKIP'
    'SKIP'
    'SKIP'
)

pkgver() {
    date -d $(_get published_at) +%Y%m%d
    #"Lapce/lapce" -V | cut -d - -f 2
}

prepare() {
    sed -i -e "s/Exec=lapce/Exec=lapce-nightly/" -e "s/Name=Lapce/Name=Lapce nightly/" dev.lapce.lapce.desktop
}

check() {
    Lapce/lapce -V
}

package() {
    install -D Lapce/lapce "$pkgdir/usr/bin/lapce-nightly"
    install -Dm 644 dev.lapce.lapce.desktop "$pkgdir/usr/share/applications/dev.lapce.lapce-nightly.desktop"
    install -Dm 644 dev.lapce.lapce.metainfo.xml "$pkgdir/usr/share/metainfo/dev.lapce.lapce-nightly.metainfo.xml"
    install -Dm 644 logo.png "$pkgdir/usr/share/pixmaps/dev.lapce.lapce-nightly.png"
}

