# Maintainer: doakey3 <doakey3@gmail.com>
pkgname=blender-plugin-bligify
pkgver=1.3.6
pkgrel=1
pkgdesc="Export and import animated GIFs from the Blender VSE"
url="https://github.com/doakey3/Bligify"
license=("GPL")
arch=('any')
depends=('blender' 'gifsicle' 'imagemagick')
groups=('blender')
makedepends=('unzip')
source=("https://github.com/doakey3/Bligify/releases/download/1.3.6/Bligify.zip")
md5sums=('775d23589b8595f79ad2e910e781eaef')

package() {
    addons="$pkgdir/usr/share/blender/$(blender -v | head -n1 | cut -f2 -d ' ')/scripts/addons/"
    if [ ! -d "$addons" ]; then
        mkdir -p "$addons"
    fi
    unzip Bligify -d "$addons"
}
