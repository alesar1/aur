# Maintainer: Genki Sky <arch at genki dot is>

pkgname=tla-toolbox
pkgver=1.5.4
pkgrel=1
pkgdesc='IDE for the TLA+ tools'
arch=('x86_64')
url='http://research.microsoft.com/en-us/um/people/lamport/tla/toolbox.html'
license=('MIT')
depends=('java-runtime')
source=("https://tla.msr-inria.inria.fr/tlatoolbox/products/TLAToolbox-$pkgver-linux.gtk.x86_64.zip")
md5sums=('ab10175522766a3af8812e45545dee1c')

package() {
    mkdir -p "$pkgdir"/usr/share/java/tla-toolbox
    cp -r toolbox/* "$pkgdir"/usr/share/java/tla-toolbox/
    mkdir -p "$pkgdir"/usr/bin
    ln -s '/usr/share/java/tla-toolbox/toolbox' "$pkgdir"/usr/bin/tla-toolbox
}
