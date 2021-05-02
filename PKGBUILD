# Maintainer: Michael Riegert <michael at eowyn net>

pkgname=fpga-toolchain-bin
pkgver=20210502
pkgrel=1
pkgdesc="Nightly builds of open-source FPGA tools"
arch=('x86_64')
url="https://github.com/open-tool-forge/fpga-toolchain"
license=('GPL3')
depends=('python' 'bash' 'rsync')
conflicts=(
    'yosys'
    'ghdl-yosys-plugin'
    'ghdl'
    'trellis'
    'icestorm'
    'nextpnr'
    'dfu-util'
    'ecpprog'
    'openfpgaloader'
    'boolector'
    'symbiyosys'
    'z3'
    'yices'
    'prjtrellis'
    'prjtrellis-db'
    )
source_x86_64=($url/releases/download/nightly-$pkgver/fpga-toolchain-linux_x86_64-nightly-$pkgver.tar.xz
    path.install)
sha256sums_x86_64=('4c566b0aa6d2b63281a47baec4e350ad2576125cb1720b1b01edf224c1e95f38'
                   'e7ed3de09af8a6353ae2627284e597ae37278623e206a26f16aeb9db0a35aaea')
install='path.install'
package() {
    mkdir -p "$pkgdir/opt/fpga-toolchain/bin" "$pkgdir/opt/fpga-toolchain/include" "$pkgdir/opt/fpga-toolchain/lib/ghdl" "$pkgdir/opt/fpga-toolchain/share"
    rsync -a "$srcdir/fpga-toolchain/" "$pkgdir/opt/fpga-toolchain/" --chmod=755 --exclude VERSION
    chmod 644 "$pkgdir/opt/fpga-toolchain/lib/libghdl.a"
}
