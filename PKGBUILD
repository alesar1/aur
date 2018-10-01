# Maintainer: colemickens <cole.mickens@gmail.com>

pkgname=kubelet-bin
pkgdesc="Kubernetes.io kubelet binary"
pkgver=1.11.2
pkgrel=1
arch=('x86_64' 'armv7l' 'armv7h' 'aarch64')
url="http://kubernetes.io"
license=('apache')
conflicts=('kubernetes')
source_x86_64=(
  'https://packages.cloud.google.com/apt/pool/kubelet_1.11.2-00_amd64_7537d39713573280e1cc245915fc7565ac49d041fbd0e0515daa1ea2ac659dbb.deb'
)
source_armv7l=(
  'https://packages.cloud.google.com/apt/pool/kubelet_1.11.2-00_armhf_f882dcdfd44ab0a3b8c365fdde3cfd58260e9cc6e6d3530fdae9734416b5ad31.deb'
)
source_armv7h=(
  'https://packages.cloud.google.com/apt/pool/kubelet_1.11.2-00_armhf_f882dcdfd44ab0a3b8c365fdde3cfd58260e9cc6e6d3530fdae9734416b5ad31.deb'
)
source_aarch64=(
  'https://packages.cloud.google.com/apt/pool/kubelet_1.11.2-00_arm64_8bd7acd0f63d4653994b2e423a847e0838dae823da48a069f48296f63b460b5e.deb'
)
sha256sums_x86_64=(
  '7537d39713573280e1cc245915fc7565ac49d041fbd0e0515daa1ea2ac659dbb'
)
sha256sums_armv7l=(
  'f882dcdfd44ab0a3b8c365fdde3cfd58260e9cc6e6d3530fdae9734416b5ad31'
)
sha256sums_armv7h=(
  'f882dcdfd44ab0a3b8c365fdde3cfd58260e9cc6e6d3530fdae9734416b5ad31'
)
sha256sums_aarch64=(
  '8bd7acd0f63d4653994b2e423a847e0838dae823da48a069f48296f63b460b5e'
)

package() {
  tar -vxf data.tar.xz
  install -D -m0644 "./lib/systemd/system/kubelet.service" "${pkgdir}/usr/lib/systemd/system/kubelet.service"
  install -D -m0755 "./usr/bin/kubelet" "${pkgdir}/usr/bin/kubelet"
}
