# Maintainer: Nicolai Schmid <nicolai@schmid.uno>
# Maintainer: Alexander Phinikarides <alexisph@gmail.com>
# Maintainer: Florian Wehner <florian@whnr.de>
# PKGBUILD-Credit: https://aur.archlinux.org/account/teprrr

pkgname=portfolio-performance-bin
pkgver=0.59.2
pkgrel=1
pkgdesc="A simple tool to calculate the overall performance of an investment portfolio."
arch=('x86_64')
url="https://www.portfolio-performance.info"
license=('EPL')
options=('!strip')
depends=('jre-openjdk' 'webkit2gtk')

source=(
    portfolio_$pkgver.tar.gz::"https://github.com/buchen/portfolio/releases/download/${pkgver}/PortfolioPerformance-${pkgver}-linux.gtk.x86_64.tar.gz"
    portfolio-performance-bin.svg::https://www.portfolio-performance.info/images/logo.svg
    portfolio-performance-bin.desktop
)

package() {
    install -d "$pkgdir"/{opt,usr/bin}

    cp -a "$srcdir"/portfolio "${pkgdir}"/opt/portfolio-performance-bin

    ln -s /opt/portfolio-performance-bin/PortfolioPerformance "$pkgdir"/usr/bin/PortfolioPerformance

    install -Dm 644 portfolio-performance-bin.desktop -t "$pkgdir"/usr/share/applications
    install -Dm 644 portfolio-performance-bin.svg -t "$pkgdir"/usr/share/pixmaps
}


sha512sums=('4a37b78f8a594e3d6e9ef0a6f71d64968f0d3ea7261407a1cc6772dd4dcd83337d8d760c9968aae7bb3cccd8a2193e9a5c577abb12d9c6ca332a1498cdb48d7c'
            '177215db98deb3999d04ed097e880fe3cd0dc529051e3bf6aaf5f00f06aed08d1bbca77f298623a50376a71a256d0c41d3c86b17b70241dbe9c06f96a8eb4e63'
            '848a4d16dca0ad21d848986021a8d86fee7b3f4f81e916359cbd837d962b4ac5c2dd2b765d52dc40200761eaeac758a99be10c503f174f88e6662a6fc46a20ff')
