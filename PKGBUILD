pkgname=openmodelica-omc
pkgver=1.18.0
pkgrel=1
pkgdesc="The Open Source Modelica Suite - OpenModelica Compiler"
arch=('x86_64')
url="https://openmodelica.org"
license=('OSMC-PL')
_giturl="https://github.com/OpenModelica/OpenModelica.git"
groups=(openmodelica)
depends=('lapack' 'expat' 'lpsolve' 'java-environment')
makedepends=('gcc-fortran' 'cmake' 'git')
source=("git+${_giturl}#tag=v${pkgver}")
sha1sums=('SKIP')

prepare() {
  cd "$srcdir/OpenModelica"
  git remote set-url origin ${_giturl}
  git submodule update --force --init --recursive
}

build() {
  cd "$srcdir/OpenModelica/OMCompiler"
  autoreconf -vfi
  # https://github.com/OpenModelica/OpenModelica/issues/7619
  export CXXFLAGS="${CXXFLAGS} -std=c++14"
  ./configure --prefix=/usr/
  make
}

package() {
  cd "$srcdir/OpenModelica/OMCompiler"
  make install DESTDIR="${pkgdir}"
  chmod go+rx "${pkgdir}"/usr/share/omc/runtime/c/fmi/buildproject/config.*
}
