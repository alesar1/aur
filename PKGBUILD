# Maintainer: Adrià Cereto i Massagué <ssorgatem@gmail.com>
# Co-Maintainer: Jonas Van der Aa <ketsukonn@gmail.com>

pkgbase=dxvk-bin
pkgname=('dxvk-bin')
pkgver=1.7
pkgrel=1
pkgdesc="A Vulkan-based compatibility layer for Direct3D 9/10/11 which allows running 3D applications on Linux using Wine (Windows DLL binary files)"
url="https://github.com/doitsujin/dxvk"
license=('zlib/libpng')
arch=('x86_64')
provides=("dxvk" "d9vk" "dxvk=$pkgver")
conflicts=("dxvk" "d9vk")
options=(!strip)
source=("https://github.com/doitsujin/dxvk/releases/download/v$pkgver/dxvk-$pkgver.tar.gz"
)
sha256sums=('67d78239906c24bd50a5ecbc2fd792c1721e274a7a60dd22f74b21b08ca4c7a1')

package_dxvk-bin () {
        depends=('vulkan-icd-loader' 'wine>=3.10' 'lib32-vulkan-icd-loader')
        install -D "dxvk-$pkgver"/x32/* -t "$pkgdir/usr/share/dxvk/x32"
        install -D "dxvk-$pkgver"/x64/* -t "$pkgdir/usr/share/dxvk/x64"
        install "dxvk-$pkgver"/setup_dxvk.sh -t "$pkgdir/usr/share/dxvk/"
        install -d "$pkgdir/usr/bin"
        ln -s /usr/share/dxvk/setup_dxvk.sh "$pkgdir/usr/bin/setup_dxvk"
}
