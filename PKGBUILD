# Maintainer: Lucas H. Gabrielli <heitzmann@gmail.com>

pkgname=petsc-git
pkgver=20210203
pkgrel=2
_config=linux-c-opt
pkgdesc="Portable, extensible toolkit for scientific computation (external downloads enabled)"
provides=(petsc)
conflicts=(petsc)
arch=('i686' 'x86_64')
url="https://gitlab.com/petsc/petsc"
license=('BSD')
depends=('openmpi' 'lapack' 'fftw' 'hdf5' 'suitesparse' 'metis' 'parmetis' 'superlu' 'eigen' 'cython' 'python-mpi4py')
makedepends=('gcc' 'gcc-fortran' 'cmake' 'sowing' 'python' 'git' 'cython')
optdepends=("opencl: GPU computing"
            "hwloc: hardware locality"
            "cgns: CFD data support"
            "libpng: PNG support"
            "libyaml: YAML configuration support"
            "libx11: GUI tools")
install=petsc.install
source=(petsc::git+https://gitlab.com/petsc/petsc.git#branch=release
        petsc4py.patch)
sha256sums=('SKIP'
            'b0f4a9d33e9c3ba3f51b81808f04ec66091b0a29cf99cac6392e97232edec768')

_petsc_arch="arch-${_config}"
_petsc_dir='/usr/local/petsc'
_install_dir="${_petsc_dir}/${_config}"

generic_flags="-fPIC -fopenmp -O3 -march=x86-64 -mtune=generic"
# generic_flags="-fPIC -fopenmp -O3 -march=amdfam10 -mtune=generic"

export COPTFLAGS=-O3
export CXXOPTFLAGS=-O3
export FOPTFLAGS=-O3
export CPPFLAGS="$generic_flags -O2 -D-FORTIFY-SOURCE=2"
export CFLAGS="$generic_flags"
export CXXFLAGS="$generic_flags"
export FFLAGS="$generic_flags"
export FCFLAGS="$generic_flags"
export F90FLAGS="$generic_flags"
export F77FLAGS="$generic_flags"


pkgver() {
    cd petsc
    git log --format="%cd" --date=short -1 | sed 's/-//g'
}


prepare() {
    cd "${srcdir}/petsc"
    sed -i 's-\(self.publicInstall[^=]*=[[:space:]]\)[^#]*-\10 -g' config/BuildSystem/config/package.py
    patch -p1 < ../petsc4py.patch
}


