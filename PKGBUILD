# Maintainer: Donald Carr <sirspudd at gmail dot com>

# set -x

# Documentation

# Set up the pi for Qt compilation.
# For a comprehensive set of deps I just install chromium which pulls in everything

#* I had to removed xcomposite as code path breaks
#* Remove 2 (mesa) pkgconfig files we allow to screw our mkspec
# * rm /usr/lib/pkgconfig/glesv2.pc
# * rm /usr/lib/pkgconfig/egl.pc

# I use NFS to develop against my sysroot personally: sudo mount qpi2.local:/ /mnt/pi

# NB: Mandatory edit: set this variable to point to your raspberry pi's sysroot

# Arch: build dependencies for the target device documented in PKGBUILD.libs
# Fedora: systemd-devel mesa-*-devel wayland*-devel fontconfig-devel libinput-devel freetype-devel qt5-qtdeclarative-devel

# Sanity
_building=true
if [[ -z ${startdir} ]]; then _building=false; fi

# Options
_sysroot=""
_piver=""
_use_mesa=false
_float=false
_shadow_build=false
_debug=false
_skip_web_engine=true
_static_build=false
_build_from_head=false
_patching=true

# Sanity check options

if $_building; then
  if [[ -z $_piver ]] && [[ -n $LOCAL_PI_VER ]]; then _piver=$LOCAL_PI_VER; fi
  _sysroot=/mnt/pi${_piver}
  if [[ -z "${_piver}" ]]; then
    echo "You have to set a pi version (_piver) to build"
    exit 1
  fi

  if [[ ! -d "${_sysroot}/etc" ]]; then
    echo "You have to set a valid sysroot to proceed with the build"
    exit 1
  fi
fi

# vars
_local_qt5_repo="/opt/dev/src/qtproject/qt5"
_pkgvermajmin="5.8"
_pkgverpatch=".0"
# -{alpha/beta/rc}
_dev_suffix="-alpha"
pkgver="${_pkgvermajmin}${_pkgverpatch}"
$_build_from_head && pkgver=6.6.6
_pkgver=${pkgver}${_dev_suffix}
_release_type="development_releases"
_mkspec="linux-rpi${_piver}-g++"
_device_configure_flags=""
_profiled_gpu_fn=qpi-proprietary.sh

__eglpkgconfigpath="${__pkgconfigpath}/egl.pc"
__glespkgconfigpath="${__pkgconfigpath}/glesv2.pc"

case ${_piver} in
1)
  _toolchain_name=armv6-rpi-linux-gnueabihf
  _skip_web_engine=true
;;
2)
  _toolchain_name=armv7-rpi2-linux-gnueabihf
;;
3)
  _toolchain_name=aarch64-rpi3-linux-gnueabi
  _use_mesa=true
  _float=false
;;
esac

if [[ -z "${_dev_suffix}" ]]; then _release_type="official_releases"; fi
if [[ -f testing ]]; then _skip_web_engine=true; fi

$_build_from_head && _patching=false && _shadow_build=true
$_skip_web_engine && _device_configure_flags="$_device_configure_flags -skip qtwebengine"
$_static_build && _device_configure_flags="$_device_configure_flags -static"
$_float && _device_configure_flags="$_device_configure_flags -qreal float"

# PKGBUILD vars

pkgrel=1
pkgname="qt-sdk-raspberry-pi${_piver}"

$_static_build && pkgname="${pkgname}-static"
if $_debug; then
  _build_type="-debug"
  pkgname="${pkgname}-debug"
else
  _build_type="-release"
  _device_configure_flags="$_device_configure_flags -reduce-exports -ltcg"
fi

_libspkgname="${pkgname}-target-libs"
_packaginguser=$(whoami)
_baseprefix=/opt
_installprefix=${_baseprefix}/${pkgname}
_qt_package_name_prefix="qt-everywhere-opensource-src"
_source_package_name=${_qt_package_name_prefix}-${_pkgver}

