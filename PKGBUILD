# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
pkgname=ccx2paraview
pkgdesc="CalculiX to Paraview converter (frd to vtk/vtu)"
pkgver=3.0.1
pkgrel=1
arch=(x86_64)
url="https://github.com/calculix/${pkgname}"
license=(GPL3)
depends=(python-numpy vtk ffmpeg python-mpi4py fmt pdal glew ospray qt5-base openvr unixodbc liblas cgns adios2 libharu gl2ps postgresql-libs netcdf mariadb-libs)
makedepends=(cython python-build python-install python-hatchling)
source=(https://pypi.org/packages/source/${pkgname::1}/${pkgname}/${pkgname}-${pkgver}.tar.gz)
sha512sums=('cd1dc7f9de5ef3472866a7674baf53d9b4df2969f803829b39db58babb13504337c316fdabe6daa20009370df7fecea49144cca6343d3b50b7fdcf190504c09c')

build() {
  cd ${pkgname}-${pkgver}
  python -m build --wheel --skip-dependency-check --no-isolation
  cython -3 --embed -o ${pkgname}.c src/${pkgname}/${pkgname}.py
  PYTHONLIBVER=python$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')$(python3-config --abiflags)
  gcc -Os $(python3-config --includes) ${pkgname}.c -o ${pkgname} $(python3-config --ldflags) -l$PYTHONLIBVER
}

package() {
  cd ${pkgname}-${pkgver}
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python -m install --optimize=1 --destdir="${pkgdir}" dist/*.whl
  install -Dvm755 "${pkgname}" -t "${pkgdir}/usr/bin"
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
