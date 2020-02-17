# Maintainer: Maurizio D'Addona <mauritiusdadd@gmail.com>
# Contributor: Sven Niese <Fd3querm@yahoo.de>
# Contributor: Daniel Murphy <mosquitogang201@gmail.com>

# NOTE: the option "!makeflag" is needed because the compilation
#       may fail if make uses more than one job.

pkgname=calculix
pkgver=2.16
pkgrel=2
pkgdesc="CalculiX: 3D finite element solver and post-processor (executables)"
arch=('i686' 'x86_64')
options=(!makeflags !buildflags)
url="http://www.calculix.de/"
license=('GPL2')
depends=('arpack' 'spooles' 'libsnl-svn' 'blas' 'mesa' 'glu' 'libxmu')
optdepends=('calculix-doc: documentation and examples')
makedepends=('gcc-fortran' 'perl')
checkdepends=('perl')

# NOTE: in the current version of the source tarball, some files are
#       missing. I took the files from the previus version. To be removed
#       when upstream fixes the issue
source=("http://www.dhondt.de/ccx_${pkgver}.src.tar.bz2"
        "http://www.dhondt.de/ccx_${pkgver}.test.tar.bz2"
      	"http://www.dhondt.de/cgx_${pkgver}.1.all.tar.bz2"
        "calculix_${pkgver}_archlinux.patch")

sha256sums=('ebd95a0e4d52a3a8fb969eefc85417c82f649f25526bb6d83d69868ab44d47b7'
            'fcbeb4d03a960ec26b5027fd729f6a13b607ab5fece4c5673c16fa740592f687'
            '0125efb8dfe47c920b266d8c6a326677eae3967a113a75c079405c1d9415cb54'
            '54f34feffd3c07b1cc1e1390e50b3f2db575c7f9c60d1fb4515e440d36c69bbd')

prepare()
{
    cd "${srcdir}"

    msg "Patching makefiles..."
    rm -rf CalculiX/libSNL
    patch -p0 -f -l -s -i calculix_${pkgver}_archlinux.patch
    msg2 "Done"
}

build()
{   
    msg "Building..."
    
    msg2 "Building solver..."
    cd "${srcdir}/CalculiX/ccx_${pkgver}/src"
    make
    
    msg2 "Building gui..."
    cd "${srcdir}/CalculiX/cgx_${pkgver}.1/src"
    make

    msg2 "Build complete"
}

check()
{
  tests=('beamp' 'ball' 'pipe' 'pipe2' 'planestress'
         'gap' 'gap2' 'capacitor' 'carbonseal' 'beamptied1'
         'beamp1rotate' 'beamp2' 'beamp2rotate' 'beamf' 'beamhf'
         'cou' 'furnace' 'gaspipe1' 'gaspipe1-oil' 'gaspipe2'
         'gaspipe3' 'gaspipe4' 'gaspipe5' 'gaspipe6' 'gaspipe7'
         'gaspipe8' 'gaspipe-cfd-pressure' 'gaspipe8-cfd-pressure'
         'gaspipe8-cfd-massflow' 'gaspipe8-cfd-pressure'
         'gaspipe8-cfd-pressure-split' 'green1' 'green2' 'green3'
         'green4' 'hinge' 'hueeber1' 'hueeber2' 'induction' 'induction2'
         'inistrain' 'largerot1' 'linearnet' 'mass1' 'mass2' 'mass3'
         'massflow_percent_ccx' 'membrane1' 'metalforming' 'modelchel'
         'multistage' 'networkmpc' 'oneel' 'pendel' 'resstress1'
         'restrictor' 'segment' 'sensitivity_I' 'shell1'
         'shellbeam' 'shellf' 'simplebeam' 'slant' 'spring1' 'spring2'
         'small_pressure_gradient' 'square' 'substructure' 'swing'
         'thermomech' 'transition' 'truss' 'vortex1' 'wire')

  msg "Testing solver..."
  cd ${srcdir}/CalculiX/ccx_${pkgver}/test

  for test_name in "${tests[@]}" ; do
    ref_file=${test_name}.dat.ref
    dat_file=${test_name}.dat
    frd_file=${test_name}.frd
    log_file=${test_name}.log

    msg2 "testing ${test_name}"
    rm -f ${dat_file}
    rm -f ${frd_file}

    ../src/ccx_${pkgver} ${test_name} &> ${log_file} ||\
        warning "check $(pwd)/${log_file}"

    if [ ! -f ${dat_file} ]; then
	    warning "${dat_file} does not exist"
      false
    fi

    sum1="$(wc -l ${dat_file})"
    sum2="$(wc -l ${ref_file})"
    if [ ${sum1%* *} != ${sum2%* *} ]; then
	    warning "The data file generated by ccx is not valid"
      false
    fi

    if grep "NaN" ${dat_file} ; then
      warning "${dat_file} contains NaN!"
      false
    fi

    if ! ./datcheck.pl ${test_name} ; then
      warning "Result is inconsistent with reference data!"
      false
    fi
  done
}

package() 
{
    msg "Copying files"

    install -d  ${pkgdir}/usr/bin

    install -Dm755 ${srcdir}/CalculiX/ccx_${pkgver}/src/ccx_${pkgver} ${pkgdir}/usr/bin/ccx
    install -Dm755 ${srcdir}/CalculiX/cgx_${pkgver}.1/src/cgx ${pkgdir}/usr/bin/cgx

    msg2 "Done"  
}
