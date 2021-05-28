# Contributor: Carlo Casta <carlo.casta@gmail.com>

pkgname=gkrellm-nvidia
pkgver=1.0.1
pkgrel=1
pkgdesc="A plugin for gkrellm2 which displays nVidia GPU status"
arch=('i686' 'x86_64')
url="https://github.com/carcass82/gkrellm-nvidia"
license=('GPL')
depends=('gkrellm' 'libxnvctrl')
makedepends=('pkgconfig')
source=(https://github.com/carcass82/$pkgname/archive/release-$pkgver.tar.gz)
md5sums=('3d8bc8c334e98fe7d63ddbbacc0fa635')

build()
{
	cd "$srcdir/$pkgname-release-$pkgver"
	make
}

package()
{
	cd "$srcdir/$pkgname-release-$pkgver"
	install -D -m 755 nvidia.so ${pkgdir}/usr/lib/gkrellm2/plugins/nvidia.so
}
