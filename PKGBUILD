# Maintainer: Christian Visintin
pkgname=termscp
pkgver=0.4.0
pkgrel=2
pkgdesc="TermSCP is a SCP/SFTP/FTPS client for command line with an integrated UI to explore the remote file system. Basically WinSCP on a terminal."
url="https://github.com/veeso/termscp"
license=("MIT")
arch=("x86_64")
provides=("termscp")
options=("strip")
source=("https://github.com/veeso/termscp/releases/download/v$pkgver/termscp-$pkgver-x86_64.tar.gz")
sha256sums=("04a827ebeac48f0c181617acfa9f2a674e7ac91117a85bf4e68ec6ce31ee4077")

package() {
    install -Dm755 termscp -t "$pkgdir/usr/bin/"
}
