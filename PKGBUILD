# Maintainer: Mirh <mirh@protonmail.ch>
# Contributor: Olaf Leidinger <oleid@mescharet.de>
#
# Get the Ubuntu tarball from https://www.codeplay.com/products/computesuite/computecpp/download
pkgname=computecpp
pkgver=0.7.0
pkgrel=1
pkgdesc="Accelerates Complex C++ Applications on Heterogeneous Compute 
Systems using Open Standards"
arch=('x86_64')
url="https://www.codeplay.com/products/computesuite/computecpp"
license=('EULA')
source=("local://ComputeCpp-CE-${pkgver}-Ubuntu.16.04-64bit.tar.gz")
sha256sums=('ffa3afdcdd5d87359195371d3066c551953fbd9d07faf3cb4d68f05bb9afee46')
depends=(ncurses5-compat-libs)
options=(!strip)

package() {
    _pkgbasename=ComputeCpp-CE-${pkgver}-Ubuntu-16.04-64bit
    cd "$srcdir"
    mkdir -p "$pkgdir/opt"
    mkdir -p "$pkgdir/usr/bin"
    mkdir -p "$pkgdir/etc/ld.so.conf.d"

    mv ${_pkgbasename} "$pkgdir/opt"

    ln -s /opt/${_pkgbasename}/bin/compute++ "$pkgdir/usr/bin"
    ln -s /opt/${_pkgbasename}/bin/computecpp_info "$pkgdir/usr/bin"
    ln -s /opt/${_pkgbasename} "$pkgdir/opt/ComputeCpp-CE"

    echo /opt/${_pkgbasename}/lib > "$pkgdir/etc/ld.so.conf.d/computecpp.conf"
}
