# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgname=kubectl-gke-regular-bin
pkgver=v1.17.14
pkgrel=1
pkgdesc='Kubernetes.io client binary, compatible with the GKE version from the regular channel'
provides=("kubectl=v1.17.14")
conflicts=(kubectl kubectl-bin)
arch=(i686 x86_64 armv5 armv6h armv7h aarch64 )
url="https://github.com/kubernetes/kubectl"
license=('Apache-2.0')

package() {
  install -Dm755 "$srcdir/kubectl-v1.17.14" "$pkgdir/usr/bin/kubectl"
}

source_i686=('kubectl-v1.17.14::https://storage.googleapis.com/kubernetes-release/release/v1.17.14/bin/linux/386/kubectl')
sha256sums_i686=('b6eeacc26c3267923936f78bb2597709960844300c4141a4e1319a83a9cf3f6d')
source_x86_64=('kubectl-v1.17.14::https://storage.googleapis.com/kubernetes-release/release/v1.17.14/bin/linux/amd64/kubectl')
sha256sums_x86_64=('1fea666b5c8f733b400610e3e7413df488ac329b3a50fcf78af34778911ee5ff')
source_armv5=('kubectl-v1.17.14::https://storage.googleapis.com/kubernetes-release/release/v1.17.14/bin/linux/arm/kubectl')
sha256sums_armv5=('ee32c0700749d9129b4e8cc3fd220e4ea0057c14f79635b6fbd37835f0714900')
source_armv6h=('kubectl-v1.17.14::https://storage.googleapis.com/kubernetes-release/release/v1.17.14/bin/linux/arm/kubectl')
sha256sums_armv6h=('ee32c0700749d9129b4e8cc3fd220e4ea0057c14f79635b6fbd37835f0714900')
source_armv7h=('kubectl-v1.17.14::https://storage.googleapis.com/kubernetes-release/release/v1.17.14/bin/linux/arm/kubectl')
sha256sums_armv7h=('ee32c0700749d9129b4e8cc3fd220e4ea0057c14f79635b6fbd37835f0714900')
source_aarch64=('kubectl-v1.17.14::https://storage.googleapis.com/kubernetes-release/release/v1.17.14/bin/linux/arm64/kubectl')
sha256sums_aarch64=('1cb44aa32bf95203ea12018fd22e490a4c7c4c67219519b779cc493be3ec9e2e')
