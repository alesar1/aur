# Maintainer: zer0def <zer0def@github>
pkgname=cloud-hypervisor-bin
pkgver=0.10.0
pkgrel=1
pkgdesc="A Rust-VMM based cloud hypervisor from Intel (binary source)"
url="https://github.com/cloud-hypervisor/cloud-hypervisor"
arch=('x86_64')
license=('Apache:2.0')
depends=(
  'qemu'  # for /usr/lib/qemu/virtiofsd
)
provides=('cloud-hypervisor')
conflicts=('cloud-hypervisor')
source=(
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/ch-remote"
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/cloud-hypervisor"
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/cloud-hypervisor-static"
)
sha512sums=(
  0d767d784baba86fd8e4fe9c8465e5e2c5cc32b3f248a87b01c7f8ca491ded26c85319dd09e7329b302b2be25c25ef87e2aa6b17bb14c6b0f50e8a24dd4b66f1
  028b2c9029615cca42bb9f92eb97aee72db072c7c4915c192eea092d440cbcb3c44711ecf77172fb673638838e087535a2641d8d38334898c8886478f5b8f8f6
  89a235d972e2739464b7e277439f0e6c173d9887e25d04ed015974787c09a86fab9443095ea82f8039245747c8691cd4380adbe98e694189d654cb89da0f8d7b
)
b2sums=(
  5987e200e552f4e80b4e7e18a6aaa1b830b9f8e4a0546afaf9fc95bda88c68d4a4373d650ac2bef2ea6bad1463f45f91cf55d2e7f0c179f20c0a862f008e2daf
  26fbc475084d1e0dd146d518b360fe7bdeee926e06939b6fb3bdce76a47065b2a293c5257efdf5a2a0fe25350bfff5e8c2774700ee8695bcf29ba552093b01f7
  a77bf9be30ef72097eb399acf3bcfbd676277727bbc07fd235ff0feb06feaf196d90cf129b11a43d2da6bf454e7140c95b0e1c6cbcf73f6c3fe57fd5ce4ee13a
)

package() {
  install -Dm755 -t ${pkgdir}/usr/bin ${srcdir}/{ch-remote,cloud-hypervisor{,-static}}
}
