# Maintainer: Maciej Dems <maciej.dems@p.lodz.pl>
pkgname=plask
pkgver=2021.12.12
pkgrel=1
pkgdesc="Photonic LAser Simulation Kit: a comprehensive tool for numerical
analysis of broad range of physical phenomena in photonic devices"
url="https://plask.app"
arch=('x86_64')
license=('custom')
depends=('boost-libs' 'expat' 'openmp' 'intel-mkl' 'lapack' 'qt5-declarative' 'qt5-tools'
         'python-numpy' 'python-matplotlib' 'python-lxml' 'python-yaml' 'pyside2' 'libx11')
optdepends=('python-h5py: for saving results to files'
            'python-scipy: for scientific tools'
            'python-jedi: for Python hints in GUI'
            'python-paramiko: for remote computation launching'
            'ipython: for interactive shell')
source=("plask-$pkgver.tar.zst::https://get.plask.app/packages/plask-$pkgver-1-x86_64.pkg.tar.zst")
sha256sums=('8a55990af8cc19948aeecd9b69f7adf121d8054a79367ded8061b61c9956bfc8')
noextract=("plask-$pkgver.tar.zst")

package() {
    cd "$pkgdir"
    tar xf "$srcdir/plask-$pkgver.tar.zst" --zstd --exclude='.*'
}
