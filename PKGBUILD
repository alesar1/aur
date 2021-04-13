# Maintainer: Christian Visintin
pkgname=termscp
pkgver=0.4.2
pkgrel=1
pkgdesc="TermSCP is a SCP/SFTP/FTPS client for command line with an integrated UI to explore the remote file system. Basically WinSCP on a terminal."
url="https://github.com/veeso/termscp"
license=("MIT")
arch=("x86_64")
provides=("termscp")
options=("strip")
source=("https://github.com/veeso/termscp/releases/download/v$pkgver/termscp-$pkgver-x86_64.tar.gz")
sha256sums=("c72f78a4707402f7f970a883899f4f1583fd9eca6166cb7f7616be97cabf768a")

package() {
    install -Dm755 termscp -t "$pkgdir/usr/bin/"
}
