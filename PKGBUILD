# Maintainer: robertfoster

pkgname=megabasterd-bin
pkgver=7.28
pkgrel=1
pkgdesc="Yet another (unofficial) cross-platform MEGA downloader/uploader/streaming suite"
arch=('any')
url="https://github.com/tonikelope/megabasterd"
license=('GPL3')
depends=('java-runtime')
source=("https://github.com/tonikelope/megabasterd/releases/download/v$pkgver/MegaBasterd_$pkgver.jar"
    "${pkgname%%-bin}.sh"
    "${pkgname%%-bin}.desktop"
)

package() {
    cd "$srcdir"
    mkdir -p "$pkgdir/usr/share/java/${pkgname%%-bin}"
    cp "MegaBasterd_$pkgver.jar" "$pkgdir/usr/share/java/${pkgname%%-bin}/${pkgname%%-bin}.jar"
    install -Dm755 "${pkgname%%-bin}.sh" "$pkgdir/usr/bin/${pkgname%%-bin}"
    install -Dm644 "images/pica_roja_big.png" "$pkgdir/usr/share/pixmaps/${pkgname%%-bin}.png"
    install -Dm644 "${pkgname%%-bin}.desktop" "$pkgdir/usr/share/applications/${pkgname%%-bin}.desktop"
}

md5sums=('fc7f72458f7ce9c5e40d80938a1932df'
         'f4112d02ba321fbb769be50679d35357'
         '35caeff84baa75d65635077c1a28ec53')
