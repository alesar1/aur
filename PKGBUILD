# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=modfunc
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=r6
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('any')
url='https://github.com/LightArrowsEXE/modfunc'
license=('GPL')
depends=('vapoursynth-plugin-vsutil-git'
         'vapoursynth-plugin-fvsfunc-git'
         'vapoursynth-plugin-nnedi3cl-git'
         'vapoursynth-plugin-mvsfunc-git'
         )
makedepends=('git')
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/LightArrowsEXE/modfunc.git")
sha256sums=('SKIP')

_site_packages="$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")"

pkgver() {
  cd "${_plug}"
#   echo "$(git describe --long --tags | tr - .)"
  printf "r%s" "$(git rev-list --count HEAD)"
}

package(){
  cd "${_plug}"
  install -Dm644 "${_plug}.py" "${pkgdir}${_site_packages}/${_plug}.py"
  python -m compileall -q -f -d "${_site_packages}" "${pkgdir}${_site_packages}/${_plug}.py"
  python -OO -m compileall -q -f -d "${_site_packages}" "${pkgdir}${_site_packages}/${_plug}.py"


  install -Dm644 README.md "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/README.md"
}
