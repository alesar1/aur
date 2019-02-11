# Maintainer: root@yurikoles.com
# Contributor: Spyhawk

pkgname=libsolv-git
pkgver=0.7.3.2.g6ba90b5a
pkgrel=2
pkgdesc="A new approach to package dependency solving"
arch=('i686' 'x86_64')
url="https://github.com/openSUSE/libsolv"
license=('BSD')
makedepends=('git' 'make' 'cmake' 'expat' 'swig'
             'perl' 'python' 'ruby' 'ninja')
optdepends=('perl: for perl bindings'
            'python: for python bindings'
            'ruby: for ruby bindings'
            'rpm-org: RPM support')
provides=('libsolv')
conflicts=('libsolv')
source=("${pkgname}::git+https://github.com/openSUSE/libsolv.git")
sha256sums=('SKIP')

# build libzypp/zypper
BUILDZYPP=true
if [[ "$BUILDZYPP" == 'true' ]]; then
  makedepends+=('rpm-org')
fi

pkgver() {
  cd "${pkgname}"
  echo $(git describe --always | sed -r 's/-/./g')
}

build() {
  cd "${pkgname}"
  mkdir -p build && cd build

  if [[ "${BUILDZYPP}" == 'true' ]]; then
  cmake -G Ninja \
    -D CMAKE_INSTALL_PREFIX=/usr \
    -D ENABLE_RPMDB=1 \
    -D ENABLE_HELIXREPO=1 \
    -D ENABLE_PERL=1 \
    -D ENABLE_PYTHON=1 \
    -D ENABLE_RUBY=1 \
    ..
  else
  cmake -G Ninja \
    -D CMAKE_INSTAL1L_PREFIX=/usr \
    -D ARCHLINUX=1 \
    -D ENABLE_PERL=1 \
    -D ENABLE_PYTHON=1 \
    -D ENABLE_RUBY=1 \
    ..
  fi
  ninja
}

package() {
  cd "${pkgname}/build"
  DESTDIR="${pkgdir}" ninja install

  # cmake fix (see GH#56)
  mkdir -p "${pkgdir}/usr/lib/cmake/LibSolv"
  mv "${pkgdir}/usr/share/cmake/Modules/FindLibSolv.cmake" "${pkgdir}/usr/lib/cmake/LibSolv/LibSolvConfig.cmake"

  # hacky lib64 symlink fix
  mv "${pkgdir}/usr/lib64/"* "${pkgdir}/usr/lib/"
  rmdir "${pkgdir}/usr/lib64"
}
