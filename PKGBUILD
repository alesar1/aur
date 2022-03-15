# Maintainer: jbpratt <jbpratt78 at gmail dot com>

pkgname=crc-bin
pkgver=2.0.1
pkgrel=2
pkgdesc="Red Hat CodeReady Containers is a tool that manages a local OpenShift 4.x cluster optimized for testing and development purposes"
url=https://github.com/code-ready/crc
arch=("x86_64")
provides=("crc")
depends=("libvirt" "networkmanager")
license=("APACHE")

source_x86_64=("https://developers.redhat.com/content-gateway/file/pub/openshift-v4/clients/crc/${pkgver}/crc-linux-amd64.tar.xz")
sha256sums_x86_64=("26f2df1f867b85ab3e5886b924153265b7e433a6d42f90e3aeb88dbd124dadfe")

package() {
  cd "${srcdir}/${pkgname%-*}-linux-${pkgver}-amd64"
  install -Dm755 crc "${pkgdir}/usr/bin/crc"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname%-*}/LICENSE"
}
