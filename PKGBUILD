# Maintainer of AUR package: Raansu <gero3977@gmail.com>
# Maintainer of splitviewfuse project: seiferma <https://github.com/seiferma>
pkgname=splitviewfuse
pkgver=0.2.2
pkgrel=1
pkgdesc="A view on a given directory that splits large files into segments implemented as FUSE file system. An additional filesystem that merges such segments into regular files is included as well. AUR package by Raansu, project by seiferma"
arch=('any')
url="https://github.com/seiferma/splitviewfuse"
license=('MIT')
depends=('fuse' 'python2-fusepy')
makedepends=('python2' 'python2-setuptools')
provides=('splitviewfuse' 'unionviewfuse')
conflicts=('splitviewfuse-git' 'splitviewfuse' 'unionviewfuse')
source=("https://github.com/seiferma/splitviewfuse/archive/v$pkgver.tar.gz")
sha256sums=('dae6806c227d06296f251237d89ad6886a567681842b948fd8f6500cc96a0108')

package() {
   cd "${srcdir}/${pkgname}-${pkgver}" 
   python2 setup.py install --root="${pkgdir}/" --optimize=1
}