pkgdesc="Qt SDK for the Raspberry Pi 1/2/3"
arch=("x86_64")
url="http://www.qt.io"
license=("LGPL3" "GPL3")
depends=("qpi${_piver}-toolchain" "qtcreator")
makedepends=("git" "pkgconfig" "gcc")
_provider=http://qt.mirror.constant.com/
#_provider=https://download.qt.io

if ! $_build_from_head; then
  source=("git://github.com/sirspudd/mkspecs.git" "${_provider}/${_release_type}/qt/${_pkgvermajmin}/${_pkgver}/single/${_source_package_name}.7z")
  sha256sums=("SKIP" "de1f03829fc37d31491de3891f56a138d5456b3e223ca9db11abe8598720a5d0")
fi

options=('!strip')
install=qpi.install
rm $install
touch $install

if ${_use_mesa}; then
  _profiled_gpu_fn=qpi-mesa.sh
  _device_configure_flags="$_device_configure_flags -gbm -kms"
else
  if [[ -f ${__eglpkgconfigpath} ]] || [[ -f ${__glespkgconfigpath} ]] ; then
    echo "Mesa is about to eat our communal poodle; delete egl.pc and glesv2.pc in your sysroot"
    exit 1
  fi
fi

# callbacks
finish() {
    if [[ -n ${startdir} ]]; then
      cd ${startdir}
      rm $install
      touch $install
    fi
}
trap finish EXIT

build() {
  # Qt tries to do the right thing and stores these, breaking cross compilation
  unset LDFLAGS
  unset CFLAGS
  unset CXXFLAGS

  if [[ -z "$_piver" ]]; then
    echo "Set a pi version to build the associated sdk"
    exit -1
  fi

  local _srcdir="${srcdir}/${_source_package_name}"
  local _bindir="${_srcdir}"
  local _basedir="${_srcdir}/qtbase"
  local _declarativedir="${_srcdir}/qtdeclarative"
  local _webenginedir="${_srcdir}/qtwebengine"
  local _mkspec_dir="${_basedir}/mkspecs/devices/${_mkspec}"

  if $_shadow_build; then
    _bindir="${_srcdir}-build"
    rm -Rf ${_bindir}
    mkdir -p ${_bindir}
  fi

  if $_build_from_head; then
     if [[ -z $_local_qt5_repo ]]; then echo "Need to set a repo dir to build from head"; exit 1; fi
    _srcdir=$_local_qt5_repo
  fi

  cd ${_srcdir}

if $_patching; then
  # Get our mkspec
  rm -Rf $_mkspec_dir
  cp -r "${srcdir}/mkspecs/${_mkspec}" $_mkspec_dir

  # build qtwebengine with our mkspec
  local _webenginefileoverride="${_srcdir}/qtwebengine/tools/qmake/mkspecs/features/functions.prf"
  sed -i "s/linux-clang/linux*/" ${_webenginefileoverride} || exit 1

  # hard coded off, so we have to hard code it on
  local _reducerelocations="${_basedir}/config.tests/unix/reduce_relocs/bsymbolic_functions.c"
  sed -i "s/error/warning/" ${_reducerelocations} || exit 1

  cd ${_basedir}
  patch -p1 < ${startdir}/0001-Check-lib64-as-well-as-lib.patch

  cd ${_declarativedir}
  patch -p1 < ${startdir}/0001-V4-Free-up-2-address-bits-in-64bit-mode.patch

  # Work around our embarresing propensity to stomp on your own tailored build configuration
  sed -i "s/O[23]/Os/"  ${_basedir}/mkspecs/common/gcc-base.conf || exit 1
fi

  cd ${_bindir}

  # skipping on principle: qtscript xcb

  # Too bleeding big
  # -developer-build \
  # -separate-debug-info \

  # Chromium requires python2 to be the system python on your build host
  # I literally symlink /usr/bin/python to /usr/bin/python2 on arch

  # Just because you can enable something doesnt mean you should
  # Prepare for breakage in all your Qt derived projects
  #-qtnamespace "Pi${_piver}" \
  local _configure_line="${_srcdir}/configure \
                 -confirm-license \
                 -opensource \
                 -v \
                 \
                 $_build_type \
                 -fontconfig \
                 -system-freetype \
                 -reduce-relocations \
                 -reduce-exports \
                 -silent \
                 -qtlibinfix "Pi${_piver}" \
                 -pch \
                 -opengl es2 \
                 -egl \
                 -journald \
                 \
                 -hostprefix ${_installprefix} \
                 -prefix ${_installprefix} \
                 \
                 -make libs \
                 \
                 -no-icu \
                 -no-compile-examples \
                 -no-xcb \
                 \
                 -skip qtscript \
                 \
                 -sysroot ${_sysroot} \
                 -device ${_mkspec} \
                 -device-option CROSS_COMPILE=/opt/${_toolchain_name}/bin/${_toolchain_name}- \
                 ${_device_configure_flags}"
  echo ${_configure_line} > configure_line
  ${_configure_line} || exit 1
  make || exit 1
}

