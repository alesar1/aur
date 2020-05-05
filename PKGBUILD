# Maintainer: Victor <victor@xirion.net>

pkgname=rke-bin
pkgver=v1.1.1
pkgrel=1
pkgdesc='Rancher Kubernetes Engine, an extremely simple, lightning fast Kubernetes installer that works everywhere.'
arch=('x86_64')
url='https://github.com/rancher/rke'
license=('Apache')
provides=('rke')
_rke_file=rke-$pkgver
source=($_rke_file::"https://github.com/rancher/rke/releases/download/${pkgver}/rke_linux-amd64")
sha256sums=('8b28540ddd58b9c2eebfbf0c59a512205bf96ef7368853504e8cf76e524e7197')

package() {
    install -Dm 755 "$srcdir/$_rke_file" "${pkgdir}/usr/bin/rke"
}
