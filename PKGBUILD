# Maintainer: Sefa Eyeoglu <contact@scrumplex.net>
# Maintainer: txtsd <code@ihavea.quest>

pkgname=prismlauncher-qt5-bin
pkgver=5.1
pkgrel=1
pkgdesc="Minecraft launcher with ability to manage multiple instances."
arch=('x86_64')
url="https://prismlauncher.org"
license=('GPL3')
depends=('java-runtime' 'libgl' 'qt5-base' 'qt5-svg' 'qt5-imageformats' 'zlib' 'hicolor-icon-theme')
provides=('prismlauncher' 'prismlauncher-qt5')
conflicts=('prismlauncher' 'prismlauncher-qt5')
optdepends=('java-runtime=8: support for Minecraft versions < 1.17'
            'java-runtime=17: support for Minecraft versions >= 1.17')
source=("https://github.com/PrismLauncher/PrismLauncher/releases/download/${pkgver}/PrismLauncher-Linux-${pkgver}.tar.gz")
noextract=("PrismLauncher-Linux-${pkgver}.tar.gz")
sha256sums=('6748441a39039fc448330b97e1b593e265063f2c68ddd6db483e2f3d4e9050a8')

package() {
    install -d "$pkgdir/usr"
    tar -C "$pkgdir/usr" -xvf PrismLauncher-Linux-${pkgver}.tar.gz
    chown -R root:root "$pkgdir/usr"  # fils in tarball are not owned by root
}
