# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

_buildver=0.10.0-dev.2977+7d2e14267

pkgname=zig-dev-bin
pkgver=20220712
pkgrel=1
pkgdesc="A general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software"
arch=('x86_64')
url="https://ziglang.org/"
license=('MIT')
options=('!strip')
provides=('zig')
conflicts=('zig')
source=(
  "https://ziglang.org/builds/zig-linux-x86_64-${_buildver}.tar.xz"
)
sha256sums=(
  '22faf5006338de0682bb4c62dc0f73e4df5fb837ecaff21570e4ed39dc63b9c1'
)

package() {
  cd "${srcdir}/zig-linux-x86_64-${_buildver}"
  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/usr/lib/zig"
  cp -R lib "${pkgdir}/usr/lib/zig/lib"
  install -D -m755 zig "${pkgdir}/usr/lib/zig/zig"
  ln -s /usr/lib/zig/zig "${pkgdir}/usr/bin/zig"
  install -D -m644 docs/langref.html "${pkgdir}/usr/share/doc/zig/langref.html"
  cp -R docs/std "${pkgdir}/usr/share/doc/zig/"
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/zig/LICENSE"
}
