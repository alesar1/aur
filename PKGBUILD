# Maintainer: Adrià Cereto i Massagué <ssorgatem at gmail.com>

pkgname=dxvk-git
pkgver=20180308.e8303af
pkgrel=1
epoch=
pkgdesc="A Vulkan-based compatibility layer for Direct3D 11 which allows running 3D applications on Linux using Wine. Requires Wine with Vulkan support (wine-vulkan)"
arch=('x86_64')
url="https://github.com/doitsujin/dxvk"
license=('zlib/libpng')
groups=()
depends=('vulkan-icd-loader' 'wine')
makedepends=('ninja' 'meson' 'glslang' 'mingw-w64-gcc')
checkdepends=()
optdepends=('wine-vulkan-git: Wine with Vulkan support' 'wine-staging-vulkan-git: Wine with Vulkan support')
provides=("dxvk")
conflicts=("dxvk-bin")
replaces=()
backup=()
options=(!strip !buildflags staticlibs)
install=
changelog=
source=($pkgname::"git+https://github.com/doitsujin/dxvk.git")
noextract=()
md5sums=("SKIP")
validpgpkeys=()


pkgver() {
        cd "$pkgname"
        git log -1 --format=%cd.%h --date=short|tr -d -
}


build() {
	"$pkgname"/package-release.sh git $PWD
}



package() {
	mkdir -p "$pkgdir/usr/share/dxvk"
	tar -xf "$pkgname".tar.gz -C "$pkgdir/usr/share/dxvk" --strip-components=1
        mkdir -p "$pkgdir/usr/bin"
        ln -s "/usr/share/dxvk/x32/setup_dxvk.sh" "$pkgdir/usr/bin/setup_dxvk32"
        ln -s "/usr/share/dxvk/x64/setup_dxvk.sh" "$pkgdir/usr/bin/setup_dxvk64"
}
