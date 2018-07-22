# Maintainer: Adrià Cereto i Massagué <ssorgatem at gmail.com>

pkgbase=dxvk-wine-git
pkgname=('dxvk-wine64-git')
pkgver=0.63
pkgrel=1
pkgdesc="A Vulkan-based compatibility layer for Direct3D 11 which allows running 3D applications on Linux using Wine. Winelib version"
arch=('x86_64')
url="https://github.com/doitsujin/dxvk"
license=('zlib/libpng')
depends=('vulkan-icd-loader' 'wine>=3.10')
makedepends=('ninja' 'meson>=0.43' 'glslang' 'git' 'wine')
source=(dxvk-src::"git+https://github.com/doitsujin/dxvk.git" 
    setup-patch.diff::"https://patch-diff.githubusercontent.com/raw/doitsujin/dxvk/pull/511.diff"
    fix_dll_dir.diff
    )
sha256sums=("SKIP" "SKIP" "c9c1733a8f1e159c1c38e1f1448a2c9d60d8d31c86b9431eddd3f68a2038532d")

pkgver() {
        cd dxvk-src
        git describe | sed s/"-"/"_"/g | sed 's/^v\(.*\)/\1/'
}


build() {
        cd dxvk-src
        patch -p1 < ../setup-patch.diff
        patch -p1 < ../fix_dll_dir.diff
        rm -rf "$pkgbase/build.wine64"
	meson --cross-file build-wine64.txt \
            --buildtype "release"\
            --prefix "$PWD/../build"\
            --strip\
            -Denable_tests=false\
            "$pkgbase/build.wine64"
        cd "$pkgbase/build.wine64"
        ninja install
}

package_dxvk-wine64-git() {
        arch=('x86_64')
        conflicts=("dxvk-win64-bin" "dxvk-win64-git" "dxvk-git" "dxvk-bin")
        provides=("dxvk" "dxvk64")
        _destdir="/usr/lib/dxvk/"
        mkdir -p "$pkgdir/$_destdir"
	cp -v build/*/* "$pkgdir/$_destdir"
	if [ ! -f "$pkgdir"/$_destdir/d3d11.dll.so ] ||\
	 [ ! -f "$pkgdir"/$_destdir/dxgi.dll.so ]; then
		echo "Missing files, build was unsuccessful"
		echo "$pkgdir"/$_destdir/d3d11.dll.so
		echo "$pkgdir"/$_destdir/d3d11.dll.so
		return 1
	fi
        mkdir -p "$pkgdir/usr/bin"
        ln -s "$_destdir/setup_dxvk.sh" "$pkgdir/usr/bin/setup_dxvk64"
}
