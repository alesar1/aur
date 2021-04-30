# Maintainer: Salamandar <felix@piedallu.me>

_pkgname=kicad-library-utils
pkgname="${_pkgname}-git"
pkgver=r1004.704becd
pkgrel=1
pkgdesc='Some scripts for helping with library development, git checkout'
arch=('any')
url='https://gitlab.com/kicad/libraries/kicad-library-utils'
license=('GPLv3')
depends=('python3')
source=(
  "git+${url}.git#branch=v5"
)
sha256sums=(
  'SKIP'
)


pkgver() {
  cd "${srcdir}/${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "${srcdir}/${_pkgname}"

  install_dir="/usr/share/kicad/scripting/${_pkgname}"
  mkdir -p "${pkgdir}/${install_dir}"
  cp .  -R "${pkgdir}/${install_dir}"

  mkdir -p "${pkgdir}/usr/bin"

  ln -s "${install_dir}/pcb/check_kicad_mod.py" \
    "${pkgdir}/usr/bin/kicad_check_mod"

  ln -s "${install_dir}/pcb/check_3d_coverage.py" \
    "${pkgdir}/usr/bin/kicad_check_3d_coverage"

  ln -s "${install_dir}/pcb/test_kicad_mod.sh" \
    "${pkgdir}/usr/bin/kicad_test_mod"

  ln -s "${install_dir}/schlib/checklib.py" \
    "${pkgdir}/usr/bin/kicad_check_lib"

  chmod +x \
    "${pkgdir}/${install_dir}/pcb/check_kicad_mod.py" \
    "${pkgdir}/${install_dir}/pcb/check_3d_coverage.py" \
    "${pkgdir}/${install_dir}/pcb/test_kicad_mod.sh" \
    "${pkgdir}/${install_dir}/schlib/checklib.py"
}
