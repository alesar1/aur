# Maintainer: zer0def <zer0def@github>
pkgname=cloud-hypervisor
pkgver=27.0
pkgrel=1
pkgdesc="A Rust-VMM based cloud hypervisor from Intel"
url="https://github.com/cloud-hypervisor/cloud-hypervisor"
arch=('x86_64' 'aarch64')
license=('Apache:2.0')
optdepends=(
  'virtiofsd: rust implementation of virtiofsd'
  'qemu-headless: for /usr/lib/qemu/virtiofsd'
)
makedepends=('rust')
source=("https://github.com/cloud-hypervisor/cloud-hypervisor/archive/v${pkgver}.tar.gz")
sha512sums=('e9ae7b584d72725f4bf385248cf6643026c9fc89d4335b1efd53ef959f3a93e9a12c95ff26ee9f43cef65cdb61f6f8b4fcd3a9cc46b2c2cc0f8b01f95968be7c')
b2sums=('91a4f6a44f83b4938b7f52b34f06bb4e9c761ed021f8a75f69d0227b331ea04bfb1c888d2e8a4b0e5eb83a866185e5eaea843662f1b44e031ce7fe2246fd6d70')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  cargo build --release --locked
}

package() {
  install -Dm755 -t "${pkgdir}/usr/bin" \
    "${srcdir}/${pkgname}-${pkgver}/target/release/ch-remote" \
    "${srcdir}/${pkgname}-${pkgver}/target/release/cloud-hypervisor"
  #install -Dm755 -t "${pkgdir}/usr/lib/cloud-hypervisor" \
  #  "${srcdir}/${pkgname}-${pkgver}/target/release/vhost_user_blk" \
  #  "${srcdir}/${pkgname}-${pkgver}/target/release/vhost_user_fs" \
  #  "${srcdir}/${pkgname}-${pkgver}/target/release/vhost_user_net"
}
