# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgname=kubectl-gke-rapid-bin
pkgver=v1.19.8
pkgrel=1
pkgdesc='Kubernetes.io client binary, compatible with the GKE version from the rapid channel'
provides=("kubectl=v1.19.8")
conflicts=(kubectl kubectl-bin)
arch=(i686 x86_64 armv5 armv6h armv7h aarch64 )
url="https://github.com/kubernetes/kubectl"
license=('Apache-2.0')

package() {
  install -Dm755 "$srcdir/kubectl-v1.19.8" "$pkgdir/usr/bin/kubectl"
}

source_i686=('kubectl-v1.19.8::https://storage.googleapis.com/kubernetes-release/release/v1.19.8/bin/linux/386/kubectl')
sha256sums_i686=('2d0c5be4ecc37f3540d609adc15614260c50790166aa4905109abeeeecda4b80')
source_x86_64=('kubectl-v1.19.8::https://storage.googleapis.com/kubernetes-release/release/v1.19.8/bin/linux/amd64/kubectl')
sha256sums_x86_64=('a0737d3a15ca177816b6fb1fd59bdd5a3751bfdc66de4e08dffddba84e38bf3f')
source_armv5=('kubectl-v1.19.8::https://storage.googleapis.com/kubernetes-release/release/v1.19.8/bin/linux/arm/kubectl')
sha256sums_armv5=('4d3cba1a8005eabbf939577253cdf593be575d0e73ac47acc5090049d8a96781')
source_armv6h=('kubectl-v1.19.8::https://storage.googleapis.com/kubernetes-release/release/v1.19.8/bin/linux/arm/kubectl')
sha256sums_armv6h=('4d3cba1a8005eabbf939577253cdf593be575d0e73ac47acc5090049d8a96781')
source_armv7h=('kubectl-v1.19.8::https://storage.googleapis.com/kubernetes-release/release/v1.19.8/bin/linux/arm/kubectl')
sha256sums_armv7h=('4d3cba1a8005eabbf939577253cdf593be575d0e73ac47acc5090049d8a96781')
source_aarch64=('kubectl-v1.19.8::https://storage.googleapis.com/kubernetes-release/release/v1.19.8/bin/linux/arm64/kubectl')
sha256sums_aarch64=('8f037ab2aa798bbc66ebd1d52653f607f223b07813bcf98d9c1d0c0e136910ec')
