# Maintainer: Mirh <mirh@protonmail.ch>
# Contributor: Olaf Leidinger <oleid@mescharet.de>
# Contributor: Enihcam <gmail n a n e r i c w a n g>
#
# Get the Ubuntu tarball from https://www.codeplay.com/products/computesuite/computecpp/download
pkgname=computecpp
pkgver=1.0.2
pkgrel=1
pkgdesc="Accelerates Complex C++ Applications on Heterogeneous Compute 
Systems using Open Standards"
arch=('x86_64')
url="https://www.codeplay.com/products/computesuite/computecpp"
license=('EULA')
source=("https://computecpp.codeplay.com/downloads/computecpp-ce/${pkgver}/ubuntu-16.04-64bit.tar.gz")
sha256sums=('cbe9f0729640795dde475ea0ea292d3db736c83693573ba55e6d5901e3defb78')
depends=(ncurses5-compat-libs)
options=(!strip)

package() {
    _pkgbasename=ComputeCpp-CE-${pkgver}-Ubuntu-16.04-${arch}
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
