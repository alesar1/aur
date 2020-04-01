# Maintainer: Cédric Connes <cedric.connes@gmail.com>

pkgname=chisel-tunnel
pkgver=1.4.0
pkgrel=1
pkgdesc="A fast TCP tunnel over HTTP"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/jpillora/chisel"
license=('MIT')
source=("README_${pkgver}.md::https://raw.githubusercontent.com/jpillora/chisel/v$pkgver/README.md"
        "users_${pkgver}.json::https://raw.githubusercontent.com/jpillora/chisel/v$pkgver/example/users.json")
source_i686=("chisel_${pkgver}_i686.gz::https://github.com/jpillora/chisel/releases/download/v$pkgver/chisel_${pkgver}_linux_386.gz")
source_x86_64=("chisel_${pkgver}_x86_64.gz::https://github.com/jpillora/chisel/releases/download/v$pkgver/chisel_${pkgver}_linux_amd64.gz")
source_armv6h=("chisel_${pkgver}_armv6h.gz::https://github.com/jpillora/chisel/releases/download/v$pkgver/chisel_${pkgver}_linux_armv6.gz")
source_armv7h=("chisel_${pkgver}_armv7h.gz::https://github.com/jpillora/chisel/releases/download/v$pkgver/chisel_${pkgver}_linux_armv7.gz")
source_aarch64=("chisel_${pkgver}_aarch64.gz::https://github.com/jpillora/chisel/releases/download/v$pkgver/chisel_${pkgver}_linux_arm64.gz")
sha256sums=('381a32de53068aa1db79a3e7454c1c670e5c4f57fa0aca7d690e9f6622b72fd9'
            'b3cb23ef88fcf4f39ee057289e7d2a92a03b2f33ec05caa4d70cd15a2ca60acd')
sha256sums_i686=('d3e8378618c05eab2159113af6737a1c6b49f982ebe2eb1ab7e9b52e5ce1b330')
sha256sums_x86_64=('992bbf36c83f56d459a79cd34638f7ba932ad4a313eb9a63c8a8cf111ef9497b')
sha256sums_armv6h=('5a89f9df7621ef8eac8832f7397c55559d71cee04a798474683e7e0019f5ee49')
sha256sums_armv7h=('26e511920655fd8129d9d192f9ab2801a23c379bd4690bc1d71b5b94a9e99310')
sha256sums_aarch64=('84e1091e97d33b0b8ae7c600f649e0cbaf00c1b7650d965ba4ef903eee709550')

prepare() {
  # Temporary, until this bug gets fixed: https://bugs.astron.com/view.php?id=112
  zcat "chisel_${pkgver}_$CARCH.gz" > "chisel_${pkgver}_$CARCH"
}

package() {
  install -D -m755 "chisel_${pkgver}_$CARCH" "$pkgdir/usr/bin/chisel"
  install -D -m644 "README_${pkgver}.md" "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -D -m644 "users_${pkgver}.json" "$pkgdir/usr/share/doc/$pkgname/users.json"
  sed -n '/^#### MIT License$/,$ {s/^#### //; p}' "README_${pkgver}.md" > LICENSE
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
