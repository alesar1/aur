# Maintainer: Mattias Giese <mattias.giese@posteo.net>

pkgname=pdk
# https://puppet-pdk.s3.amazonaws.com/pdk/1.7.1.0/repos/deb/xenial/PC1/pdk_1.7.1.0-1xenial_amd64.deb
_ubuntu_release=bionic
_pkgver="1.8.0.0-1${_ubuntu_release}"
pkgver=1.8.0.0

pkgrel=1
pkgdesc='Puppet Development Kit bundles tools and helpers to create high quality puppet modules'
arch=('x86_64')
url='https://github.com/puppetlabs/pdk'
options=(staticlibs !strip)
source=("http://apt.puppetlabs.com/pool/${_ubuntu_release}/puppet6/p/pdk/pdk_${_pkgver}_amd64.deb")
md5sums=('91394ca77951b47f7cb016867395f752')

package() {
  tar xJf data.tar.xz

  mv usr "${pkgdir}"
  mv opt "${pkgdir}"

  cd "${pkgdir}"
  mkdir usr/bin
  mv usr/local/bin/pdk usr/bin
  chmod 755 opt/puppetlabs/pdk/bin/pdk
  rm -rf usr/local
}