build() {
    cd petsc

    declare -a CONFOPTS
    CONFOPTS=(
      --COPTFLAGS="$COPTFLAGS"
      --CXXOPTFLAGS="$CXXOPTFLAGS"
      --CPPFLAGS="$CPPFLAGS"
      --CFLAGS="$CFLAGS"
      --CXXFLAGS="$CXXFLAGS"
      --FFLAGS="$FFLAGS"
      --FCFLAGS="$FCFLAGS"
      --F90FLAGS="$F90FLAGS"
      --F77FLAGS="$F77FLAGS"

      --with-cxx-dialect=C++11
      --with-mpi=1
      --with-pic=1
      --with-shared-libraries=1
      --with-zlib=1

      --with-fftw=1
      --with-hdf5=1
      --with-suitesparse=1

      --with-parmetis=1
      --with-metis=1
      --with-superlu=1
      --with-superlu-include=/usr/include/superlu
      --with-superlu-lib=superlu
      --with-eigen=1
      --with-eigen-pkg-config=/usr/share/pkgconfig

      --with-scalar-type=complex

      --download-scotch=1
      --download-ptscotch=1
      --download-mumps=1
      --download-scalapack=1
      --download-hypre=1
      --download-petsc4py=1
    )

    CONFOPTS=( "${CONFOPTS[@]}" )

    # Add OpenCL support
    OPENCL_DIR="/usr/include/CL/"
    if [ -f "${OPENCL_DIR}/cl.h" ]; then
        CONFOPTS="${CONFOPTS} --with-opencl=1"
    fi

    # Add hwloc support
    if [ -f "/usr/lib/libhwloc.so" ]; then
        CONFOPTS="${CONFOPTS} --with-hwloc=1 --with-hwloc-pkg-config=/usr/lib/pkgconfig/"
    fi

    # Add CGNS support
    if [ -f "/usr/lib/libcgns.so" ]; then
        CONFOPTS="${CONFOPTS} --with-cgns=1"
    fi

    # Add PNG support
    if [ -f "/usr/lib/libpng.so" ]; then
        CONFOPTS="${CONFOPTS} --with-png=1 --with-png-pkg-config=/usr/lib/pkgconfig/"
    fi

    # Add YAML support
    if [ -f "/usr/lib/libyaml.so" ]; then
        CONFOPTS="${CONFOPTS} --with-yaml=1 --with-yaml-pkg-config=/usr/lib/pkgconfig/"
    fi

    # if --with-debugging=1 is set then PETSC_ARCH is automatically set to
    # "linux-c-debug" for some things, so _config should be changed to "linux-c-debug"
    #CONFOPTS="${CONFOPTS} --with-debugging=1"

    export PETSC_DIR="${srcdir}/petsc"
    export PETSC_ARCH="${_petsc_arch}"

    python ./configure LDFLAGS="$LDFLAGS" \
           --prefix="${_petsc_dir}/${_config}" \
           --MAKEFLAGS="$MAKEFLAGS" \
           $(for (( i=1; i<=${#CONFOPTS[@]}; i++)); do echo "${CONFOPTS[$i]}"; done)
    make clean
    make all
}

package() {
    cd petsc

    _build_dir="${srcdir}/petsc"

    export PETSC_DIR=${_build_dir}
    export PETSC_ARCH="${_petsc_arch}"

    make DESTDIR="${pkgdir}" install

    # Fix petsc4py runpath
    chrpath -r "${_install_dir}/lib:/usr/lib/openmpi" ${_build_dir}/${_petsc_arch}/lib/petsc4py/lib/${_petsc_arch}/PETSc.cpython-39-x86_64-linux-gnu.so

    # install license
    install -Dm 644 ${_build_dir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE

    mkdir -p "${pkgdir}/etc/profile.d"
    echo "export PETSC_DIR=${_install_dir}" > "${pkgdir}/etc/profile.d/petsc.sh"
    chmod +x "${pkgdir}/etc/profile.d/petsc.sh"

    # show where the shared libraries are
    install -dm 755 "${pkgdir}/etc/ld.so.conf.d/"
    echo "${_install_dir}/lib" > "${pkgdir}/etc/ld.so.conf.d/petsc.conf"

    _rem_dir="${_build_dir}/${_petsc_arch}"

    sed -i "s#-L${_rem_dir}/lib ##" "${pkgdir}${_install_dir}/lib/pkgconfig/PETSc.pc"
    sed -i "s#-L${_rem_dir}/lib ##" "${pkgdir}${_install_dir}/lib/pkgconfig/petsc.pc"
    sed -i "s#${_rem_dir}#${_install_dir}#g" "${pkgdir}${_install_dir}/include/petscmachineinfo.h"
    sed -i "s#${_rem_dir}#${_install_dir}#g" "${pkgdir}${_install_dir}/lib/petsc/conf/pkg.conf.mumps"
    sed -i "s#${_rem_dir}#${_install_dir}#g" "${pkgdir}${_install_dir}/lib/petsc/conf/pkg.conf.hypre"
    sed -i "s#${_rem_dir}#${_install_dir}#g" "${pkgdir}${_install_dir}/lib/petsc/conf/petscvariables"
    sed -i "s#${_rem_dir}#${_install_dir}#g" "${pkgdir}${_install_dir}/lib/petsc/conf/petscrules"
    sed -i "s#${_build_dir}#${_petsc_dir}#g" "${_rem_dir}/lib/petsc4py/lib/petsc.cfg"

    # install petsc4py
    _python_package="${pkgdir}/usr/lib/python3.9/site-packages"
    install -Dm 644 "${_rem_dir}/lib/petsc4py-3.14.1-py3.9.egg-info/PKG-INFO"                          "${_python_package}/petsc4py-3.14.1-py3.9.egg-info/PKG-INFO"
    install -Dm 644 "${_rem_dir}/lib/petsc4py-3.14.1-py3.9.egg-info/SOURCES.txt"                       "${_python_package}/petsc4py-3.14.1-py3.9.egg-info/SOURCES.txt"
    install -Dm 644 "${_rem_dir}/lib/petsc4py-3.14.1-py3.9.egg-info/dependency_links.txt"              "${_python_package}/petsc4py-3.14.1-py3.9.egg-info/dependency_links.txt"
    install -Dm 644 "${_rem_dir}/lib/petsc4py-3.14.1-py3.9.egg-info/not-zip-safe"                      "${_python_package}/petsc4py-3.14.1-py3.9.egg-info/not-zip-safe"
    install -Dm 644 "${_rem_dir}/lib/petsc4py-3.14.1-py3.9.egg-info/requires.txt"                      "${_python_package}/petsc4py-3.14.1-py3.9.egg-info/requires.txt"
    install -Dm 644 "${_rem_dir}/lib/petsc4py-3.14.1-py3.9.egg-info/top_level.txt"                     "${_python_package}/petsc4py-3.14.1-py3.9.egg-info/top_level.txt"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/__init__.py"                                             "${_python_package}/petsc4py/__init__.py"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/__main__.py"                                             "${_python_package}/petsc4py/__main__.py"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/PETSc.pxd"                                               "${_python_package}/petsc4py/PETSc.pxd"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/PETSc.py"                                                "${_python_package}/petsc4py/PETSc.py"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/include/petsc4py/__init__.pxd"                           "${_python_package}/petsc4py/include/petsc4py/__init__.pxd"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/include/petsc4py/__init__.pyx"                           "${_python_package}/petsc4py/include/petsc4py/__init__.pyx"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/include/petsc4py/numpy.h"                                "${_python_package}/petsc4py/include/petsc4py/numpy.h"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/include/petsc4py/petsc4py.h"                             "${_python_package}/petsc4py/include/petsc4py/petsc4py.h"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/include/petsc4py/petsc4py.i"                             "${_python_package}/petsc4py/include/petsc4py/petsc4py.i"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/include/petsc4py/petsc4py.PETSc_api.h"                   "${_python_package}/petsc4py/include/petsc4py/petsc4py.PETSc_api.h"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/include/petsc4py/petsc4py.PETSc.h"                       "${_python_package}/petsc4py/include/petsc4py/petsc4py.PETSc.h"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/include/petsc4py/PETSc.pxd"                              "${_python_package}/petsc4py/include/petsc4py/PETSc.pxd"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/lib/__init__.py"                                         "${_python_package}/petsc4py/lib/__init__.py"
    install -Dm 644 "${_rem_dir}/lib/petsc4py/lib/petsc.cfg"                                           "${_python_package}/petsc4py/lib/petsc.cfg"
    install -Dm 755 "${_rem_dir}/lib/petsc4py/lib/${_petsc_arch}/PETSc.cpython-39-x86_64-linux-gnu.so" "${_python_package}/petsc4py/lib/PETSc.cpython-39-x86_64-linux-gnu.so"
}
