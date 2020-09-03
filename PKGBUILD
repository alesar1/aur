# Maintainer: Songtronix <contact@songtronix.com>
pkgname=airshipper
pkgver=0.4.0
pkgrel=2
pkgdesc="The official launcher for Veloren - an open-world, open-source multiplayer voxel RPG"
arch=('x86_64' 'i686')
url='https://www.songtronix.com/'
license=('GPL3')
depends=('libxcb' 'gcc-libs')
optdepends=('vulkan-icd-loader: GUI support'
            'vulkan-driver: GUI support')
provides=()
conflicts=("$pkgname-git")
source=(
    "https://github.com/Songtronix/Airshipper/releases/download/v${pkgver}/airshipper-linux.zip"
    'airshipper.desktop'
    'veloren.png'
)
noextract=('airshipper.desktop' 'veloren.png')
sha512sums=('7c53e17a2ef2aa0e0e2addb330b2bc239c3db4a69847d05a7baec6b95790a06c494e1644de9decdc934b8bdcdc94634cf6297e70ad06c7d43e8e99162f2e7b82'
            '76b8d61db797730837852ee8b8526532e0bcec0ed4a9d43ae7f93ebb4ad22afd4ea55445638e598f581b32e05dcd04a1435a774fd36345760cad8084a72560de'
            'b5e5cbf28ab0e335f5a0fc93511fc9936360432a36e35cc876761601abacf257299deb0af6b3d9081143b700f6663c4f603970155dd4dacedb7a9672cde1dc94')
package() {
    install -D "$srcdir/airshipper" -t "$pkgdir/usr/bin/"
    install -Dm 644 "$srcdir/veloren.png" -t "$pkgdir/usr/share/pixmaps/"
    install -D "$srcdir/airshipper.desktop" -t "$pkgdir/usr/share/applications"
}
