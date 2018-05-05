# maintained by: bartus szczepaniak <aur@bartus.33mail.com>

name=mesh-off
github_link="https://github.com/alextsui05/blender-off-addon.git"
version=0.3.1
#fragment="#commit=7e49329 "
files=(import_off.py)
is_flat="yes"
_blender=$(expac "%v" -S blender|egrep -o [[:alnum:]]{1}.[[:alnum:]]{2})

pkgname=blender-plugin-${name}
pkgver=v0.3.1.r0.g57f0195
pkgrel=1
pkgdesc="Integrate cork boolean library into blender"
arch=('any')
url=${github_link}
license=('GPL')
depends=('blender')
makedepends=('expac' 'git')
source=("${name}::git+${github_link}${fragment}")
md5sums=('SKIP')

pkgver() {
  cd ${name}
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd ${name}
  addons="$pkgdir/usr/share/blender/${_blender}/scripts/addons"
  [[ -n ${is_flat} && ${is_flat} == "yes" ]] && install_path=${addons} || install_path=${addons}/${name}
  install -dm755 ${install_path}
  for file in  ${files[@]} ; do install -m 755 ${file} ${install_path} ; done
#  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

# vim:set ts=2 sw=2 et:
