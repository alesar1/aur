# Maintainer: Christian Visintin
pkgname=termscp
pkgver=0.5.0
pkgrel=1
pkgdesc="termscp is a SCP/SFTP/FTPS client for command line with an integrated UI to explore the remote file system. Basically WinSCP on a terminal."
url="https://github.com/veeso/termscp"
license=("MIT")
arch=("x86_64")
provides=("termscp")
options=("strip")
source=("https://github.com/veeso/termscp/releases/download/v$pkgver/termscp-$pkgver-x86_64.tar.gz")
sha256sums=("279b4cab7da68c6db0efc054ddf72e36de85910110721b66d5cdc55833c99ccf")

package() {
    install -Dm755 termscp -t "$pkgdir/usr/bin/"
}
