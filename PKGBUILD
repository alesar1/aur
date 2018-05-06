# Maintainer: Mattias Giese <mattias.giese@posteo.net>

pkgname=pdk
_pkgver=1.5.0.0-1xenial
pkgver=1.5.0.0
pkgrel=1
pkgdesc='Puppet Development Kit bundles tools and helpers to create high quality puppet modules'
arch=('x86_64')
url='https://github.com/puppetlabs/pdk'
options=(staticlibs !strip)
source=("http://apt.puppetlabs.com/pool/xenial/puppet5/p/pdk/pdk_${_pkgver}_amd64.deb")
md5sums=('41f6fc37088e4788f4e66f1f85a3d22e')

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
