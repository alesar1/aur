# Maintainer: Stefan Zobel <stefan dot zobel at gmail dot com>
#
# Project Loom virtual threads and continuations for the JVM (early access)
# see https://wiki.openjdk.java.net/display/loom/Main
# (source code: https://github.com/openjdk/loom)
#
pkgname=java-openjdk-loom-ea-bin

# loom is currently based on JDK 15
_majorver=15

# upstream release identifier
_commit="33cd3991d6b1ba54c43d"
# use the first 7 digits for the Arch build version
_buildver=$(echo ${_commit} | cut -c1-7)

pkgver=${_majorver}_${_buildver}
pkgrel=1
# must use epoch as upstream breaks version comparisons
epoch=27

# Virtual threads (fibers) and continuations for the JVM
# Earyl-Access JVM prototype - don't use in production
pkgdesc="Java Project Loom OpenJDK ${_majorver} Early-Access Build"
arch=('x86_64')

# Remi Forax' "java-next" build service provides regular binary builds for several OpenJDK projects
url="https://github.com/forax/java-next"

license=('GPL2')
# use namcap to identify dependencies
depends=(
  'java-environment-common>=3' 'java-runtime-common>=3'
  'ca-certificates-utils' 'nss' 'libxrender' 'libxtst'
  'alsa-lib' 'freetype2'
)
provides=(
  "java-environment=${_majorver}"
  "java-environment-openjdk=${_majorver}"
  "java-runtime=${_majorver}"
  "java-runtime-openjdk=${_majorver}"
  "java-runtime-headless=${_majorver}"
  "java-runtime-headless-openjdk=${_majorver}"
)

_prefix=untagged-
source=("https://github.com/forax/java-next/releases/download/${_prefix}${_commit}/jdk-${_majorver}-loom-linux.tar.gz")

sha256sums=('c02cb83f4ac6bc0898109e27d873d4b67eca2f302e87135b54883feb5a7c8a38')

_eaname=java-openjdk-loom-ea
_jvmdir=usr/lib/jvm/${_eaname}

package() {

  # Install
  install -d "${pkgdir}/${_jvmdir}"
  cd jdk-${_majorver}-loom
  cp -a bin include jmods lib release "${pkgdir}/${_jvmdir}/"

  # Link JKS keystore from ca-certificates-utils
  rm -f "${pkgdir}/${_jvmdir}/lib/security/cacerts"
  ln -sf /etc/ssl/certs/java/cacerts "${pkgdir}/${_jvmdir}/lib/security/cacerts"

  # Legal
  install -d "${pkgdir}/usr/share/licenses/${_eaname}"
  cp -a legal "${pkgdir}/usr/share/licenses/${_eaname}/"
  ln -s /usr/share/licenses/${_eaname} "${pkgdir}/${_jvmdir}/legal"

  # Conf
  install -d "${pkgdir}/etc"
  cp -r conf "${pkgdir}/etc/${_eaname}"
  ln -s /etc/${_eaname} "${pkgdir}/${_jvmdir}/conf"
}

