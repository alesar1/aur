# Maintainer: muttleyxd <mateusz [at] szychowski.it>
_gittag=commit-316
pkgname=arma3-unix-launcher-bin
pkgver=316.4921916
pkgrel=1
pkgdesc="Launcher for ArmA 3 on Linux and Mac OS X (with Steamworks SDK)"
arch=('x86_64')
url="https://github.com/muttleyxd/arma3-unix-launcher"
license=('MIT')
depends=('fmt' 'pugixml' 'qt5-base' 'qt5-svg' 'spdlog')
provides=('arma3-unix-launcher')
conflicts=('arma3-unix-launcher')
source=("https://github.com/muttleyxd/arma3-unix-launcher/releases/download/$_gittag/arma3-unix-launcher-$pkgver-$pkgrel-archlinux-x86_64.pkg.tar.zst")
sha256sums=('595d9a7d473b7136079f20d40be60dba8073fa8e58c2fdc76978e25bab9a51e3')

package() 
{
    cp -r "$srcdir/usr" "$pkgdir/usr"
}
