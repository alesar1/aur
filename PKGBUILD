#!/hint/bash
# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>

_name="luxcorerender"
_ver_tag="luxcorerender_v2.2"
{ IFS='.'; read -r _ver_major _ver_minor; ((_ver_minor++)); unset IFS; } <<<${_ver_tag#luxcorerender_v}
pkgname=${_name}-git
pkgver=2.3.r869.g8762f6817
epoch=2
pkgrel=1
pkgdesc="Physically correct, unbiased rendering engine."
arch=('x86_64')
url="https://www.luxcorerender.org/"
license=('Apache')
depends=(blosc boost-libs embree glfw gtk3 opencl-icd-loader openimagedenoise openimageio)
optdepends=("opencl-driver: for gpu acceleration"
            "pyside2: for pyluxcoretools gui")
makedepends=(boost cmake doxygen git ninja opencl-headers pyside2-tools)
conflicts=(luxrays-hg luxcorerender)
provides=(luxrays "luxcorerender=${epoch}:${_ver_major}.${_ver_minor}")
options=('!buildflags')
source=("${_name}::git+https://github.com/LuxCoreRender/LuxCore.git${_fragment}"
        "python.patch"
        "glfw.patch"
        )
sha256sums=('SKIP'
            'f639fb7e31056b6c7214e303c90fe06665572ffafc11e545f7c05128a8d85dc4'
            '4e04c3eb653f00d2389aff8e7fda2d244e258cbca3a22e32c13388a3984e4bb1')

pkgver() {
# shellcheck disable=SC2164
  cd "${srcdir}/${_name}"
# shellcheck disable=SC2015
  [ -v _ver_tag ] && printf %d.%d.r%s.g%s "$_ver_major" "$_ver_minor" "$(git rev-list ${_ver_tag}..HEAD --count)" "$(git log --pretty=format:'%h' -n 1)" \
                  || git describe --long --tags | sed 's/^luxcorerender_v//;s/beta/\.beta/;;s/\([^-]*-g\)/r\1/;s/-/./g'
}


prepare() {
  git -C "${srcdir}/${_name}" apply -v "${srcdir}"/*.patch
}

build() {
  _pyver=$(python -c "from sys import version_info; print(\"%d%d\" % (version_info[0],version_info[1]))")
  cmake -DPYTHON_V="${_pyver}" "${srcdir}/${_name}" -S "${_name}" -B "build" -G Ninja
# shellcheck disable=SC2086
  ninja ${MAKEFLAGS:--j1} -C "build"
}

package() {
  install -d -m755 "${pkgdir}"/usr/{bin,include,lib}
  install -m755 build/bin/* "${pkgdir}"/usr/bin
  install -m644 build/lib/* "${pkgdir}"/usr/lib
  cp -a "${_name}"/include "${pkgdir}"/usr
  for file in "${pkgdir}"/usr/include/*/*.in; do mv "$file" "${file%.in}"; done

  # install pyluxcore to the Python search path
  #  _pypath=`pacman -Ql python | sed -n '/\/usr\/lib\/python[^\/]*\/$/p' | cut -d" " -f 2`
  _pypath=$(python -c 'import sys;print("/usr/lib/python{}.{}".format(sys.version_info.major,sys.version_info.minor))')
  install -d -m755 "${pkgdir}/${_pypath}"
  mv "${pkgdir}"/usr/lib/pyluxcore.so "${pkgdir}/${_pypath}"
}
# vim:set ts=2 sw=2 et:
