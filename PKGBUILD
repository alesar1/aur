# vim: ts=2 sts=2 sw=2 et ft=sh
# Maintainer: Matt Rickard <mrick@google.com> 

pkgname=minikube
pkgver=0.11.0
pkgrel=1
pkgdesc="Minikube is a tool that makes it easy to run Kubernetes locally"
url="https://github.com/kubernetes/minikube"
license=('Apache')
arch=('x86_64')
depends=(
  'virtualbox'
  'net-tools'
)
optdepends=(
  'kubectl-bin: to manage the cluster'
)
makedepends=()

source=(minikube_$pkgver::https://storage.googleapis.com/minikube/releases/v$pkgver/minikube-linux-amd64)
sha512sums=('93f3235db5b9fc464c9fb62b6de47744ccbbd5cd16f80b6bbaf1a46ea774b9edf67d35cf4b3478e1a9bfaedb9976fc44d453a93967e6954e9b8ee991b144bf06')

package() {
  cd "$srcdir"
  install -d "$pkgdir/usr/bin"
  install -m755 minikube_$pkgver "$pkgdir/usr/bin/minikube"
}
