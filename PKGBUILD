# Maintainer: David Rodriguez <dissonant.tech@gmail.com>
# Maintainer: Peter Smit <peter@smitmail.eu> 

pkgname=argo-bin
pkgver=3.1.12
pkgrel=1
pkgdesc="Argo Workflows: Get stuff done with Kubernetes"
arch=('x86_64')
url="https://github.com/argoproj/argo-workflows"
license=('Apache')
source=("argo_$pkgver.gz::https://github.com/argoproj/argo-workflows/releases/download/v$pkgver/argo-linux-amd64.gz")

package() {
  install -Dm755 "argo_$pkgver" "$pkgdir/usr/bin/argo"
  $pkgdir/usr/bin/argo completion zsh > argo.zsh
  $pkgdir/usr/bin/argo completion bash > argo.bash
  install -Dm644 argo.zsh "$pkgdir/usr/share/zsh/site-functions/_argo"
  install -Dm644 argo.bash "$pkgdir/usr/share/bash-completion/completions/argo"
}

md5sums=('4cca43adb31aeef08b78ef7721e0d690')
