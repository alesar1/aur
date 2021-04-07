# Maintainer: Christian Visintin
pkgname=termscp
pkgver=0.4.1
pkgrel=1
pkgdesc="TermSCP is a SCP/SFTP/FTPS client for command line with an integrated UI to explore the remote file system. Basically WinSCP on a terminal."
url="https://github.com/veeso/termscp"
license=("MIT")
arch=("x86_64")
provides=("termscp")
options=("strip")
source=("https://github.com/veeso/termscp/releases/download/v$pkgver/termscp-$pkgver-x86_64.tar.gz")
sha256sums=("0862fafbeb957a657db14dc5954bb73350c1675ba30a01580b96cb044f1443fe")

package() {
    install -Dm755 termscp -t "$pkgdir/usr/bin/"
}
