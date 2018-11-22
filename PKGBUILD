# Maintainer: Jingbei Li <i@jingbei.li>
# Contributor: Xwang <xwaang1976@gmail.com>
# Contributor: George Eleftheriou <eleftg>
# Contributor: Andrew Fischer <andrew_at_apastron.co>

pkgname=openfoam
pkgver=6
pkgrel=2
pkgdesc="The open source CFD toolbox"
_distpkgname=OpenFOAM
_gitname=$_distpkgname-$pkgver
arch=('x86_64')
url="http://www.openfoam.org"
license=("GPL")
depends=('bzip2' 'openmpi' 'paraview' 'parmetis' 'scotch' 'boost' 'flex' 'cgal')
makedepends=('bash')
source=("https://github.com/OpenFOAM/$_gitname/archive/version-$pkgver.tar.gz" "${pkgname}.install")
install="${pkgname}.install"
md5sums=('f40aa39d4d5dfe7ea8d9a58f2625037a' '906a97732076501f3899d72d3a7393b3')

prepare() {
  mv $srcdir/$_gitname-version-$pkgver $srcdir/$_distpkgname-$pkgver
  # Extract the current version and major of paraview and of scotch for use in the system preferences
  #_pversion=`pacman -Q paraview | sed -e 's/.* //; s/-.*//g'`
  _pversion=$(pacman -Q $(pacman -Qqo $(which paraview)) | sed -e 's/.* //; s/-.*//g')
  _pmajor=`echo $_pversion | cut -d '.' -f1`
  _sversion=`pacman -Q scotch | sed -e 's/.* //; s/-.*//g'`

  # Generate and install the system preferences file
  echo "compilerInstall=system" > ${srcdir}/prefs.sh
  echo "export WM_MPLIB=SYSTEMOPENMPI" >> ${srcdir}/prefs.sh
  echo "export ParaView_VERSION=${_pversion}" >> ${srcdir}/prefs.sh
  echo "export ParaView_MAJOR=${_pmajor}" >> ${srcdir}/prefs.sh
  # https://www.cfd-online.com/Forums/openfoam-installation/148321-gcc-error-unrecognized-command-line-option-showme-link.html
  echo "export export WM_MPLIB=OPENMPI" >> ${srcdir}/prefs.sh
  cp ${srcdir}/prefs.sh ${srcdir}/${_distpkgname}-${pkgver}/etc #|| return 1

  # Generate the scotch.sh file for arch
  echo "export SCOTCH_VERSION=scotch_${_sversion}" > ${srcdir}/scotch.sh
  echo "export SCOTCH_ARCH_PATH=/usr" >> ${srcdir}/scotch.sh
  cp ${srcdir}/scotch.sh ${srcdir}/${_distpkgname}-${pkgver}/etc/config #|| return 1

  # Patches
  #cd ${srcdir}/${_distpkgname}-${pkgver}
  #sed '550s| \*this||' -i src/OpenFOAM/containers/Lists/PackedList/PackedListI.H
  #sed '35,40d' -i src/thermophysicalModels/specie/reaction/Reactions/Reaction/ReactionI.H
}

build() {
  # Setup the build environment
  export FOAM_INST_DIR=${srcdir}
  foamDotFile=${srcdir}/${_distpkgname}-${pkgver}/etc/bashrc
  [ -f ${foamDotFile} ] || return 1

  # Enter build directory
  cd ${srcdir}/${_distpkgname}-${pkgver}

  # Build and clean up OpenFOAM
  bash -c "source ${foamDotFile}
  ./Allwmake || exit 1
  wclean all || exit 1
  wmakeLnIncludeAll || exit 1"
}

package() {
  cd ${srcdir}

  # Create destination directories
  install -d ${pkgdir}/opt/${_distpkgname} ${pkgdir}/etc/profile.d || return 1

  # copy package to pkgdir
  cp -r ${srcdir}/${_distpkgname}-${pkgver} ${pkgdir}/opt/${_distpkgname} || return 1

  # Add source file
  echo "export FOAM_INST_DIR=/opt/${_distpkgname}" > ${pkgdir}/etc/profile.d/openfoam-${pkgver}.sh || return 1
  echo "alias ofoam=\"source \${FOAM_INST_DIR}/${_distpkgname}-${pkgver}/etc/bashrc\"" >> ${pkgdir}/etc/profile.d/openfoam-${pkgver}.sh || return 1
  chmod 755 ${pkgdir}/etc/profile.d/openfoam-${pkgver}.sh || return 1

  # Add stub thirdparty directory to keep openfoam happy
  install -d ${pkgdir}/opt/${_distpkgname}/ThirdParty-${pkgver} || return 1

  # Permission fixes - for system-wide install and use
  chmod -R go+r ${pkgdir}/opt
  chmod -R 755 ${pkgdir}/opt/${_distpkgname}/${_distpkgname}-${pkgver}/bin
  chmod -R 755 ${pkgdir}/opt/${_distpkgname}/${_distpkgname}-${pkgver}/etc
}

# vim:set ts=2 sw=2 et:
