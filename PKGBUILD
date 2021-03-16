# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgname=kubectl-gke-stable-bin
pkgver=v1.17.17
pkgrel=1
pkgdesc='Kubernetes.io client binary, compatible with the GKE version from the stable channel'
provides=("kubectl=v1.17.17")
conflicts=(kubectl kubectl-bin)
arch=(i686 x86_64 armv5 armv6h armv7h aarch64 )
url="https://github.com/kubernetes/kubectl"
license=('Apache-2.0')

package() {
  install -Dm755 "$srcdir/kubectl-v1.17.17" "$pkgdir/usr/bin/kubectl"
}

source_i686=('kubectl-v1.17.17::https://storage.googleapis.com/kubernetes-release/release/v1.17.17/bin/linux/386/kubectl')
sha256sums_i686=('1c4a468a7ec0c7b4ff7d8d17acf5a3aebb2bc97405f2d78770df0fed24e7351b')
source_x86_64=('kubectl-v1.17.17::https://storage.googleapis.com/kubernetes-release/release/v1.17.17/bin/linux/amd64/kubectl')
sha256sums_x86_64=('8329fac94c66bf7a475b630972a8c0b036bab1f28a5584115e8dd26483de8349')
source_armv5=('kubectl-v1.17.17::https://storage.googleapis.com/kubernetes-release/release/v1.17.17/bin/linux/arm/kubectl')
sha256sums_armv5=('824e6ee1257628e38e7f4b140682c0c2e9b97102014c1b540469491f61187fa4')
source_armv6h=('kubectl-v1.17.17::https://storage.googleapis.com/kubernetes-release/release/v1.17.17/bin/linux/arm/kubectl')
sha256sums_armv6h=('824e6ee1257628e38e7f4b140682c0c2e9b97102014c1b540469491f61187fa4')
source_armv7h=('kubectl-v1.17.17::https://storage.googleapis.com/kubernetes-release/release/v1.17.17/bin/linux/arm/kubectl')
sha256sums_armv7h=('824e6ee1257628e38e7f4b140682c0c2e9b97102014c1b540469491f61187fa4')
source_aarch64=('kubectl-v1.17.17::https://storage.googleapis.com/kubernetes-release/release/v1.17.17/bin/linux/arm64/kubectl')
sha256sums_aarch64=('6ffc1749adbda24474e67678fcc4a1e704c4e1b9354508965bbab3578bd801ba')
