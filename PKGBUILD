# Maintainer: Zach Hoffman <zrhoffman@apche.org>
pkgname=f5fpc
pkgver=7221.2022.0411.1
pkgrel=1
pkgdesc='Command-line VPN client using FastPPP to connect to F5Networks BIG-IP APM 13.0'
arch=(x86_64 armv7h)

source=('LICENSE')
b2sums=('c864e69799ffc4c13bf8af7d76bcc8beed195d9a41acb01d459aaa0c3cd5bae75290ef7be1fa6a0bfd6472e1c3f8df3a7f5d59767861ded0dc4a373a3ead447c')
sha512sums=('f2ca5fd5052b307c147ac315eb0cda45a6eaf071de30eef6841c74dac239c2d3bc5a0e1513e4bbd5b3057384676b346428609cb366c3d1086acda982acde7a61')

source_x86_64=("linux_f5cli-${pkgver}-${pkgrel}.${CARCH}.deb::https://vpn.f5.com/public/download/linux_f5cli.${CARCH}.deb")
b2sums_x86_64=('14f6611ca8051d8599f89ac718ac9cf2fa35f1614fa82f09dc4bfd94a4b0e043e3b51598b5b0d582a88d5183b14145a1807e63806c3b23793fbcc399101d27b3')
sha512sums_x86_64=('4b7290c1c4a75d4603a608b53d706950d7b7453e5fb828ac360d7c86727b7e8f37e893cad0be3596d8bed1f7c15765da7148cb2b49c1cfe8737f510bc2b30a98')

source_armv7h=("linux_f5cli-${pkgver}-${pkgrel}.${CARCH}.deb::https://vpn.f5.com/public/download/linux_f5cli.armhf.deb")
b2sums_armv7h=('133ab0ef4853979216d84423219672068b507db2187abde7374738ddd23a3f37a1e69fc848709a848c9338ab2210a6d7af83e288b153746f493defd6b89f15f1')
sha512sums_armv7h=('45cca5ba0accd14f9a18f1da6533fc233aa35e0895020873b5770921853e0306f9e57df96ba812b29adbe541f4713838ffe0d0ee52e08ea0ddd804d0c379c173')

depends=(openssl)
makedepends=(tar)
provides=("${pkgname}" svpn)
url='https://techdocs.f5.com/kb/en-us/products/big-ip_apm/manuals/product/apm-client-configuration-11-4-0/4.html'
license=('commercial')

package() {
  tar -xf data.tar.gz
  install -dm755 "${pkgdir}/usr/bin/"

  rm -r "${srcdir}/usr/local/bin"

  if [[ "$CARCH" == armv7h ]]; then
    suffix=armhf
  else
    suffix="$CARCH"
  fi

  chmod u+s "${srcdir}/usr/local/lib/F5Networks/SSLVPN/svpn_${suffix}"
  ln -s "/usr/local/lib/F5Networks/SSLVPN/svpn_${suffix}" "${pkgdir}/usr/bin/svpn"
  ln -s "/usr/local/lib/F5Networks/${pkgname}_${suffix}" "${pkgdir}/usr/bin/${pkgname}"

  cp -a usr "${pkgdir}"
}
