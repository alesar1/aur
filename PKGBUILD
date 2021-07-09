# Maintainer: Cyano Hao <c@cyano.cn>

_pkgname=vkd3d-proton
pkgname=$_pkgname-bin
pkgver=2.4
pkgrel=1
pkgdesc="Direct3D 12 to Vulkan translation library (Windows DLL binary files)"
url="https://github.com/HansKristian-Work/vkd3d-proton"
license=('LGPL')
arch=('x86_64')
depends=('vulkan-icd-loader')
optdepends=('lib32-vulkan-icd-loader: 32-bit Windows application support')
# do not provide vkd3d and lib32-vkd3d intentionally: providing them may break deepin-wine apps.
provides=('vkd3d-proton')
conflicts=('vkd3d-proton')
options=(!strip)
source=("https://github.com/HansKristian-Work/$_pkgname/releases/download/v$pkgver/$_pkgname-$pkgver.tar.zst")
sha256sums=('cf53caf6b55dc4096f4267d8b7fd664b701d329437d638d83068adf3ec37b79f')

package() {
	install -D "$_pkgname-$pkgver"/x86/* -t "$pkgdir/usr/share/dxvk/x86"
	install -D "$_pkgname-$pkgver"/x64/* -t "$pkgdir/usr/share/dxvk/x64"
	install "$_pkgname-$pkgver"/setup_vkd3d_proton.sh -t "$pkgdir/usr/share/dxvk/"
	install -d "$pkgdir/usr/bin"
	ln -s /usr/share/dxvk/setup_vkd3d_proton.sh "$pkgdir/usr/bin/setup_vkd3d_proton"
}
