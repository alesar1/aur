# Maintainer: mickaelca <contact@mickael-caudrelier.fr>
pkgname=kubescape-bin
pkgver=2.0.171
pkgrel=1
pkgdesc="kubescape is the first tool for testing if Kubernetes is deployed securely as defined in Kubernetes Hardening Guidance by to NSA and CISA"
provides=('kubescape')
arch=('x86_64')
url="https://github.com/armosec/kubescape"
license=("APACHE")
source=(
$pkgname-$pkgver::https://github.com/armosec/kubescape/releases/download/v${pkgver}/kubescape-ubuntu-latest
)
sha256sums=(
2b3af2d41b7df9e1d1aca8b53ad30853b49c767f227696afe3a7836d4e21dfea
)

build() {
  cd "$srcdir"
}

package () {
  cd "$pkgdir"

  mkdir -p "usr/bin"

  install -Dm755 "$srcdir/$pkgname-$pkgver" "$pkgdir/usr/bin/${provides}"
}
