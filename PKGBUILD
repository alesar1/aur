# Maintainer: Emanuel Fernandes <efernandes@tektorque.com>

pkgname=rapidminer-studio
pkgver=8.1.0
pkgrel=1
pkgdesc="Empowers data scientists and business analysts to effortlessly design predictive analytics from mashup to modeling to deployment"
arch=('any')
url="https://rapidminer.com/products/studio/"
license=('AGPL3')
depends=('java-environment')
makedepends=('unzip' 'gendesk')
source=(https://s3.amazonaws.com/rapidminer.releases/rapidminer-studio/$pkgver/rapidminer-studio-$pkgver.zip \
        rapidminer-studio.sh)
sha256sums=('55dab056c24069ad52931e897b2733fef2dbca0ee1d6a38e2642aa2fa6527069'
            'd3d76353c1ae15eec44c2fc638bbde98a192b70447bd467763f6d41cf24b6e5a')

prepare() {
    gendesk -f -n \
                --name "RapidMiner Studio" \
                --pkgname "$pkgname" \
                --pkgdesc "$pkgdesc" \
                --categories="Science;Education;Development"
}

package() {
    cd "$srcdir"
    mkdir -p "$pkgdir/opt/$pkgname"
    unzip -p "$srcdir/$pkgname/lib/rapidminer-studio-core-$pkgver.jar" \
             com/rapidminer/resources/rapidminer_frame_icon_128.png > "$pkgname.png"
    install -Dm644 "$pkgname.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
    cp -R "$srcdir/$pkgname/" "$pkgdir/opt/"

    mkdir -p "$pkgdir/usr/bin/"
    mkdir -p "$pkgdir/usr/share/applications/"
    mkdir -p "$pkgdir/usr/share/licenses/$pkgname"

    install -Dm655 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
    install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
