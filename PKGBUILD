# Maintainer: graysky <graysky AT archlinux DOT us>
# Contributor: Jason Plum <jplum@archlinuxarm.org>
# Contributor: Kevin Mihelich <kevin@archlinuxarm.org>

_subarchs=(armv5 armv6h armv7h armv8)
pkgbase='distccd-alarm'
pkgname=("${_subarchs[@]/#/$pkgbase-}")
_date=20180125
pkgver=7.2.1
pkgrel=2
arch=('x86_64')
license=('GPL' )
pkgdesc="Toolchain for Arch ARM builds via distcc on x86_64 slaves"
url="https://archlinuxarm.org/wiki/Distcc_Cross-Compiling"
depends=('distcc')
options=('libtool' 'emptydirs' '!strip')
#_URL="https://archlinuxarm.org/builder/xtools"
_URL="https://archlinuxarm.org/builder/xtools/$pkgver-$pkgrel"
source=(
  "x-tools-$pkgver-$pkgrel-$_date.tar.xz::$_URL/x-tools.tar.xz"
"x-tools6h-$pkgver-$pkgrel-$_date.tar.xz::$_URL/x-tools6h.tar.xz"
"x-tools7h-$pkgver-$pkgrel-$_date.tar.xz::$_URL/x-tools7h.tar.xz"
 "x-tools8-$pkgver-$pkgrel-$_date.tar.xz::$_URL/x-tools8.tar.xz"
'config.in' 'service.in')
md5sums=('6b46c7f97439ee8479f9fb8d1ab96b59'
         '5f39d31ba0c3a41a7336fb20d8b1febd'
         'ec73099f9ce47a6f86069fd253d60279'
         '9c45700408b0ec6084571b8f1d6a7ff9'
         '48b71f968488a4322a715d633eb6879e'
         '7e664f8ce386f467f1a7381c9ac3c06f')

build() {
  # setup config and services
  _path=('' '6h' '7h' '8')
  _name=('arm-unknown-linux-gnueabi' 'arm-unknown-linux-gnueabihf'
  'arm-unknown-linux-gnueabihf' 'aarch64-unknown-linux-gnueabi')

  for i in 0 1 2 3; do
    # make service units
    sed "s/@VERS@/${_subarchs[$i]}/" <service.in >"distccd-${_subarchs[$i]}.service"

    # make configs
    sed -e "s/@VERS@/${_path[$i]}/" \
      -e "s/@PATH@/${_name[$i]}/" \
      -e "s/@LOG@/${_subarchs[$i]}/" \
      <config.in >"distccd-${_subarchs[$i]}.conf"
  done
}

_package_subarch() {
  # backup configs
  backup=("etc/conf.d/distccd-$1")
  pkgdesc="A toolchain for Arch ARM $1 builds via distcc"
  # install symlink to distccd
  install -d "${pkgdir}/usr/bin"
  ln -sf /usr/bin/distccd "${pkgdir}/usr/bin/distccd-$1"
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
  _xtoolsdir="${source[i]##*/}"
  _xtoolsdir="${_xtoolsdir%%.*}"
  eval 'package_distccd-alarm-'${_subarchs[i]}'() {
  _package_subarch '${_subarchs[i]}' '${_xtoolsdir}'
}'
done
