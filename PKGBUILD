# Maintainer: Yamboy1 <yamboyd1@gmail.com>
# Contributor: Alexander Cardosi <alexanderdcardosi@gmail.com>
pkgname=deno-bin
_pkgname=deno
pkgdesc="A secure TypeScript runtime on V8"
pkgver=0.35.0
pkgrel=1
arch=('x86_64')
license=('MIT')
url='http://deno.land/'
provides=('deno')
makedepends=('binutils')
source_x86_64=("${_pkgname}.gz::https://github.com/denoland/deno/releases/download/v${pkgver}/${_pkgname}_linux_x64.gz")
sha256sums_x86_64=('dd4641ab9a883d8e1de1e35bfe2d0619bb91ee9510678256aae2eda9da9d9340')

prepare() {
  gunzip -d --force "${_pkgname}.gz"
}

package() {
  mkdir -p "$pkgdir"/usr/bin
  install -Dm0755  "$_pkgname" "$pkgdir"/usr/bin/
  rm -f ../"$_pkgname".gz || true
  rm -f ../../"$_pkgname".gz || true

}
