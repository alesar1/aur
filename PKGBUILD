# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

pkgname=bento4
pkgver=1.5.1.624
_pkgverstr=1.5.1-624
pkgrel=1
pkgdesc='C++ class library and tools designed to read and write ISO-MP4 files'
arch=('i686' 'x86_64')
url='https://www.bento4.com/'
license=('GPL')
makedepends=('cmake')
optdepends=('python')
source=("https://github.com/axiomatic-systems/Bento4/archive/v${_pkgverstr}.tar.gz")
sha256sums=('eda725298e77df83e51793508a3a2640eabdfda1abc8aa841eca69983de83a4c')

build() {
  cd "${srcdir}/Bento4-${_pkgverstr}"

  sed -i "s/ STATIC / SHARED /" CMakeLists.txt
  cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_SKIP_BUILD_RPATH=ON
  make
}

package() {
  cd "${srcdir}/Bento4-${_pkgverstr}"

  # prevent conflict with libmp4v2
  for conflicting_file in mp4extract mp4info; do
    mv $conflicting_file $conflicting_file-bento4
  done

  # install manually (there's no install target)
  mkdir -p "${pkgdir}/usr/"{lib,bin}
  find -iname '*.so' -exec mv --target-directory="${pkgdir}/usr/lib" {} \;
  find -maxdepth 1 -executable -type f -exec mv --target-directory="${pkgdir}/usr/bin" {} \;
}
