# Maintainer: graysky <graysky AT archlinux DOT us>
# Contributor: Jason Plum <jplum@archlinuxarm.org>
# Contributor: Kevin Mihelich <kevin@archlinuxarm.org>

_subarchs=(armv5 armv6h armv7h armv8)
_pkgrel_upstream=4
pkgbase='distccd-alarm'
pkgname=("${_subarchs[@]/#/$pkgbase-}")
_date=20180425
pkgver=7.3.1
pkgrel=1
arch=('x86_64')
license=('GPL' )
pkgdesc="Toolchain for Arch ARM builds via distcc on x86_64 slaves"
url="https://archlinuxarm.org/wiki/Distcc_Cross-Compiling"
depends=('distcc')
options=('libtool' 'emptydirs' '!strip')
_URL="https://archlinuxarm.org/builder/xtools/$pkgver-$pkgrel"
source=(
"x-tools-$_date.tar.xz::$_URL/x-tools.tar.xz"
"x-tools6h-$_date.tar.xz::$_URL/x-tools6h.tar.xz"
"x-tools7h-$_date.tar.xz::$_URL/x-tools7h.tar.xz"
"x-tools8-$_date.tar.xz::$_URL/x-tools8.tar.xz"
'config.in' 'service.in' 'readme.in'
)
#PKGEXT='.pkg.tar'
md5sums=('b0616a324c5b7ee56f9d2492d41fcae9'
         'c8358365b4cb77f7faf9bb9e041a4e5f'
         'f8bf79552382e926c5d474c6cde0639a'
         '2182c6a2949dc38daf3eae91feb98243'
         '6250a214faeda10c822899f39635e71e'
         '7e664f8ce386f467f1a7381c9ac3c06f'
         'da6ee5bb971d28b85e49d456a3889349')

build() {
  # setup config and services
  _path=('' '6h' '7h' '8')
  _name=('arm-unknown-linux-gnueabi' 'arm-unknown-linux-gnueabihf'
  'arm-unknown-linux-gnueabihf' 'aarch64-unknown-linux-gnueabi')
  _port=('3633' '3634' '3635' '3636')

  for i in 0 1 2 3; do
    # make service units
    sed "s/@VERS@/${_subarchs[$i]}/" <service.in >"distccd-${_subarchs[$i]}.service"

    # make configs
    sed -e "s/@VERS@/${_path[$i]}/" \
      -e "s/@PATH@/${_name[$i]}/" \
      -e "s/@LOG@/${_subarchs[$i]}/" \
      -e "s/@PORT@/${_port[$i]}/" \
      <config.in >"distccd-${_subarchs[$i]}.conf"

    # make readme.install
    sed -e "s/@VERS@/${_subarchs[$i]}/g" \
      -e "s/@PORT@/${_port[$i]}/g" \
      <readme.in >../"${_subarchs[$i]}".install
  done
}

_package_subarch() {
  # backup configs
  backup=("etc/conf.d/distccd-$1")
  pkgdesc="A toolchain for Arch ARM $1 builds via distcc"
  install="$1.install"

  # install symlink to distccd
  install -d "${pkgdir}/usr/bin"
  ln -sf /usr/bin/distccd "${pkgdir}/usr/bin/distccd-$1"
  # install whitelist for toolchain new for v3.3
  install -d "${pkgdir}/usr/lib/distcc"
  for bin in c++ cc cpp g++ gcc; do
    ln -sf /usr/bin/distcc "${pkgdir}/usr/lib/distcc/$3-$bin"
  done
  # copy in toolchain
  install -d "${pkgdir}/opt"
  cp -a "${srcdir}/$2" "${pkgdir}/opt"
  # install services
  install -Dm644 "${srcdir}/distccd-$1.service" \
    "${pkgdir}/usr/lib/systemd/system/distccd-$1.service"
  # install config
  install -Dm644 "${srcdir}/distccd-$1.conf" \
    "${pkgdir}/etc/conf.d/distccd-$1"
}

for i in "${!_subarchs[@]}"; do
  _bins=('arm-unknown-linux-gnueabi' 'armv6l-unknown-linux-gnueabihf'
  'armv7l-unknown-linux-gnueabihf' 'aarch64-unknown-linux-gnu')
  _xtoolsdir="${source[i]##*/}"
  _xtoolsdir="${_xtoolsdir%%.*}"
  eval 'package_distccd-alarm-'${_subarchs[i]}'() {
 _package_subarch '${_subarchs[i]}' '${_xtoolsdir}' '${_bins[i]}'
}'
done
