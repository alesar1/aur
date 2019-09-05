# Maintainer: Kamil Śliwak <cameel2/at/gmail/com>

pkgname=kubeval-bin
pkgver=0.14.0
pkgrel=1
pkgdesc="Tool for validating Kubernetes YAML or JSON configuration files"
arch=('x86_64')
url="https://github.com/garethr/kubeval"
license=('apache')
provides=('kubeval')
conflicts=('kubeval' 'kubeval-git')
source=(https://github.com/garethr/kubeval/releases/download/$pkgver/kubeval-linux-amd64.tar.gz)
sha256sums=('8b1b8c63df9ee3206113a3352e07474ea071610cfacf40a64db74c56e163f1e2')


package() {
    install -Dm 755 "$srcdir/kubeval" "$pkgdir/usr/bin/kubeval"
}
