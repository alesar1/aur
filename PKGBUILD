# Maintainer: Grey Christoforo <first name at last name dot net>

pkgname=python-ocp-git
pkgver=7.5.RC1.r13.ge1df346
pkgrel=1
pkgdesc="Python wrapper for OCCT generated using pywrap"
arch=(x86_64)
url=https://github.com/CadQuery/OCP
license=('Apache')
depends=(
python
opencascade-rc
vtk9-fix
)
makedepends=(
git
clang
python-joblib
python-click
python-pandas
python-path
pybind11
ninja
cmake
python-logzero
python-tqdm
python-toposort
python-cymbal
python-schema
rapidjson
python-jinja
python-toml
lief
)
conflicts=(python-ocp)
provides=(python-ocp)
source=(git+https://github.com/CadQuery/OCP.git)
sha256sums=('SKIP')

pkgver() {
  cd OCP
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare(){
  cd OCP
  git submodule update --init --recursive
  
  # don't use the opencascade headers packaged here
  # instead use the ones from the installed opencascade package
  #rm -rf opencascade
  #ln -s /usr/include/opencascade .

}

build() {
  cd OCP

  # get symbols
  mkdir -p dummy/lib_linux/
  ln -s /usr/lib dummy/lib_linux/.
  rm *.dat
  msg2 "Dumping symbols..."
  python dump_symbols.py dummy
  msg2 "Dump complete."
  file symbols_mangled_linux.dat

  CONDA_PREFIX=/usr PYTHONPATH=pywrap python -m bindgen \
    --clean \
    --libclang "$(ldconfig -p | grep 'libclang.so$' | head -1 | awk '{print $NF}')" \
    --include "$(clang -print-resource-dir)"/include \
    --include "/usr/include/vtk" \
    all ocp.toml

  cmake \
    -W no-dev \
    -D CMAKE_INSTALL_PREFIX="/usr" \
    -D OPENCASCADE_INCLUDE_DIR=opencascade \
    -D CMAKE_BUILD_TYPE=None \
    -D CMAKE_CXX_FLAGS="-DVTK_MAJOR_VERSION=9" \
    -B build_dir \
    -G Ninja \
    -S OCP

  cmake --build build_dir
}

check() {
  cd OCP
  cd build_dir
  #python -c "from OCP.gp import gp_Vec, gp_Ax1, gp_Ax3, gp_Pnt, gp_Dir, gp_Trsf, gp_GTrsf, gp, gp_XYZ"
  python -c "import OCP"
}

package(){
  cd OCP

  install -Dt "${pkgdir}$(python -c 'import sys; print(sys.path[-1])')" -m644 build_dir/OCP.*.so
  install -Dt "${pkgdir}/usr/share/licenses/${pkgname}" -m644 LICENSE
}

# vim:ts=2:sw=2:et:
