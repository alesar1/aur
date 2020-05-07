# Maintainer : Thanos Apostolou <thanosapostolou@outlook.com>

# Build notes:
# https://phoenicisorg.github.io/phoenicis/Users/build/

pkgname=phoenicis-playonlinux
_pkgname=phoenicis
pkgver=5.0_alpha2
_pkgver=5.0-alpha.2
pkgrel=6
pkgdesc="Phoenicis PlayOnLinux allows you to install and use non-native applications on linux"
arch=('any')
url="https://www.phoenicis.org/"
license=('LGPL3')
makedepends=('maven' 'java-environment-openjdk=11' 'git')
depends=('cabextract' 'curl' 'icoutils' 'imagemagick'
         'p7zip' 'unzip' 'wget' 'wine' 'xterm')
options=(!strip)
source=("https://github.com/PhoenicisOrg/${_pkgname}/archive/v${_pkgver}.tar.gz")
sha256sums=('c88b8ca68c0c37f62aad4db44cef0047c09e8fd553455af15ef3265b0e3c575b')

build() {
  cd "${_pkgname}-${_pkgver}"
  if test -d "/usr/lib/jvm/java-11-openjdk"; then
    export JAVA_HOME="/usr/lib/jvm/java-11-openjdk"
  elif test -d "/usr/lib/jvm/java-11-jdk11"; then
    export JAVA_HOME="/usr/lib/jvm/java-11-jdk11"
  elif test -d "/usr/lib/jvm/java-11-adoptopenjdk"; then
    export JAVA_HOME="/usr/lib/jvm/java-11-adoptopenjdk"
  fi
  mvn clean package
  cd phoenicis-dist/src/scripts
  bash phoenicis-create-package.sh
}

package() {
  cd "${_pkgname}-${_pkgver}/phoenicis-dist/target/Phoenicis_5.0-alpha-2"
  cp -a usr "${pkgdir}"
}
