# Maintainer: jbpratt <jbpratt78 at gmail dot com>

pkgname=crc-bin
pkgver=1.39.0
pkgrel=1
pkgdesc="Red Hat CodeReady Containers is a tool that manages a local OpenShift 4.x cluster optimized for testing and development purposes"
url=https://github.com/code-ready/crc
arch=("x86_64")
provides=("crc")
depends=("libvirt" "networkmanager")
license=("APACHE")
options=(!strip)

source_x86_64=("https://developers.redhat.com/content-gateway/file/pub/openshift-v4/clients/crc/${pkgver}/crc-linux-amd64.tar.xz")
sha256sums_x86_64=("9aac85fb4b16bfc80d18f57fef18003a1d7f96b57357b87b3114bdb9a9219d7d")

package() {
  cd "${srcdir}/${pkgname%-*}-linux-${pkgver}-amd64"
  install -Dm755 crc "${pkgdir}/usr/bin/crc"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname%-*}/LICENSE"
}
