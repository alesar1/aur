# Maintainer: Nicolai Schmid <nicolai@schmid.uno>
# PKGBUILD-Credit: https://aur.archlinux.org/account/teprrr

pkgname=portfolio-performance-bin
pkgver=0.50.3
pkgrel=1
pkgdesc="A simple tool to calculate the overall performance of an investment portfolio."
arch=('x86_64')
url="https://www.portfolio-performance.info"
options=('!strip')
depends=('jre11-openjdk')

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


sha512sums=('0d6349454a7fd46711cacba62f4f2b1bd569f9bf08f7e2cc251292d2e5d46251428b7c272a0cf87e41171cfe3ebb80fc0660dbc62c7df6f1a01aef4bbae76969'
            '177215db98deb3999d04ed097e880fe3cd0dc529051e3bf6aaf5f00f06aed08d1bbca77f298623a50376a71a256d0c41d3c86b17b70241dbe9c06f96a8eb4e63'
            'a3ae95fe94bf738c53d99557b6136b599f80fbfdd2bd52db4ad0a02b261b375979cfa7ee332afe0467ea0e00eb27767b2bf27c69048ae8df0e890a148437ce86')