create_install_script() {
  local _install_script_location="${startdir}/${install}"

  echo _piver="${_piver}" > ${_install_script_location}
  echo _qmakepath="${_installprefix}/bin/qmake" >> ${_install_script_location}
  echo _sysroot="${_sysroot}" >> ${_install_script_location}

  cat "${startdir}/_${install}" >> "${startdir}/${install}"
}

package() {
  local _srcdir="${srcdir}/${_source_package_name}"
  local _bindir="${_srcdir}"

if $_shadow_build; then
  _bindir="${_srcdir}-build"
fi

  create_install_script

  # cleanup
  rm -Rf ${pkgdir}
  mkdir -p ${pkgdir}

  cd "${_bindir}"
  INSTALL_ROOT="$pkgdir" make install || exit 1

  # Qt is now installed to $pkgdir/$sysroot/$prefix
  # manually generate/decompose host/target
  local _libsdir="${startdir}/${_libspkgname}"
  local _libspkgdir="${_libsdir}/topkg"
  local _libspkgbuild="${_libsdir}/PKGBUILD"
  local _pkgprofiled=${_libspkgdir}/etc/profile.d
  local _profiledfn=qpi.sh
  rm -Rf ${_libspkgdir}
  mkdir -p ${_libspkgdir}

  cp ${startdir}/PKGBUILD.libs ${_libspkgbuild}
  mv "${pkgdir}/${_sysroot}/${_baseprefix}" ${_libspkgdir}
  # set correct libs version
  sed -i "s/libspkgrel/${pkgrel}/" ${_libspkgbuild} || exit 1
  sed -i "s/libspkgver/${pkgver}/" ${_libspkgbuild} || exit 1
  sed -i "s/libspkgname/${_libspkgname}/" ${_libspkgbuild} || exit 1
  sed -i "s/libspiver/${_piver}/" ${_libspkgbuild} || exit 1

  if ! ${_static_build}; then
    mkdir -p ${_pkgprofiled}
    cp -L ${startdir}/${_profiledfn} ${_pkgprofiled} || exit 1
    cp -L ${startdir}/${_profiled_gpu_fn} ${_pkgprofiled} || exit 1
    sed -i "s,localpiprefix,${_installprefix}," ${_pkgprofiled}/${_profiledfn} || exit 1
  fi

  #cp ${_bindir}/qtbase/config.status ${_libspkgdir}/${_installprefix}

  local _summary_file="${_bindir}/qtbase/config.summary"
  if [[ -f ${_summary_file} ]]; then
    cp ${_summary_file} ${_libspkgdir}/${_installprefix}
  fi

  cd ${_libsdir}
  runuser -l ${_packaginguser} -c 'makepkg -d -f' || exit 1

  mv ${_libsdir}/${_libspkgname}-${pkgver}-${pkgrel}-any.pkg.tar.xz ${startdir}
}
