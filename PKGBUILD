# Maintainer: zer0def <zer0def@github>
pkgname=cloud-hypervisor-bin
pkgver=0.14.1
pkgrel=1
pkgdesc="A Rust-VMM based cloud hypervisor from Intel (binary source)"
url="https://github.com/cloud-hypervisor/cloud-hypervisor"
arch=('x86_64')
license=('Apache:2.0')
optdepends=(
  'qemu-headless'  # for /usr/lib/qemu/virtiofsd
)
provides=('cloud-hypervisor')
conflicts=('cloud-hypervisor')
source=(
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/ch-remote"
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/cloud-hypervisor"
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/cloud-hypervisor-static"
)
sha512sums=(
  10936802b00526373b367d1356658be46fcdee0294e9a096ba2e57d16c8323bb34fb20abf9c63073dbbf10d219e10b16d1388c457c5585f5bf3810b4ef27b91d
  a1cfdfe41dc4b57d8b0ba24f6708948d5e9d4d81adddcfff3bd5d109a2fac2dacbf759241eb7b9ea1c1613b438d496d291503c1d6da29db438308b3da14f19b3
  5a74dab67d79e0fd6b225f3ffed4d0f2f692a7690513fe5de5c382f17fd6f6906b9016906728e654328a0abc8f2ff45924192985a5cc44389b4364399387e1ee
)
b2sums=(
  de990292e27c46711873af64011a318352ebb0f4e6489c394133361ef3ad234412152ad7cd3c9dc0bc87ccbb57b9335cb7f3500cced47898ed2f7c39ae971eac
  da31d33a1facae97472afd1456e83224ff8fbda96c41b56da1102a5ba3603695d47f618363825ac6aa15d83dd70ace5c124f9d6bb2dceda0bf778572d7786516
  6ad02a6b7aa5b3e0b71b3be4a93287e9a81f4ae598c8791fdbab885d03a3c2f6886784ae52e0354f5bc7348b6acb778da87605e9be57cfb003dbaa2d1e7246d6
)

package() {
  install -Dm755 -t "${pkgdir}/usr/bin" \
    "${srcdir}/ch-remote" \
    "${srcdir}/cloud-hypervisor" \
    "${srcdir}/cloud-hypervisor-static"
}
