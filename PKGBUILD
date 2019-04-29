pkgname=cp2k
pkgver=6.1.0
pkgrel=3
_arch="basic"
_version="psmp"
_buildmode=0
_corenumber=$( grep -c ^processor /proc/cpuinfo )
pkgdesc="A quantum chemistry and solid state physics software package"
arch=("x86_64")
url="https://www.cp2k.org"
license=("GPL2")
depends=('lapack' 'blas' 'fftw' 'gcc-libs' 'glibc' 'cp2k-data'
         'openmpi' 'scalapack' 'libxc>=4.0.4' 'libint>=1.1.4')
makedepends=('gcc' 'gcc-fortran' 'python2' 'make' 'sed')
optdepends=('cuda: GPU calculations support'
            'plumed-mpi: enhanced sampling support')
source=("https://github.com/cp2k/cp2k/archive/v${pkgver}.tar.gz"
        "basic.${_version}"
        "cuda_plumed.${_version}"
        "cuda.${_version}"
        "plumed.${_version}")
sha256sums=('f11714771bf7abf162559e7a7d0c9bb8d3bca7286e3381d2d0a586d51af316bb'
            '1c7ec39e9c6f8499ae52352a77dee36b7acd71aa9d5db6cfc7ecb4c430e410b6'
            'c44269f40c73f15061fd855412507b8d7c0b158ffb3ba6b9d498f67b68756e0c'
            'e1310d0afecbaed27fb44ebd15000f1fd43ff1955241c2d21e7ed86a2c582541')

if [ -d "/opt/cuda" ]
then
  msg2 "Adding CUDA support"
  _buildmode=$((_buildmode | 1))
fi

if [ -d "/usr/lib/plumed" ]
then
  msg2 "Adding PLUMED support"
  _buildmode=$((_buildmode | 2))
fi

case $_buildmode in
  0)
    _arch="basic"
    ;;

  1)
    _arch="cuda"
    ;;

  2)
    _arch="plumed"
    ;;

  3)
    _arch="cuda_plumed"
    ;;
esac

prepare() {
  cd ${srcdir}/${pkgname}-${pkgver}
  module load cuda
  mv ../${_arch}.${_version} arch/
  # Changing the location of the data directory
  sed -i 's#$(CP2KHOME)/data/#/usr/share/cp2k/data/#g' makefiles/Makefile
  # A fix for Kepler GPUs
  sed -i 's/P100/K20X/g' src/dbcsr/libsmm_acc/libcusmm/generate.py
  sed -i 's/largeDB(/largeDB1(/g' src/dbcsr/libsmm_acc/libcusmm/parameters_K20X.txt
  sed -i 's/triples += combinations(6,7,8)/#triples += combinations(6,7,8)/g' src/dbcsr/libsmm_acc/libcusmm/generate.py
  sed -i 's/triples += combinations(13,14,25,26,32)/#triples += combinations(13,14,25,26,32)/g' src/dbcsr/libsmm_acc/libcusmm/generate.py
}

build() {
  cd ${srcdir}/${pkgname}-${pkgver}/makefiles
  
  make ARCH=${_arch} VERSION=${_version}
}

check() {
  cd ${srcdir}/${pkgname}-${pkgver}/tools/regtesting
  ./do_regtest -cp2kdir ../.. -nosvn -version ${_version} -arch ${_arch} -nobuild -maxtasks ${_corenumber}
  msg2 "A few non-critical tests may fail"
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}/exe/$_arch

  install -Dm755 cp2k.${_version} ${pkgdir}/usr/bin/cp2k
  install -Dm755 cp2k_shell.${_version} ${pkgdir}/usr/bin/cp2k-shell
  install -Dm755 graph.${_version} ${pkgdir}/usr/bin/cp2k-graph
}
