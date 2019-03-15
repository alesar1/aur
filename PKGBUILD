# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=vshelpers
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=r2
pkgrel=2
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('any')
url='https://gist.github.com/4re'
license=('GPL')
depends=('ffms2'
         'vapoursynth'
         'vapoursynth-plugin-lsmashsource-git'
         'vapoursynth-plugin-fmtconv-git'
         'vapoursynth-plugin-removedirtvs-git'
         )
makedepends=('git')
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://gist.github.com/bba3f65469acfe0ec08a.git")
sha256sums=('SKIP')
_site_packages="$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")"

pkgver() {
  cd "${_plug}"
  printf "r%s" "$(git rev-list --count HEAD)"
}

package() {
  cd "${_plug}"
  install -Dm644 "${_plug}.py" "${pkgdir}${_site_packages}/${_plug}.py"
  python -m compileall -q -f -d "${_site_packages}" "${pkgdir}${_site_packages}/${_plug}.py"
  python -OO -m compileall -q -f -d "${_site_packages}" "${pkgdir}${_site_packages}/${_plug}.py"
}
