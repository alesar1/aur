# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=vstaambk
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=r8.298ee4b
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('any')
url='https://github.com/HomeOfVapourSynthEvolution/vsTAAmbk'
license=('GPL')
depends=('vapoursynth-plugin-eedi2-git'
         'vapoursynth-plugin-nnedi3-git'
         'vapoursynth-plugin-fmtconv'
         'vapoursynth-plugin-genericfilters-git'
         'vapoursynth-plugin-msmoosh-git'
         'vapoursynth-plugin-mvtools'
         'vapoursynth-plugin-temporalsoften-git'
         'vapoursynth-plugin-sangnommod-git'
         'vapoursynth-plugin-havsfunc'
         'vapoursynth-plugin-mvsfunc-git'
         )
makedepends=('git')
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/HomeOfVapourSynthEvolution/vsTAAmbk.git")
sha1sums=('SKIP')
_sites_packages="$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")"

pkgver() {
  cd "${_plug}"
  #echo "$(git describe --long --tags | tr - .)"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "${_plug}"
  install -Dm644 vsTAAmbk.py "${pkgdir}${_sites_packages}/vsTAAmbk.py"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/vapoursynth/${_plug}/README.md"
}
