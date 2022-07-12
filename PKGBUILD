# Maintainer: Pellegrino Prevete <pellegrinoprevete@gmail.com>
# Contributor: David Runge <dvzrv@archlinux.org>
# Contributor: Pierre Schmitz <pierre@archlinux.de>
# Contributor: Gerardo Exequiel Pozzi <djgera@archlinux.org>

# shellcheck disable=SC2034
_pkgname=archiso
variant="persistent"
pkgname="${_pkgname}-${variant}-git"
pkgver=v58+287+gb435a72
pkgrel=1
pkgdesc='Tools for creating Arch Linux live and install iso images with luks'
arch=('any')
license=('GPL3')
url="https://gitlab.archlinux.org/archlinux/archiso/-/issues/184"
depends=('arch-install-scripts' 'bash' 'dosfstools' 'e2fsprogs' 'erofs-utils'
'libarchive' 'libisoburn' 'mtools' 'squashfs-tools' 'cryptsetup-nested-cryptkey')
makedepends=('git')
checkdepends=('shellcheck')
provides=("${_pkgname}")
provides+=("${_pkgname}-${variant}")
provides+=("${_pkgname}-encryption")
conflicts=("${_pkgname}")
conflicts+=("${_pkgname}-${variant}")
conflicts+=("${_pkgname}-encryption")
optdepends=(
  'archiso-profiles: extra profiles for archiso'
  'edk2-ovmf: for emulating UEFI with run_archiso'
  'openssl: for codesigning support when building netboot artifacts'
  'qemu: for run_archiso'
)
source=("git+https://gitlab.archlinux.org/tallero/${_pkgname}#branch=${variant}")
sha256sums=('SKIP')

pkgver() {
  cd "${_pkgname}" || exit
  git describe --tags | sed 's/-/+/g'
}

check() {
  cd "${_pkgname}" || exit
  make -k check
}

# shellcheck disable=SC2154
package() {
  cd "${_pkgname}" || exit
  make DESTDIR="${pkgdir}" PREFIX='/usr' install
}
