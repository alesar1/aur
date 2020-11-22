# Maintainer: Librewish <librewish@gmail.com>
# Contributer : Guinux <nuxgui@gmail.com>

pkgname=mhwd-nvidia
pkgver=455.45.01
pkgrel=1
pkgdesc="mhwd-nvidia pci id"
arch=("any")
url="https://garudalinux.org/"
license=('GPL2')
source=('mhwd-nvidia')
makedepends=('nvidia-dkms' 'nvidia-utils')
sha256sums=('ddffe7033abf38253b50d4c02d780a270f79089bbe163994e00a4d7c91d64f0e')
provides=('mhwd-nvidia')
package() {

    install -d -m755 "$pkgdir/var/lib/mhwd/ids/pci/"

    # Generate mhwd database
    sh -e $srcdir/mhwd-nvidia \
    /usr/share/doc/nvidia/README \
    /usr/src/nvidia-$pkgver/nvidia/nv-kernel.o_binary \
    > $pkgdir/var/lib/mhwd/ids/pci/nvidia.ids
}
