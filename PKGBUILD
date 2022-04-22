# Maintainer: George Raven <GeorgeRavenCommunity PLUS kubeadmbin AT pm DOT me>
# Contributor: Paul Nicholson <brenix AT gmail DOT com>
# Contributor: Wes Jackson <icebal DOT 7 AT gmail DOT com>

pkgname=kubeadm-bin
pkgdesc="Kubernetes.io kubeadm binary"
pkgver=1.23.6
pkgrel=1
arch=('x86_64' 'armv7l' 'armv7h' 'aarch64')
url="http://kubernetes.io"
license=('apache')
depends=('kubelet-bin' 'conntrack-tools' 'iptables' 'iproute2' 'util-linux')
conflicts=('kubeadm')
provides=('kubeadm')
source=(
  "10-kubeadm.conf"
)
b2sums=('074744d327227c32661befcff7651209438090fbd75890ad3b5a32ada1fbdf8901dbd132c7093ed353901f1ea7505c97089a5a89a104f57cb7f53a342eecc7e8')

case "$CARCH" in
  x86_64) _pkgarch="amd64"
    b2sums+=('52e25d205960a3c3081a04df9920f98632be16673b4f5afda419623496cca0ab96d0523b33a3459d35cbdb7fb8d5856e268966638163d09132e54462a00f09ae')
    ;;
  arm*) _pkgarch="arm"
    b2sums+=('534a3f530226e73c609ca29fed5f0bbe3924d39fbb8cd3b6521ca74907ceb15f1898baab32c9b29d0246a2fd4641c035cd14285a0f5de7045815be07c8a4a4ea')
    ;;
  aarch64) _pkgarch="arm64"
    b2sums+=('43f206aed5b6492d81c1fb9c3b5aa3dede2db8dcd163f5a2629cd7bb04ffb94317d79eb727b8a103ef833b71176b861999942732cf7d22b86008f8f2505e6fa4')
    ;;
esac

source+=(${pkgname}-${pkgver}-${_pkgarch}::"https://storage.googleapis.com/kubernetes-release/release/v${pkgver}/bin/linux/${_pkgarch}/kubeadm")

package() {
  install -D -m0644 "10-kubeadm.conf" "${pkgdir}/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf"
  install -D -m0755 "${pkgname}-${pkgver}-${_pkgarch}" "${pkgdir}/usr/bin/kubeadm"
}
