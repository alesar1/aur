# Maintainer: Raphaël Doursenaud <rdoursenaud@gpcsolutions.fr>
# Contributor: Sietse van der Molen <sietse@vdmolen.eu>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: pisuka <tekmon@gmail.com>
# Contributor: Estevao Valadao <estevao@archlinux-br.org>
# Contributor: Guten <ywzhaifei@gmail.com>
# Contributor: Lee.MaRS <leemars@gmail.com>
# Contributor: Mikkel Oscar Lyderik <mikkeloscar@gmail.com>

pkgname=google-appengine-python-php
_pkgname=google_appengine
pkgver=1.9.36
pkgrel=1
arch=(any)
pkgdesc="Google App Engine SDK for Python & PHP"
url=https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python
license=('APACHE')
depends=('python2>=2.7')
makedepends=('unzip')
replaces=('google-appengine-python')
conflicts=('google-appengine-python')
provides=('google-appengine-python')
optdepends=(
  'php=5.5: App Engine PHP support'
  'mysql-python: MySQL DB API'
  'python2-crypto=2.6: cryptography functions'
  'python2-crcmod=1.7: generating CRC'
  'python2-django=1.4: full-featured web framework'
  'python2-jinja=2.6: templating'
  'python2-lxml=2.3: python binding to libxml2 and libxslt'
  'python2-matplotlib=1.2.0: 2D plotting'
  'python2-markupsafe=0.15: XML/HTML/XHTML markup safe string'
  'python2-numpy=1.6.1: array-processing'
  'python2-pillow=1.1.7: creating and transforming images'
  'python2-protorpc=1.0: framework for implementing HTTP-based RPC services'
  'python2-pyamf=0.6.1: Action Message Format'
  'python2-setuptools=0.6c11: package and module discovery'
  'python2-webapp2=2.3: lightweight web framework'
  'python2-webob=1.2.3: wrappers around WSGI request environment'
  'python2-yaml=3.10: YAML serialization and deserialization')
options=(!strip)
install=install
source=(https://storage.googleapis.com/appengine-sdks/featured/${_pkgname}_${pkgver}.zip)
sha1sums=('8920584d79332098c2a8248d908a6e27ad7f5697')
noextract=(${_pkgname}_${pkgver}.zip)

prepare() {
  cd ${srcdir}

  # Extract with unzip as bsdtar screws up permissions
  unzip -qq "${_pkgname}_${pkgver}.zip"

  # Fix python binary
  grep -r -l python | xargs sed -i '/#!\/usr\/bin\/env python/s|python|python2|'
  grep -r -l python | xargs sed -i '/#!\/usr\/bin\/python$/s|python|python2|'

  # Fix php binary
  grep -r -l php | xargs sed -i '/#!\/usr\/bin\/env php/s|php|php55|'
  grep -r -l php | xargs sed -i '/#!\/usr\/bin\/php$/s|php|php55|'

  # TODO: Google App Engine PHP support needs bcmath.so extension. Provide and install a sample ini file
}

package() {
  cd "${pkgdir}"
  mkdir -p opt usr/bin

  # Install
  mv "${srcdir}/${_pkgname}" "opt/${_pkgname}"

  # Move main binary
  find opt/${_pkgname} -maxdepth 1 -type f -executable -printf "/opt/${_pkgname}/%f\n" | xargs ln -st usr/bin/
}
