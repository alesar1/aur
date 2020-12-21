# Maintainer: Christian Visintin
pkgname=termscp
pkgver=0.2.0
pkgrel=1
pkgdesc="TermSCP is a SCP/SFTP/FTPS client for command line with an integrated UI to explore the remote file system. Basically WinSCP on a terminal."
url="https://github.com/ChristianVisintin/termscp"
license=("GPL-3.0")
arch=("x86_64")
provides=("termscp")
options=("strip")
source=("https://github.com/ChristianVisintin/termscp/releases/download/v$pkgver/termscp-$pkgver-x86_64.tar.gz")
sha256sums=("b40f5223e74514c4a9855831da7b5c4a79d415822ec2840ccae98278a2176d01")

package() {
    install -Dm755 termscp -t "$pkgdir/usr/bin/"
}
