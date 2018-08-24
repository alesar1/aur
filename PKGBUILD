# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>

name=surface-follow
#fragment="#commit=7e49329 "
files=(ModelingCloth TextureHack.py UVShape.py)
_blender=$(pacman -Sddp --print-format %v blender|grep -oP '(?<=\:)[[:digit:]]{1}\.[[:digit:]]{2}(?=\.)')

pkgname=blender-plugin-${name}
pkgver=r18.a7e7e18
pkgrel=2
pkgdesc="Blender addon for binding object to deforming surfaces."
arch=('any')
url="https://blenderartists.org/forum/showthread.php?412706-Surface-Follow-from-2016-Blender-Conference"
license=('MIT')
depends=('blender')
makedepends=('git')
source=("${name}::git+https://github.com/the3dadvantage/BlenderSurfaceFollow.git${fragment}")
md5sums=('SKIP')

pkgver() {
  cd ${name}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd ${name}
  addons="$pkgdir/usr/share/blender/${_blender}/scripts/addons"
  install -dm755 ${addons}
  for file in  ${files[@]} ; do install -m 755 ${file} ${addons}/${file} ; done
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

# vim:set ts=2 sw=2 et:
